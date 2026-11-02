---
title: "Create a Bootable USB Drive"
description: "Download the LeiOS image, check that it arrived intact, and write it to a USB stick on Windows, macOS or Linux."
navigation:
  title: Create a Bootable USB
---

# Create a Bootable USB Drive

To try or install LeiOS, you start your computer from a USB stick that has the LeiOS image on it.
This page shows you how to make one. You need:

- a USB stick with **at least 4 GB** (8 GB is better). **Everything on it will be erased**, so copy
  off anything you want to keep;
- a computer with Windows, macOS or Linux to create the stick. It can be the computer you want to
  install LeiOS on.

::steps{level="2"}

## Download the image

Get the LeiOS image from the [download page](/download). It is a single file of about 3 GB, named
like `leios-live-<version>-amd64.hybrid.iso`.

You only need the newest image. Older images are kept in the
[image archive](https://git.leicraftmc.de/LeiOS/live/images/-/packages){target="_blank"}, but there
is no reason to use them: LeiOS updates itself to the newest release after installing anyway.

## Check the download

This step is optional, but it saves time if the download went wrong. The download page shows a
**SHA-256 checksum**, a long string of letters and numbers that is unique to the file. Calculate the
checksum of the file you downloaded and compare the two. If they are identical, the file is complete
and unchanged.

:::tabs

::::tabs-item{label="Windows" icon="i-lucide-monitor"}
Open **PowerShell** (search for it in the Start menu), go to your Downloads folder and calculate
the checksum:

```powershell
cd $HOME\Downloads
Get-FileHash .\leios-live-*.iso -Algorithm SHA256
```
::::

::::tabs-item{label="macOS" icon="i-lucide-laptop"}
Open **Terminal** and run:

```bash
cd ~/Downloads
shasum -a 256 leios-live-*.iso
```
::::

::::tabs-item{label="Linux" icon="i-lucide-terminal"}
Open a terminal and run:

```bash
cd ~/Downloads
sha256sum leios-live-*.iso
```
::::

:::

If the checksums are different, download the image again.

## Write the image to the USB stick

The LeiOS image is a *hybrid ISO*: it has to be written to the stick byte for byte. **Copying the
file onto the stick does not work.** Use one of the tools below.

:::tabs

::::tabs-item{label="Windows" icon="i-lucide-monitor"}
**balenaEtcher** is the simplest option:

1. Download and install [balenaEtcher](https://etcher.balena.io){target="_blank"}.
2. Click **Flash from file** and choose the LeiOS image.
3. Click **Select target** and choose your USB stick. Double-check it is the right one.
4. Click **Flash!** and wait until it has written and verified the stick.

**Rufus** works too:

1. Download [Rufus](https://rufus.ie){target="_blank"} and start it.
2. Choose your USB stick under **Device**, then click **SELECT** and choose the LeiOS image.
3. Click **START**. When Rufus asks how to write the image, choose **Write in DD Image mode**.

::::

::::tabs-item{label="macOS" icon="i-lucide-laptop"}
1. Download and install [balenaEtcher](https://etcher.balena.io){target="_blank"}.
2. Click **Flash from file** and choose the LeiOS image.
3. Click **Select target** and choose your USB stick.
4. Click **Flash!** and enter your password when asked.

When macOS says that the disk is not readable after flashing, click **Eject**. That is expected:
macOS can't read the LeiOS file system.
::::

::::tabs-item{label="Linux" icon="i-lucide-terminal"}
On LeiOS and other KDE desktops, use **ISO Image Writer** (install it from Discover if it is
missing), or **balenaEtcher**. On GNOME, right-click the image and choose **Open With → Disk
Image Writer**.

In a terminal, you can use `dd`. First find your stick's device name with `lsblk`, for example
`/dev/sdb`, and make sure it is not one of your internal disks:

```bash
lsblk
sudo dd if=leios-live-*.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Replace `/dev/sdX` with your stick. `dd` writes to whatever device you name, without asking.
::::

:::

## Start your computer from the stick

Your LeiOS stick is ready. Continue with [Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot)
to start the live system.

::

## Troubleshooting

**The stick shows only a small partition or looks empty on Windows.**
That is normal after flashing: Windows can't read the LeiOS file systems. Don't let Windows format
the stick when it offers to.

**I want to use the stick for files again.**
On Windows, open **Disk Management**, delete the stick's partitions and create a new one, or use
Rufus or balenaEtcher to write a different image. On LeiOS, use **Partition Manager**.

**The computer doesn't start from the stick.**
See [Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot#troubleshooting).
