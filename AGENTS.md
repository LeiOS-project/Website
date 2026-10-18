# AGENTS.md — operating manual for AI coding agents

You are working in the LeiOS website: a LeiCraftMC static site with docs. Follow the LeiCraftMC
Style Guides: https://git.leicraftmc.de/LeiCraftMC/Style-Guides.

## Must read

- [docs/00-overview.md](https://git.leicraftmc.de/LeiCraftMC/Style-Guides/-/blob/main/docs/00-overview.md)
- [docs/06-frontend-nuxt.md](https://git.leicraftmc.de/LeiCraftMC/Style-Guides/-/blob/main/docs/06-frontend-nuxt.md)

## Non-negotiable

- Nuxt 4 `app/` srcDir.
- Tailwind v4 CSS-first; no `tailwind.config.js`. Dark-only (no toggle).
- `nitro: { preset: "static" }`. The site must work from `.output/public/` on a plain file host:
  no server routes, no server middleware, no runtime API calls.
- Icons are bundled at build time (`icon.provider: "none"`). An icon name built at runtime must be
  listed in `icon.clientBundle.icons`.
- No `useAPI` / `api-client/` / `auth.global.ts` / `AbstractStore` — this shape has no backend.
- Use the `usePageSeo` composable for per-page SEO (+ JSON-LD), not inlined `useSeoMeta`.
- `@tailwindcss/typography` for prose content; static data in `app/data/`.
- Lucide icons only (`i-lucide-*`).
- Keep the LeiOS look: `sky` primary, `slate` neutral, `rgb(2 6 23)` background, the existing
  landing page and the column footer.
- Format with Biome before finishing.
- Conventional Commits.

## Docs

- Add new docs as `.md` files in `content/docs/`.
- Update `app/data/docs.ts` when adding or removing docs pages (sidebar + prev/next), and
  `public/static/utils/sitemap.xml`. `tests/docs.test.ts` fails if they drift apart.
- Label code blocks with a file name or extension from `app/data/code-icons.ts`, or a plain label
  without a dot (`[Docker]`); `tests/code-icons.test.ts` fails otherwise.
- Docs describe LeiOS as it actually is. Check facts against the LeiOS repositories
  (`live-images`, `repo/api-server`, `Hub-Website`) instead of guessing.
