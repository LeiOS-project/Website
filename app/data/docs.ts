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
				description: "What LeiOS is and where to start in these docs.",
				icon: "i-lucide-book-open",
			},
			{
				to: "/docs/about",
				title: "About LeiOS",
				description: "What LeiOS is, who it is for, and how it is built and released.",
				icon: "i-lucide-info",
			},
			{
				to: "/docs/faq",
				title: "FAQ",
				description: "Answers to the questions we hear most.",
				icon: "i-lucide-circle-help",
			},
		],
	},
	{
		label: "Getting Started",
		pages: [
			{
				to: "/docs/getting-started/system-requirements",
				title: "System Requirements",
				description: "The hardware you need and what the installer checks.",
				icon: "i-lucide-cpu",
			},
			{
				to: "/docs/getting-started/create-a-bootable-usb",
				title: "Create a Bootable USB",
				description: "Download LeiOS, check it, and write it to a USB stick.",
				icon: "i-lucide-usb",
			},
			{
				to: "/docs/getting-started/booting-and-secure-boot",
				title: "Booting & Secure Boot",
				description: "Start from the USB stick, try the live system, and handle Secure Boot.",
				icon: "i-lucide-shield-check",
			},
			{
				to: "/docs/getting-started/installation",
				title: "Installation",
				description: "Install LeiOS step by step, with optional disk encryption.",
				icon: "i-lucide-hard-drive-download",
			},
			{
				to: "/docs/getting-started/dual-boot",
				title: "Dual Boot with Windows",
				description: "Install LeiOS next to Windows and choose a system at startup.",
				icon: "i-lucide-split",
			},
			{
				to: "/docs/getting-started/first-steps",
				title: "First Steps",
				description: "Updates, Flathub, your apps and your files after installing.",
				icon: "i-lucide-rocket",
			},
		],
	},
	{
		label: "Using LeiOS",
		pages: [
			{
				to: "/docs/usage/desktop",
				title: "The Desktop",
				description: "The panel, the launcher, windows, files and shortcuts.",
				icon: "i-lucide-monitor",
			},
			{
				to: "/docs/usage/installing-apps",
				title: "Installing Apps",
				description: "Discover, Flathub and Debian, and which to use when.",
				icon: "i-lucide-store",
			},
			{
				to: "/docs/usage/updates-and-maintenance",
				title: "Updates & Maintenance",
				description: "Updates, firmware, disk space and backups.",
				icon: "i-lucide-refresh-cw",
			},
			{
				to: "/docs/usage/hardware-and-drivers",
				title: "Hardware & Drivers",
				description: "NVIDIA, Wi-Fi firmware, printers, Bluetooth and your phone.",
				icon: "i-lucide-cpu",
			},
			{
				to: "/docs/usage/customization",
				title: "Customization",
				description: "The LeiOS look, performance tweaks, language and formats.",
				icon: "i-lucide-palette",
			},
			{
				to: "/docs/usage/package-management",
				title: "Package Management",
				description: "APT, the Debian archive and the LeiOS repository.",
				icon: "i-lucide-package",
			},
			{
				to: "/docs/usage/release-channels",
				title: "Release Channels",
				description: "Stable and testing, version numbers and changelogs.",
				icon: "i-lucide-git-branch",
			},
			{
				to: "/docs/usage/troubleshooting",
				title: "Troubleshooting",
				description: "Fixes for boot problems, failed updates, Wi-Fi, sound and more.",
				icon: "i-lucide-wrench",
			},
		],
	},
	{
		label: "Developers",
		pages: [
			{
				to: "/docs/developers/developer-hub",
				title: "Developer Hub",
				description: "Accounts, publishers, packages and roles on hub.leios.dev.",
				icon: "i-lucide-layout-dashboard",
			},
			{
				to: "/docs/developers/packaging-guide",
				title: "Building a Debian Package",
				description: "Build a .deb that the LeiOS repository accepts.",
				icon: "i-lucide-package-plus",
			},
			{
				to: "/docs/developers/publishing-packages",
				title: "Publishing Packages",
				description: "Upload releases, pass the checks, and get promoted to stable.",
				icon: "i-lucide-upload",
			},
			{
				to: "/docs/developers/automating-releases",
				title: "Automating Releases",
				description: "Publish from scripts and CI with the Repository API.",
				icon: "i-lucide-workflow",
			},
			{
				to: "/docs/developers/building-the-iso",
				title: "Building the ISO",
				description: "Build the LeiOS installation image with live-build.",
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
				description: "Where to ask questions and what to include.",
				icon: "i-lucide-life-buoy",
			},
			{
				to: "/docs/community/reporting-bugs",
				title: "Reporting Bugs",
				description: "Where to report a bug and how to write a good report.",
				icon: "i-lucide-bug",
			},
			{
				to: "/docs/community/contributing",
				title: "Contributing",
				description: "Ways to help, the LeiOS repositories and their conventions.",
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
	"https://git.leicraftmc.de/LeiOS/Website/-/edit/main/content";

/** Flat list of pages in reading order, for prev/next navigation. */
export const docsPagesFlat: DocsPage[] = docsSections.flatMap((section) => section.pages);

export function getDocsPageByPath(path: string): DocsPage | undefined {
	return docsPagesFlat.find((page) => page.to === path);
}
