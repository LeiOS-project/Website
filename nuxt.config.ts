// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/ui'],

	ssr: true,

	css: [
		'~/assets/css/main.css',
	],

	app: {
		head: {
			title: 'LeiOS - Debian-based OS for Developers',
			meta: [
				{ name: 'description', content: 'LeiOS is a Debian-based operating system focused on stability, great performance, and an exceptional out-of-box experience.' },
				{ name: 'theme-color', content: '#0ea5e9' }
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
			],
			htmlAttrs: {
				class: 'dark'
			}
		}
	},

	nitro: {
		preset: 'bun',
	},

	vite: {
		server: {
			allowedHosts: [
				"leios-website-test.tun.is-on.net"
			]

		}
	}
});