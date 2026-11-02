---
title: "Package Management"
description: "How APT works on LeiOS: the Debian archive, the LeiOS repository and Mozilla's repository, the everyday commands, and how to restore the LeiOS sources."
navigation:
  title: Package Management
---

# Package Management

Underneath Discover, LeiOS uses **APT**, Debian's package manager, for the system and its programs.
This page is for when you want to know how that works, or use APT in the terminal. For installing
everyday apps, see [Installing Apps](/docs/usage/installing-apps).

## Where packages come from

| Repository | What it provides | Configured in |
| --- | --- | --- |
| **Debian 13 "trixie"** | Almost everything: the kernel, the KDE Plasma desktop, libraries, apps and tools, with Debian's security updates. Includes the `contrib`, `non-free` and `non-free-firmware` areas for firmware and drivers. | `/etc/apt/sources.list` |
| **The LeiOS repository** | LeiOS's own packages: the LeiOS release information, the theme and system packages, and packages published by developers on the [Developer Hub](/docs/developers/developer-hub). | `/etc/apt/sources.list.d/leios.sources` |
| **Mozilla** | Firefox and Firefox Developer Edition, straight from Mozilla. | `/etc/apt/sources.list.d/mozilla.sources` |

Flatpak apps from Flathub and Snap apps from the Snap Store are managed separately, with `flatpak`,
`snap` and Discover. See [Installing Apps](/docs/usage/installing-apps).

## Everyday commands

| Command | What it does |
| --- | --- |
| `sudo apt update` | Refresh the package lists from all repositories. |
| `sudo apt full-upgrade` | Install all available updates. |
| `apt search <keyword>` | Search for packages. |
| `apt show <package>` | Show details about a package. |
| `sudo apt install <package>` | Install a package. |
| `sudo apt install ./file.deb` | Install a downloaded `.deb` file, with its dependencies. |
| `sudo apt remove <package>` | Remove a package but keep its system-wide configuration. |
| `sudo apt purge <package>` | Remove a package and its system-wide configuration. |
| `sudo apt autoremove` | Remove dependencies that are no longer needed. |
| `apt list --installed` | List installed packages. |
| `apt policy <package>` | Show available versions and which repository each comes from. |

APT keeps a log of everything it installed, upgraded and removed in `/var/log/apt/history.log`.

## The LeiOS repository

LeiOS packages have names in the form `<publisher>.<package>`, so they never clash with Debian's
package names. The packages that make up LeiOS itself are published by `leios`, for example:

| Package | What it does |
| --- | --- |
| `leios.system.base-files` | Makes the system identify as LeiOS (`/etc/os-release` and friends). |
| `leios.system.branding-meta-files` | The current LeiOS version and its changelog. Updated with every LeiOS release. |
| `leios.system.performance-tweaks.base` | Memory and swap defaults (zram). See [Customization](/docs/usage/customization#performance). |
| `leios.theme.aio` | The LeiOS look: installs every LeiOS theme package. |

Browse all packages, including those from other publishers, on the
[Developer Hub](https://hub.leios.dev/explore){target="_blank"}. Each package page shows the
command to install it.

The repository is configured in `/etc/apt/sources.list.d/leios.sources`:

```ini [leios.sources]
Types: deb
URIs: https://pkg.repo.leios.dev/leios/
Suites: stable
Components: main
Signed-By: /usr/share/keyrings/leios-public-key.gpg
```

`Suites` is your release channel: `stable` (the default) or `testing`. See
[Release Channels](/docs/usage/release-channels).

### Signing key

APT checks every package from the LeiOS repository against the LeiOS signing key in
`/usr/share/keyrings/leios-public-key.gpg`. The key is also published at
`https://pkg.repo.leios.dev/public-key.gpg`. Its fingerprint is:

```text
B563 AEEC 5578 DBCD D2A2  8CC5 AEB2 2E25 7B66 9B31
```

## Restoring the LeiOS repository

If the LeiOS repository was removed by accident, or the key is missing or damaged, restore both:

```bash
sudo curl -fsSL https://pkg.repo.leios.dev/public-key.gpg \
  -o /usr/share/keyrings/leios-public-key.gpg

sudo tee /etc/apt/sources.list.d/leios.sources > /dev/null <<'EOF'
Types: deb
URIs: https://pkg.repo.leios.dev/leios/
Suites: stable
Components: main
Signed-By: /usr/share/keyrings/leios-public-key.gpg
EOF

sudo apt update
```

Check the key afterwards. The fingerprint must match the one above:

```bash
gpg --show-keys /usr/share/keyrings/leios-public-key.gpg
```

## Architectures

The LeiOS repository serves packages for `amd64` and `arm64`, plus architecture-independent
(`all`) packages. LeiOS installation images are made for `amd64` (64-bit x86 PCs).

## Good practice

- Install from the repositories above and from Flathub. Every extra repository is a chance for
  conflicts.
- **Never** add Ubuntu PPAs, and don't add repositories of other Debian releases (`testing`,
  `unstable`, `sid`). See [Updates and Maintenance](/docs/usage/updates-and-maintenance#habits-that-keep-leios-healthy).
- Don't remove `leios.system.*` packages unless you know what they do: without
  `leios.system.base-files` and `leios.system.branding-meta-files`, your system no longer
  identifies as LeiOS or shows its LeiOS version.
