<script setup lang="ts">
</script>

<template>
    <div class="app-layout">
        <!-- Navigation -->
        <AppHeader />

        <!-- Main Content -->
        <UMain class="main-content">
            <slot />
        </UMain>

        <!-- Footer -->
        <AppFooter />
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