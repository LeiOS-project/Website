---
title: "Contributing"
description: "The LeiOS repositories, the conventions they follow, and how to improve these docs."
navigation:
  title: Contributing
---

# Contributing

LeiOS is open source, and contributions of every size are welcome: bug reports, documentation
fixes, packages, and code.

## Repositories

All LeiOS projects are developed on
[git.leicraftmc.de/LeiOS](https://git.leicraftmc.de/LeiOS){target="_blank"} and mirrored to
[GitHub](https://github.com/LeiOS-project){target="_blank"}.

| Repository | What it is |
| --- | --- |
| [live-images](https://git.leicraftmc.de/LeiOS/live-images){target="_blank"} | The live-build configuration for the LeiOS ISO and installer. |
| [repo/api-server](https://git.leicraftmc.de/LeiOS/repo/api-server){target="_blank"} | The Repository API: package uploads, checks, and publishing. |
| [Hub-Website](https://git.leicraftmc.de/LeiOS/Hub-Website){target="_blank"} | The Developer Hub at hub.leios.dev. |
| [website](https://git.leicraftmc.de/LeiOS/website){target="_blank"} | This website and its documentation. |

## Conventions

LeiOS follows the [LeiCraftMC Style Guides](https://git.leicraftmc.de/LeiCraftMC/Style-Guides){target="_blank"}:

- **Bun** as runtime, package manager and test runner.
- **TypeScript** everywhere, formatted and linted with **Biome**.
- **Nuxt 4**, **Nuxt UI** and **Tailwind CSS** for the web projects.
- **Conventional Commits** for commit messages: `feat:`, `fix:`, `docs:`, `chore:`, and so on.
- **AGPL-3.0** as the license.

Read the style guide before your first larger contribution. Small fixes are welcome any time.

## Improving these docs

Every docs page has an **Edit this page** link at the bottom that opens the page's source on
git.leicraftmc.de. To work on the docs locally:

```bash
git clone https://git.leicraftmc.de/LeiOS/website.git
cd website
bun install
bun run dev
```

The dev server runs on `http://localhost:12155`.

- Pages are Markdown files in `content/docs/`. Each needs `title`, `description` and
  `navigation.title` frontmatter.
- The sidebar and the previous/next links come from `app/data/docs.ts`. Add new pages there, and to
  `public/static/utils/sitemap.xml`.
- Before you open a merge request, run the checks:

```bash
bun run check
bun run typecheck
bun test
bun run generate
```

## Publishing packages

Want to ship software to LeiOS users? See [Publishing Packages](/docs/developers/publishing-packages).
