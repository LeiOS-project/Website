<script setup lang="ts">
import type { Screenshot } from "~/data/screenshots";

const { screenshot, eager = false } = defineProps<{
	screenshot: Screenshot;
	/** Load right away (above the fold) instead of lazily. */
	eager?: boolean;
}>();
</script>

<template>
	<figure class="relative">
		<div class="pointer-events-none absolute -inset-6 rounded-[2rem] bg-sky-500/15 blur-3xl" aria-hidden="true"></div>
		<div class="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 shadow-2xl shadow-sky-950/50">
			<img
				:src="screenshot.src"
				:alt="screenshot.alt"
				:width="screenshot.width"
				:height="screenshot.height"
				:loading="eager ? 'eager' : 'lazy'"
				:fetchpriority="eager ? 'high' : undefined"
				decoding="async"
				class="block h-auto w-full"
			/>
		</div>
		<figcaption class="mt-4 text-center text-sm text-slate-500">{{ screenshot.caption }}</figcaption>
	</figure>
</template>
