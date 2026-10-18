---
title: "First Steps"
description: "Update your new LeiOS system, install software, and find your way around."
navigation:
  title: First Steps
---

# First Steps

You have installed LeiOS. Here are a few things to do first.

## Update your system

The installation image may be older than the latest packages. Open **Konsole** and bring everything
up to date:

```bash
sudo apt update
sudo apt full-upgrade
```

Do this regularly. It updates packages from both the Debian archive and the LeiOS repository. See
[Package Management](/docs/usage/package-management) for how the two fit together.

## Install software

You have two options:

- **Discover**, KDE's software center, for browsing and installing applications with a graphical
  interface.
- **APT** in the terminal, for anything from the Debian archive or the LeiOS repository:

  ```bash
  apt search <keyword>
  sudo apt install <package>
  ```

## Check which version you are running

```bash
cat /etc/os-release
cat /etc/leios_version
```

`fastfetch` is installed by default and shows a summary of your system and hardware:

```bash
fastfetch
```

## Developer tools

Common tools are installed out of the box, including `git`, `build-essential` (GCC, `make` and
friends), `curl` and `wget`. Install anything else, such as language runtimes, editors or
containers, with APT or Discover.

## Next steps

::icon-card-grid
---
cards:
  - icon: i-lucide-package
    title: Package Management
    description: The Debian archive, the LeiOS repository, and useful APT commands.
    to: /docs/usage/package-management
  - icon: i-lucide-git-branch
    title: Release Channels
    description: What testing and stable mean for the packages you receive.
    to: /docs/usage/release-channels
---
::
