<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import LeiOSLogo from '../img/LeiOSLogo.vue';

const links = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Features',
        to: '#features'
    },
    {
        label: 'Download',
        to: '#download'
    },
    {
        label: 'Community',
        to: '#community'
    },
    {
        label: 'Blog',
        to: 'https://blog.leicraftmc.de/tag/leios/',
        target: '_blank'
    }
])

const socialLinks = [
    { icon: 'i-lucide-github', to: 'https://github.com/LeiOS-project', label: 'GitHub' },
    { icon: 'i-lucide-message-circle', to: 'https://discord.gg/8YC5BXjCc5', label: 'Discord' }
]
</script>

<template>
    <UHeader class="backdrop-blur-xl">
        <template #title>
            <LeiOSLogo class="h-8 w-auto" />
        </template>

        <UNavigationMenu :items="links" />

        <template #body>
            <UNavigationMenu :items="links" orientation="vertical" class="w-full" />
        </template>

        <template #right>
            <div class="flex items-center gap-2">
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
                    class="hover:scale-110 transition-transform duration-200" 
                />
                <UButton to="#download" color="primary" variant="solid" class="font-medium hidden sm:inline-flex">
                    Download
                </UButton>
            </div>
        </template>
    </UHeader>
</template>
