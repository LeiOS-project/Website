---
title: "Publishing Packages"
description: "Build a .deb that passes the LeiOS repository checks and ship it to the testing and stable suites."
navigation:
  title: Publishing Packages
---

# Publishing Packages

Anyone with a [Developer Hub](/docs/developers/developer-hub) account and a role in a publisher can
ship Debian packages to LeiOS users. This page walks through the process and the checks your
package has to pass.

## Before you start

You need:

- a Developer Hub account (ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}),
- a publisher you are a member of, with at least the **Developer** role,
- a `.deb` package built for `amd64`, `arm64`, or `all` architectures.

## Prepare your package

When you upload a build, the repository inspects it with `dpkg --info` and rejects it unless these
fields match what you entered on the Hub.

| Field in the `.deb` | Must match |
| --- | --- |
| `Package` | The package name on the Hub, without the publisher prefix. |
| `Version` | The version of the release you upload to. |
| `Architecture` | The architecture you upload for: `amd64`, `arm64` or `all`. |
| `Maintainer` | The publisher owner's display name and email. See below. |

You can check the fields of a package locally:

```bash
dpkg --info my-package_1.2.0-1_amd64.deb
```

### The Maintainer field

`Maintainer` must be exactly `<display name> <<email>>` of the **publisher's owner**, as shown in
their Hub account. For example, if the owner is "Jane Doe" with `jane@example.com`:

```text [debian/control]
Maintainer: Jane Doe <jane@example.com>
```

### Versions and the `leios` suffix

Versions follow the usual Debian rules, except that they must start with a digit and epochs (`1:`)
are not supported. To mark a LeiOS-specific build of software that also exists elsewhere, add a
`leios` suffix with up to three numeric parts:

| Version | Valid |
| --- | --- |
| `1.2.0-1` | Yes |
| `1.2.0-1leios1` | Yes |
| `1.2.0-1leios1.2.3` | Yes |
| `1.2.0-1leios` | No: `leios` must be followed by a number. |
| `1.2.0-1leios1.2.3.4` | No: at most three numeric parts. |

Some packages are flagged as **requiring a LeiOS patch**. Every release of such a package must
carry the `leios` suffix.

## Publish a release

::steps{level="3"}

### Create the package

On the Hub, create a package under your publisher. Its name must match the `Package` field of your
`.deb`.

### Create a release

Add a release with the exact version from your `.deb` and a changelog. The changelog is required
and can be up to 10,000 characters.

### Upload the builds

Upload one `.deb` per architecture, or a single `all` build. Each file can be up to 1 GB. The
repository runs the checks above, adds the package to its archive, and publishes it to the
**`testing`** suite.

### Request promotion to stable

Once the release has been tested, request promotion to stable. A LeiOS admin reviews the request.
Approved packages are included in the next LeiOS release and published to the **`stable`** suite.
See [Release Channels](/docs/usage/release-channels).

::

## Troubleshooting

**The upload is rejected because a field doesn't match.**
Compare `dpkg --info` with the values on the Hub. The `Maintainer` field is the most common cause:
it has to name the publisher's *owner*, not the person uploading.

**"Package requires leios patch suffix in version".**
The package is flagged as requiring a LeiOS patch. Add a `leios<N>` suffix to the version and
rebuild.

**"Package release with this version already exists".**
Versions are immutable. Bump the version, for example from `-1leios1` to `-1leios2`, and upload a
new release.

**"Package release already contains a release for this architecture".**
Each release accepts one build per architecture. Publish a new version instead of replacing a
build.
