---
title: "Installation"
description: "Install LeiOS with the graphical installer: language, keyboard, disk setup, encryption and your user account, step by step."
navigation:
  title: Installation
---

# Installation

Installing LeiOS takes about 15 to 30 minutes. You click through a few pages in the installer,
the installer copies LeiOS to your disk, and you restart into your new system.

Before you start, you need:

- a [LeiOS USB stick](/docs/getting-started/create-a-bootable-usb), started into the
  [live system](/docs/getting-started/booting-and-secure-boot);
- a laptop on its power cable;
- a **backup of your files** if the computer has data on it.

::warning
Installing LeiOS can erase the disk you install it on. If you want to keep Windows, follow the
[Dual Boot guide](/docs/getting-started/dual-boot) instead of erasing the disk.
::

::steps{level="2"}

## Start the installer

In the live system, double-click **Install LeiOS** on the desktop. The installer checks your
computer first (enough disk space and memory, power connected). See
[System Requirements](/docs/getting-started/system-requirements#what-the-installer-checks).

## Welcome

Choose the **language of the installer**, then click **Next**.

## Location

Click your region on the map or pick it from the lists. This sets your **time zone**, the
**system language** and the **formats** for dates, numbers and currency. You can change all of
them later in *System Settings → Region & Language*.

Living in Germany but prefer an English system? Choose English as the language and **English
(Germany)** (`en_DE.UTF-8`) as the format: English text with German dates, numbers and currency.

## Keyboard

Choose your **keyboard layout** and type a few characters, especially `@`, `"`, `y` and `z`, in
the test field to check it. You can add more layouts later.

## Partitions

Choose the disk to install on and how to use it:

| Option | What it does | Use it when |
| --- | --- | --- |
| **Erase disk** | Deletes everything on the disk and installs LeiOS on all of it. | You want LeiOS only, on a computer whose data you have backed up. |
| **Install alongside** | Shrinks an existing system, such as Windows, and installs LeiOS in the space it frees. You choose the sizes by dragging a divider. | You want to keep Windows. See [Dual Boot](/docs/getting-started/dual-boot). |
| **Replace a partition** | Installs LeiOS into one partition you select. Only that partition is erased. | You have already made room for LeiOS. |
| **Manual partitioning** | You create and assign partitions yourself. | You know what partitions and mount points are. |

Check the **before and after** preview at the bottom of the page: the installer only changes what
it shows there, and only after you confirm on the summary page.

### Encrypt your disk

With **Erase disk**, you can tick **Encrypt system** and enter a passphrase. Everything on the
disk is then encrypted, and LeiOS asks for the passphrase every time it starts. If your laptop is
lost or stolen, nobody can read your files without it.

::caution
If you forget the encryption passphrase, your data cannot be recovered, not even by us. Write it
down and keep it in a safe place.
::

### Swap

LeiOS already uses fast, compressed swap in memory (zram), so you don't need a swap partition. If
the installer offers swap options, **No swap** is fine. Only choose an option with **hibernate** if
you want to hibernate your computer.

### Manual partitioning

For a UEFI computer, LeiOS needs at least:

| Partition | Size | File system | Mount point |
| --- | --- | --- | --- |
| EFI system partition | 300 MB or more (an existing one is fine, keep it) | FAT32 | `/boot/efi` |
| Root | 15 GB or more | ext4 (or Btrfs) | `/` |

A separate `/home` partition is optional. On a BIOS computer, no EFI system partition is needed.

## Users

Enter:

- **Your name**, as it is shown on the login screen.
- **A login name**, lowercase, used for your home folder (`/home/<login name>`).
- **The computer's name**, which other devices on your network see.
- **A password**, twice. It protects your account and is needed for administrative tasks such as
  installing updates.

Tick **Log in automatically without asking for the password** only if nobody else has access to
the computer.

Your account is the computer's administrator account: it can install software and change system
settings with your own password. LeiOS doesn't set a separate root password.

## Summary

Check everything once more, especially the disk changes. **Nothing is written to the disk until
you click Install.** Then confirm.

The installer copies LeiOS to the disk, sets up the boot loader and removes the installer itself
from the new system. This takes 10 to 20 minutes, depending on your disk and USB stick.

## Restart

When the installation is done, leave **Restart now** ticked and click **Done**. Remove the USB
stick when the screen goes dark, so the computer starts from the disk.

::

## The first start

1. **Boot menu.** You see the LeiOS boot menu. It starts LeiOS automatically. With Windows
   installed too, you choose the system here. See [Dual Boot](/docs/getting-started/dual-boot).
2. **Encryption passphrase.** If you encrypted the disk, enter its passphrase.
3. **Login screen.** Log in with your password.
4. **Welcome Center.** On your first login, the Welcome Center introduces the desktop.

Next, follow [First Steps](/docs/getting-started/first-steps) to install updates, set up apps and
make LeiOS yours.

## If something goes wrong

**The installer says there isn't enough space.**
LeiOS needs at least 15 GB. Choose another disk, or make more room. See
[Dual Boot](/docs/getting-started/dual-boot#make-room-for-leios).

**The computer starts the USB stick again after the restart.**
Remove the stick, or choose your disk in the boot menu. In the firmware boot order, the entry for
your installed system is called **leios** or **LeiOS**.

**The installed system doesn't start or shows a black screen.**
See [Troubleshooting](/docs/usage/troubleshooting#leios-doesnt-start).
