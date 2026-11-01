---
title: "Troubleshooting"
description: "Solutions for common LeiOS problems: boot problems and black screens, failed updates, Discover, Wi-Fi and sound, the clock, and a forgotten password."
navigation:
  title: Troubleshooting
---

# Troubleshooting

Something isn't working? Find your problem below. If it isn't listed or the fix doesn't help, ask
on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} or
[report a bug](/docs/community/reporting-bugs).

Problems with the USB stick and the installer are covered in
[Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot#troubleshooting) and
[Installation](/docs/getting-started/installation#if-something-goes-wrong).

## LeiOS doesn't start

### Secure Boot error

If your computer reports a **Secure Boot Violation** or **Invalid signature**, it only trusts
Windows. Allow the third-party certificate or turn Secure Boot off, as described in
[Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot#when-secure-boot-blocks-leios).

### Black screen after booting

A black screen or a freeze right after the boot menu is usually a graphics driver problem, most
often with NVIDIA cards. Start once with `nomodeset`:

1. In the LeiOS boot menu, select **LeiOS GNU/Linux** and press :kbd{value="E"}. (If you don't
   see the menu, hold :kbd{value="Shift"} or press :kbd{value="Esc"} right after your computer's logo
   appears.)
2. Find the line that starts with `linux` and add ` nomodeset` at its end.
3. Press :kbd{value="Ctrl"} + :kbd{value="X"} or :kbd{value="F10"} to start.

This change only applies to this one start. Once LeiOS is running, install the right driver, see
[NVIDIA graphics](/docs/usage/hardware-and-drivers#nvidia-graphics).

### It stopped starting after an update

The boot menu keeps the previous kernel as a fallback. In the boot menu, choose **Advanced options
for LeiOS GNU/Linux** and pick the entry with the older kernel version. If that works, install updates again
(a fix may already be there) and [report the problem](/docs/community/reporting-bugs).

### The computer starts Windows instead of LeiOS

Windows updates sometimes move Windows Boot Manager to the top of the boot order. Open your
firmware setup and move **leios** or **LeiOS** to the top. See
[Dual Boot](/docs/getting-started/dual-boot#living-with-two-systems).

## Updates fail

### "Could not get lock" or "Waiting for cache lock"

Another program is installing packages, usually Discover or an automatic update check. Wait a few
minutes and try again. Don't delete lock files.

### An update was interrupted

If the computer lost power or crashed during an update, finish the update in Konsole:

```bash
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt full-upgrade
```

### "The following signatures couldn't be verified" or "NO_PUBKEY"

The LeiOS signing key is missing or damaged. Restore it as described in
[Package Management](/docs/usage/package-management#restoring-the-leios-repository).

### Discover shows an error

Discover sometimes hides the real reason. Run the update in Konsole to see it:

```bash
sudo apt update
sudo apt full-upgrade
```

If the output names a repository you added yourself, remove that repository from
`/etc/apt/sources.list.d/` and try again.

## Apps

### Discover shows no apps from Flathub

Flathub has to be turned on once:

```bash
sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Then close and reopen Discover. See [Installing Apps](/docs/usage/installing-apps#setting-up-flathub).

### A Flatpak app can't see my files or devices

Flatpak apps run in a sandbox. Install **Flatseal** from Discover and give the app access to the
folder or device it needs.

### An app has frozen

Close it with :kbd{value="Alt"} + :kbd{value="F4"}. If that doesn't work, open **System Monitor**
with :kbd{value="Ctrl"} + :kbd{value="Esc"}, select the app and click **End Process**. For a frozen
window you can also press :kbd{value="Ctrl"} + :kbd{value="Alt"} + :kbd{value="Esc"} and click it.

## Network and sound

### Wi-Fi doesn't work

Check Airplane mode and your laptop's Wi-Fi key, then see
[Hardware and Drivers](/docs/usage/hardware-and-drivers#wi-fi) for missing firmware.

### No sound

1. Click the **volume icon** in the system tray, make sure nothing is muted, and choose the right
   output device (speakers, headphones or HDMI).
2. If that doesn't help, restart the sound system:

   ```bash
   systemctl --user restart pipewire pipewire-pulse wireplumber
   ```

## The clock is wrong

If the time is off by exactly one or two hours, and you also use Windows on the same computer,
see [Dual Boot](/docs/getting-started/dual-boot#living-with-two-systems). Otherwise, check
**System Settings → Date & Time**: turn on **Set date and time automatically** and choose your time
zone.

## The disk is full

See [Free up disk space](/docs/usage/updates-and-maintenance#free-up-disk-space).

## I forgot my password

If you have a second account with administrator rights, log in there and reset the password in
**System Settings → Users**. Otherwise, reset it from the boot menu:

1. In the LeiOS boot menu, select **LeiOS GNU/Linux** and press :kbd{value="E"}.
2. In the line that starts with `linux`, add ` init=/bin/bash` at its end, then press
   :kbd{value="Ctrl"} + :kbd{value="X"}. If your disk is encrypted, enter the disk passphrase.
3. At the `#` prompt, run these commands, replacing `yourname` with your login name:

   ```bash
   mount -o remount,rw /
   passwd yourname
   sync
   reboot -f
   ```

LeiOS starts normally, and you log in with the new password.

::note
Your **KDE Wallet**, where Wi-Fi and app passwords are stored, uses your old password. After
logging in, open **KWalletManager** and change its password, or create a new wallet.
::

## Still stuck?

- Search for your problem together with **Debian 13** or **KDE Plasma**. LeiOS is Debian
  underneath, so most Debian and KDE answers apply.
- Ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.
- [Report a bug](/docs/community/reporting-bugs) if something in LeiOS is broken.
