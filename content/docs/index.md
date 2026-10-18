---
title: "Documentation"
description: "The LeiOS documentation: install LeiOS, manage packages, publish to the LeiOS repository, and get involved."
navigation:
  title: Overview
---

# Documentation

LeiOS is a Debian-based Linux distribution focused on stability, performance, and a great
out-of-box experience. It is built for developers and designed for everyone.

These docs cover installing and using LeiOS, how its package repository works, and how to
publish your own packages or contribute to the project.

::callout{icon="i-lucide-construction" color="warning"}
LeiOS is under active development. Public ISO downloads are coming soon; release announcements are
posted on the [LeiOS blog](https://blog.leicraftmc.de/tag/leios/){target="_blank"}.
::

## What makes LeiOS different?

- **A stable Debian base.** LeiOS is built on Debian 13 "trixie" and uses Debian's own kernel and
  packages, so you get Debian's reliability and its huge software archive.
- **Ready from the first boot.** The KDE Plasma desktop, hardware firmware, and common developer
  tools are installed out of the box.
- **Its own package repository.** LeiOS ships an additional APT repository for LeiOS-specific
  packages, with a separate testing and stable channel.
- **Open source.** Everything is developed in the open on
  [git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"} and mirrored to
  [GitHub](https://github.com/LeiOS-project){target="_blank"}.

## Where to start

::icon-card-grid
---
cards:
  - icon: i-lucide-hard-drive-download
    title: Install LeiOS
    description: Check the requirements, create a bootable USB drive, and run the installer.
    to: /docs/getting-started/installation
  - icon: i-lucide-package
    title: Manage packages
    description: Learn how APT, the Debian archive, and the LeiOS repository fit together.
    to: /docs/usage/package-management
  - icon: i-lucide-upload
    title: Publish a package
    description: Ship your own .deb packages to LeiOS users through the Developer Hub.
    to: /docs/developers/publishing-packages
  - icon: i-lucide-message-circle
    title: Get help
    description: Ask questions on Discord or report a bug.
    to: /docs/community/getting-help
---
::
