---
title: "About LeiOS"
description: "LeiOS at a glance: the Debian base, the desktop, the installer, and the projects that make up LeiOS."
navigation:
  title: About LeiOS
---

# About LeiOS

LeiOS takes a Debian base and adds what you would otherwise set up by hand after installing: a
polished desktop, firmware for common hardware, developer tools, and a repository for
LeiOS-specific packages.

## At a glance

| | |
| --- | --- |
| **Base** | Debian 13 "trixie" |
| **Architecture** | 64-bit x86 (`amd64`) |
| **Desktop** | KDE Plasma |
| **Installer** | Calamares |
| **Kernel** | Debian's stock kernel (`linux-image-amd64`) |
| **Package manager** | APT, with the Debian archive plus the LeiOS repository |
| **Boot** | BIOS and UEFI |

## Goals

- **Stability.** LeiOS stays close to Debian. It uses Debian's kernel and packages and only adds
  packages on top through its own repository.
- **Performance.** Sensible defaults that keep the system responsive without trading away
  stability.
- **A great out-of-box experience.** Firmware from Debian's `non-free-firmware` area is included,
  so Wi-Fi, graphics and sound work on most machines straight away.
- **Developer ready.** Tools such as `git`, `build-essential` and `curl` are installed by default.
- **For everyone.** LeiOS is tuned for developers but is approachable for anyone who wants a
  reliable Linux desktop.

## How LeiOS is built

LeiOS consists of a few projects, all developed on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"}:

| Project | What it does |
| --- | --- |
| **Live images** | The Debian `live-build` configuration that produces the LeiOS ISO, including the Calamares installer setup. See [Building the ISO](/docs/developers/building-the-iso). |
| **Package repository** | The APT repository at `repo.leios.dev`. It serves LeiOS packages in a `testing` and a `stable` suite. See [Package Management](/docs/usage/package-management). |
| **Repository API** | The service behind the repository at `api.leios.dev`. It checks uploaded packages and publishes them to the right suite. See [The Repository API](/docs/developers/developer-hub#the-repository-api). |
| **Developer Hub** | The web interface at [hub.leios.dev](https://hub.leios.dev){target="_blank"} for publishing and reviewing packages. See [Developer Hub](/docs/developers/developer-hub). |
| **Website** | This site, including these docs. |

## License

LeiOS's own software, such as the website, the Developer Hub and the repository API, is free
software under the [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html){target="_blank"}.
Packages that come from Debian keep their own licenses.

LeiOS is a LeiCraft_MC project.
