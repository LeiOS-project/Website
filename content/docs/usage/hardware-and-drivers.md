---
title: "Hardware and Drivers"
description: "Check your hardware on LeiOS, install NVIDIA drivers (also with Secure Boot), fix Wi-Fi firmware, and set up printers, scanners, Bluetooth and your phone."
navigation:
  title: Hardware & Drivers
---

# Hardware and Drivers

On Windows, you often download drivers from manufacturers' websites. On LeiOS, almost all drivers
are part of the Linux kernel and are already there. LeiOS also includes the **firmware** that many
devices need: for Intel, AMD, Realtek and Atheros Wi-Fi, Intel and AMD graphics, Intel sound and
Bluetooth chips, plus processor microcode updates for Intel and AMD.

So in most cases: plug it in, and it works. This page covers the exceptions.

## See what's in your computer

**System Settings → About this System** shows the essentials. The **Info Center** app shows
everything in detail. In the terminal:

```bash
inxi -Fxz        # full overview: CPU, graphics, audio, network, drives
inxi -G          # graphics only
inxi -N          # network adapters and their drivers
lspci -k         # PCI devices and the driver each one uses
lsusb            # USB devices
```

## Graphics

**Intel and AMD graphics** work out of the box, including 3D acceleration and video decoding. There
is nothing to install.

### NVIDIA graphics

NVIDIA cards work out of the box with the open-source **nouveau** driver, which is fine for the
desktop and videos. For gaming, 3D work and CUDA, install NVIDIA's own driver from Debian:

1. Check which driver your card needs:

   ```bash
   sudo apt install nvidia-detect
   nvidia-detect
   ```

2. Install the driver it recommends, usually:

   ```bash
   sudo apt install nvidia-driver
   ```

   The driver is built for your kernel during installation. That takes a few minutes.

3. **If Secure Boot is on**, follow [Drivers and Secure Boot](#drivers-and-secure-boot) below
   before you restart.
4. Restart.

Check that it is used with `nvidia-smi`.

::note
If the screen stays black on the first start after installing LeiOS on a computer with an NVIDIA
card, add `nomodeset` to the boot entry once, as described in
[Troubleshooting](/docs/usage/troubleshooting#black-screen-after-booting), and then install the
driver as shown above.
::

### Drivers and Secure Boot

With Secure Boot on, your computer only loads kernel drivers that are signed by a key it trusts.
Drivers that are built on your computer, like NVIDIA's driver or some Wi-Fi drivers, are signed
with a key that LeiOS creates for you (a *Machine Owner Key*, MOK). You have to tell your computer
to trust it, once:

1. After installing the driver, import the key and choose a one-time password:

   ```bash
   sudo mokutil --import /var/lib/dkms/mok.pub
   ```

2. Restart. A blue **MOK management** screen appears before LeiOS starts.
3. Choose **Enroll MOK → Continue → Yes**, enter the one-time password, and choose **Reboot**.

You only do this once. Later driver updates are signed with the same key. If you'd rather skip
this, you can also turn Secure Boot off; see
[Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot#secure-boot).

## Wi-Fi

Most Wi-Fi adapters work right away. If yours doesn't show any networks:

1. Check that Wi-Fi isn't turned off: look for a Wi-Fi key or switch on your laptop, and for
   **Airplane mode** in the network menu. In the terminal, `rfkill list` shows whether something is
   blocked.
2. Look for missing firmware:

   ```bash
   sudo dmesg | grep -i firmware
   ```

   Lines with *failed to load* name the file the adapter needs.
3. **Broadcom** adapters are the most common exception. Many need the `firmware-brcm80211` package,
   some older ones the `broadcom-sta-dkms` driver. Install the right one with a network cable or
   USB tethering from your phone, for example:

   ```bash
   sudo apt install firmware-brcm80211
   ```

If you're not sure what your adapter needs, ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}
with the output of `inxi -N`.

## Printers and scanners

Open **System Settings → Printers** and click **Add Printer**. Most network printers from the last
years are found automatically and work without a driver (*driverless printing*, also known as
IPP Everywhere or AirPrint).

For printers that need a driver:

| Brand | Install |
| --- | --- |
| HP | `sudo apt install hplip` |
| Brother, Canon, Epson and others | Search for the model in Discover or with `apt search printer-driver`, or look for a Debian driver on the manufacturer's site. |

For scanning, install **Skanpage** from Discover. Most USB and network scanners work without
setup.

## Bluetooth

Click the **Bluetooth icon** in the system tray, or open **System Settings → Bluetooth**, and pair
your headphones, mouse, keyboard or controller.

## Sound

Click the **volume icon** in the system tray to choose the output (speakers, headphones, HDMI) and
input device. *System Settings → Sound* has all details. LeiOS uses PipeWire, which handles
Bluetooth headsets and professional audio alike.

## Your phone

**KDE Connect** links your phone and your computer over Wi-Fi: send files, share the clipboard,
see phone notifications on your desktop, and use your phone as a remote control.

1. Install **KDE Connect** on your phone from the Google Play Store, F-Droid or the App Store.
2. Make sure both devices are on the same Wi-Fi network.
3. Open **System Settings → KDE Connect** on LeiOS, select your phone and click **Pair**.

## Displays

Set the resolution, refresh rate, arrangement and **scaling** for high-resolution screens in
**System Settings → Display & Monitor**. External monitors are detected when you plug them in.
**Night Light** in the same section makes colors warmer in the evening.

## Touchpad and gestures

Configure tapping, scrolling direction and speed in **System Settings → Touchpad**. On touchpads,
swipe up with four fingers for the overview of all windows, and left or right with four fingers to
switch virtual desktops.

## Battery and power

Click the **battery icon** in the system tray to switch between **Power Save**, **Balanced** and
**Performance**. More options, such as what happens when you close the lid, are in **System
Settings → Power Management**.

## Firmware updates

Discover installs firmware updates for supported laptops, docks, SSDs and accessories. See
[Updates and Maintenance](/docs/usage/updates-and-maintenance#firmware-updates).
