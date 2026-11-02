<script setup lang="ts">
import ScreenshotFrame from "~/components/site/ScreenshotFrame.vue";
import SectionHeader from "~/components/site/SectionHeader.vue";
import { siteLinks } from "~/data/links";
import { screenshots } from "~/data/screenshots";

usePageSeo({
	title: "LeiOS - Linux, Refined. A free, fast and easy alternative to Windows",
	description:
		"LeiOS is a free operating system built on Debian 13 with a polished KDE Plasma desktop. Easy for beginners, fast on older PCs and ready from the first boot.",
	ogImage: "https://www.leios.dev/static/og/leios-desktop.jpg",
	jsonLd: {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "LeiOS",
		applicationCategory: "OperatingSystem",
		operatingSystem: "Linux",
		description:
			"A free, beginner-friendly operating system built on Debian 13 with a polished KDE Plasma desktop.",
		url: "https://www.leios.dev",
		downloadUrl: "https://www.leios.dev/download",
		screenshot: "https://www.leios.dev/static/screenshots/desktop.webp",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		author: {
			"@type": "Organization",
			name: "LeiOS Project",
			url: "https://www.leios.dev",
		},
	},
});

definePageMeta({
	layout: "default",
});

const heroScreenshot = screenshots[0];

const stats = [
	{ value: "Free", label: "Forever, no license key" },
	{ value: "Debian 13", label: "Rock-solid base" },
	{ value: "Plasma 6", label: "Modern desktop" },
	{ value: "Flathub", label: "Thousands of apps" },
];

const pillars = [
	{
		icon: "i-lucide-layers",
		title: "Debian inside",
		description:
			"Debian is one of the oldest and most trusted Linux distributions. LeiOS uses its kernel, its packages and its security updates.",
	},
	{
		icon: "i-lucide-sparkles",
		title: "Polished out of the box",
		description:
			"A designed desktop, drivers and firmware, everyday apps and sensible tuning: ready the moment the installer finishes.",
	},
	{
		icon: "i-lucide-refresh-cw",
		title: "Always moving forward",
		description:
			"LeiOS improvements arrive as tested releases through the normal updates. No reinstalling to get the latest LeiOS.",
	},
];

const features = [
	{
		icon: "i-lucide-mouse-pointer-click",
		title: "Feels familiar",
		description:
			"A taskbar, a start menu and windows you can snap side by side. If you have used Windows, you already know your way around.",
	},
	{
		icon: "i-lucide-store",
		title: "An app store built in",
		description:
			"Discover installs apps with one click: Spotify, Discord, Steam, VS Code and thousands more from Flathub, the Snap Store and Debian.",
	},
	{
		icon: "i-lucide-shield-check",
		title: "Secure by default",
		description:
			"Debian security updates, Secure Boot support and optional full-disk encryption. Apps come from trusted sources, not random websites.",
	},
	{
		icon: "i-lucide-gauge",
		title: "Fast, even on older PCs",
		description:
			"Compressed memory keeps LeiOS responsive, and an optional tuning package helps computers with only 4 GB of RAM.",
	},
	{
		icon: "i-lucide-cpu",
		title: "Hardware just works",
		description:
			"Firmware for common Wi-Fi, graphics and sound chips is included, so most computers work without hunting for drivers.",
	},
	{
		icon: "i-lucide-briefcase",
		title: "Ready for work",
		description:
			"LibreOffice, Firefox, an email client, a PDF viewer and GIMP are installed from the start. Opens Word and Excel files.",
	},
	{
		icon: "i-lucide-code-2",
		title: "Developer ready",
		description:
			"Git, compilers, Firefox Developer Edition and a terminal with a Nerd Font are there on the first boot.",
	},
	{
		icon: "i-lucide-heart-handshake",
		title: "Free and open",
		description:
			"No license fee, no ads, no account and no data collection. LeiOS's own code is open source under the AGPL.",
	},
];

const audiences = [
	{
		icon: "i-lucide-monitor-smartphone",
		title: "Windows users",
		description:
			"Windows 10 is out of support and your PC can't run Windows 11? LeiOS keeps it safe and fast, for free.",
		to: "/switch-from-windows",
		linkText: "Switching from Windows",
	},
	{
		icon: "i-lucide-house",
		title: "Everyday users",
		description:
			"Browsing, office documents, email, photos, music and video calls, without the clutter and the ads.",
		to: "/features",
		linkText: "What's included",
	},
	{
		icon: "i-lucide-terminal",
		title: "Developers",
		description:
			"A Debian system with the tools already set up, plus a repository where you can publish your own packages.",
		to: "/docs/developers/developer-hub",
		linkText: "For developers",
	},
	{
		icon: "i-lucide-laptop",
		title: "Older computers",
		description:
			"A 64-bit PC from the last decade is enough. LeiOS has no TPM requirement and gives older laptops a second life.",
		to: "/docs/getting-started/system-requirements",
		linkText: "System requirements",
	},
];

const steps = [
	{
		icon: "i-lucide-download",
		title: "Download",
		description: "Get the LeiOS image. It's free and about 3 GB.",
		to: "/download",
	},
	{
		icon: "i-lucide-usb",
		title: "Create a USB drive",
		description: "Write the image to a USB stick with a free tool like balenaEtcher or Rufus.",
		to: "/docs/getting-started/create-a-bootable-usb",
	},
	{
		icon: "i-lucide-play",
		title: "Try it live",
		description: "Start your PC from the stick and try LeiOS without changing anything.",
		to: "/docs/getting-started/booting-and-secure-boot",
	},
	{
		icon: "i-lucide-hard-drive-download",
		title: "Install",
		description: "Double-click Install LeiOS. Replace Windows or keep it next to LeiOS.",
		to: "/docs/getting-started/installation",
	},
];

const communityCards = [
	{
		to: siteLinks.discord,
		icon: "i-lucide-message-circle",
		title: "Discord",
		description: "Chat with the community, get support, and share your setup.",
		buttonText: "Join Server",
		color: "indigo",
	},
	{
		to: siteLinks.blog,
		icon: "i-lucide-newspaper",
		title: "Blog",
		description: "Release announcements, news and development updates.",
		buttonText: "Read Blog",
		color: "orange",
	},
	{
		to: "/docs/community/contributing",
		icon: "i-lucide-git-pull-request",
		title: "Contribute",
		description: "Report bugs, improve the docs or publish packages. Every contribution helps.",
		buttonText: "Get Started",
		color: "green",
	},
];
</script>

<template>
    <div class="space-y-0">
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)] pb-24 pt-20 sm:pt-28">
            <div class="pointer-events-none absolute inset-0 overflow-hidden">
                <div class="absolute h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" style="top:10%;left:20%"></div>
                <div class="absolute h-96 w-96 rounded-full bg-sky-400/5 blur-3xl" style="top:40%;right:15%"></div>
            </div>

            <UContainer class="relative z-10">
                <div class="mx-auto max-w-4xl text-center">
                    <UBadge color="primary" variant="soft" size="xl" class="mb-6 inline-flex items-center gap-1">
                        <UIcon name="i-lucide-sparkles" />
                        Built on Debian 13 · KDE Plasma 6
                    </UBadge>

                    <h1 class="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
                        Linux, <span class="bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">Refined</span>
                    </h1>

                    <p class="mx-auto mb-8 max-w-2xl leading-[1.6] text-lg text-slate-400 sm:text-xl lg:text-2xl">
                        A free operating system for your PC: fast, secure and easy from the first boot.
                        The modern alternative to Windows, built on the rock-solid Debian base.
                    </p>

                    <div class="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
                        <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                            Download LeiOS
                        </UButton>
                        <UButton to="/switch-from-windows" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-arrow-right-left">
                            Switching from Windows?
                        </UButton>
                    </div>

                    <p class="mb-16 text-sm text-slate-500">
                        Free forever · No account needed · Try it live before you install
                    </p>
                </div>

                <div v-if="heroScreenshot" class="mx-auto max-w-5xl">
                    <ScreenshotFrame :screenshot="heroScreenshot" eager />
                </div>

                <div class="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 text-center md:grid-cols-4">
                    <div v-for="stat in stats" :key="stat.value" class="space-y-1">
                        <div class="text-2xl font-bold text-sky-400 md:text-3xl">{{ stat.value }}</div>
                        <div class="text-sm text-slate-500">{{ stat.label }}</div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- What is LeiOS -->
        <section id="what-is-leios" class="bg-slate-950/50 py-24">
            <UContainer>
                <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <UBadge color="primary" variant="soft" size="xl" class="mb-3">What is LeiOS?</UBadge>
                        <h2 class="mb-6 text-3xl font-bold sm:text-4xl">An operating system that gets out of your way</h2>
                        <div class="space-y-4 text-lg leading-relaxed text-slate-400">
                            <p>
                                LeiOS is a complete operating system. It replaces Windows on your computer, or runs right
                                next to it. You use it the way you use any computer: browse the web, write documents,
                                watch videos, play games, write code.
                            </p>
                            <p>
                                Under the hood is <span class="text-slate-200">Debian</span>, the Linux distribution that
                                runs a huge part of the world's servers. On top, LeiOS adds everything you would otherwise
                                set up by hand: a polished <span class="text-slate-200">KDE Plasma</span> desktop with its own
                                look, firmware for your hardware, everyday apps, performance tuning and its own package
                                repository.
                            </p>
                        </div>
                        <UButton to="/features" color="primary" variant="link" class="mt-4 px-0" trailing-icon="i-lucide-arrow-right">
                            Take the tour
                        </UButton>
                    </div>

                    <div class="space-y-4">
                        <div
                            v-for="pillar in pillars"
                            :key="pillar.title"
                            class="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5"
                        >
                            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10">
                                <UIcon :name="pillar.icon" class="text-xl text-sky-400" />
                            </div>
                            <div>
                                <h3 class="mb-1 text-lg font-semibold">{{ pillar.title }}</h3>
                                <p class="leading-relaxed text-slate-400">{{ pillar.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-24">
            <UContainer>
                <SectionHeader
                    badge="Features"
                    title="Why Choose LeiOS?"
                    description="Everything you need is there from the first boot, and nothing you don't."
                />

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <UCard
                        v-for="feature in features"
                        :key="feature.title"
                        class="border-slate-800 bg-slate-900/50 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50"
                    >
                        <div class="space-y-3 p-2">
                            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10">
                                <UIcon :name="feature.icon" class="text-xl text-sky-400" />
                            </div>
                            <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
                            <p class="text-slate-400 leading-relaxed">{{ feature.description }}</p>
                        </div>
                    </UCard>
                </div>

                <div class="mt-10 text-center">
                    <UButton to="/features" size="lg" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">
                        See all features
                    </UButton>
                </div>
            </UContainer>
        </section>

        <!-- Who is it for -->
        <section id="for-you" class="bg-slate-950/50 py-24">
            <UContainer>
                <SectionHeader
                    badge="For you"
                    title="Who is LeiOS for?"
                    description="LeiOS is made to be approachable for beginners and comfortable for experts."
                />

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <NuxtLink
                        v-for="audience in audiences"
                        :key="audience.title"
                        :to="audience.to"
                        class="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50"
                    >
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10">
                            <UIcon :name="audience.icon" class="text-xl text-sky-400" />
                        </div>
                        <h3 class="mb-2 text-lg font-semibold text-slate-100">{{ audience.title }}</h3>
                        <p class="mb-4 flex-1 leading-relaxed text-slate-400">{{ audience.description }}</p>
                        <span class="inline-flex items-center gap-1 text-sm font-medium text-sky-400 group-hover:underline">
                            {{ audience.linkText }}
                            <UIcon name="i-lucide-arrow-right" />
                        </span>
                    </NuxtLink>
                </div>
            </UContainer>
        </section>

        <!-- Get started -->
        <section id="get-started" class="relative py-24">
            <div class="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-sky-500/5 to-transparent"></div>

            <UContainer class="relative z-10">
                <SectionHeader
                    badge="Get started"
                    title="From download to desktop in four steps"
                    description="Installing LeiOS takes about half an hour. You can try it first without changing anything on your computer."
                />

                <ol class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <li v-for="(step, index) in steps" :key="step.title">
                        <NuxtLink
                            :to="step.to"
                            class="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-sky-400/50"
                        >
                            <div class="mb-4 flex items-center gap-3">
                                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">
                                    {{ index + 1 }}
                                </span>
                                <UIcon :name="step.icon" class="text-xl text-sky-400" />
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-slate-100">{{ step.title }}</h3>
                            <p class="flex-1 leading-relaxed text-slate-400">{{ step.description }}</p>
                            <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400 group-hover:underline">
                                Learn how
                                <UIcon name="i-lucide-arrow-right" />
                            </span>
                        </NuxtLink>
                    </li>
                </ol>

                <div class="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                    <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                        Download LeiOS
                    </UButton>
                    <UButton to="/docs/getting-started/installation" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-book-open">
                        Installation guide
                    </UButton>
                </div>
            </UContainer>
        </section>

        <!-- Community Section -->
        <section id="community" class="bg-slate-950/50 py-24">
            <UContainer>
                <SectionHeader
                    badge="Community"
                    title="Join the Community"
                    description="Connect with other LeiOS users, get help, and help shape what comes next."
                />

                <div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    <UCard
                        v-for="card in communityCards"
                        :key="card.title"
                        :class="[
                            'border-slate-800 bg-slate-900/80 transition duration-300 hover:-translate-y-1',
                            card.color === 'indigo' ? 'hover:border-indigo-400/50' : '',
                            card.color === 'orange' ? 'hover:border-orange-400/50' : '',
                            card.color === 'green' ? 'hover:border-green-400/50' : ''
                        ]"
                    >
                        <NuxtLink :to="card.to" :target="card.to.startsWith('http') ? '_blank' : undefined" class="block space-y-4 p-4 text-center no-underline">
                            <div
                                :class="[
                                    'mx-auto flex h-16 w-16 items-center justify-center rounded-xl',
                                    card.color === 'indigo' ? 'bg-indigo-400/10' : '',
                                    card.color === 'orange' ? 'bg-orange-400/10' : '',
                                    card.color === 'green' ? 'bg-green-400/10' : ''
                                ]"
                            >
                                <UIcon
                                    :name="card.icon"
                                    :class="[
                                        'text-3xl',
                                        card.color === 'indigo' ? 'text-indigo-400' : '',
                                        card.color === 'orange' ? 'text-orange-400' : '',
                                        card.color === 'green' ? 'text-green-400' : ''
                                    ]"
                                />
                            </div>
                            <h3 class="text-lg font-semibold">{{ card.title }}</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">{{ card.description }}</p>
                            <UButton color="neutral" variant="soft" size="sm" class="pointer-events-none">
                                {{ card.buttonText }}
                                <template #trailing>
                                    <UIcon :name="card.to.startsWith('http') ? 'i-lucide-external-link' : 'i-lucide-arrow-right'" class="text-sm" />
                                </template>
                            </UButton>
                        </NuxtLink>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- CTA Section -->
        <section class="relative overflow-hidden py-28">
            <div class="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-sky-500/5 to-transparent"></div>

            <UContainer class="relative z-10">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Ready to Try <span class="bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">LeiOS</span>?
                    </h2>
                    <p class="mb-8 text-lg text-slate-400">
                        Start it from a USB stick and look around. If you like it, install it in a few clicks.
                    </p>
                    <div class="flex flex-col justify-center gap-4 sm:flex-row">
                        <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                            Download Now
                        </UButton>
                        <UButton :to="siteLinks.discord" target="_blank" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-message-circle">
                            Join Discord
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>
