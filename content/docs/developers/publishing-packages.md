---
title: "Publishing Packages"
description: "Upload a .deb through the Developer Hub, pass the repository checks, and get it promoted from testing to stable."
navigation:
  title: Publishing Packages
---

# Publishing Packages

Anyone with a [Developer Hub](/docs/developers/developer-hub) account can ship Debian packages to
LeiOS users. This page walks through the upload on the Hub, every check the repository runs, and how
a release gets from `testing` to `stable`.

## Before you start

You need:

- a Developer Hub account at [hub.leios.dev](https://hub.leios.dev){target="_blank"},
- a publisher on which you have at least the **Developer** role, or a package role of Developer or
  higher. Creating your own publisher needs a confirmed email address,
- a `.deb` for `amd64`, `arm64` or `all`. New to packaging? Start with
  [Building a Debian Package](/docs/developers/packaging-guide).

## How the repository is organized

Every build you upload lands in an internal archive. From there it is copied into the suites that
LeiOS systems install from:

| Suite | What it serves | When it changes |
| --- | --- | --- |
| `testing` | The build you uploaded **most recently**, per package and architecture. | Right after each upload or deletion. |
| `stable` | One version per package and architecture, approved by LeiOS admins. | With every LeiOS release (`YYYY.MM.NNN`). |

Installed systems use `stable` by default. See [Release Channels](/docs/usage/release-channels).

## What the repository checks

### When you create a package

| Check | Rule |
| --- | --- |
| Package name | 2 to 200 characters: lowercase letters, digits, hyphens and dots, starting and ending with a letter or digit. It can't be changed later. |
| Full name | `<publisher>.<package>`, for example `acme.hello`. This is the name users install. |
| Unique | Each publisher can use a package name once. |
| Details | A display name (up to 200 characters), a description (up to 500) and a homepage URL are required. |

The **Requires Patching** option makes the `leios` version suffix mandatory for every release of
the package (see below). Maintainers and Admins of the publisher can switch it later.

### When you create a release

A release is one version of a package. Its version must match the `Version` field of the `.deb` files
you upload, and it follows Debian's version format with a few limits:

- It starts with a digit.
- It uses only letters, digits and `.` `+` `~` `-`.
- It has no epoch: `1:2.0-1` is rejected.
- `leios` may only appear at the very end, as a suffix: `leios` followed by one to three numbers
  separated by dots.
- It is unique within the package and can't be changed once the release exists.

| Version | Valid |
| --- | --- |
| `1.2.0` | Yes |
| `1.2.0-1` | Yes |
| `1.2.0-1leios1` | Yes |
| `1.2.0-1leios1.2.3` | Yes |
| `1:1.2.0-1` | No: epochs are not supported. |
| `1.2.0-1leios` | No: `leios` must be followed by a number. |
| `1.2.0-1leios1.2.3.4` | No: at most three numeric parts. |
| `1.2.0leios1-2` | No: `leios` must be at the end. |

Use the `leios` suffix to mark a LeiOS-specific build or patch of software that also exists
elsewhere. If the package has **Requires Patching** turned on, every version must end with it, for
example `2.4.1-1leios1`.

The release also needs a **changelog** of 1 to 10,000 characters. It is shown on the public package
page. Maintainers and Admins can edit it later; the version stays fixed.

### When you upload a build

The repository reads your `.deb` with `dpkg --info` and only accepts it when these fields match:

| Field in the `.deb` | Must be |
| --- | --- |
| `Package` | The package's full name, `<publisher>.<package>`. |
| `Version` | The version of the release you upload to. |
| `Architecture` | The slot you upload to: `amd64`, `arm64` or `all`. |
| `Maintainer` | The publisher's maintainer contact. See below. |

Check them before you upload:

```bash
dpkg-deb -f acme.hello_1.2.0_amd64.deb Package Version Architecture Maintainer
```

There are a few more rules:

- **One build per architecture.** A release holds either one `all` build or an `amd64` and an
  `arm64` build. You can upload just one of the two.
- **Builds are final.** An uploaded build can't be replaced or removed on its own. To change it,
  publish a new version.
- **Size.** Keep each `.deb` under 128 MB; the API server rejects larger requests.
- **Permissions.** You need the Developer role or higher on the publisher or the package.
- **System packages.** Packages marked as system packages are maintained by LeiOS and don't accept
  uploads.

### The Maintainer field

`Maintainer` must be exactly `<name> <<email>>` of the **publisher's maintainer contact**. It is not
the owner's account and not the account of the person uploading. You find the contact in two places:

- on the Hub dashboard: **Publishers → your publisher → General**, fields **Maintainer Contact
  Name** and **Maintainer Contact Email**,
- on the public publisher page, under **Maintainer contact**.

If the contact is "Jane Doe" with `jane@example.com`, the field reads:

```text [debian/control]
Maintainer: Jane Doe <jane@example.com>
```

The comparison is exact, including capitalization and spaces. If a publisher Admin changes the
contact, build your next versions with the new value. Builds that are already uploaded are not
affected.

## Publish a release

::steps{level="3"}

### Create the package

On the Hub dashboard, open **Packages → New Package**. Choose the publisher, enter the package name
and the details, and click **Create Package**. The form shows the full name, for example
`acme.hello`.

### Create a release

Open the package, switch to **Releases** and click **New Release**. Enter the **Version Tag**, which
is the exact version of your `.deb`, and the changelog. Click **Create Package Release**.

### Upload the builds

On the release page, choose a tab:

- **Per Architecture** for `amd64` and `arm64` builds. Each architecture has its own upload field.
- **Universal** for an `all` build, which covers both architectures.

Select the `.deb` and click **Upload**. The repository runs the checks, stores the build and
publishes it to the `testing` suite. Large files take a moment.

### Test it from testing

On a system that uses the `testing` channel, install your package with
`sudo apt update && sudo apt install <publisher>.<package>`. You can also test the `.deb` file
directly, as described in
[Building a Debian Package](/docs/developers/packaging-guide#test-the-package-locally).

### Request promotion to stable

When the release works, click **Request Stable Promotion** on the release page and then **Submit
Request**. The release needs at least one uploaded build.

::

## From testing to stable

A LeiOS admin reviews each promotion request in the Hub's admin area and approves or denies it,
optionally with a note. You see the status on the release page:

| Status | Meaning |
| --- | --- |
| **pending** | Waiting for review. You can delete the request while it is pending. |
| **approved** | The release moves to `stable` with the next LeiOS release. |
| **denied** | The release stays in `testing`. The admin note explains why. |

When an admin publishes a LeiOS release, every approved release is copied into `stable`. It replaces
the previous stable version of the package for the same architecture. Until then, users on `stable`
keep the version they have.

Each release can have one promotion request. After a denial, fix the problem, publish a new version
and request promotion for that one.

## Ship an update

Every new version is a new release. Always increase the version: APT only upgrades to a higher
version, so a lower one never reaches systems that already have your package. The repository does
not check this for you.

`testing` serves the build you uploaded last for each architecture, even if its version is lower
than the one before.

## Delete a release or a package

Deleting needs the **Admin** role on the publisher or the package. On the release page, use **Danger
Zone → Delete Package Release**. This removes the release, its promotion request and its builds from
the repository:

- `testing` drops it right away. If it was the current testing version, that architecture has no
  version in `testing` until you upload a newer one.
- `stable` keeps serving it until the next LeiOS release, which no longer contains it.

Deleting a whole package (**Danger Zone → Delete Package** on the package page) does the same for
every release. A publisher can only be deleted once it has no packages left.

## Troubleshooting

The Hub shows the API's error messages as they are. These are the ones you are most likely to see.

**"Failed to upload and verify package release"**
The upload failed one of the checks. The message does not say which one, so compare all four fields
with `dpkg-deb -f` against the Hub:

- `Package` is the full name with the publisher, for example `acme.hello`, not `hello`.
- `Version` is exactly the release's version.
- `Architecture` matches the slot: `all` belongs in the **Universal** tab.
- `Maintainer` matches the publisher's maintainer contact, character for character.

**"Package release already contains a release for this architecture"**
That slot already has a build, and builds can't be replaced. An uploaded `all` build fills both
architectures. Publish a new version instead.

**"Package release with this version already exists"**
Versions are unique and final. Bump the version, for example from `1.2.0-1leios1` to
`1.2.0-1leios2`, rebuild and create a new release.

**"Package requires leios patch suffix in version but is missing in version argument"**
The package has **Requires Patching** turned on. Add a `leios<N>` suffix to the version and rebuild.

**The version or the changelog is rejected.**
Check the [version rules](#when-you-create-a-release) above. The changelog must be 1 to 10,000
characters long.

**"You do not have permission to publish releases for this package"**
You need the Developer role or higher on the publisher or the package. Ask an Admin of the
publisher.

**"System-managed packages cannot have new releases created"**
System packages are maintained by LeiOS and can't be changed through the Hub.

**"The release must have at least one uploaded .deb package before requesting stable promotion"**
Upload a build first.

**"A request already exists for this release or the release is already stable"**
The release already has a promotion request. Check its status on the release page.

**"Package with this name already exists in this publisher"**
Pick another name, or open the existing package.

**The upload of a large file fails.**
Requests over 128 MB are rejected. Make the package smaller, for example by leaving out build
artifacts and debug files.
