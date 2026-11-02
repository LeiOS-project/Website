---
title: "Contributing"
description: "Ways to help LeiOS with or without code, the repositories, the conventions they follow, and how to work on these docs."
navigation:
  title: Contributing
---

# Contributing

LeiOS is open source, and contributions of every size are welcome. You don't need to write code to
help.

## Ways to contribute

| You can… | How |
| --- | --- |
| **Test what's coming next** | Switch a spare machine or a virtual machine to the `testing` channel and report what breaks. See [Release Channels](/docs/usage/release-channels). |
| **Report bugs** | A clear report with logs is a real contribution. See [Reporting Bugs](/docs/community/reporting-bugs). |
| **Improve these docs** | Fix a mistake, clarify a step, or add what you were missing. Every page has an **Edit this page** link. |
| **Publish packages** | Bring your software to LeiOS users through the [Developer Hub](/docs/developers/developer-hub). |
| **Help others** | Answer questions on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}. |
| **Keep the Hub clean** | Use the **Report** button on the Hub for malware, spam or impersonation. |
| **Write code** | Fix bugs or build features in the repositories below. |

## Repositories

All LeiOS projects are developed on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"} and mirrored to
[GitHub](https://github.com/LeiOS-project){target="_blank"}.

| Repository | What it is |
| --- | --- |
| [LeiOS/live/images](https://git.leicraftmc.de/LeiOS/live/images){target="_blank"} | The live image and installer: live-build configuration, Calamares setup and the `leios-live-build` tool. See [Building the ISO](/docs/developers/building-the-iso). |
| [LeiOS/live/iso-inspect-tool](https://git.leicraftmc.de/LeiOS/live/iso-inspect-tool){target="_blank"} | A tool for inspecting live ISOs. |
| [LeiOS/API-Server](https://git.leicraftmc.de/LeiOS/API-Server){target="_blank"} | The Repository API at api.leios.dev: accounts, publishers, package uploads and checks, and the APT repository. |
| [LeiOS/Hub-Website](https://git.leicraftmc.de/LeiOS/Hub-Website){target="_blank"} | The Developer Hub at hub.leios.dev. |
| [LeiOS/Website](https://git.leicraftmc.de/LeiOS/Website){target="_blank"} | This website and its documentation. |
| [LeiOS/System-Packages/Base-Files](https://git.leicraftmc.de/LeiOS/System-Packages/Base-Files){target="_blank"} | `leios.system.base-files`: LeiOS branding for `/etc/os-release`, `/etc/issue` and more. |
| [LeiOS/System-Packages/Branding-Meta-Files](https://git.leicraftmc.de/LeiOS/System-Packages/Branding-Meta-Files){target="_blank"} | `leios.system.branding-meta-files`: the LeiOS version and release metadata. |
| [LeiOS/System-Packages/Performance-Tweaks/Base](https://git.leicraftmc.de/LeiOS/System-Packages/Performance-Tweaks/Base){target="_blank"} | `leios.system.performance-tweaks.base`: performance defaults such as zram swap. |
| [LeiOS/System-Packages/Performance-Tweaks/LowEnd](https://git.leicraftmc.de/LeiOS/System-Packages/Performance-Tweaks/LowEnd){target="_blank"} | `leios.system.performance-tweaks.lowend`: settings for computers with little memory. |
| [LeiOS/System-Packages/Locales/EN-DE](https://git.leicraftmc.de/LeiOS/System-Packages/Locales/EN-DE){target="_blank"} | `leios.system.locales.en-de`: English with German formats (`en_DE.UTF-8`). |
| [LeiOS/Theme-Packages/AIO](https://git.leicraftmc.de/LeiOS/Theme-Packages/AIO){target="_blank"} | `leios.theme.aio`: pulls in all LeiOS theme packages. |
| [LeiOS/Theme-Packages/Fonts](https://git.leicraftmc.de/LeiOS/Theme-Packages/Fonts){target="_blank"} | The default fonts. |
| [LeiOS/Theme-Packages/Wallpapers](https://git.leicraftmc.de/LeiOS/Theme-Packages/Wallpapers){target="_blank"} | The wallpapers. |
| [LeiOS/Theme-Packages/Grub-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Grub-Theme){target="_blank"} | The boot menu theme. |
| [LeiOS/Theme-Packages/Plymouth-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Plymouth-Theme){target="_blank"} | The boot splash. |
| [LeiOS/Theme-Packages/SDDM-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/SDDM-Theme){target="_blank"} | The login screen. |
| [LeiOS/Theme-Packages/Fastfetch-Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/Fastfetch-Theme){target="_blank"} | The fastfetch logo and layout. |
| [LeiOS/Theme-Packages/KDE-Plasma/Theme](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Theme){target="_blank"} | The Plasma desktop theme. |
| [LeiOS/Theme-Packages/KDE-Plasma/Konsole](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Konsole){target="_blank"} | The Konsole profile. |
| [LeiOS/Theme-Packages/KDE-Plasma/Dolphin](https://git.leicraftmc.de/LeiOS/Theme-Packages/KDE-Plasma/Dolphin){target="_blank"} | The Dolphin defaults. |
| [LeiOS/Theme-Packages/Plasmoids/DigitalClock](https://git.leicraftmc.de/LeiOS/Theme-Packages/Plasmoids/DigitalClock){target="_blank"} | The digital clock widget. |

## Conventions

LeiOS code follows the
[LeiCraftMC Style Guide](https://git.leicraftmc.de/LeiCraftMC/Style-Guides){target="_blank"}:

- **Bun** as runtime, package manager and test runner.
- **TypeScript** everywhere, formatted and linted with **Biome**.
- **Nuxt 4**, **Nuxt UI** and **Tailwind CSS** for the websites.
- **Conventional Commits** for commit messages: `feat:`, `fix:`, `docs:`, `chore:`, and so on.
- **AGPL-3.0** as the license.

The system and theme packages are Debian source packages built with debhelper; see
[Building a Debian Package](/docs/developers/packaging-guide) for the basics.

Read the style guide before your first larger contribution. Small fixes are welcome any time.

## Merge requests

Changes go in through merge requests on git.leicraftmc.de:

::steps{level="3"}

### Get an account

Sign up on [git.leicraftmc.de](https://git.leicraftmc.de){target="_blank"}.

### Fork and branch

Fork the repository, clone your fork, and create a branch for your change.

### Make your change

Keep it focused on one thing. Run the repository's checks before you commit; most projects use
`bun run check`, `bun run typecheck` and `bun test`.

### Commit and open a merge request

Write the commit message as a Conventional Commit, for example
`docs: explain the maintainer field`. Push your branch and open a merge request against `main`.
Describe what you changed and why.

::

For a small fix to a docs page, the **Edit this page** link is enough: it opens the page in
git.leicraftmc.de's editor, where you can propose the change as a merge request.

Not sure whether a change is wanted? Ask on [Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}
before you start.

## Working on these docs

The docs are part of the [LeiOS/Website](https://git.leicraftmc.de/LeiOS/Website){target="_blank"}
repository. You need [Bun](https://bun.sh){target="_blank"}; install it with
`curl -fsSL https://bun.sh/install | bash` if you don't have it yet.

```bash
git clone https://git.leicraftmc.de/LeiOS/Website.git
cd Website
bun install
bun run dev
```

The dev server runs on `http://localhost:12155` and reloads when you save a page.

- **Pages** are Markdown files in `content/docs/`. Each needs `title`, `description` and
  `navigation.title` in its frontmatter.
- **The sidebar** and the previous/next links come from `app/data/docs.ts`. Add new pages there,
  and to `public/static/utils/sitemap.xml`. `tests/docs.test.ts` fails if the three don't match.
- **Code blocks** can carry a label: a file name or extension listed in `app/data/code-icons.ts`, or
  a plain label without a dot, like `[debian/control]`. `tests/code-icons.test.ts` checks this.
- **Facts** must match LeiOS as it is. Check them against the LeiOS repositories instead of guessing.

Before you open a merge request, run the checks:

```bash
bun run check
bun run typecheck
bun test
bun run generate
```
