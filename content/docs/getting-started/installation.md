---
title: "Installation"
description: "Write the LeiOS ISO to a USB drive, boot the live system, and install LeiOS with Calamares."
navigation:
  title: Installation
---

# Installation

Installing LeiOS takes four steps: download the ISO, write it to a USB drive, boot from it, and run
the installer. Check the [system requirements](/docs/getting-started/system-requirements) first.

::warning
Installing LeiOS can erase the disk you install it on. Back up anything you want to keep before you
start.
::

::steps{level="2"}

## Download the ISO

:::callout{icon="i-lucide-construction" color="warning"}
Public ISO downloads are coming soon. Follow the
[LeiOS blog](https://blog.leicraftmc.de/tag/leios/){target="_blank"} or join the
[Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} to hear about the first release. Until
then, you can [build the ISO yourself](/docs/developers/building-the-iso).
:::

The image is a hybrid ISO named like `leios-<version>-amd64.hybrid.iso`. It works both as a DVD
image and as a raw USB image.

## Write it to a USB drive

Because the image is a hybrid ISO, you can write it to a USB drive byte for byte. Everything on the
drive will be erased.

:::tabs

::::tabs-item{label="Linux" icon="i-lucide-terminal"}
Find the device name of your USB drive with `lsblk`, then write the image. Double-check the device
name: writing to the wrong one destroys its data.

```bash
lsblk
sudo dd if=leios-<version>-amd64.hybrid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Graphical tools such as KDE's **ISO Image Writer** or **GNOME Disks** work too.
::::

::::tabs-item{label="Windows" icon="i-lucide-monitor"}
Use [Rufus](https://rufus.ie){target="_blank"} or
[balenaEtcher](https://etcher.balena.io){target="_blank"}. If Rufus asks how to write a hybrid
image, choose **DD Image** mode.
::::

::::tabs-item{label="macOS" icon="i-lucide-laptop"}
Use [balenaEtcher](https://etcher.balena.io){target="_blank"}: select the ISO, select the USB
drive, and click **Flash**.
::::

:::

## Boot the live system

Plug in the USB drive, restart, and open your computer's boot menu. The key depends on the
manufacturer; common ones are :kbd{value="F12"}, :kbd{value="F11"}, :kbd{value="F8"} and
:kbd{value="Esc"}. Choose the USB drive.

LeiOS starts a live system that runs entirely from the USB drive without changing your disk. The
boot menu also has a **Live system (German)** entry if you prefer a German session.

Use the live system to check that your Wi-Fi, graphics, sound and other hardware work before you
install.

## Run the installer

Double-click **Install LeiOS** on the live desktop. This starts the Calamares installer, which
walks you through these pages:

1. **Welcome.** Choose the installer language. The requirement checks run here.
2. **Location.** Choose your region, time zone and system language.
3. **Keyboard.** Choose and test your keyboard layout.
4. **Partitions.** Erase a disk, install alongside another system, or partition manually. You can
   also turn on disk encryption here.
5. **Users.** Create your user account and set the computer's name.
6. **Summary.** Review your choices. Nothing is written to disk until you confirm.

When the installer has finished, restart and remove the USB drive.

::

## After the installation

- **No root password is set.** Your user account is in the `sudo` group, so use `sudo` for
  administrative tasks.
- **The installer removes itself.** The live-system packages and Calamares are uninstalled from the
  new system automatically.
- **Next step:** follow [First Steps](/docs/getting-started/first-steps) to update your system and
  install software.
