---
title: "Updates and Maintenance"
description: "Keep LeiOS updated with Discover or APT, update firmware, free up disk space, back up your files, and avoid the mistakes that break systems."
navigation:
  title: Updates & Maintenance
---

# Updates and Maintenance

LeiOS needs very little care. Install updates regularly, keep a backup, and your system stays fast
and safe for years. You never have to reinstall LeiOS to get a newer release: new LeiOS releases
arrive as normal updates.

## Installing updates

### With Discover

When updates are available, an **update icon** appears in the system tray.

1. Click it, or open **Discover** and go to **Updates**.
2. Click **Update All**. Enter your password if asked.
3. If Discover says a restart is needed, restart when it suits you.

Discover updates everything in one go: the system and its apps from Debian and LeiOS, your
Flatpak apps, and device firmware where available.

Choose how often LeiOS checks for updates and notifies you in *System Settings → Software Update*.

### In the terminal

```bash
sudo apt update          # fetch the lists of available updates
sudo apt full-upgrade    # install them
flatpak update           # update Flatpak apps
```

`full-upgrade` also installs new dependencies and removes packages that conflict with an update,
which is what you want on LeiOS. Read the list of changes APT shows before you confirm, especially
packages it wants to **remove**.

### How often?

Install updates **at least once a week**. Security fixes from Debian arrive as soon as they are
ready, and they only protect you once they are installed.

::note
After updates to the Linux kernel, the graphics driver or core system parts, restart your computer
so the new versions are used. Discover tells you when a restart is needed.
::

## What arrives through updates

| Update | Comes from | How often |
| --- | --- | --- |
| Security fixes and bug fixes for the base system | Debian 13 | As soon as they are released |
| New LeiOS releases, LeiOS packages and themes | The [LeiOS repository](/docs/usage/package-management) | With every LeiOS release on your [channel](/docs/usage/release-channels) |
| Firefox and Firefox Developer Edition | Mozilla's repository | With every Firefox release |
| Flatpak apps | Flathub | Whenever the app makers release |
| Firmware for supported devices | The vendors, through LVFS | When vendors publish it |

## Firmware updates

LeiOS can update the firmware of supported devices, such as laptop BIOS/UEFI, docks, SSDs and
mice, from the [Linux Vendor Firmware Service](https://fwupd.org){target="_blank"}. Discover lists
firmware updates together with all others. In the terminal:

```bash
fwupdmgr refresh
fwupdmgr get-updates
fwupdmgr update
```

Keep laptops on power while firmware is updated.

## Free up disk space

Dolphin shows the free space of the current drive in its status bar, and `df -h` lists all
drives. To free space:

```bash
sudo apt autoremove      # remove packages nothing needs anymore, such as old kernels
sudo apt clean           # delete downloaded package files
flatpak uninstall --unused   # remove Flatpak runtimes no app uses
```

Also check your **Downloads** folder and empty the **Trash** in Dolphin. To find what takes up the
most space, install **Filelight** from Discover.

## Back up your files

LeiOS keeps your system running, but only a backup protects your photos, documents and projects
from a broken disk, a lost laptop or an accident. Keep copies of your important files in at least
one other place, ideally an external drive **and** cloud storage.

Two good tools, both one click away in Discover:

- **Déjà Dup Backups** (from Flathub) backs up your home folder on a schedule to an external drive,
  a network share or cloud storage, and restores single files or everything.
- **Timeshift** (from Debian) takes snapshots of the system itself, so you can roll back a broken
  update. It doesn't replace a backup of your personal files.

Test your backup once by restoring a file. A backup you've never restored from is only a hope.

## Habits that keep LeiOS healthy

- **Install software from Discover, Flathub and Debian.** Every extra repository or downloaded
  `.deb` is a chance for conflicts. Never add Ubuntu PPAs or repositories of other Debian versions.
- **Don't mix in Debian testing or unstable.** LeiOS is based on Debian 13 "trixie" and expects
  its packages.
- **Read before you confirm.** If APT or Discover wants to remove many packages, especially the
  desktop (`plasma-desktop`, `task-kde-desktop`) or LeiOS packages (`leios.*`), stop and ask on
  [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.
- **Don't run commands you don't understand**, especially with `sudo`, from random websites or
  videos.
- **Restart now and then.** Some updates only take effect after a restart.

## When an update goes wrong

See [Troubleshooting](/docs/usage/troubleshooting#updates-fail): it covers interrupted updates,
locked package managers, and starting an older kernel if a new one causes problems.
