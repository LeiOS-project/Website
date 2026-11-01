<script setup lang="ts">
import ScreenshotFrame from "~/components/site/ScreenshotFrame.vue";
import SectionHeader from "~/components/site/SectionHeader.vue";
import { screenshots } from "~/data/screenshots";

usePageSeo({
	title: "Features - LeiOS",
	description:
		"A tour of LeiOS: the KDE Plasma desktop with the LeiOS look, preinstalled apps, Discover and Flathub, updates, performance tuning, security and developer tools.",
	ogImage: "https://www.leios.dev/static/og/leios-desktop.jpg",
});

const heroScreenshot = screenshots[0];

interface FeatureSection {
	id: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	points: string[];
	link?: { label: string; to: string };
}

const sections: FeatureSection[] = [
	{
		id: "desktop",
		icon: "i-lucide-monitor",
		eyebrow: "Desktop",
		title: "A desktop that feels like home",
		description:
			"LeiOS uses KDE Plasma 6, one of the most polished and flexible desktops anywhere. A taskbar at the bottom, a start menu, a system tray and a clock: if you know Windows, you know Plasma. LeiOS gives it a consistent look from the boot menu to the login screen.",
		points: [
			"The LeiOS theme: its own panel layout, a dark style and icons based on Aretha Dark, and the Geist font",
			"Matching boot menu, boot splash and login screen, plus the LeiOS wallpapers",
			"Snap windows to the edges, use virtual desktops, search everything from the start menu",
			"Every look is only a default: change themes, panels and fonts in System Settings",
		],
		link: { label: "Get to know the desktop", to: "/docs/usage/desktop" },
	},
	{
		id: "apps",
		icon: "i-lucide-layout-grid",
		eyebrow: "Apps",
		title: "The apps you need, installed or one click away",
		description:
			"LeiOS comes with a full set of everyday apps. Anything else is in Discover, the built-in app store, which installs apps from Flathub and Debian without visiting a single download site.",
		points: [
			"Firefox and Firefox Developer Edition, straight from Mozilla and always current",
			"LibreOffice Writer, Calc and Impress: opens and saves Word, Excel and PowerPoint files",
			"KMail and KOrganizer for email and calendars, Okular for PDFs, Gwenview and GIMP for pictures",
			"Spotify, Discord, Steam, VS Code, OBS, Zoom and thousands more from Flathub",
		],
		link: { label: "How to install apps", to: "/docs/usage/installing-apps" },
	},
	{
		id: "updates",
		icon: "i-lucide-refresh-cw",
		eyebrow: "Updates",
		title: "Updates on your schedule",
		description:
			"Discover tells you when updates are ready and installs them when you click Update. Nothing restarts your computer behind your back. Debian's security team keeps the base safe, and LeiOS improvements roll in as tested releases.",
		points: [
			"One place for system, app and Flatpak updates, with a notification in the system tray",
			"Firmware updates for supported devices, also through Discover",
			"LeiOS releases are tested in the testing channel before they reach stable",
			"No reinstalling every few years: LeiOS keeps updating in place",
		],
		link: { label: "Updates and maintenance", to: "/docs/usage/updates-and-maintenance" },
	},
	{
		id: "performance",
		icon: "i-lucide-gauge",
		eyebrow: "Performance",
		title: "Fast, even with little memory",
		description:
			"LeiOS is tuned to stay responsive when memory gets tight. That makes a real difference on older laptops with 4 GB of RAM.",
		points: [
			"Compressed swap in memory (zram): up to half your RAM, at most 8 GiB, before anything goes to disk",
			"Memory settings tuned for zram out of the box",
			"An optional low-memory package with earlyoom and extra protection against freezes",
			"Power profiles for battery life or speed, one click away in the battery menu",
		],
		link: { label: "Performance tweaks", to: "/docs/usage/customization#performance" },
	},
	{
		id: "security",
		icon: "i-lucide-shield-check",
		eyebrow: "Security & privacy",
		title: "Secure without the hassle",
		description:
			"LeiOS starts on computers with Secure Boot turned on, can encrypt your whole disk, and gets its software from signed repositories instead of random downloads.",
		points: [
			"Secure Boot with the same signed boot chain as Debian (shim, GRUB and the kernel)",
			"Optional full-disk encryption, a single checkbox in the installer",
			"Security updates from the Debian security team",
			"No ads, no account, no usage data collected by LeiOS",
		],
		link: {
			label: "Secure Boot explained",
			to: "/docs/getting-started/booting-and-secure-boot#secure-boot",
		},
	},
	{
		id: "hardware",
		icon: "i-lucide-cpu",
		eyebrow: "Hardware",
		title: "Hardware support built in",
		description:
			"LeiOS includes the firmware that most computers need, so Wi-Fi, graphics and sound work right after installing. You can test everything in the live system before you install.",
		points: [
			"Firmware for Intel, AMD, Realtek and Atheros chips, plus CPU microcode updates",
			"Debian's long-term-support Linux kernel, with headers ready for extra drivers",
			"Printers, Bluetooth and phones (KDE Connect) set up from System Settings",
			"NVIDIA graphics with Debian's driver, installed with one command",
		],
		link: { label: "Hardware and drivers", to: "/docs/usage/hardware-and-drivers" },
	},
	{
		id: "developers",
		icon: "i-lucide-code-2",
		eyebrow: "Developers",
		title: "Ready for development",
		description:
			"Under the friendly surface is a full Debian system. The tools developers reach for first are already installed, and LeiOS has its own package repository where you can publish software for every LeiOS user.",
		points: [
			"Git, GCC, make, Python 3, curl and wget on the first boot",
			"Konsole with the LeiOS profile and Hack Nerd Font, plus fastfetch",
			"The whole Debian archive through APT, and Flathub for desktop apps",
			"Publish your own packages through the LeiOS Developer Hub",
		],
		link: { label: "Developer docs", to: "/docs/developers/developer-hub" },
	},
	{
		id: "accessibility",
		icon: "i-lucide-accessibility",
		eyebrow: "For everyone",
		title: "Accessible and multilingual",
		description:
			"The installer and the desktop speak many languages, and accessibility tools are part of the system, not an afterthought.",
		points: [
			"Choose your language, keyboard and region formats in the installer",
			"The Orca screen reader, a screen magnifier and KMouth for text-to-speech",
			"Accessibility options for the keyboard, mouse and colors in System Settings",
			"English with German formats (en_DE) available for people living in Germany",
		],
	},
];

const specs = [
	{ label: "Base", value: 'Debian 13 "trixie"' },
	{ label: "Kernel", value: "Debian's Linux 6.12 LTS kernel" },
	{ label: "Desktop", value: "KDE Plasma 6 (Wayland, X11 session available)" },
	{ label: "Installer", value: "Calamares" },
	{ label: "Software", value: "APT (.deb) and Flatpak, with Discover as the app store" },
	{ label: "Repositories", value: "Debian, the LeiOS repository, Mozilla (Firefox), Flathub" },
	{ label: "Boot", value: "UEFI with Secure Boot, or BIOS" },
	{ label: "Storage", value: "ext4 by default, Btrfs available, LUKS encryption" },
	{ label: "Memory", value: "zram compressed swap" },
	{ label: "Images", value: "64-bit x86 (amd64)" },
	{ label: "License", value: "Free and open source; LeiOS's own code is AGPL-3.0" },
];
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)] pb-20 pt-20 sm:pt-24">
            <UContainer class="relative z-10">
                <div class="mx-auto mb-14 max-w-3xl text-center">
                    <UBadge color="primary" variant="soft" size="xl" class="mb-6">Features</UBadge>
                    <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Everything you need,
                        <span class="bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">ready from the first boot</span>
                    </h1>
                    <p class="text-lg text-slate-400 sm:text-xl">
                        A tour of what makes LeiOS a complete, comfortable operating system for work, play and development.
                    </p>
                </div>

                <div v-if="heroScreenshot" class="mx-auto max-w-5xl">
                    <ScreenshotFrame :screenshot="heroScreenshot" eager />
                </div>

                <nav aria-label="Feature sections" class="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
                    <UButton
                        v-for="section in sections"
                        :key="section.id"
                        :to="`#${section.id}`"
                        color="neutral"
                        variant="soft"
                        :icon="section.icon"
                    >
                        {{ section.eyebrow }}
                    </UButton>
                </nav>
            </UContainer>
        </section>

        <!-- Sections -->
        <section
            v-for="(section, index) in sections"
            :id="section.id"
            :key="section.id"
            class="scroll-mt-20 py-20"
            :class="index % 2 === 0 ? 'bg-slate-950/50' : ''"
        >
            <UContainer>
                <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
                    <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
                        <div class="mb-4 flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10">
                                <UIcon :name="section.icon" class="text-xl text-sky-400" />
                            </div>
                            <span class="text-sm font-semibold uppercase tracking-wider text-sky-400">{{ section.eyebrow }}</span>
                        </div>
                        <h2 class="mb-4 text-3xl font-bold sm:text-4xl">{{ section.title }}</h2>
                        <p class="text-lg leading-relaxed text-slate-400">{{ section.description }}</p>
                        <UButton
                            v-if="section.link"
                            :to="section.link.to"
                            color="primary"
                            variant="link"
                            class="mt-4 px-0"
                            trailing-icon="i-lucide-arrow-right"
                        >
                            {{ section.link.label }}
                        </UButton>
                    </div>

                    <UCard class="border-slate-800 bg-slate-900/60">
                        <ul class="space-y-4 p-2">
                            <li v-for="point in section.points" :key="point" class="flex gap-3">
                                <UIcon name="i-lucide-check" class="mt-1 shrink-0 text-sky-400" />
                                <span class="leading-relaxed text-slate-300">{{ point }}</span>
                            </li>
                        </ul>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- Specs -->
        <section id="specs" class="py-24">
            <UContainer>
                <SectionHeader
                    badge="Under the hood"
                    title="Technical details"
                    description="For the curious: what LeiOS is made of."
                />

                <UCard class="mx-auto max-w-4xl border-slate-800 bg-slate-900/50">
                    <dl class="divide-y divide-slate-800">
                        <div v-for="spec in specs" :key="spec.label" class="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-slate-300">{{ spec.label }}</dt>
                            <dd class="text-slate-400 sm:col-span-2">{{ spec.value }}</dd>
                        </div>
                    </dl>
                </UCard>

                <div class="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                    <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                        Download LeiOS
                    </UButton>
                    <UButton to="/docs/about" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-info">
                        About LeiOS
                    </UButton>
                </div>
            </UContainer>
        </section>
    </div>
</template>
