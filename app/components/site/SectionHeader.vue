<script setup lang="ts">
const { badge, title, description } = defineProps<{
	badge?: string;
	title: string;
	description?: string;
}>();
</script>

<template>
	<header class="mb-12 text-center">
		<UBadge v-if="badge" color="primary" variant="soft" size="xl" class="mb-3">{{ badge }}</UBadge>
		<h2 class="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
			<slot name="title">{{ title }}</slot>
		</h2>
		<p v-if="description" class="mx-auto max-w-3xl text-lg text-slate-400">{{ description }}</p>
	</header>
</template>
