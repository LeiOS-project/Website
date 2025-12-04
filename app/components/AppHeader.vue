<script setup lang="ts">
const links = [
    { label: 'Features', to: '#features' },
    { label: 'Download', to: '#download' },
    { label: 'Community', to: '#community' },
    { label: 'Blog', to: 'https://blog.leicraftmc.de/tag/leios/', external: true }
]

const socialLinks = [
    { icon: 'i-lucide-github', to: 'https://github.com/LeiOS-project', label: 'GitHub' },
    { icon: 'i-lucide-message-circle', to: 'https://discord.gg/8YC5BXjCc5', label: 'Discord' }
]
</script>

<template>
    <UHeader class="app-header">
        <template #left>
            <NuxtLink to="/" class="logo-link">
                <span class="logo-text">LeiOS</span>
            </NuxtLink>
        </template>

        <template #body>
            <UNavigationMenu 
                :items="links.map(link => ({
                    label: link.label,
                    to: link.to,
                    target: link.external ? '_blank' : undefined
                }))" 
                class="nav-menu"
            />
        </template>

        <template #right>
            <div class="header-actions">
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
                    class="social-btn"
                />
                <UButton to="#download" color="primary" variant="solid" class="download-btn">
                    Download
                </UButton>
            </div>
        </template>
    </UHeader>
</template>

<style scoped>
.app-header {
    backdrop-filter: blur(12px);
}

.logo-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, rgb(56 189 248), rgb(125 211 252));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.social-btn {
    transition: transform 0.2s ease;
}

.social-btn:hover {
    transform: scale(1.1);
}

.download-btn {
    font-weight: 500;
}
</style>
