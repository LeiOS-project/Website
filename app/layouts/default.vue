<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';

</script>

<template>
    <div class="app-layout">
        <!-- Navigation -->
        <Header />

        <!-- Main Content -->
        <UMain class="main-content">
            <slot />
        </UMain>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<style scoped>
.app-layout {
    min-height: 100vh;
    background-color: rgb(2 6 23);
    color: rgb(241 245 249);
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>