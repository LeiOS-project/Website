---
title: "System Requirements"
description: "The hardware you need to run LeiOS, what the installer checks, and how to find out what is inside your computer."
navigation:
  title: System Requirements
---

# System Requirements

LeiOS runs on most 64-bit PCs and laptops from the last decade, including many computers that can't
run Windows 11. There is no TPM requirement and no list of approved processors.

## At a glance

| Component | Minimum | Recommended |
| --- | --- | --- |
| **Processor** | 64-bit x86 CPU (Intel or AMD, `amd64` / `x86_64`) | Any dual-core or better from the last 10 years |
| **Memory** | 1 GB RAM | 4 GB RAM or more |
| **Storage** | 15 GB | 64 GB or more, on an SSD |
| **Firmware** | BIOS (legacy) or UEFI | UEFI, with or without Secure Boot |
| **USB stick** | 4 GB | 8 GB or more |
| **Internet** | Not required to install | Recommended, for updates and apps |

The minimum values are what the installer enforces. They are enough to install LeiOS, but the KDE
Plasma desktop, a web browser and a few apps want more: with **4 GB of RAM** and an **SSD**, LeiOS
feels fast. On a computer with around 4 GB of memory, install the
[low-memory tuning package](/docs/usage/customization#performance) after installing.

::note
LeiOS is made for 64-bit PCs. There is no image for 32-bit PCs, Apple Silicon Macs, or ARM
devices such as the Raspberry Pi.
::

## What the installer checks

When the installer starts, it checks your computer:

| Check | Required? | What it means |
| --- | --- | --- |
| **Storage** | Yes | The target disk has at least 15 GB. |
| **Memory** | Yes | At least 1 GB of RAM is installed. |
| **Administrator rights** | Yes | The installer runs as root. Starting it from the desktop icon does this for you. |
| **Power** | No, only a warning | A laptop is plugged in. Please plug in anyway: if the battery dies halfway, the computer won't start until you install again. |

## Find out what's in your computer

Not sure what hardware you have? On **Windows**, open **Settings → System → About** for the
processor, memory and Windows edition. In **Task Manager → Performance** you see your disk type
(SSD or HDD) and graphics card.

On **LeiOS** (also in the live system), open **System Settings → About this System**, or run:

```bash
inxi -b
```

## Hardware support

LeiOS uses Debian's Linux kernel and includes firmware for most common hardware: Intel and AMD
graphics, Intel, Realtek and Atheros Wi-Fi, Intel sound, Bluetooth chips, and processor microcode.
Most hardware that works on Debian 13 works on LeiOS.

The best way to check your computer is to [start the live system](/docs/getting-started/booting-and-secure-boot)
from the USB stick and try Wi-Fi, sound, the touchpad, the webcam and external displays before you
install. Nothing is changed on your computer while you do that.

A few kinds of hardware need extra steps or have limited support:

- **NVIDIA graphics cards** work out of the box with the open-source driver. For gaming and full
  performance, install NVIDIA's driver after installing. See
  [Hardware and Drivers](/docs/usage/hardware-and-drivers#nvidia-graphics).
- **Some Broadcom Wi-Fi chips** need an extra firmware or driver package.
- **Fingerprint readers** and some very new laptops may not be fully supported yet.

## Secure Boot

LeiOS boots with Secure Boot turned on. A few computers are set to trust only Windows; on those, you
change one firmware setting. See [Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot#secure-boot).
