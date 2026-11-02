---
title: "Booting and Secure Boot"
description: "Start your computer from the LeiOS USB stick, try the live system, and get past Secure Boot and firmware settings."
navigation:
  title: Booting & Secure Boot
---

# Booting and Secure Boot

With your [LeiOS USB stick](/docs/getting-started/create-a-bootable-usb) ready, the next step is
to start your computer from it. You then get the **live system**: LeiOS running entirely from the
stick, without changing anything on your computer.

## Open the boot menu

Plug in the stick, then restart the computer and immediately press the **boot menu key** a few
times, until a menu with your disks and the USB stick appears. Choose the USB stick.

| Manufacturer | Boot menu | Firmware setup (BIOS/UEFI) |
| --- | --- | --- |
| Acer | :kbd{value="F12"} | :kbd{value="F2"} |
| ASUS | :kbd{value="F8"} or :kbd{value="Esc"} | :kbd{value="F2"} or :kbd{value="Del"} |
| Dell | :kbd{value="F12"} | :kbd{value="F2"} |
| HP | :kbd{value="F9"} (or :kbd{value="Esc"}, then :kbd{value="F9"}) | :kbd{value="F10"} |
| Lenovo ThinkPad | :kbd{value="F12"} | :kbd{value="F1"} |
| Lenovo IdeaPad / Legion | :kbd{value="F12"} or the Novo button | :kbd{value="F2"} |
| MSI | :kbd{value="F11"} | :kbd{value="Del"} |
| Gigabyte | :kbd{value="F12"} | :kbd{value="Del"} |
| ASRock | :kbd{value="F11"} | :kbd{value="F2"} or :kbd{value="Del"} |
| Microsoft Surface | Hold **Volume Down** while pressing power | Hold **Volume Up** while pressing power |

On some laptops you hold :kbd{value="Fn"} together with the F key.

::tip
**Coming from Windows?** If the key doesn't work because Windows starts too fast, let Windows open
the menu for you: **Settings → System → Recovery → Advanced startup → Restart now**, then choose
**Use a device** and pick your USB stick. (On Windows 10: **Settings → Update & Security →
Recovery**.)
::

If your stick appears twice, for example as `UEFI: SanDisk` and `SanDisk`, choose the **UEFI**
entry. Computers that came with Windows 10 or 11 use UEFI, and LeiOS should be installed the same
way as the system that is already there.

## The LeiOS boot menu

After a moment you see the LeiOS boot menu. It starts the first entry automatically after a few
seconds.

| Entry | What it does |
| --- | --- |
| **Live system** (first entry) | Starts LeiOS in English. |
| **Live system (German)** | Starts LeiOS in German. |
| **Advanced options…** | Contains a memory test (memtest86+) for checking faulty RAM. |

The language of the live system doesn't matter for the installation: you choose the language of
your installed LeiOS in the installer.

## Try the live system

The live system logs you in automatically. Take the chance to check that your hardware works:

- **Wi-Fi:** click the network icon in the bottom-right corner of the screen.
- **Sound:** play a video in Firefox and check the volume icon.
- **Display, touchpad, keyboard, webcam and external monitors.**

Everything you do in the live system is lost when you restart, and your disks are not touched.
Running from a USB stick is slower than an installed LeiOS, so don't judge the speed yet.

::note
If the screen locks while you try LeiOS, the live system's password is `live`.
::

When you are ready, double-click **Install LeiOS** on the desktop. See
[Installation](/docs/getting-started/installation).

## Secure Boot

**Secure Boot** is a firmware feature that only starts boot software signed by a trusted key. It
protects you from malware that hides in the boot process. Most computers sold with Windows 8 or
newer have it turned on.

LeiOS works **with Secure Boot turned on**. It uses the same signed boot chain as Debian: Debian's
`shim` (signed by Microsoft's third-party UEFI certificate, both the 2011 and the 2023 version),
Debian's signed GRUB boot loader, and Debian's signed kernel. Your installed LeiOS uses the same
chain, so you can leave Secure Boot on.

### When Secure Boot blocks LeiOS

Some computers trust **only Microsoft's Windows certificate** out of the box, not the third-party
certificate that Linux distributions use. This includes many PCs sold as *Secured-core PCs* and
recent Lenovo ThinkPads. On those, the stick doesn't start and you see a message such as **Secure
Boot Violation**, **Invalid signature detected** or **Image failed to verify**, or the computer
simply starts Windows again.

Fix it in the firmware setup (press the firmware key from the table above while the computer
starts):

1. **Allow the third-party certificate.** Look for a setting like **Allow Microsoft 3rd Party UEFI
   CA** (Lenovo: *Security → Secure Boot*) or **Microsoft & 3rd party CA** (Surface: *Security →
   Secure Boot → Change configuration*). Turn it on, save and restart. This is the best option:
   Secure Boot stays on.
2. **Or turn Secure Boot off.** If your firmware has no such option, set **Secure Boot** to
   **Disabled**, usually under *Security* or *Boot*. LeiOS works the same without it.

::warning
**Using Windows with BitLocker?** Many Windows 11 computers encrypt the disk with BitLocker
(*device encryption*). After you change Secure Boot settings, Windows may ask for the **BitLocker
recovery key** on its next start. Find your key before you change anything: it is in your Microsoft
account at [aka.ms/myrecoverykey](https://aka.ms/myrecoverykey){target="_blank"}, or in Windows
under **Manage BitLocker → Back up your recovery key**.
::

### Check the Secure Boot state

On LeiOS, this command shows whether Secure Boot is on:

```bash
mokutil --sb-state
```

Extra drivers that are built on your computer, such as NVIDIA's graphics driver, have to be signed
with your own key when Secure Boot is on. That takes one extra step, described in
[Hardware and Drivers](/docs/usage/hardware-and-drivers#drivers-and-secure-boot).

## Troubleshooting

**The USB stick doesn't appear in the boot menu.**
Write the stick again (with Rufus, choose *DD Image mode*), then try another USB port, preferably
directly on the computer and not through a hub. In the firmware setup, check that USB boot is
allowed and turn off **Fast Boot** if it exists.

**The computer starts Windows every time.**
Use the boot menu key or Windows' *Advanced startup* as described above. Also turn off Windows'
**Fast Startup**: *Control Panel → Power Options → Choose what the power buttons do → Change
settings that are currently unavailable*, then clear **Turn on fast startup**.

**The screen stays black or freezes after choosing the live system.**
This happens with some graphics cards, most often NVIDIA. In the LeiOS boot menu, highlight the
first entry and press :kbd{value="E"}. In the line that starts with `linux`, add `nomodeset` after
`splash`, then press :kbd{value="Ctrl"} + :kbd{value="X"} or :kbd{value="F10"} to start. After
installing, set up the right driver as described in [Hardware and Drivers](/docs/usage/hardware-and-drivers).

**Still stuck?** Ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} and mention your
computer model.
