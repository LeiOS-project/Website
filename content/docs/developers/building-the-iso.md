---
title: "Building the ISO"
description: "Build the LeiOS live image yourself with the leios-live-build tool and Debian live-build."
navigation:
  title: Building the ISO
---

# Building the ISO

The LeiOS installation image is built with Debian's
[live-build](https://live-team.pages.debian.net/live-manual/){target="_blank"}. Its configuration
and the `leios-live-build` command that drives the build live in the
[LeiOS/live/images](https://git.leicraftmc.de/LeiOS/live/images){target="_blank"} repository. The
official images on the [download page](/download) are built from it.

## Requirements

- A Debian-based build host, such as Debian 13 or LeiOS itself.
- `sudo` access. The build itself runs as root through `sudo`.
- Several gigabytes of free space in `/tmp` and in the working directory, and an internet
  connection: the build downloads every package.
- These packages:

```bash
sudo apt update
sudo apt install sudo curl unzip live-build debootstrap squashfs-tools xorriso
```

- [Bun](https://bun.sh){target="_blank"} in `~/.bun/bin`. `leios-live-build` offers to install it
  there if it is missing.

To build an `arm64` image on an `amd64` machine, also install QEMU and register it:

```bash
sudo apt install qemu-user-static binfmt-support
sudo update-binfmts --enable qemu-aarch64
sudo systemctl restart systemd-binfmt
```

## Build

Clone the repository and run `leios-live-build` from its root, as your normal user:

```bash
git clone https://git.leicraftmc.de/LeiOS/live/images.git
cd images

./leios-live-build build --version=1.0.0-$(date +%Y%m%d) --architecture=amd64 --suite=stable
```

| Option | Values | Meaning |
| --- | --- | --- |
| `--version` | Any text, for example `1.0.0-20261101` | Goes into the file name and the volume label of the image. |
| `--architecture` | `amd64` or `arm64` | The architecture of the image. The official downloads are `amd64`. |
| `--suite` | `stable` (default) or `testing` | The LeiOS repository suite the image installs LeiOS packages from. Installed systems keep using it. |

The build copies the configuration from `debian-live/` to `tmp/build/` and runs `lb build` there.
When it is done, you find the image at:

```text
tmp/build/leios-live-<version>-<architecture>.hybrid.iso
```

Next to it are `.packages` (the packages in the image), `.files` and `.contents` listings, and
`build.log`. Write the image to a USB drive as described in
[Create a Bootable USB Drive](/docs/getting-started/create-a-bootable-usb), or try it in a virtual
machine first.

Each `build` starts from a fresh copy of the configuration. To free the space again afterwards:

```bash
./leios-live-build clean
```

`clean` runs `lb clean --purge` in `tmp/build` and deletes `tmp/`. `./leios-live-build config` takes
the same options as `build` but only prepares `tmp/build` and runs `lb config`, which is useful to
inspect the generated configuration.

## What the image contains

The configuration builds an image with:

- Debian 13 "trixie" with the security, updates and backports sources, and the `main`, `contrib`,
  `non-free` and `non-free-firmware` archive areas, including firmware,
- the LeiOS repository (`https://pkg.repo.leios.dev/leios/`) in the chosen suite, and Mozilla's APT
  repository for Firefox Developer Edition,
- a hybrid ISO that boots on UEFI and BIOS machines (`amd64`) or on UEFI machines (`arm64`).

The image starts a KDE Plasma live session with an **Install LeiOS** icon that opens the Calamares
installer.

### Secure Boot and the boot loader

- **UEFI with Secure Boot.** The image and installed systems boot through Debian's `shim` (signed by
  Microsoft's third-party UEFI CA), Debian's signed GRUB and Debian's signed kernel.
- **GRUB in `/EFI/leios`.** On installed systems, `grub-install` puts GRUB into `/EFI/leios` on the
  EFI system partition. Debian's signed GRUB always reads `/EFI/debian/grub.cfg`, so the installer
  writes a small one there that loads LeiOS' configuration, unless that file belongs to another
  installed system. The installer also puts shim and GRUB into the fallback path `/EFI/BOOT`.
- **BIOS.** On BIOS machines, the installer replaces `grub-efi-amd64` with `grub-pc`, which the
  image carries as a package file, and records the boot disk so GRUB updates reach its boot sector.

## Where things are

| Path | Purpose |
| --- | --- |
| `debian-live/auto/config` | The `lb config` options: distribution, archive areas, boot loaders, image name. It also fills in the version, architecture and suite wherever the configuration has an `INSERT_` placeholder. |
| `debian-live/config/package-lists/` | The packages of the image: `base` (system, desktop, firmware, tools), `desktop`, `tools`, `leios` (LeiOS packages, with `leios.theme.aio` for the LeiOS look), `installer`, `live`, and one list per architecture. |
| `debian-live/config/hooks/` | Scripts that run inside the image during the build, for example to ship `grub-pc` for BIOS installs. |
| `debian-live/config/includes.chroot/` | Files copied into the image as they are: the APT sources, the LeiOS signing key, and the installer launcher. |
| `debian-live/config/includes.chroot/etc/calamares/` | The Calamares installer: the page sequence, module settings (users, boot loader, packages and more), the LeiOS branding, and the clean-up of live packages after installation. |
| `debian-live/config/archives/` | The extra APT repositories (LeiOS, Mozilla) used during the build. |
| `debian-live/config/bootloaders/` | The live boot menu with the LeiOS GRUB theme. |
| `cli/` | The `leios-live-build` commands. |

## Customizing

- **Add or remove packages** in the lists under `debian-live/config/package-lists/`. Lists end in
  `.list.chroot`, one package per line.
- **Add files to the image** by placing them under `debian-live/config/includes.chroot/` at their
  target path.
- **Run commands during the build** with a new script in `debian-live/config/hooks/`, named like
  the existing ones and ending in `.hook.chroot`. Hooks run in the order of their names.
- **Change the installer** in `debian-live/config/includes.chroot/etc/calamares/`.
- **Change the live boot menu** in `debian-live/config/bootloaders/`.

Rebuild after each change. Images you build yourself are not official LeiOS images, so give them a
version that makes that clear.

## Troubleshooting

- **"Bun is not installed".** `leios-live-build` looks for Bun in `~/.bun/bin` only. Answer `y` to
  install it there, and run the command as your normal user, not with `sudo`.
- **The build stops with an error.** Read `tmp/build/build.log`. Network errors while downloading
  packages usually go away when you run the build again.
- **The build runs out of space.** Free up space in `/tmp` and in the working directory, and remove
  old builds with `./leios-live-build clean`.
- **`arm64` builds fail early.** Check that QEMU is registered: `update-binfmts --display
  qemu-aarch64` should say `enabled`.
- **Anything else.** See the
  [Debian Live manual](https://live-team.pages.debian.net/live-manual/){target="_blank"}, or ask on
  [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.
