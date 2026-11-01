---
title: "First Steps"
description: "What to do after installing LeiOS: get online, install updates, set up Flathub, install your apps and make the desktop yours."
navigation:
  title: First Steps
---

# First Steps

Welcome to LeiOS! This page walks you through the first half hour with your new system. You don't
need the terminal for any of it, but where a command is faster, it's shown too.

::steps{level="2"}

## Say hello to the Welcome Center

On your first login, the **Welcome Center** opens. It introduces the most important parts of the
KDE Plasma desktop. You can open it again any time from the Application Launcher.

## Connect to the internet

Click the **network icon** in the bottom-right corner of the screen (the system tray), choose your
Wi-Fi network and enter its password. A network cable works without any setup.

## Install updates

The image you installed from may be a few weeks old. Bring everything up to date:

1. Open **Discover** from the Application Launcher (or click the update icon in the system tray when
   it appears).
2. Go to **Updates** and click **Update All**.
3. Restart if Discover asks you to.

From now on, Discover lets you know when updates are available. See
[Updates and Maintenance](/docs/usage/updates-and-maintenance).

::::tip
Prefer the terminal? `sudo apt update && sudo apt full-upgrade` does the same for system packages.
::::

## Add Flathub, the app store for Linux

Most desktop apps, like Spotify, Discord, Steam or VS Code, come from **Flathub**. Turn it on once:
open **Konsole** from the Application Launcher, paste this command and enter your password:

```bash
sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Close and reopen Discover. Flathub apps now appear next to the apps from Debian. See
[Installing Apps](/docs/usage/installing-apps) for why Flathub is the recommended source.

## Install your apps

LeiOS comes with Firefox, LibreOffice, an email client, a PDF viewer, GIMP and more. For anything
else, open Discover, search for the app and click **Install**.

Moving from Windows? The [app table](/switch-from-windows#apps) shows what to use instead of your
Windows programs.

## Make it yours

Open **System Settings** from the Application Launcher. Good places to start:

- **Display & Monitor:** screen resolution, scaling for high-resolution screens, and **Night Light**
  for warmer colors in the evening.
- **Region & Language:** the language and formats for dates, numbers and currency.
- **Keyboard:** more keyboard layouts.
- **Colors & Themes:** light or dark look, wallpapers, icons and fonts.
- **Users:** your profile picture and password.

Right-click the desktop or the panel to change the wallpaper or edit the panel. More in
[The Desktop](/docs/usage/desktop) and [Customization](/docs/usage/customization).

## Bring your files

Copy your documents, pictures and music from your backup into the matching folders in your home
folder: **Documents**, **Pictures**, **Music**, **Videos** and **Downloads**. Open **Dolphin**, the
file manager, from the panel or with :kbd{value="Meta"} + :kbd{value="E"}.

## Set up a backup

Your files are only safe if they exist in more than one place. Set up a regular backup to an
external drive or cloud storage now, before you need it. See
[Updates and Maintenance](/docs/usage/updates-and-maintenance#back-up-your-files).

::

## Which version am I running?

Open **System Settings → About this System**, or run:

```bash
cat /etc/os-release
fastfetch
```

You see something like `LeiOS 2026.08.006 (stable)`: the LeiOS release and its
[release channel](/docs/usage/release-channels).

## Where to go next

::icon-card-grid
---
cards:
  - icon: i-lucide-monitor
    title: The Desktop
    description: The panel, the launcher, windows, shortcuts and System Settings.
    to: /docs/usage/desktop
  - icon: i-lucide-store
    title: Installing Apps
    description: Discover, Flathub and APT, and which one to use when.
    to: /docs/usage/installing-apps
  - icon: i-lucide-cpu
    title: Hardware and Drivers
    description: Graphics drivers, printers, Bluetooth and your phone.
    to: /docs/usage/hardware-and-drivers
  - icon: i-lucide-life-buoy
    title: Getting Help
    description: Ask the community on Discord or report a bug.
    to: /docs/community/getting-help
---
::
