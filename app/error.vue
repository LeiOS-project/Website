<script setup lang="ts">
import type { NuxtError } from "#app";
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";

const props = defineProps<{
	error: NuxtError;
}>();

usePageSeo({
	title: `${props.error.statusCode === 404 ? "Page not found" : "Error"} | LeiOS`,
	noindex: true,
});
</script>

<template>

    <NuxtRouteAnnouncer />

    <UApp>

        <div class="app-layout main-bg-color">

            <Header />

            <UMain class="py-8 main-content">
                <UContainer>
                    <UError :error="props.error" />
                </UContainer>
            </UMain>

            <Footer />

        </div>

    </UApp>

</template>

<style scoped>
.app-layout {
    min-height: 100vh;
    color: rgb(241 245 249);
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
