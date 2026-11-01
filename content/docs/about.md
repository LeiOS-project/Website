---
title: "About LeiOS"
description: "LeiOS at a glance: what it is, who it is for, how it is built and released, and the projects behind it."
navigation:
  title: About LeiOS
---

# About LeiOS

LeiOS is a free, open-source operating system for PCs and laptops. It takes **Debian**, one of the
oldest and most trusted Linux distributions, and adds what you would otherwise set up by hand after
installing it: a polished **KDE Plasma** desktop with its own look, firmware for common hardware,
everyday apps, an app store with Flathub and the Snap Store ready to use, performance tuning for
computers with little memory, and its own package repository with continuous LeiOS releases.

## Who LeiOS is for

- **People leaving Windows**, whether because of Windows 10's end of support, Windows 11's
  hardware requirements, or simply ads and accounts they don't want. See
  [Switch from Windows](/switch-from-windows).
- **Everyday users** who want a computer that just works: browsing, office, email, photos, music,
  video calls and games.
- **Developers** who want a Debian system with the tools already set up, and a repository to ship
  their own software to LeiOS users.
- **Older computers** that deserve a few more good years.

## At a glance

| | |
| --- | --- |
| **Base** | Debian 13 "trixie" |
| **Kernel** | Debian's Linux 6.12 LTS kernel |
| **Desktop** | KDE Plasma 6 with the LeiOS theme (Wayland, X11 session available) |
| **Installer** | Calamares, with optional full-disk encryption |
| **Software** | APT with the Debian archive and the LeiOS repository; Flatpak with Flathub; Snap with the Snap Store; Discover as the app store |
| **Releases** | Debian's security and bug fixes, plus continuous LeiOS releases in a `stable` and a `testing` channel |
| **Boot** | UEFI with Secure Boot, or BIOS |
| **Images** | 64-bit x86 (`amd64`) |

## Goals

- **Stability.** LeiOS stays close to Debian. It uses Debian's kernel and packages, and adds its own
  only on top, through its own repository.
- **A great out-of-the-box experience.** Firmware, apps, a consistent look and sensible defaults,
  so you can start working right after the installer finishes.
- **Performance.** Defaults that keep the system responsive, also on modest hardware.
- **Approachable for everyone.** Beginner-friendly guides, a familiar desktop, and no terminal
  needed for everyday tasks.
- **Open.** Everything is developed in the open, and LeiOS collects no usage data.

## How LeiOS is released

LeiOS has two layers. The **base** follows Debian 13 and receives Debian's security and bug fixes.
**LeiOS itself** (its theme and system packages, and packages published by developers) is updated
continuously and released as tested **LeiOS releases** such as `2026.08.006`. You never reinstall
to get a new release; it arrives through the normal updates. See
[Release Channels](/docs/usage/release-channels).

## The projects behind LeiOS

All LeiOS projects are developed in the open on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"} and mirrored to
[GitHub](https://github.com/LeiOS-project){target="_blank"}.

| Project | What it does |
| --- | --- |
| **Live images** | The Debian `live-build` configuration that produces the LeiOS installation image, including the Calamares installer. See [Building the ISO](/docs/developers/building-the-iso). |
| **System and theme packages** | The packages that make a Debian system LeiOS: release information, performance tweaks, the en_DE locale, and the LeiOS look. See [Customization](/docs/usage/customization). |
| **Package repository** | The APT repository at `pkg.repo.leios.dev` with the `stable` and `testing` channels. See [Package Management](/docs/usage/package-management). |
| **Repository API** | The service at `api.leios.dev` that checks uploaded packages, publishes them, and builds LeiOS releases. |
| **Developer Hub** | The web app at [hub.leios.dev](https://hub.leios.dev){target="_blank"} where developers publish packages and anyone can explore them. See [Developer Hub](/docs/developers/developer-hub). |
| **Website** | This site, including these docs. |

## Who makes LeiOS

LeiOS is an independent open-source project, initiated by LeiCraft_MC and developed together with
its community. Everyone is welcome to [contribute](/docs/community/contributing): with bug reports,
documentation, packages or code.

## License

LeiOS's own software, such as the website, the Developer Hub and the Repository API, is free
software under the [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html){target="_blank"}.
Packages that come from Debian and other projects keep their own licenses; on your system, each
package's license is in `/usr/share/doc/<package>/copyright`.
