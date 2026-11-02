---
title: "Release Channels"
description: "How LeiOS releases work: the stable and testing channels, version numbers, where to read the changelog, and how to switch channels."
navigation:
  title: Release Channels
---

# Release Channels

LeiOS is built in two layers:

- **The base** is Debian 13 "trixie": the kernel, the desktop and most programs. It gets Debian's
  security and bug fixes.
- **LeiOS on top** (the LeiOS look, system tuning, LeiOS packages and packages from developers on
  the [Developer Hub](/docs/developers/developer-hub)) is updated continuously, in **LeiOS
  releases**.

You don't reinstall to get a new LeiOS release. It arrives through the normal updates on the
**release channel** your system follows.

## The two channels

| Channel | What you get | For |
| --- | --- | --- |
| **`stable`** (default) | Tested LeiOS releases. Packages only reach stable after they were tested and approved. | Everyone. |
| **`testing`** | New LeiOS package versions as soon as developers publish them, before they are approved for stable. | Testers and developers who want the newest packages and help find bugs. |

New installations follow **stable**.

## How a package reaches you

1. **Published.** A developer uploads a new version of a package on the
   [Developer Hub](/docs/developers/publishing-packages). It is available in **testing** within
   minutes.
2. **Tested and approved.** When the version has proved itself in testing, the developer requests
   promotion to stable, and a LeiOS admin reviews the request.
3. **Released.** Approved versions are bundled into the next **LeiOS release**, which is published
   to **stable**.

## Version numbers

Stable releases are numbered by date, `YYYY.MM.NNN`: the year, the month and a running number
within that month. `2026.08.006` is the sixth release of August 2026. Testing doesn't have release
numbers; its version is the date and time of the last change, such as `20261101120000`.

See your current version in *System Settings → About this System*, or with:

```bash
grep PRETTY_NAME /etc/os-release
```

which prints, for example, `PRETTY_NAME="LeiOS 2026.08.006 (stable)"`.

## What's new?

Every LeiOS release lists what changed: which packages were added or updated. Read the changelog of
all releases on the [Developer Hub's release page](https://hub.leios.dev/releases){target="_blank"},
or the one of your installed release with:

```bash
cat /usr/share/leios/system/utils/branding-meta-files/changelog
```

Release announcements are also posted on the [LeiOS blog](https://blog.leicraftmc.de/tag/leios/){target="_blank"}
and on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.

## Switching channels

The channel is the `Suites` line in `/etc/apt/sources.list.d/leios.sources`.

### Switch to testing

```bash
sudo sed -i 's/^Suites: stable$/Suites: testing/' /etc/apt/sources.list.d/leios.sources
sudo apt update
sudo apt full-upgrade
```

::caution
Testing gets packages before anyone has approved them. Things can break. Use it on a computer where
that's acceptable, and please [report what you find](/docs/community/reporting-bugs).
::

### Switch back to stable

```bash
sudo sed -i 's/^Suites: testing$/Suites: stable/' /etc/apt/sources.list.d/leios.sources
sudo apt update
sudo apt full-upgrade
```

Switching from testing to stable doesn't downgrade packages that are already installed. You keep
the newer testing versions until stable catches up, and then follow stable again.
