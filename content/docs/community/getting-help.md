---
title: "Getting Help"
description: "Where to ask questions about LeiOS and how to report bugs."
navigation:
  title: Getting Help
---

# Getting Help

::icon-card-grid
---
cards:
  - icon: i-lucide-message-circle
    title: Discord
    description: Ask questions, get support, and chat with other LeiOS users.
    to: https://discord.gg/8YC5BXjCc5
    target: _blank
    linkLabel: Join the server
  - icon: i-lucide-bug
    title: Issue tracker
    description: Report bugs and request features in the LeiOS repositories.
    to: https://git.leicraftmc.de/LeiOS
    target: _blank
    linkLabel: Open git.leicraftmc.de
  - icon: i-lucide-newspaper
    title: Blog
    description: Release announcements, news, and development updates.
    to: https://blog.leicraftmc.de/tag/leios/
    target: _blank
    linkLabel: Read the blog
  - icon: i-lucide-github
    title: GitHub
    description: The GitHub mirror of the LeiOS projects.
    to: https://github.com/LeiOS-project
    target: _blank
    linkLabel: Open GitHub
---
::

## Asking good questions

Before you ask, check whether these docs or Debian's documentation already cover your problem.
LeiOS is based on Debian 13 "trixie", so most Debian guides apply to LeiOS as well.

When you ask for help, include:

- **What you tried to do**, and what happened instead.
- **The exact error message**, copied as text rather than as a screenshot.
- **Your system details.** Run these commands and paste the output:

```bash
cat /etc/os-release
fastfetch
```

## Reporting bugs

Report bugs in the repository of the affected part of LeiOS on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"}:

| The problem is with… | Report it in |
| --- | --- |
| The installer, the live system, or what is installed by default | [live-images](https://git.leicraftmc.de/LeiOS/live-images){target="_blank"} |
| The Developer Hub | [Hub-Website](https://git.leicraftmc.de/LeiOS/Hub-Website){target="_blank"} |
| Package uploads, the repository or the API | [repo/api-server](https://git.leicraftmc.de/LeiOS/repo/api-server){target="_blank"} |
| This website or these docs | [website](https://git.leicraftmc.de/LeiOS/website){target="_blank"} |

Not sure where it belongs? Ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.

If the bug is in a package that comes from Debian rather than from LeiOS, check whether it also
happens on plain Debian. If it does, report it to Debian with `reportbug`, which is installed on
LeiOS.

::caution
Please don't report security vulnerabilities in a public issue. Contact the maintainers privately on
Discord instead.
::
