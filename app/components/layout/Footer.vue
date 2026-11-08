<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui";
import { siteLinks } from "~/data/links";

const socialLinks = [
	{ icon: "i-lucide-gitlab", to: siteLinks.git, label: "GitLab" },
	{ icon: "i-lucide-github", to: siteLinks.github, label: "GitHub" },
	{ icon: "i-lucide-message-circle", to: siteLinks.discord, label: "Discord" },
];

const leiosLinks = [
	{ label: "Features", to: "/features" },
	{ label: "Switch from Windows", to: "/switch-from-windows" },
	{ label: "Download", to: "/download" },
	{ label: "FAQ", to: "/docs/faq" },
];

const resourceLinks = [
	{ label: "Documentation", to: "/docs" },
	{ label: "Installation Guide", to: "/docs/getting-started/installation" },
	{ label: "Developer Hub", to: siteLinks.hub, target: "_blank" },
	{ label: "Source Code", to: siteLinks.git, target: "_blank" },
];

const communityLinks = [
	{ label: "Discord", to: siteLinks.discord, target: "_blank" },
	{ label: "Blog", to: siteLinks.blog, target: "_blank" },
	{ label: "Report a Bug", to: "/docs/community/reporting-bugs" },
	{ label: "Contribute", to: "/docs/community/contributing" },
];

const legalLinks = [
	{ label: "Impressum", to: "https://legal.leicraftmc.de/impressum/", target: "_blank" },
	{ label: "Datenschutz", to: "https://legal.leicraftmc.de/datenschutz/", target: "_blank" },
];

const footerColumns: FooterColumn[] = [
	{ label: "LeiOS", children: leiosLinks },
	{ label: "Resources", children: resourceLinks },
	{ label: "Community", children: communityLinks },
	{ label: "Legal", children: legalLinks },
];

const currentYear = new Date().getFullYear();
</script>

<template>
    <USeparator></USeparator>
    <UFooter :ui='{
        root: "py-12",
        container: "py-0 lg:py-0 lg:gap-x-0 gap-x-0 lg:block",
        bottom: "p-0 lg:p-0 mt-8"
    }'>
        <UFooterColumns :columns="footerColumns" :ui="{
            root: 'grid gap-10 w-full lg:grid-cols-3',
            center: 'grid grid-flow-row auto-cols-auto grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2',
            label: 'text-slate-100 font-semibold text-base',
            link: 'text-slate-400 hover:text-sky-400 text-sm sm:text-base inline-block py-1 transition-colors',
            left: 'mb-0'
        }">
            <template #left>
                <div class="space-y-4">
                    <span
                        class="inline-block text-2xl font-bold bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">LeiOS</span>
                    <p class="text-slate-300/80 text-base leading-relaxed md:max-w-3xl">
                        A free operating system built on Debian with a polished KDE Plasma desktop. Fast, secure and
                        easy from the first boot. Built by developers, for everyone.
                    </p>
                    <div class="flex gap-2 pt-2">
                        <UButton v-for="social in socialLinks" :key="social.label" :to="social.to" target="_blank"
                            :icon="social.icon" color="neutral" variant="ghost" size="lg" :aria-label="social.label"
                            class="transition-transform hover:scale-110 hover:text-sky-400" />
                    </div>
                </div>
            </template>
        </UFooterColumns>

        <template #bottom>
            <UContainer>
                <div
                    class="border-t border-slate-800 pt-8 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
                    <p class="text-slate-500 text-xs sm:text-sm">
                        © {{ currentYear }} LeiOS Project. Open Source under AGPL-3.0 License.
                    </p>
                    <p class="text-slate-500 text-xs sm:text-sm">
                        Built with ❤️ for the community
                    </p>
                </div>
            </UContainer>
        </template>
    </UFooter>
</template>
