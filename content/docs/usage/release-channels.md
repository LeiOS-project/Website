---
title: "Release Channels"
description: "The testing and stable suites of the LeiOS repository, and how LeiOS releases are made."
navigation:
  title: Release Channels
---

# Release Channels

The LeiOS repository publishes packages in two suites. Your system follows one of them, set by
the `Suites` line in `/etc/apt/sources.list.d/leios.sources`.

| Suite | What you get |
| --- | --- |
| **`testing`** | New package releases as soon as they are published. Updates arrive faster but have had less review. |
| **`stable`** | Only packages that were reviewed and promoted, frozen into versioned LeiOS releases. |

The current LeiOS images are pre-release builds and follow **`testing`**.

## How a package reaches you

1. **Published.** A developer uploads a new package release on the
   [Developer Hub](/docs/developers/developer-hub). It lands in **`testing`** right away.
2. **Promoted.** When the release has proved itself, the developer requests promotion to stable,
   and a LeiOS admin reviews the request.
3. **Released.** Approved packages are included in the next **LeiOS release**: a snapshot of the
   stable suite that is then published as **`stable`**.

LeiOS releases are versioned by date as `YYYY.MM.NNN`: the year, the month, and a running number
within that month, for example `2026.10.001`.

## Switching channels

To follow the stable channel, change `Suites: testing` to `Suites: stable` in
`/etc/apt/sources.list.d/leios.sources`, then update:

```bash
sudo sed -i 's/^Suites: testing$/Suites: stable/' /etc/apt/sources.list.d/leios.sources
sudo apt update
sudo apt full-upgrade
```

::warning
Only switch to `stable` once a stable LeiOS release has been announced on the
[blog](https://blog.leicraftmc.de/tag/leios/){target="_blank"}. Before that, the suite may not
exist yet and `apt update` fails.
::

Switching from `testing` to `stable` does not downgrade packages that are already installed. You
keep the newer `testing` versions until `stable` catches up.
