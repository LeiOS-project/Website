---
title: "Frequently Asked Questions"
description: "Answers to common questions about LeiOS: cost, Debian and Ubuntu, updates, apps and games, privacy, hardware and support."
navigation:
  title: FAQ
---

# Frequently Asked Questions

## The basics

### What is LeiOS?

A free operating system for PCs and laptops: an alternative to Windows. It is based on Debian 13 and
uses the KDE Plasma desktop. See [About LeiOS](/docs/about).

### Is LeiOS really free?

Yes. LeiOS and all its updates cost nothing, and there is no paid edition, no trial and no license
key. Its source code is open.

### Is LeiOS based on Ubuntu?

No. LeiOS is based on **Debian**, the distribution Ubuntu itself is built on. Guides for Debian 13
apply to LeiOS; guides for Ubuntu often do, but Ubuntu-specific packages and PPAs don't belong on
LeiOS.

### How is LeiOS different from Debian?

Plain Debian is a toolkit: after installing it, you choose and configure a lot yourself. LeiOS
makes those choices for you: the KDE Plasma desktop with its own look, firmware, everyday apps,
Firefox straight from Mozilla, Discover with Flatpak, compressed memory, and its own package
repository with continuous LeiOS releases.

### Is LeiOS a rolling release?

Partly. The Debian base is stable: it gets security and bug fixes, not new major versions. The LeiOS
layer on top rolls: new LeiOS releases arrive continuously through the normal updates. See
[Release Channels](/docs/usage/release-channels).

### Who makes LeiOS?

LeiOS is an independent open-source project, initiated by LeiCraft_MC and developed with its
community. See [Contributing](/docs/community/contributing).

## Installing

### Can I try LeiOS without installing it?

Yes. Start your computer from the LeiOS USB stick and you get a full live system. Nothing on your
computer changes until you run the installer. See
[Booting and Secure Boot](/docs/getting-started/booting-and-secure-boot).

### Will my computer run LeiOS?

Most 64-bit PCs and laptops from the last decade do. You need at least 1 GB of RAM and 15 GB of
disk space; 4 GB of RAM and an SSD are recommended. See
[System Requirements](/docs/getting-started/system-requirements).

### Can I keep Windows?

Yes, see [Dual Boot with Windows](/docs/getting-started/dual-boot).

### Do I have to turn off Secure Boot?

Usually not. LeiOS boots with Secure Boot turned on. Only computers that trust nothing but Windows
need a firmware setting changed. See
[Secure Boot](/docs/getting-started/booting-and-secure-boot#secure-boot).

### Does LeiOS run on a Mac, a Raspberry Pi or a 32-bit PC?

No. LeiOS images are made for 64-bit x86 PCs.

## Using LeiOS

### How do I install apps?

With **Discover**, the built-in app store. Search, click Install, done. See
[Installing Apps](/docs/usage/installing-apps).

### Can I use Microsoft Office?

The desktop version of Microsoft Office doesn't run on Linux. **LibreOffice** is installed and opens
and saves Word, Excel and PowerPoint files, and Microsoft 365 works in the browser.

### Can I play games?

Many games, yes. Install **Steam** from Discover (Flathub): with Proton, it runs a large part of the
Windows game library. Check your games on [ProtonDB](https://www.protondb.com){target="_blank"}.
Some online games with anti-cheat that blocks Linux don't run.

### Do I need an antivirus?

Windows malware can't run on LeiOS, and your software comes from signed, trusted sources. Install
updates regularly, install software through Discover, and don't run commands or scripts you don't
understand.

### Can I install `.deb` files and Snap packages?

`.deb` files from trusted vendors, yes: they install like on Debian 13. Snap isn't set up; LeiOS
uses Flatpak instead, which has almost every app that exists as a Snap. See
[Installing Apps](/docs/usage/installing-apps#apps-from-websites).

### Can I use a different desktop than KDE Plasma?

LeiOS is designed and tested with KDE Plasma. Other desktops from Debian can be installed, but the
LeiOS look and these docs assume Plasma.

## Updates and privacy

### How do I update LeiOS?

Discover shows a notification when updates are ready; click **Update All**. See
[Updates and Maintenance](/docs/usage/updates-and-maintenance).

### Will updates restart my computer on their own?

No. You decide when to install updates and when to restart.

### Do I have to reinstall for new LeiOS versions?

No. New LeiOS releases arrive through the normal updates.

### Does LeiOS collect data about me?

No. LeiOS has no telemetry, no ads and no account. When your computer downloads updates, the
servers it downloads from see its IP address, like with any download.

## Help

### Where can I get help?

On [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}. See
[Getting Help](/docs/community/getting-help).

### I found a bug. What do I do?

Please report it. See [Reporting Bugs](/docs/community/reporting-bugs).
