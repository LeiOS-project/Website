---
title: "Building a Debian Package"
description: "Turn your program into a .deb that the LeiOS repository accepts, and test it on your own machine."
navigation:
  title: Building a Debian Package
---

# Building a Debian Package

LeiOS installs software as Debian packages: `.deb` files that APT can install, upgrade and remove.
This guide builds a small package step by step, first by hand with `dpkg-deb` and then the standard
way with `debhelper` and `dpkg-buildpackage`. Both produce a `.deb` that you can upload to the LeiOS
repository through the [Developer Hub](/docs/developers/developer-hub).

## Know your names first

Every package in the LeiOS repository belongs to a **publisher** on the Developer Hub. Its full name
is `<publisher>.<package>`, and that full name is the Debian package name. This guide uses the
publisher `acme` and the package `hello`, so the full name is `acme.hello`.

When you upload a build, the repository compares four fields of the `.deb` with what is on the Hub:

| Field | What it must be | Example |
| --- | --- | --- |
| `Package` | The full name, `<publisher>.<package>`. | `acme.hello` |
| `Version` | The version of the release you upload to. | `1.0.0` |
| `Architecture` | The slot you upload to: `all`, `amd64` or `arm64`. | `all` |
| `Maintainer` | The publisher's **maintainer contact**, exactly as `Name <email>`. | `Jane Doe <jane@example.com>` |

The maintainer contact is set on the publisher's settings page and shown on its public page. It is
not your own account name, unless you entered it there. [Publishing Packages](/docs/developers/publishing-packages#what-the-repository-checks)
lists every check.

## Install the tools

`build-essential` (which includes `dpkg-dev` and `dpkg-buildpackage`) and `git` are preinstalled on
LeiOS. Install `debhelper` for the standard route and `lintian` to check your package:

```bash
sudo apt install debhelper lintian
```

On another Debian-based system, install `build-essential` as well.

## Option 1: a minimal package with dpkg-deb

This is the quickest way to package a script or a few files. A package is a directory tree: the
`DEBIAN` folder holds the package information, and everything else is installed as is, relative
to `/`.

::steps{level="3"}

### Create the directory layout

```bash
mkdir -p acme-hello/DEBIAN acme-hello/usr/bin
```

### Add your program

```bash
cat > acme-hello/usr/bin/acme-hello <<'EOF'
#!/bin/sh
echo "Hello from LeiOS!"
EOF
chmod 755 acme-hello/usr/bin/acme-hello
```

### Write the control file

Create `acme-hello/DEBIAN/control`:

```text [DEBIAN/control]
Package: acme.hello
Version: 1.0.0
Architecture: all
Maintainer: Jane Doe <jane@example.com>
Section: utils
Priority: optional
Description: Prints a friendly greeting
 A tiny example package for the LeiOS repository.
 Every line of the long description starts with a space.
```

The first `Description` line is a short summary. The lines after it are the long description and
must start with a single space. The file must end with a newline.

### Build the package

```bash
dpkg-deb --build --root-owner-group acme-hello .
```

`dpkg-deb` names the file after the package fields: `acme.hello_1.0.0_all.deb`.
`--root-owner-group` makes `root` the owner of every installed file, which is what you want.

::

This route has no changelog, no automatic dependencies and no build step. For anything beyond a few
files, use debhelper.

## Option 2: the standard way with debhelper

debhelper is the toolkit that almost every Debian package is built with. You describe the package
in a `debian/` folder next to your source code, and `dpkg-buildpackage` does the rest.

```text
acme-hello/
├── acme-hello          # your program
└── debian/
    ├── changelog
    ├── control
    ├── copyright
    ├── install
    ├── rules
    └── source/
        └── format
```

::steps{level="3"}

### debian/control

```text [debian/control]
Source: acme.hello
Section: utils
Priority: optional
Maintainer: Jane Doe <jane@example.com>
Build-Depends: debhelper-compat (= 13)
Standards-Version: 4.7.2
Homepage: https://example.com/hello
Rules-Requires-Root: no

Package: acme.hello
Architecture: all
Depends: ${misc:Depends}
Description: Prints a friendly greeting
 A tiny example package for the LeiOS repository.
```

The first block describes the source, the second the package you build. The package takes its
`Maintainer` from the source block, so set the publisher's maintainer contact there.

### debian/changelog

The version at the top of the changelog becomes the package's `Version`.

```text [debian/changelog]
acme.hello (1.0.0) stable; urgency=medium

  * Initial release.

 -- Jane Doe <jane@example.com>  Sun, 01 Nov 2026 12:00:00 +0100
```

The format is strict: the last line starts with one space and two dashes, there are two spaces
between the email address and the date, and the date comes from `date -R`. Add a new entry at the
top for every new version. `dch` from the `devscripts` package can write the entries for you.

### debian/rules

`debian/rules` is a makefile. The indented line must start with a tab, not spaces.

```text [debian/rules]
#!/usr/bin/make -f

%:
	dh $@
```

Make it executable:

```bash
chmod +x debian/rules
```

### debian/install

List the files to install and their target directories:

```text [debian/install]
acme-hello usr/bin
```

### debian/copyright and debian/source/format

`debian/copyright` states the license of your software:

```text [debian/copyright]
Format: https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Upstream-Name: acme-hello
Source: https://example.com/hello

Files: *
Copyright: 2026 Jane Doe <jane@example.com>
License: MIT
 Paste the full license text here, every line indented by one space.
```

`debian/source/format` contains a single line:

```text [debian/source/format]
3.0 (native)
```

### Build the package

Run this in the `acme-hello` folder:

```bash
dpkg-buildpackage -us -uc -b
```

`-b` builds only the binary package and `-us -uc` skips signing. The `.deb` is written to the parent
folder: `../acme.hello_1.0.0_all.deb`.

::

## Choose the architecture

| Architecture | Use it for | Upload slot on the Hub |
| --- | --- | --- |
| `all` | Scripts, data, themes, fonts, and programs in interpreted languages without compiled parts. One `.deb` works on every architecture. | **Universal** |
| `amd64` | Compiled programs for 64-bit Intel and AMD PCs. | **Per Architecture → AMD64** |
| `arm64` | Compiled programs for 64-bit ARM computers. | **Per Architecture → ARM64** |

For compiled programs, write `Architecture: any` in `debian/control`. `dpkg-buildpackage` then
builds for the machine it runs on and writes that architecture into the `.deb`. Check your machine's
architecture with `dpkg --print-architecture`.

Build each architecture on a machine (or CI runner) of that architecture. Cross-building with
`dpkg-buildpackage -aarm64` is possible but needs a cross toolchain. You don't have to provide both:
a release can have an `amd64` build only.

If your project builds with make, CMake, Meson or autotools, `dh` runs the build system for you. List
the compilers and libraries it needs in `Build-Depends`, and let debhelper find the runtime
libraries:

```text [debian/control]
Package: acme.hello
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
```

## Depend on other packages

LeiOS is based on Debian 13 "trixie", so your package can depend on any Debian 13 package by its
Debian name:

```text [debian/control]
Depends: ${misc:Depends}, curl, python3 (>= 3.13)
```

- Check that a package exists with `apt policy <name>` or on
  [packages.debian.org](https://packages.debian.org/trixie/){target="_blank"}.
- To depend on another package from the LeiOS repository, use its full name, for example
  `acme.libgreet`. It must be in the same channel: users on `stable` can't install your package if
  a dependency is only in `testing`.
- Use `Recommends` for packages that most users want but that your program can run without.

## Test the package locally

Check the fields the repository compares, and the files the package installs:

```bash
dpkg-deb -f acme.hello_1.0.0_all.deb Package Version Architecture Maintainer
dpkg-deb -c acme.hello_1.0.0_all.deb
```

Let `lintian` look for common mistakes. Fix errors (`E:`) first; warnings (`W:`) are usually worth
fixing too.

```bash
lintian acme.hello_1.0.0_all.deb
```

Install the package, try it, and remove it again. The `./` tells APT that you mean a file, not a
package from a repository; APT also installs the dependencies.

```bash
sudo apt install ./acme.hello_1.0.0_all.deb
acme-hello
sudo apt remove acme.hello
```

## Common mistakes

| Mistake | Fix |
| --- | --- |
| `Package: hello` instead of `Package: acme.hello` | Use the full name, including the publisher. |
| `Maintainer` names your own account | Use the publisher's maintainer contact, character for character. |
| The `.deb` version differs from the release on the Hub | Build with the exact version of the release, or create a release with the version you built. |
| An `all` package uploaded to the AMD64 slot | Upload `all` packages in the **Universal** tab. |
| A version with an epoch, like `1:1.0.0` | Epochs are not supported. Leave them out. |
| Files installed to `/usr/local` or `/home` | Install to `/usr`, `/etc` or `/opt`. `/usr/local` belongs to the system administrator. |
| A script without the executable bit | `chmod 755` it, or let debhelper fix permissions in `usr/bin`. |

## Next steps

- Upload your package: [Publishing Packages](/docs/developers/publishing-packages).
- Upload from CI: [Automating Releases](/docs/developers/automating-releases).
- Learn more about packaging: the
  [Guide for Debian Maintainers](https://www.debian.org/doc/manuals/debmake-doc/){target="_blank"}
  and the [Debian Policy Manual](https://www.debian.org/doc/debian-policy/){target="_blank"}.
