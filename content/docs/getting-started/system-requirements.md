---
title: "System Requirements"
description: "The hardware and firmware you need to install and run LeiOS."
navigation:
  title: System Requirements
---

# System Requirements

LeiOS runs on most 64-bit PCs and laptops from the last decade. The installer checks the minimum
requirements before it lets you continue.

## Minimum requirements

| Component | Requirement |
| --- | --- |
| **Processor** | 64-bit x86 CPU (`amd64` / `x86_64`) |
| **Memory** | 1 GB RAM |
| **Storage** | 15 GB of free disk space |
| **Firmware** | BIOS (legacy) or UEFI |
| **Installation media** | A USB flash drive. Everything on it will be erased. |

These are the values the installer enforces. For a smooth KDE Plasma desktop, we recommend at least
**4 GB of RAM** and an SSD.

::note
LeiOS images are currently built for `amd64` only. The LeiOS package repository also carries `arm64`
packages, but there is no `arm64` installation image yet.
::

## What the installer checks

When it starts, the installer (Calamares) runs these checks:

- **Storage.** At least 15 GB is available. *Required.*
- **Memory.** At least 1 GB of RAM is installed. *Required.*
- **Privileges.** The installer is running as root. *Required.* The desktop launcher does this for
  you.
- **Power.** On a laptop, you are connected to a power source. This is only a warning, but plugging
  in is strongly recommended because an install that is interrupted halfway leaves an unbootable
  system.

## Hardware support

LeiOS uses Debian's stock kernel and includes firmware from Debian's `non-free-firmware` area, for
example for Intel and Realtek Wi-Fi, AMD and Intel graphics, and Intel sound. Most hardware that
works on Debian 13 "trixie" works on LeiOS.

The easiest way to check your hardware is to boot the [live system](/docs/getting-started/installation#boot-the-live-system)
and try it before installing.

## Secure Boot

The image ships Debian's signed `shim`, but Secure Boot is not officially supported yet. If your
machine refuses to boot the installation media, turn off Secure Boot in your firmware settings.
