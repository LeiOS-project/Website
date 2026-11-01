<script setup lang="ts">
import SectionHeader from "~/components/site/SectionHeader.vue";
import { siteLinks } from "~/data/links";
import { formatImageSize, latestImage } from "~/data/release";

usePageSeo({
	title: "Download LeiOS",
	description: `Download the free LeiOS installer image (${formatImageSize(latestImage.sizeBytes)}, 64-bit PC). Try LeiOS live from a USB stick and install it in a few clicks.`,
	ogImage: "https://www.leios.dev/static/og/leios-desktop.jpg",
});

const toast = useToast();

const imageFacts = [
	{ icon: "i-lucide-cpu", label: "64-bit PC (amd64)" },
	{ icon: "i-lucide-layers", label: "Debian 13 base" },
	{ icon: "i-lucide-monitor", label: "KDE Plasma 6" },
	{ icon: "i-lucide-hard-drive", label: formatImageSize(latestImage.sizeBytes) },
];

const builtOn = new Date(`${latestImage.date}T00:00:00Z`).toLocaleDateString("en-US", {
	year: "numeric",
	month: "long",
	day: "numeric",
	timeZone: "UTC",
});

async function copyChecksum() {
	try {
		await navigator.clipboard.writeText(latestImage.sha256);
		toast.add({ title: "Checksum copied", icon: "i-lucide-check", color: "success" });
	} catch {
		toast.add({
			title: "Copy failed",
			description: "Select the checksum and copy it by hand.",
			color: "error",
		});
	}
}

const requirements = [
	{ label: "Processor", value: "64-bit x86 (Intel or AMD)" },
	{ label: "Memory", value: "4 GB recommended, 1 GB minimum" },
	{ label: "Storage", value: "15 GB minimum, an SSD recommended" },
	{ label: "Firmware", value: "UEFI (with or without Secure Boot) or BIOS" },
];

const checklist = [
	{
		icon: "i-lucide-usb",
		text: "A USB stick with at least 4 GB (8 GB recommended). It will be erased.",
	},
	{
		icon: "i-lucide-save",
		text: "A backup of your files, if you install on a computer you already use.",
	},
	{ icon: "i-lucide-plug", text: "A power cable for laptops, and ideally an internet connection." },
	{ icon: "i-lucide-clock", text: "About 30 minutes for trying it out and installing." },
];

const steps = [
	{
		title: "Check the download",
		description: "Optional: make sure the file arrived complete by comparing its SHA-256 checksum.",
		to: "/docs/getting-started/create-a-bootable-usb#check-the-download",
	},
	{
		title: "Create a bootable USB drive",
		description: "Write the image with balenaEtcher, Rufus or KDE ISO Image Writer.",
		to: "/docs/getting-started/create-a-bootable-usb",
	},
	{
		title: "Start from the USB drive",
		description: "Open your PC's boot menu, pick the stick, and try LeiOS live.",
		to: "/docs/getting-started/booting-and-secure-boot",
	},
	{
		title: "Install LeiOS",
		description: "Double-click Install LeiOS on the desktop and follow the installer.",
		to: "/docs/getting-started/installation",
	},
];
</script>

<template>
    <div>
        <!-- Hero + download card -->
        <section class="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)] pb-20 pt-20 sm:pt-24">
            <UContainer class="relative z-10">
                <div class="mx-auto mb-12 max-w-3xl text-center">
                    <UBadge color="primary" variant="soft" size="xl" class="mb-6">Download</UBadge>
                    <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Get <span class="bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">LeiOS</span>
                    </h1>
                    <p class="text-lg text-slate-400 sm:text-xl">
                        Free, forever. One image to try LeiOS live from a USB stick and to install it.
                    </p>
                </div>

                <UCard class="mx-auto max-w-3xl border-slate-800 bg-slate-900/80">
                    <div class="space-y-6 p-2 sm:p-6">
                        <div class="flex flex-col items-center gap-4 text-center">
                            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-500/10">
                                <UIcon name="i-lucide-disc-3" class="text-4xl text-sky-400" />
                            </div>
                            <div>
                                <h2 class="text-2xl font-bold">LeiOS installer image</h2>
                                <p class="text-slate-400">Version {{ latestImage.version }} · built {{ builtOn }}</p>
                            </div>
                            <ul class="flex flex-wrap justify-center gap-2">
                                <li v-for="fact in imageFacts" :key="fact.label">
                                    <UBadge color="neutral" variant="soft" size="lg" :icon="fact.icon">{{ fact.label }}</UBadge>
                                </li>
                            </ul>
                        </div>

                        <div class="flex flex-col justify-center gap-3 sm:flex-row">
                            <UButton :to="latestImage.url" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                                Download ISO
                            </UButton>
                            <UButton to="/docs/getting-started/installation" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-book-open">
                                Installation guide
                            </UButton>
                        </div>

                        <div class="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                            <div class="mb-2 flex items-center justify-between gap-2">
                                <span class="text-sm font-medium text-slate-300">SHA-256 checksum</span>
                                <UButton size="xs" color="neutral" variant="ghost" icon="i-lucide-copy" @click="copyChecksum">Copy</UButton>
                            </div>
                            <code class="block break-all font-mono text-xs text-slate-400 sm:text-sm">{{ latestImage.sha256 }}</code>
                            <p class="mt-2 text-xs text-slate-500">File: <span class="break-all font-mono">{{ latestImage.fileName }}</span></p>
                        </div>

                        <UAlert
                            color="primary"
                            variant="subtle"
                            icon="i-lucide-refresh-cw"
                            title="Always up to date after installing"
                            description="The image is only the starting point. Your installed LeiOS updates itself to the newest LeiOS release through the normal updates."
                        />

                        <p class="text-center text-sm text-slate-500">
                            Looking for an older image?
                            <NuxtLink :to="siteLinks.allImages" target="_blank" class="text-sky-400 hover:underline">All published images</NuxtLink>
                        </p>
                    </div>
                </UCard>
            </UContainer>
        </section>

        <!-- Before you start -->
        <section class="bg-slate-950/50 py-20">
            <UContainer>
                <SectionHeader
                    badge="Before you start"
                    title="What you need"
                    description="LeiOS runs on most PCs and laptops from the last decade."
                />

                <div class="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
                    <UCard class="border-slate-800 bg-slate-900/50">
                        <template #header>
                            <h3 class="flex items-center gap-2 text-lg font-semibold">
                                <UIcon name="i-lucide-cpu" class="text-sky-400" />
                                System requirements
                            </h3>
                        </template>
                        <dl class="divide-y divide-slate-800">
                            <div v-for="row in requirements" :key="row.label" class="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                                <dt class="font-medium text-slate-300">{{ row.label }}</dt>
                                <dd class="text-slate-400 sm:text-right">{{ row.value }}</dd>
                            </div>
                        </dl>
                        <template #footer>
                            <NuxtLink to="/docs/getting-started/system-requirements" class="inline-flex items-center gap-1 text-sm text-sky-400 hover:underline">
                                Full system requirements
                                <UIcon name="i-lucide-arrow-right" />
                            </NuxtLink>
                        </template>
                    </UCard>

                    <UCard class="border-slate-800 bg-slate-900/50">
                        <template #header>
                            <h3 class="flex items-center gap-2 text-lg font-semibold">
                                <UIcon name="i-lucide-list-checks" class="text-sky-400" />
                                Checklist
                            </h3>
                        </template>
                        <ul class="space-y-4">
                            <li v-for="item in checklist" :key="item.text" class="flex gap-3">
                                <UIcon :name="item.icon" class="mt-0.5 shrink-0 text-lg text-sky-400" />
                                <span class="text-slate-400">{{ item.text }}</span>
                            </li>
                        </ul>
                    </UCard>
                </div>

                <UAlert
                    class="mx-auto mt-6 max-w-5xl"
                    color="neutral"
                    variant="subtle"
                    icon="i-lucide-shield-check"
                    title="Secure Boot"
                    description="LeiOS boots with Secure Boot turned on, using the same signed boot chain as Debian. A few PCs only trust Windows out of the box; on those, allow third-party certificates in the firmware settings or turn Secure Boot off."
                    :actions="[{ label: 'Secure Boot help', to: '/docs/getting-started/booting-and-secure-boot#secure-boot', color: 'neutral', variant: 'outline', trailingIcon: 'i-lucide-arrow-right' }]"
                />
            </UContainer>
        </section>

        <!-- Next steps -->
        <section class="py-20">
            <UContainer>
                <SectionHeader
                    badge="Next steps"
                    title="After the download"
                    description="Each step has a detailed, beginner-friendly guide in the docs."
                />

                <ol class="mx-auto max-w-3xl space-y-4">
                    <li v-for="(step, index) in steps" :key="step.title">
                        <NuxtLink
                            :to="step.to"
                            class="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-sky-400/50"
                        >
                            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-bold text-slate-950">
                                {{ index + 1 }}
                            </span>
                            <div class="flex-1">
                                <h3 class="font-semibold text-slate-100 group-hover:text-sky-400">{{ step.title }}</h3>
                                <p class="text-slate-400">{{ step.description }}</p>
                            </div>
                            <UIcon name="i-lucide-arrow-right" class="mt-1 shrink-0 text-slate-500 group-hover:text-sky-400" />
                        </NuxtLink>
                    </li>
                </ol>

                <p class="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-500">
                    Want to build the image yourself? See
                    <NuxtLink to="/docs/developers/building-the-iso" class="text-sky-400 hover:underline">Building the ISO</NuxtLink>.
                    Stuck? Ask on
                    <NuxtLink :to="siteLinks.discord" target="_blank" class="text-sky-400 hover:underline">Discord</NuxtLink>.
                </p>
            </UContainer>
        </section>
    </div>
</template>
