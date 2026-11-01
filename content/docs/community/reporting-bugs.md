---
title: "Reporting Bugs"
description: "Find the right place for a bug, collect the details with a few commands, and write a report that gets it fixed."
navigation:
  title: Reporting Bugs
---

# Reporting Bugs

A good bug report gets a problem fixed much faster. This page shows where to report a bug, which
details to collect, and how to write the report. It takes about ten minutes.

::caution
Found a **security vulnerability**? Don't report it in a public issue. Contact the maintainers
privately on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} instead.
::

## Find out where the bug belongs

LeiOS combines three kinds of software: Debian 13 "trixie", LeiOS's own packages, and the apps you
install yourself. A bug is best reported to whoever makes the broken part.

### Which package is it?

Open **Konsole** and find the package behind the problem:

```bash
# Which package installed a file, for example a program
dpkg -S /usr/bin/dolphin

# Which repository the installed version of a package comes from
apt policy dolphin

# Which apps are installed as Flatpaks
flatpak list --app
```

In the output of `apt policy`, the line marked with `***` is the installed version, and the lines
below it show where it comes from:

| Source in `apt policy` | The package comes from |
| --- | --- |
| `pkg.repo.leios.dev` | The LeiOS repository. Names starting with `leios.` are made by the LeiOS team; other `<publisher>.<package>` names come from publishers on the [Developer Hub](https://hub.leios.dev){target="_blank"}. |
| `deb.debian.org` | Debian. |
| `packages.mozilla.org` | Mozilla. LeiOS ships Firefox and Firefox Developer Edition from there. |
| only `/var/lib/dpkg/status` | A `.deb` file that was installed by hand, not from a repository. |

### Where to report it

LeiOS bugs go into the issue tracker of the matching repository on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"}. You need an account
there to open an issue.

| The problem is with… | Report it in |
| --- | --- |
| The installer, the live system, the boot menu, or the boot loader and Secure Boot setup of a new installation | [LeiOS/live/images](https://git.leicraftmc.de/LeiOS/live/images){target="_blank"} |
| What is installed by default | [LeiOS/live/images](https://git.leicraftmc.de/LeiOS/live/images){target="_blank"} |
| `/etc/os-release`, `/etc/issue`, `/etc/motd` (`leios.system.base-files`) | [LeiOS/System-Packages/Base-Files](https://git.leicraftmc.de/LeiOS/System-Packages/Base-Files){target="_blank"} |
| The LeiOS version and release changelog on your system (`leios.system.branding-meta-files`) | [LeiOS/System-Packages/Branding-Meta-Files](https://git.leicraftmc.de/LeiOS/System-Packages/Branding-Meta-Files){target="_blank"} |
| zram swap and the other performance defaults (`leios.system.performance-tweaks.base`) | [LeiOS/System-Packages/Performance-Tweaks/Base](https://git.leicraftmc.de/LeiOS/System-Packages/Performance-Tweaks/Base){target="_blank"} |
| The settings for computers with little memory (`leios.system.performance-tweaks.lowend`) | [LeiOS/System-Packages/Performance-Tweaks/LowEnd](https://git.leicraftmc.de/LeiOS/System-Packages/Performance-Tweaks/LowEnd){target="_blank"} |
| The `en_DE.UTF-8` locale, English with German formats (`leios.system.locales.en-de`) | [LeiOS/System-Packages/Locales/EN-DE](https://git.leicraftmc.de/LeiOS/System-Packages/Locales/EN-DE){target="_blank"} |
| The LeiOS look | The matching repository in the [table below](#the-leios-look) |
| The Developer Hub at hub.leios.dev | [LeiOS/Hub-Website](https://git.leicraftmc.de/LeiOS/Hub-Website){target="_blank"} |
| Package uploads, the Repository API, or the APT repository itself, for example signature errors from `pkg.repo.leios.dev` | [LeiOS/API-Server](https://git.leicraftmc.de/LeiOS/API-Server){target="_blank"} |
| This website or these docs | [LeiOS/Website](https://git.leicraftmc.de/LeiOS/Website){target="_blank"} |

### The LeiOS look

The LeiOS look is split into several packages:

| Part | Package | Repository |
| --- | --- | --- |
| Fonts | `leios.theme.fonts` | [Theme-Packages/Fonts](https://git.leicraftmc.de/LeiOS/Theme-Packages/Fonts){target="_blank"} |
| Wallpapers | `leios.theme.wallpapers` | [Theme-Packages/Wallpapers](https://git.leicraftmc.de/LeiOS/Theme-Packages/Wallpapers){target="_blank"} |
| Boot menu theme | `leios.theme.grub-theme` | [Theme-Packages/Grub-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Grub-Theme){target="_blank"} |
| Boot splash | `leios.theme.plymouth-theme` | [Theme-Packages/Plymouth-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Plymouth-Theme){target="_blank"} |
| Login screen | `leios.theme.sddm-theme` | [Theme-Packages/SDDM-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/SDDM-Theme){target="_blank"} |
| fastfetch logo and layout | `leios.theme.fastfetch-theme` | [Theme-Packages/Fastfetch-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Fastfetch-Theme){target="_blank"} |
| Plasma desktop theme | `leios.theme.kde-plasma.theme` | [Theme-Packages/KDE-Plasma/Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Theme){target="_blank"} |
| Konsole profile | `leios.theme.kde-plasma.konsole` | [Theme-Packages/KDE-Plasma/Konsole](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Konsole){target="_blank"} |
| Dolphin defaults | `leios.theme.kde-plasma.dolphin` | [Theme-Packages/KDE-Plasma/Dolphin](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Dolphin){target="_blank"} |
| Digital clock widget | `leios.theme.plasmoids.digitalclock` | [Theme-Packages/Plasmoids/DigitalClock](https://git.leicraftmc.de/LeiOS/Theme-Packages/Plasmoids/DigitalClock){target="_blank"} |
| All of the above together | `leios.theme.aio` | [Theme-Packages/AIO](https://git.leicraftmc.de/LeiOS/Theme-Packages/AIO){target="_blank"} |

### Bugs that belong elsewhere

| The problem is with… | Report it to |
| --- | --- |
| A package from a publisher on the Developer Hub | The publisher. Its **Maintainer contact** is on its publisher page on the Hub. For malware, spam or impersonation, use the **Report** button on the Hub instead. |
| A package from Debian | Debian, see [Reporting to Debian](#reporting-to-debian). |
| A Flatpak app | The app's developers, see [Reporting a Flatpak app](#reporting-a-flatpak-app). |
| Firefox or Firefox Developer Edition | Mozilla, at [bugzilla.mozilla.org](https://bugzilla.mozilla.org){target="_blank"}. |

Not sure where your bug belongs? Ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.

### LeiOS bug or Debian bug?

Most of LeiOS is Debian, so many bugs are Debian bugs. These questions help:

- **Does it involve the installer, the boot setup, a `leios.` package or a LeiOS default?** Then it
  is a LeiOS bug.
- **Does it also happen on plain Debian 13?** Try it on a Debian live USB if you can. If it happens
  there too, it is a Debian bug, or a bug in the software itself.
- **Did it start with an update?** `/var/log/apt/history.log` shows which packages changed and when.
  Mention them in your report.

If you are on the `testing` channel, say so. Bugs in `testing` are expected, and finding them is
what the channel is for. See [Release Channels](/docs/usage/release-channels).

## Check whether it is known

Before you open a new issue:

1. Sign in on git.leicraftmc.de and search the issues of the repository from the tables above.
2. Search or ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.

If you find an issue about your problem, add your details there as a comment instead of opening a
new one. A comment with new information (another device, a log, a way to reproduce it) helps more
than "same here".

## Collect information

Run these commands in Konsole and copy their output as text. Text can be searched; screenshots
can't. Screenshots are still great for showing visual problems.

### Your system

```bash
# LeiOS version and channel, for example "LeiOS 2026.08.006 (stable)"
cat /etc/os-release

# Short overview: LeiOS version, kernel, desktop, CPU, graphics, memory
fastfetch

# Full hardware report; -z hides serial numbers, MAC and IP addresses
inxi -Fxz
```

### Logs

```bash
# Warnings and errors since the last start
sudo journalctl -b -p warning

# The same for the previous start, for example after a crash or freeze
sudo journalctl -b -1 -p warning

# The starts that the journal has recorded
sudo journalctl --list-boots

# Kernel messages: hardware, drivers, USB devices, disks
sudo dmesg
```

Without `sudo`, `journalctl` only shows the messages of your own user, not those of the system.

If a program misbehaves, start it from Konsole by its command name, for example `dolphin`, and
copy what it prints while you reproduce the problem.

### Updates and packages

```bash
# What was installed, upgraded or removed, and when
less /var/log/apt/history.log

# The installed version of a package and where it comes from
apt policy <package>
```

### Flatpak apps

```bash
flatpak --version

# Installed apps with their application ID, version and origin
flatpak list --app

# Start the app from Konsole to see its messages
flatpak run <application-id>
```

Long output is easier to share as a file, for example
`sudo journalctl -b -p warning > journal.txt`.
Attach the file to the issue.

::warning
Logs can contain your user name, the computer's name, Wi-Fi network names and IP addresses. Read
them before you post them. **Never post passwords, API keys (`lra_apikey_…`), session tokens
(`lra_sess_…`) or private keys.** If you posted one by accident, change the password or delete the
key on the Developer Hub right away.
::

## Write the report

Give the issue a short, specific title. "Wi-Fi disconnects after resume on a ThinkPad T14" helps
much more than "Wi-Fi broken". Then fill in this template:

```text
## Summary
One or two sentences: what is wrong?

## Steps to reproduce
1. …
2. …
3. …

## Expected result
What should happen?

## Actual result
What happens instead? Copy error messages as text.

## System
- LeiOS version and channel (cat /etc/os-release):
- Hardware (fastfetch, or inxi -Fxz as an attachment):
- Affected package and version (apt policy <package>):

## Since when
Did it ever work? Did it start after an update (/var/log/apt/history.log)?

## Logs
The relevant lines, or attach them as a file.
```

Keep one problem per issue. If you find more, open more issues. Check back for questions from the
maintainers: a bug that can't be reproduced often can't be fixed.

## Reporting to Debian

If the bug also happens on plain Debian 13, report it to Debian with `reportbug`, which is installed
on LeiOS:

```bash
reportbug <package>
```

The first time, `reportbug` asks for your name, email address and how to send reports. It then shows
the existing bug reports for the package, so you can check for duplicates, and guides you through
the report. Debian's bug reports are public and written in English.

Bugs in KDE Plasma and KDE apps that are not specific to Debian can also go straight to KDE at
[bugs.kde.org](https://bugs.kde.org){target="_blank"}.

## Reporting a Flatpak app

A Flatpak app runs the same on every distribution, so its bugs are almost never LeiOS bugs. Find
the app's ID with `flatpak list --app`, then:

- **Bugs in the app itself** go to the app's own issue tracker. The app's page on
  [Flathub](https://flathub.org){target="_blank"} links to its website and tracker.
- **Problems with the Flatpak packaging** of a Flathub app, for example missing permissions or an
  outdated build, go to its Flathub repository at `https://github.com/flathub/<application-id>`.

Problems with installing or updating apps through **Discover** itself are LeiOS or KDE bugs. Report
them as described above.
