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
    <div class="min-h-screen bg-slate-950 text-slate-100">
        <!-- Navigation -->
        <UHeader>
            <template #left>
                <NuxtLink to="/" class="flex items-center gap-2">
                    <span class="text-2xl font-bold gradient-text">LeiOS</span>
                </NuxtLink>
            </template>

            <template #center>
                <UNavigationMenu :items="links.map(link => ({
                    label: link.label,
                    to: link.to,
                    target: link.external ? '_blank' : undefined
                }))" />
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
                    />
                    <UButton to="#download" color="primary" variant="solid">
                        Download
                    </UButton>
                </div>
            </template>
        </UHeader>

        <!-- Main Content -->
        <UMain>
            <slot />
        </UMain>

        <!-- Footer -->
        <footer class="border-t border-slate-800 bg-slate-950/50">
            <UContainer class="py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Brand -->
                    <div class="col-span-1 md:col-span-2">
                        <span class="text-2xl font-bold gradient-text">LeiOS</span>
                        <p class="mt-4 text-slate-400 max-w-md">
                            A Debian-based operating system focused on stability, performance, and an exceptional out-of-box experience. Built by developers, for everyone.
                        </p>
                        <div class="flex gap-4 mt-6">
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
                            />
                        </div>
                    </div>

                    <!-- Links -->
                    <div>
                        <h4 class="font-semibold text-slate-100 mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li><NuxtLink to="https://blog.leicraftmc.de/tag/leios/" target="_blank" class="text-slate-400 hover:text-sky-400 transition-colors">Blog</NuxtLink></li>
                            <li><NuxtLink to="https://git.leicraftmc.de/LeiOS/" target="_blank" class="text-slate-400 hover:text-sky-400 transition-colors">Source Code</NuxtLink></li>
                            <li><NuxtLink to="https://github.com/LeiOS-project" target="_blank" class="text-slate-400 hover:text-sky-400 transition-colors">GitHub</NuxtLink></li>
                        </ul>
                    </div>

                    <!-- Community -->
                    <div>
                        <h4 class="font-semibold text-slate-100 mb-4">Community</h4>
                        <ul class="space-y-2">
                            <li><NuxtLink to="https://discord.gg/8YC5BXjCc5" target="_blank" class="text-slate-400 hover:text-sky-400 transition-colors">Discord</NuxtLink></li>
                            <li><NuxtLink to="https://github.com/LeiOS-project" target="_blank" class="text-slate-400 hover:text-sky-400 transition-colors">Contribute</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-slate-500 text-sm">
                        © {{ new Date().getFullYear() }} LeiOS Project. Open Source under GPL License.
                    </p>
                    <p class="text-slate-500 text-sm">
                        Built with ❤️ for the community
                    </p>
                </div>
            </UContainer>
        </footer>
    </div>
</template>

<style scoped>

</style>