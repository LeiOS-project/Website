<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import LeiOSLogo from "~/components/img/LeiOSLogo.vue";
import { siteLinks } from "~/data/links";

const route = useRoute();

const links = computed<NavigationMenuItem[]>(() => [
	{
		label: "Features",
		to: "/features",
	},
	{
		label: "Switch from Windows",
		to: "/switch-from-windows",
	},
	{
		label: "Download",
		to: "/download",
	},
	{
		label: "Docs",
		to: "/docs",
		active: route.path.startsWith("/docs"),
	},
	{
		label: "Developer Hub",
		to: siteLinks.hub,
		target: "_blank",
	},
	{
		label: "Blog",
		to: siteLinks.blog,
		target: "_blank",
	},
]);

const socialLinks = [
	{ icon: "i-lucide-gitlab", to: siteLinks.git, label: "GitLab" },
	{ icon: "i-lucide-github", to: siteLinks.github, label: "GitHub" },
	{ icon: "i-lucide-message-circle", to: siteLinks.discord, label: "Discord" },
];

const mobileLinks = computed<NavigationMenuItem[][]>(() => [
	links.value,
	socialLinks.map((social) => ({
		label: social.label,
		to: social.to,
		target: "_blank",
		icon: social.icon,
	})),
]);
</script>

<template>
	<!-- The title is only a logo, so `title` gives UHeader's home link its accessible name. -->
	<UHeader title="LeiOS" class="backdrop-blur-xl">
		<template #title>
			<LeiOSLogo class="h-8 w-auto" />
		</template>

		<UNavigationMenu :items="[links]" />

		<template #body>
			<UNavigationMenu :items="mobileLinks" orientation="vertical" class="w-full" />
		</template>

		<template #right>
			<div class="hidden items-center gap-2 lg:flex">
				<UButton
					v-for="social in socialLinks"
					:key="social.label"
					:to="social.to"
					target="_blank"
					:icon="social.icon"
					color="neutral"
					variant="ghost"
					size="lg"
					:aria-label="social.label"
					class="transition-transform duration-200 hover:scale-110"
				/>
			</div>
			<UButton to="/download" color="primary" variant="solid" class="hidden font-medium sm:inline-flex">
				Download
			</UButton>
		</template>
	</UHeader>
</template>
