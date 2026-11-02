// Static site + docs (nuxt generate). Nuxt 4 (app/ srcDir is the default).
export default defineNuxtConfig({
	compatibilityDate: "2026-09-01",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/content"],

	app: {
		head: {
			htmlAttrs: {
				lang: "en-US",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "author", content: "LeiOS Project" },
				{ name: "robots", content: "index, follow, max-image-preview:large" },
				{ name: "theme-color", content: "#0ea5e9" },
				{
					name: "keywords",
					content:
						"LeiOS, Linux, Debian, Operating System, Developer OS, Open Source, Linux Distribution",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "LeiOS" },
				{ property: "og:locale", content: "en_US" },
				{ name: "twitter:card", content: "summary_large_image" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	colorMode: {
		preference: "dark",
		fallback: "dark",
		classSuffix: "",
	},

	ssr: true,

	css: ["~/assets/css/main.css"],

	runtimeConfig: {
		public: {
			// Public site origin; `usePageSeo` resolves canonical and og:url against it.
			appUrl: "https://www.leios.dev",
		},
	},

	// Bundle every icon at build time; "none" never fetches from the Iconify API at runtime.
	// The scan also covers `.ts` files (e.g. `app/data/`), which the default patterns skip.
	icon: {
		provider: "none",
		clientBundle: {
			scan: {
				globInclude: ["app/**/*.{vue,ts}", "content/**/*.md"],
			},
		},
	},

	// Nuxt Content's default languages plus the ones the docs use beyond them (APT sources, PowerShell).
	content: {
		build: {
			markdown: {
				highlight: {
					langs: [
						"js",
						"jsx",
						"json",
						"ts",
						"tsx",
						"vue",
						"css",
						"html",
						"bash",
						"md",
						"mdc",
						"yaml",
						"ini",
						"powershell",
					],
				},
			},
		},
	},

	routeRules: {
		"/__nuxt_content/**": { prerender: false },
	},

	nitro: {
		preset: "static",
		prerender: {
			crawlLinks: true,
			routes: ["/"],
			ignore: ["/__nuxt_content/**"],
			// A page that fails to render fails the build, e.g. /download when GitLab is unreachable.
			failOnError: true,
		},
	},

	vite: {
		server: {
			allowedHosts: ["leios-website-test.tun.is-on.net"],
		},
	},

	telemetry: false,
});
