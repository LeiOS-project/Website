---
title: "Package Management"
description: "How APT, the Debian archive, and the LeiOS repository work together on LeiOS."
navigation:
  title: Package Management
---

# Package Management

LeiOS uses **APT**, Debian's package manager. Packages come from two places:

- **The Debian archive** (`deb.debian.org`). This is almost everything: the desktop, the kernel,
  libraries and applications from Debian 13 "trixie".
- **The LeiOS repository** (`repo.leios.dev`). Packages that are specific to LeiOS, or LeiOS builds
  of existing packages.

## Everyday commands

| Command | What it does |
| --- | --- |
| `sudo apt update` | Refresh the package lists from all repositories. |
| `sudo apt full-upgrade` | Install all available updates. |
| `apt search <keyword>` | Search for packages. |
| `apt show <package>` | Show details about a package. |
| `sudo apt install <package>` | Install a package. |
| `sudo apt remove <package>` | Remove a package but keep its configuration. |
| `sudo apt autoremove` | Remove dependencies that are no longer needed. |
| `apt policy <package>` | Show available versions and which repository each one comes from. |

## The LeiOS repository

The repository is configured in `/etc/apt/sources.list.d/leios.sources`:

```ini [leios.sources]
Types: deb
URIs: https://repo.leios.dev/leios
Suites: testing
Components: main
Signed-By: /usr/share/keyrings/leios-archive-keyring.gpg
```

`Suites` selects the release channel, `testing` or `stable`. See
[Release Channels](/docs/usage/release-channels).

### Signing key

APT verifies every package from the LeiOS repository against the LeiOS signing key in
`/usr/share/keyrings/leios-archive-keyring.gpg`. The public key is published at
`https://repo.leios.dev/public-key.gpg`.

### Priority over Debian

LeiOS pins its repository with a higher priority than Debian, in
`/etc/apt/preferences.d/leios.pref`:

```ini [leios.pref]
Package: *
Pin: origin repo.leios.dev
Pin-Priority: 990
```

When the LeiOS repository and Debian both provide a package, APT installs the LeiOS version. To
see which version wins for a package, run `apt policy <package>`.

## Restoring the repository

If you removed the LeiOS repository by accident, or want to add it to an existing Debian 13
system, recreate the key, the source and the pin:

```bash
sudo apt install curl gnupg
curl -fsSL https://repo.leios.dev/public-key.gpg \
  | sudo gpg --dearmor -o /usr/share/keyrings/leios-archive-keyring.gpg

sudo tee /etc/apt/sources.list.d/leios.sources > /dev/null <<'EOF'
Types: deb
URIs: https://repo.leios.dev/leios
Suites: testing
Components: main
Signed-By: /usr/share/keyrings/leios-archive-keyring.gpg
EOF

sudo tee /etc/apt/preferences.d/leios.pref > /dev/null <<'EOF'
Package: *
Pin: origin repo.leios.dev
Pin-Priority: 990
EOF

sudo apt update
```

::caution
Adding the LeiOS repository to a plain Debian system works, but it is not a supported way to get
LeiOS. Because of the pin, LeiOS packages replace Debian's.
::

## Architectures

The LeiOS repository serves packages for `amd64` and `arm64`, plus architecture-independent
(`all`) packages. Installation images are currently `amd64` only.
