---
title: "Automating Releases"
description: "Publish releases from scripts and CI with the LeiOS Repository API and an API key."
navigation:
  title: Automating Releases
---

# Automating Releases

Everything you do on the [Developer Hub](/docs/developers/developer-hub) goes through the LeiOS
Repository API. With an API key, a script or a CI pipeline can create releases and upload builds
for you. The checks are the same as on the Hub; see
[Publishing Packages](/docs/developers/publishing-packages#what-the-repository-checks).

## The API at a glance

| | |
| --- | --- |
| **Base URL** | `https://api.leios.dev/v1` |
| **Interactive reference** | [api.leios.dev/docs/v1](https://api.leios.dev/docs/v1){target="_blank"} |
| **OpenAPI specification** | [api.leios.dev/docs/v1/openapi](https://api.leios.dev/docs/v1/openapi){target="_blank"} |
| **Authentication** | `Authorization: Bearer <API key>` |

Every response is JSON with the same envelope:

```json
{
  "success": true,
  "code": 201,
  "message": "Package release created successfully",
  "data": null
}
```

- `code` repeats the HTTP status. Errors have `"success": false` and a `message` that explains what
  went wrong, for example `"Package release with this version already exists"`.
- Requests with invalid fields are answered with HTTP 400, `"success": false` and the problems
  listed in `error`.
- Paginated lists (`/packages`, `/publishers` and `/os-releases`) return `data` as
  `{ "items": [...], "total": 42 }`, where `total` counts all matches. Page through them with
  `limit` (1 to 100, default 10) and `offset`.

Reading public data needs no key:

```bash
curl -s https://api.leios.dev/v1/packages/acme.hello
curl -s "https://api.leios.dev/v1/packages?searchString=hello&limit=20"
```

## Create an API key

On the Hub dashboard, open **API Keys → New API Key**. Enter a description, pick an expiration (7,
30, 90, 180 or 365 days, or **No Expiration**) and click **Create API Key**. Copy the key right away:
it is shown only once. It looks like `lra_apikey_<id>:<secret>`.

- **A key acts as your account.** It has all your permissions; there are no read-only or scoped
  keys. For CI, consider a separate Hub account that only has a
  [package role](/docs/developers/developer-hub#package-roles) of **Developer** on the package it
  publishes.
- **Keys can't manage your account.** Changing your password, email or API keys needs a normal
  login on the Hub.
- **Revoke a key** by deleting it on the **API Keys** page. Expired and deleted keys get HTTP 401
  with `"Invalid or expired token"`.
- **Store keys like passwords**, for example as masked CI variables, and use the shortest
  expiration that works for you.

## Publish a release with curl

Publishing takes two requests: create the release, then upload a build to it. The examples use
`jq` to build JSON safely; install it with `sudo apt install jq`.

```bash
export LEIOS_API_KEY="lra_apikey_..."
API=https://api.leios.dev/v1
PACKAGE=acme.hello
DEB=acme.hello_1.2.0_all.deb

# Read the version and architecture from the .deb itself
VERSION=$(dpkg-deb -f "$DEB" Version)
ARCH=$(dpkg-deb -f "$DEB" Architecture)
```

### 1. Create the release

```bash
curl -sS -X POST "$API/packages/$PACKAGE/releases" \
  -H "Authorization: Bearer $LEIOS_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --arg version "$VERSION" --arg changelog "Fix the greeting." \
        '{version_with_leios_patch: $version, changelog: $changelog}')"
```

`version_with_leios_patch` is the release version, and `changelog` is 1 to 10,000 characters. A
new release answers with HTTP 201.

### 2. Upload the build

Send the `.deb` as the form field `file`. The last part of the URL is the architecture: `amd64`,
`arm64` or `all`.

```bash
curl -sS -X POST "$API/packages/$PACKAGE/releases/$VERSION/$ARCH" \
  -H "Authorization: Bearer $LEIOS_API_KEY" \
  -F "file=@$DEB"
```

HTTP 201 means the build passed the checks and is on its way to the `testing` suite. Repeat this
request for each architecture of the release.

### 3. Request stable promotion (optional)

```bash
curl -sS -X POST "$API/packages/$PACKAGE/releases/$VERSION/stable-promotion-requests" \
  -H "Authorization: Bearer $LEIOS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

The body must be an empty JSON object. A LeiOS admin reviews the request; see
[From testing to stable](/docs/developers/publishing-packages#from-testing-to-stable).

## Endpoints for releases

Paths are relative to `https://api.leios.dev/v1`. `{package}` is the full name, `{version}` the
release version.

| Method | Path | What it does |
| --- | --- | --- |
| `GET` | `/packages/{package}` | Package details, including `latest_testing_release` and `latest_stable_release` per architecture. |
| `GET` | `/packages/{package}/releases` | All releases of the package. |
| `POST` | `/packages/{package}/releases` | Create a release. |
| `GET` | `/packages/{package}/releases/{version}` | One release. `architectures` shows which builds are uploaded. |
| `PUT` | `/packages/{package}/releases/{version}` | Update the changelog. |
| `POST` | `/packages/{package}/releases/{version}/{arch}` | Upload a build for `amd64`, `arm64` or `all`. |
| `DELETE` | `/packages/{package}/releases/{version}` | Delete the release. |
| `GET` | `/packages/{package}/releases/{version}/stable-promotion-requests` | The release's promotion request and its status. |
| `POST` | `/packages/{package}/releases/{version}/stable-promotion-requests` | Request stable promotion. |

The [interactive reference](https://api.leios.dev/docs/v1){target="_blank"} lists every endpoint
with its fields and responses.

## A reusable publish script

This script creates the release if it doesn't exist yet and uploads one `.deb`. Running it again
for the same version doesn't fail on the existing release, so a retried CI job can continue.

```bash [publish.sh]
#!/usr/bin/env bash
# Usage: publish.sh <publisher>.<package> <file.deb> [changelog]
set -euo pipefail

API="https://api.leios.dev/v1"
PACKAGE="$1"
DEB="$2"
VERSION="$(dpkg-deb -f "$DEB" Version)"
ARCH="$(dpkg-deb -f "$DEB" Architecture)"
CHANGELOG="${3:-Release $VERSION}"
AUTH="Authorization: Bearer ${LEIOS_API_KEY:?Set LEIOS_API_KEY}"

# Create the release. 409 means it exists already, which is fine on a re-run.
status=$(curl -sS -o response.json -w '%{http_code}' -X POST "$API/packages/$PACKAGE/releases" \
  -H "$AUTH" -H "Content-Type: application/json" \
  -d "$(jq -n --arg v "$VERSION" --arg c "$CHANGELOG" '{version_with_leios_patch: $v, changelog: $c}')")
if [ "$status" != 201 ] && [ "$status" != 409 ]; then
  cat response.json
  exit 1
fi

# Upload the build.
status=$(curl -sS -o response.json -w '%{http_code}' -X POST \
  "$API/packages/$PACKAGE/releases/$VERSION/$ARCH" -H "$AUTH" -F "file=@$DEB")
if [ "$status" != 201 ]; then
  cat response.json
  exit 1
fi

echo "Uploaded $PACKAGE $VERSION ($ARCH) to testing."
```

An upload that answers 409 means this architecture already has a build in the release. Builds are
final, so publish a new version instead.

## GitLab CI example

This pipeline builds the package with `dpkg-buildpackage` on every push and publishes it when you
push a Git tag. It expects the `publish.sh` script above in the repository, and a masked CI/CD
variable `LEIOS_API_KEY`.

```yaml [.gitlab-ci.yml]
stages:
  - build
  - publish

build-deb:
  stage: build
  image: debian:trixie
  script:
    - apt-get update
    - apt-get install -y --no-install-recommends build-essential debhelper
    - dpkg-buildpackage -us -uc -b
    - mkdir -p dist && mv ../*.deb dist/
  artifacts:
    paths:
      - dist/

publish-deb:
  stage: publish
  image: debian:trixie
  needs: [build-deb]
  rules:
    - if: $CI_COMMIT_TAG
  script:
    - apt-get update
    - apt-get install -y --no-install-recommends ca-certificates curl jq
    - for deb in dist/*.deb; do bash publish.sh acme.hello "$deb" "$CI_COMMIT_TAG_MESSAGE"; done
```

Some tips:

- **Match the version.** The release version comes from the `.deb`, which takes it from
  `debian/changelog`. Update the changelog before you tag.
- **More build dependencies?** Replace the `apt-get install` line of the build job with
  `apt-get build-dep -y ./`, which installs everything listed in `Build-Depends` of your
  `debian/control`.
- **Several architectures.** Run the build job once per architecture on matching runners, for
  example with a `parallel: matrix:` and runner `tags`, and upload each `.deb`. Every upload goes
  to the same release.
- **Protect the key.** If you mark `LEIOS_API_KEY` as protected, it is only available to pipelines
  for protected branches and tags, so protect the tags you publish from.
