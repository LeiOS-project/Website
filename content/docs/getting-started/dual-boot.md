---
title: "Dual Boot with Windows"
description: "Install LeiOS next to Windows: prepare Windows, make room on the disk, install, and choose a system every time your computer starts."
navigation:
  title: Dual Boot with Windows
---

# Dual Boot with Windows

You don't have to give up Windows to use LeiOS. In a **dual boot** setup, both systems are installed
on the same computer, and a menu lets you pick one every time the computer starts. It's a good way
to switch at your own pace.

::tip
Have a second disk in your computer? Installing LeiOS on its own disk is the simplest and safest
dual boot setup: choose that disk and **Erase disk** in the installer, and Windows stays untouched.
::

## Before you start

Do these things in Windows first:

1. **Back up your files.** Changing partitions is safe when done right, but a backup costs little
   and protects you from mistakes.
2. **Save your BitLocker recovery key.** Many Windows 11 computers encrypt the disk with BitLocker
   (*device encryption*). Windows may ask for the recovery key after you install LeiOS or change
   firmware settings. Find it in your Microsoft account at
   [aka.ms/myrecoverykey](https://aka.ms/myrecoverykey){target="_blank"}, or in Windows under
   **Manage BitLocker → Back up your recovery key**.
3. **Turn off Fast Startup.** With Fast Startup, Windows never fully shuts down and keeps its disk
   locked. Open **Control Panel → Power Options → Choose what the power buttons do → Change
   settings that are currently unavailable**, clear **Turn on fast startup** and save.
4. **Check the boot mode.** Press :kbd{value="Win"} + :kbd{value="R"}, type `msinfo32` and press
   :kbd{value="Enter"}. If **BIOS Mode** says **UEFI**, start the LeiOS stick in UEFI mode too (the
   boot menu entry starting with `UEFI:`).

## Make room for LeiOS

LeiOS needs its own space on the disk: at least 15 GB, better 50 GB or more if you plan to use it
every day. Shrink the Windows partition from inside Windows:

1. Right-click the Start button and open **Disk Management**.
2. Right-click your Windows partition, usually **(C:)**, and choose **Shrink Volume**.
3. Enter how much space to free in MB, for example `51200` for 50 GB, and click **Shrink**.

You now see a block of **Unallocated** space next to the Windows partition. Leave it empty: the
installer uses it for LeiOS.

::note
The installer's **Install alongside** option can shrink Windows for you, too. Shrinking from
Windows is more reliable, and it is the only way if your disk is encrypted with BitLocker.
::

## Install LeiOS

Start the [live system](/docs/getting-started/booting-and-secure-boot) and the installer as usual,
and follow the [installation guide](/docs/getting-started/installation) until you reach the
**Partitions** page. Then:

1. Choose **Manual partitioning** and click **Next**.
2. Select the **EFI system partition**: a small partition (100 to 300 MB) with the file system
   **fat32**, which already holds Windows' boot loader. Click **Edit**, keep its content (do **not**
   format it), set the mount point to `/boot/efi` and click **OK**.
3. Select the **Free Space** you made in Windows and click **Create**. Choose the file system
   **ext4**, set the mount point to `/` and click **OK**.
4. Click **Next** and continue the installation.

The installer leaves the Windows partition alone and adds LeiOS to the existing EFI system
partition, next to Windows' boot loader.

## Choose a system at startup

After installing, the computer starts the **LeiOS boot menu**. It lists LeiOS and **Windows Boot
Manager**. Pick one with the arrow keys and :kbd{value="Enter"}. Without input, LeiOS starts after a
few seconds.

### Windows is missing from the boot menu

The boot menu finds other systems with a tool called `os-prober`. If Windows doesn't show up, turn
it on and update the menu once:

```bash
echo 'GRUB_DISABLE_OS_PROBER=false' | sudo tee /etc/default/grub.d/90-os-prober.cfg
sudo update-grub
```

Restart, and Windows Boot Manager is in the menu. Until then, you can always start Windows from
your computer's boot menu key.

### Change the default system or the waiting time

Open the boot loader settings in a text editor:

```bash
sudo nano /etc/default/grub
```

- `GRUB_TIMEOUT=5` is the number of seconds the menu waits.
- `GRUB_DEFAULT=0` starts the first entry. To start the system you picked last time instead, set
  `GRUB_DEFAULT=saved` and add the line `GRUB_SAVEDEFAULT=true`.

Save with :kbd{value="Ctrl"} + :kbd{value="O"}, close with :kbd{value="Ctrl"} + :kbd{value="X"},
then apply the change:

```bash
sudo update-grub
```

## Living with two systems

**The clock is wrong in Windows.**
Windows and LeiOS store the time in the computer's hardware clock differently: Windows as local
time, LeiOS as UTC. Tell LeiOS to use local time as Windows does:

```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

**Sharing files.**
LeiOS can read and write your Windows partition: it appears in Dolphin's sidebar under
*Devices*. Windows can't read LeiOS's partitions. To share files both ways, use a USB stick,
cloud storage, or a separate partition formatted as exFAT or NTFS. If Windows wasn't shut down
completely (Fast Startup or hibernation), LeiOS refuses to write to the Windows partition to
protect your data.

**After a big Windows update, the computer starts Windows directly.**
Some Windows updates put Windows Boot Manager first in the boot order again. Open the firmware
setup and move **leios** (or **LeiOS**) back to the top of the boot order.

## Removing LeiOS again

To go back to Windows only, start Windows, open **Disk Management**, delete the LeiOS partitions
(the ones without a drive letter that you created during installation) and extend **(C:)** into the
free space. Then move **Windows Boot Manager** to the top of the boot order in the firmware setup.
