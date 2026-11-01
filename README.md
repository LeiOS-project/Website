# LeiOS Website

The website and documentation for [LeiOS](https://www.leios.dev), a Debian-based Linux distribution.
It is a fully static site built from the LeiCraftMC `static-site-with-docs` template.

## Stack

- Nuxt 4 (`app/` srcDir)
- NuxtUI v4 + Tailwind v4 (CSS-first)
- `@nuxt/content` for the Markdown docs
- `nuxt generate` for static output (`nitro.preset: "static"`)
- Biome formatter/linter
- AGPL-3.0

## Setup

```bash
bun install
bun run dev
```

The dev server runs on port **12155**.

## Generate and deploy

```bash
bun run generate   # → .output/public/
```

`.output/public/` is plain HTML, CSS, JS and assets: no server runtime is needed. On the default
branch, GitLab CI (`.gitlab/ci/build.yml`) generates the site and rsyncs `.output/public/` to the
web host via `.gitlab/ci/deploy.sh`. Set the CI variables `DEPLOY_REMOTE_USER`,
`DEPLOY_REMOTE_PASSWORD`, `DEPLOY_REMOTE_HOST` and `DEPLOY_REMOTE_DIR`.

`public/.htaccess` configures Apache (clean URLs, trailing-slash redirects, the 404 page). On
another host, serve `.output/public/` and replicate those rules.

## Scripts

- `bun run dev` — dev server
- `bun run generate` — static generation
- `bun run preview` — preview the generated site
- `bun run typecheck` — TypeScript check
- `bun run check` — Biome check
- `bun run format` — format with Biome
- `bun test` — tests (docs navigation ↔ content ↔ sitemap, code-block icons)

## Docs

Docs live in `content/docs/` as Markdown files with `title`, `description` and `navigation.title`
frontmatter. To add a page:

1. Create the `.md` file under `content/docs/`.
2. Register it in `app/data/docs.ts` (sidebar + prev/next).
3. Add it to `public/static/utils/sitemap.xml`.

`bun test` fails if these three get out of sync, or if an internal link or `#anchor` in the docs
or pages points nowhere.

## Site data

- `app/data/release.ts`: the installer image on `/download` (version, date, URL, size, SHA-256).
  Update it when a new image is published to the
  [live-images package registry](https://git.leicraftmc.de/LeiOS/live/images/-/packages).
- `app/data/screenshots.ts`: screenshots for the landing and features pages; the files are in
  `public/static/screenshots/`.
- `app/data/links.ts`: Discord, blog, git and Hub links used by the pages, header and footer.

## Structure

See the LeiCraftMC style guide:

- [docs/01-project-structure.md](https://git.leicraftmc.de/LeiCraftMC/Style-Guides/-/blob/main/docs/01-project-structure.md)
- [docs/06-frontend-nuxt.md](https://git.leicraftmc.de/LeiCraftMC/Style-Guides/-/blob/main/docs/06-frontend-nuxt.md)

## License

AGPL-3.0
