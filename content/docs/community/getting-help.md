---
title: "Getting Help"
description: "Where to ask questions about LeiOS and what to include so others can help you quickly."
navigation:
  title: Getting Help
---

# Getting Help

::icon-card-grid
---
cards:
  - icon: i-lucide-message-circle
    title: Discord
    description: Ask questions, get support, and chat with other LeiOS users and the developers.
    to: https://discord.gg/8YC5BXjCc5
    target: _blank
    linkLabel: Join the server
  - icon: i-lucide-bug
    title: Report a bug
    description: Find the right issue tracker and write a report that gets the problem fixed.
    to: /docs/community/reporting-bugs
  - icon: i-lucide-git-branch
    title: Issue trackers
    description: Every LeiOS repository on git.leicraftmc.de has its own issue tracker.
    to: https://git.leicraftmc.de/LeiOS
    target: _blank
    linkLabel: Open git.leicraftmc.de
  - icon: i-lucide-github
    title: GitHub
    description: The GitHub mirror of the LeiOS repositories.
    to: https://github.com/LeiOS-project
    target: _blank
    linkLabel: Open GitHub
---
::

## Where to ask

- **Questions and support:** [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} is the
  fastest way to get help from other users and the LeiOS developers.
- **Bugs:** open an issue in the matching repository on
  [git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"}.
  [Reporting Bugs](/docs/community/reporting-bugs) shows which repository to pick and what to
  include.
- **Problems with a package from the Developer Hub:** contact its publisher through the maintainer
  contact on the publisher's page at [hub.leios.dev](https://hub.leios.dev){target="_blank"}.

## Before you ask

Many common problems are already answered here:

- [Troubleshooting](/docs/usage/troubleshooting) for common problems and their fixes,
- the [FAQ](/docs/faq),
- [Updates and Maintenance](/docs/usage/updates-and-maintenance) and
  [Package Management](/docs/usage/package-management) for APT questions.

LeiOS is based on Debian 13 "trixie", so most guides for Debian 13 apply to LeiOS as well.

## What to include

People can help you much faster when you tell them:

- **What you tried to do**, and what happened instead.
- **The exact error message**, copied as text rather than as a screenshot.
- **What you already tried** to fix it.
- **Your LeiOS version and hardware.** Run these commands in Konsole and paste the output:

```bash
cat /etc/os-release
fastfetch
```

For hardware problems, `inxi -Fxz` gives a more detailed report and hides serial numbers and network
addresses.

::warning
Never post passwords, API keys or session tokens, not even in a private message.
::

::caution
Please don't report security vulnerabilities in public. Contact the maintainers privately on
[Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} instead.
::
