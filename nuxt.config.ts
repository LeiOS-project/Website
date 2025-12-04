// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots'
	],

	ssr: true,

	css: [
		'~/assets/css/main.css',
	],

	// @ts-ignore - Site config für Sitemap und SEO
	site: {
		url: 'https://leios.dev',
		name: 'LeiOS',
	},

	app: {
		head: {
			title: 'LeiOS - Debian-based OS for Developers',
			htmlAttrs: {
				lang: 'en',
				class: 'dark'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'LeiOS is a Debian-based operating system focused on stability, great performance, and an exceptional out-of-box experience.' },
				{ name: 'theme-color', content: '#0ea5e9' },
				// Open Graph
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: 'LeiOS' },
				{ property: 'og:locale', content: 'en_US' },
				// Twitter Card
				{ name: 'twitter:card', content: 'summary_large_image' },
				// Additional SEO
				{ name: 'author', content: 'LeiOS Project' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'keywords', content: 'LeiOS, Linux, Debian, Operating System, Developer OS, Open Source, Linux Distribution' }
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
				{ rel: 'canonical', href: 'https://leios.dev' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		}
	},

	// Sitemap Konfiguration
	sitemap: {
		strictNuxtContentPaths: true,
		xslColumns: [
			{ label: 'URL', width: '50%' },
			{ label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
			{ label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
			{ label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' }
		]
	},

	// Robots.txt Konfiguration
	robots: {
		sitemap: '/sitemap.xml'
	},

	nitro: {
		preset: 'bun',
		prerender: {
			crawlLinks: true,
			routes: ['/']
		}
	},

	vite: {
		server: {
			allowedHosts: [
				"leios-website-test.tun.is-on.net"
			]

		}
	}
});