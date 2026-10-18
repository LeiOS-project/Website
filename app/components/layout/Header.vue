<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import LeiOSLogo from "~/components/img/LeiOSLogo.vue";

const route = useRoute();

const links = computed<NavigationMenuItem[]>(() => [
	{
		label: "Features",
		to: "/#features",
		exactHash: true,
	},
	{
		label: "Download",
		to: "/#download",
		exactHash: true,
	},
	{
		label: "Community",
		to: "/#community",
		exactHash: true,
	},
	{
		label: "Docs",
		to: "/docs",
		active: route.path.startsWith("/docs"),
	},
	{
		label: "Developer Hub",
		to: "https://hub.leios.dev",
		target: "_blank",
	},
	{
		label: "Blog",
		to: "https://blog.leicraftmc.de/tag/leios/",
		target: "_blank",
	},
]);

const socialLinks = [
	{ icon: "i-lucide-gitlab", to: "https://git.leicraftmc.de/LeiOS", label: "GitLab" },
	{ icon: "i-lucide-github", to: "https://github.com/LeiOS-project", label: "GitHub" },
	{ icon: "i-lucide-message-circle", to: "https://discord.gg/8YC5BXjCc5", label: "Discord" },
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
			<UButton to="/#download" color="primary" variant="solid" class="hidden font-medium sm:inline-flex">
				Download
			</UButton>
		</template>
	</UHeader>
</template>
