/**
 * Static docs navigation — consumed by the docs sidebar and prev/next links.
 * Follows the style-guide "static data in app/data/" idiom.
 */

export interface DocsPage {
	/** Absolute page path, also the route. */
	to: string;
	title: string;
	description: string;
	icon: string;
}

export interface DocsSection {
	label: string;
	pages: DocsPage[];
}

export const docsSections: DocsSection[] = [
	{
		label: "Introduction",
		pages: [
			{
				to: "/docs",
				title: "Overview",
				description: "What LeiOS is, what makes it different, and where to go next.",
				icon: "i-lucide-book-open",
			},
			{
				to: "/docs/about",
				title: "About LeiOS",
				description: "The Debian base, desktop, installer, and the projects that make up LeiOS.",
				icon: "i-lucide-info",
			},
		],
	},
	{
		label: "Getting Started",
		pages: [
			{
				to: "/docs/getting-started/system-requirements",
				title: "System Requirements",
				description: "The hardware and firmware LeiOS needs to install and run.",
				icon: "i-lucide-cpu",
			},
			{
				to: "/docs/getting-started/installation",
				title: "Installation",
				description: "Write the ISO to a USB drive, boot the live system, and install with Calamares.",
				icon: "i-lucide-hard-drive-download",
			},
			{
				to: "/docs/getting-started/first-steps",
				title: "First Steps",
				description: "Update your system, install software, and find your way around.",
				icon: "i-lucide-rocket",
			},
		],
	},
	{
		label: "Using LeiOS",
		pages: [
			{
				to: "/docs/usage/package-management",
				title: "Package Management",
				description: "How APT, the Debian archive, and the LeiOS repository work together.",
				icon: "i-lucide-package",
			},
			{
				to: "/docs/usage/release-channels",
				title: "Release Channels",
				description: "The testing and stable suites, and how LeiOS releases are made.",
				icon: "i-lucide-git-branch",
			},
		],
	},
	{
		label: "Developers",
		pages: [
			{
				to: "/docs/developers/developer-hub",
				title: "Developer Hub",
				description: "Publishers, packages, roles, and the API behind hub.leios.dev.",
				icon: "i-lucide-layout-dashboard",
			},
			{
				to: "/docs/developers/publishing-packages",
				title: "Publishing Packages",
				description: "Build a .deb that passes the checks and ship it to testing and stable.",
				icon: "i-lucide-upload",
			},
			{
				to: "/docs/developers/building-the-iso",
				title: "Building the ISO",
				description: "Build the LeiOS live image yourself with Debian live-build.",
				icon: "i-lucide-disc-3",
			},
		],
	},
	{
		label: "Community",
		pages: [
			{
				to: "/docs/community/getting-help",
				title: "Getting Help",
				description: "Where to ask questions and how to report bugs.",
				icon: "i-lucide-life-buoy",
			},
			{
				to: "/docs/community/contributing",
				title: "Contributing",
				description: "The LeiOS repositories, conventions, and how to improve these docs.",
				icon: "i-lucide-git-pull-request",
			},
		],
	},
];

/**
 * Base URL for "Edit this page" links, ending in the content folder, e.g.
 * "https://github.com/<org>/<repo>/edit/main/content" or
 * "https://git.leicraftmc.de/<group>/<repo>/-/edit/main/content". `null` hides the link.
 */
export const docsEditBaseUrl: string | null =
	"https://git.leicraftmc.de/LeiOS/website/-/edit/main/content";

/** Flat list of pages in reading order, for prev/next navigation. */
export const docsPagesFlat: DocsPage[] = docsSections.flatMap((section) => section.pages);

export function getDocsPageByPath(path: string): DocsPage | undefined {
	return docsPagesFlat.find((page) => page.to === path);
}
