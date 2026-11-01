---
title: "Installing Apps"
description: "Install apps on LeiOS with Discover, the built-in app store: Flathub and Debian as sources, why Flatpak apps are recommended, and how to use the terminal instead."
navigation:
  title: Installing Apps
---

# Installing Apps

On LeiOS you don't download installers from websites. Instead, apps come from **software
sources**: curated, signed collections of apps that LeiOS checks and updates for you. You browse
them in **Discover**, the built-in app store.

## The short version

1. Open **Discover** from the Application Launcher.
2. Search for the app, for example *Spotify*.
3. Click **Install**.

The app appears in the Application Launcher and gets updates together with the rest of your system.
To remove it, open it in Discover and click **Remove**.

## Where apps come from

LeiOS has two main sources of software:

| Source | What it has | Updated |
| --- | --- | --- |
| **Flathub** | Thousands of desktop apps: Spotify, Discord, Steam, VS Code, OBS, Zoom, GIMP, Krita, Thunderbird and many more. Apps run as **Flatpaks**. | Directly by the app makers or Flathub's maintainers, usually soon after a new version is out. |
| **Debian and LeiOS** | The operating system itself, the desktop, and tens of thousands of programs, libraries and tools. Installed as **.deb packages** with APT. | Tested versions from Debian 13, with security fixes. LeiOS's own packages come from the [LeiOS repository](/docs/usage/package-management). |

### Setting up Flathub

Discover can show Flathub apps out of the box, but Flathub itself has to be turned on once. Open
**Konsole** and run:

```bash
sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Close and reopen Discover. You only do this once.

## Why we recommend Flathub for apps

For **desktop apps** such as your browser extras, chat, music, games and creative tools, choose
the Flathub version when Discover offers more than one. Here's why:

- **Newer versions.** Debian keeps app versions stable for the lifetime of a release and only adds
  security fixes. Flathub apps get new features as soon as their makers release them.
- **More apps.** Many popular apps, such as Spotify, Discord, Steam, Zoom and Slack, are only on
  Flathub, not in Debian.
- **Safer.** Flatpak apps run in a **sandbox**: by default they can only see what they need. They
  can't change your system, and removing an app removes it completely.
- **Nothing can break your system.** Flatpak apps bring their own libraries, so installing or
  updating them never touches the core of LeiOS.

Use **Debian packages** for system tools, drivers, command-line programs and development tools,
and for anything that has to integrate deeply with the system.

::tip
If an app is available from several sources, Discover lets you pick the source on the app's page.
Flatpak apps are marked with **Flathub** as their source.
::

## Flatpak permissions

Sandboxed apps ask for access to things such as your files or your camera through the usual
dialogs, for example when you open a file. Some apps declare broader permissions up front, and
Discover shows them on the app's page under **Permissions**.

To change an app's permissions afterwards, install **Flatseal** from Discover. It lists every
Flatpak app with switches for files, devices, network and more. (If you prefer a page in System
Settings, install the `kde-config-flatpak` package instead.)

## Installing apps from the terminal

Everything Discover does also works in the terminal.

### Flatpak

```bash
flatpak search spotify                       # find an app
flatpak install flathub com.spotify.Client   # install it
flatpak list --app                           # list installed apps
flatpak update                               # update all Flatpak apps
flatpak uninstall com.spotify.Client         # remove an app
flatpak uninstall --unused                   # remove runtimes nothing uses anymore
```

The app IDs, like `com.spotify.Client`, are shown on [flathub.org](https://flathub.org){target="_blank"}.

### APT

```bash
apt search vlc               # find a package
sudo apt install vlc         # install it
sudo apt remove vlc          # remove it
sudo apt autoremove          # remove what nothing needs anymore
```

See [Package Management](/docs/usage/package-management) for more about APT and the LeiOS
repository.

## Apps from websites

Some vendors offer `.deb` files or their own APT repositories for Debian, for example Google Chrome
or Visual Studio Code. They work on LeiOS, because LeiOS is Debian 13 underneath. Install a
downloaded `.deb` by double-clicking it, or with:

```bash
sudo apt install ./package-name.deb
```

::warning
Only install `.deb` files and add repositories from vendors you trust: they run with full system
rights. Don't use packages or PPAs made for **Ubuntu**, and don't add repositories of other Debian
versions (such as *testing* or *unstable*). Mixing them in can break your system in ways that are
hard to repair. When in doubt, use the Flathub version.
::

## Windows programs

`.exe` programs made for Windows don't run on LeiOS directly. Look for a Linux version or an
alternative first; the [app table](/switch-from-windows#apps) has suggestions. For some Windows
programs and older games, **Bottles** (from Flathub) can run them with Wine. Steam runs many
Windows games with Proton; turn on Steam Play in Steam's settings.

## Snap packages

LeiOS uses Flatpak and doesn't set up Snap. Almost every app that is available as a Snap is also on
Flathub. If you need a Snap-only app, you can install `snapd` from Debian.
