---
title: "Building the ISO"
description: "Build the LeiOS live image yourself with Debian live-build."
navigation:
  title: Building the ISO
---

# Building the ISO

The LeiOS installation image is built with Debian's
[live-build](https://live-team.pages.debian.net/live-manual/){target="_blank"}. Its configuration
lives in the [live-images](https://git.leicraftmc.de/LeiOS/live-images){target="_blank"}
repository.

## Requirements

- A Debian or Ubuntu build host. Debian stable or testing is recommended.
- `sudo` access.
- Several gigabytes of free space in `/tmp` and in the working directory.
- These packages:

```bash
sudo apt-get update
sudo apt-get install live-build debootstrap squashfs-tools xorriso syslinux-common
```

The `li` helper script also needs [Bun](https://bun.sh){target="_blank"}. It offers to install Bun
if it is missing.

## Build

```bash
git clone https://git.leicraftmc.de/LeiOS/live-images.git
cd live-images

# Configure the build (first time, and after every configuration change)
sudo lb config

# Build the image
sudo lb build
```

The image is written to the repository root as `leios-<version>-amd64.hybrid.iso`. Write it to a USB
drive as described in [Installation](/docs/getting-started/installation#write-it-to-a-usb-drive).

The `li` helper runs the full cycle in one go: `./li build` runs `lb clean --all`, `lb config` and
`lb build`. Like the `lb` commands, it needs root privileges.

For a clean, reproducible build, drop the package cache first:

```bash
sudo lb clean --purge
```

## What the build contains

The live-build configuration (`auto/config`) builds:

- Debian 13 "trixie" for `amd64`, with the security, updates and backports sources,
- the `main`, `contrib`, `non-free` and `non-free-firmware` archive areas, including firmware,
- a hybrid ISO that boots on BIOS (`grub-pc`) and UEFI (`grub-efi`) machines, with `memtest86+`.

## Customizing

| Path | Purpose |
| --- | --- |
| `config/package-lists/*.list.chroot` | Packages installed into the image. |
| `config/includes.chroot/` | Files copied into the image as is, for example `etc/os-release`, the APT sources and the Calamares configuration. |
| `config/hooks/*.hook.chroot` | Scripts that run inside the image during the build, for example installing the LeiOS signing key. |
| `config/bootloaders/` | Boot menu configuration and theme. |
| `auto/config` | The `lb config` options: distribution, architectures, archive areas, image name. |

Run `sudo lb config` again after changing the configuration.

## Troubleshooting

- **The build runs out of space.** Free up space in `/tmp` and in the working directory.
- **A build fails unexpectedly.** Clear stale artifacts with `sudo lb clean --purge` and rebuild.
- **You need details.** Check the live-build log in the build tree.

For everything else, see the [Debian Live manual](https://live-team.pages.debian.net/live-manual/){target="_blank"}.
