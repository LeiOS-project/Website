<script setup lang="ts">
useSeoMeta({
    title: 'LeiOS - Debian-based OS for Developers',
    description: 'LeiOS is a Debian-based operating system focused on stability, great performance, and an exceptional out-of-box experience. Perfect for developers and everyday users alike.',
    ogTitle: 'LeiOS - Debian-based OS for Developers',
    ogDescription: 'A stable, performant Linux distribution with a focus on developer experience and ease of use.',
    ogType: 'website'
})

const features = [
    {
        icon: 'i-lucide-shield-check',
        title: 'Rock-Solid Stability',
        description: 'Built on Debian\'s legendary stable base, LeiOS ensures your system runs reliably day after day, update after update.'
    },
    {
        icon: 'i-lucide-zap',
        title: 'Optimized Performance',
        description: 'Carefully tuned for maximum performance without sacrificing stability. Fast boot times, responsive applications, efficient resource usage.'
    },
    {
        icon: 'i-lucide-package-open',
        title: 'Great Out-of-Box Experience',
        description: 'Pre-configured with sensible defaults, essential tools, and a polished desktop. Get productive from the first boot.'
    },
    {
        icon: 'i-lucide-code-2',
        title: 'Developer Ready',
        description: 'Comes with development tools pre-installed. Git, build essentials, popular editors, and easy access to programming languages.'
    },
    {
        icon: 'i-lucide-users',
        title: 'For Everyone',
        description: 'While optimized for developers, LeiOS is designed to be approachable for anyone looking for a reliable Linux experience.'
    },
    {
        icon: 'i-lucide-git-branch',
        title: 'Open Source',
        description: 'Completely open source and community-driven. Contribute, customize, and make it your own.'
    }
]

const stats = [
    { value: '100%', label: 'Open Source' },
    { value: 'Debian', label: 'Based' },
    { value: 'Fast', label: 'Performance' },
    { value: 'Free', label: 'Forever' }
]
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="relative min-h-[90vh] flex items-center hero-glow overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"></div>
            </div>

            <UContainer class="relative z-10">
                <div class="max-w-4xl mx-auto text-center">
                    <!-- Badge -->
                    <UBadge color="primary" variant="soft" size="lg" class="mb-6">
                        <UIcon name="i-lucide-sparkles" class="mr-1" />
                        Debian-based Linux Distribution
                    </UBadge>

                    <!-- Headline -->
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Linux, <span class="gradient-text">Refined</span>
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        A Debian-based OS focused on stability, performance, and an exceptional out-of-box experience. 
                        Built for developers. Designed for everyone.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <UButton to="#download" size="xl" color="primary" class="px-8">
                            <UIcon name="i-lucide-download" class="mr-2" />
                            Download LeiOS
                        </UButton>
                        <UButton to="https://github.com/LeiOS-project" target="_blank" size="xl" color="neutral" variant="outline" class="px-8">
                            <UIcon name="i-lucide-github" class="mr-2" />
                            View on GitHub
                        </UButton>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                        <div v-for="stat in stats" :key="stat.label" class="text-center">
                            <div class="text-2xl md:text-3xl font-bold text-sky-400">{{ stat.value }}</div>
                            <div class="text-slate-500 text-sm">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </UContainer>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <UIcon name="i-lucide-chevron-down" class="text-slate-500 text-2xl" />
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-24 bg-slate-900/50">
            <UContainer>
                <div class="text-center mb-16">
                    <UBadge color="primary" variant="soft" class="mb-4">Features</UBadge>
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">Why Choose LeiOS?</h2>
                    <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                        Every aspect of LeiOS is designed with care to provide you the best Linux experience.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UCard 
                        v-for="feature in features" 
                        :key="feature.title"
                        class="bg-slate-900/50 border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div class="p-2">
                            <div class="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                                <UIcon :name="feature.icon" class="text-2xl text-sky-400" />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                            <p class="text-slate-400">{{ feature.description }}</p>
                        </div>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- Download Section -->
        <section id="download" class="py-24 relative">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent pointer-events-none"></div>
            
            <UContainer class="relative z-10">
                <div class="text-center mb-12">
                    <UBadge color="primary" variant="soft" class="mb-4">Download</UBadge>
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">Get Started with LeiOS</h2>
                    <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                        Download the latest version and experience Linux the way it should be.
                    </p>
                </div>

                <div class="max-w-3xl mx-auto">
                    <UCard class="bg-slate-900/80 border-slate-800">
                        <div class="p-6 text-center">
                            <div class="w-20 h-20 rounded-2xl bg-sky-500/10 flex items-center justify-center mx-auto mb-6">
                                <UIcon name="i-lucide-download" class="text-4xl text-sky-400" />
                            </div>
                            <h3 class="text-2xl font-bold mb-2">LeiOS Latest</h3>
                            <p class="text-slate-400 mb-6">
                                Based on Debian Stable • 64-bit (x86_64)
                            </p>
                            
                            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                                <UButton size="lg" color="primary" class="px-8" disabled>
                                    <UIcon name="i-lucide-download" class="mr-2" />
                                    Download ISO (Coming Soon)
                                </UButton>
                            </div>

                            <p class="text-slate-500 text-sm">
                                Check our 
                                <NuxtLink to="https://blog.leicraftmc.de/tag/leios/" target="_blank" class="text-sky-400 hover:underline">blog</NuxtLink>
                                for release announcements and updates.
                            </p>
                        </div>
                    </UCard>

                    <!-- Source Code Links -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <UCard class="bg-slate-900/50 border-slate-800 hover:border-sky-500/50 transition-colors">
                            <NuxtLink to="https://git.leicraftmc.de/LeiOS/" target="_blank" class="flex items-center gap-4 p-2">
                                <div class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                                    <UIcon name="i-lucide-git-branch" class="text-xl text-sky-400" />
                                </div>
                                <div>
                                    <h4 class="font-semibold">Main Repository</h4>
                                    <p class="text-slate-400 text-sm">git.leicraftmc.de/LeiOS</p>
                                </div>
                                <UIcon name="i-lucide-external-link" class="ml-auto text-slate-500" />
                            </NuxtLink>
                        </UCard>

                        <UCard class="bg-slate-900/50 border-slate-800 hover:border-sky-500/50 transition-colors">
                            <NuxtLink to="https://github.com/LeiOS-project" target="_blank" class="flex items-center gap-4 p-2">
                                <div class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                                    <UIcon name="i-lucide-github" class="text-xl text-sky-400" />
                                </div>
                                <div>
                                    <h4 class="font-semibold">GitHub Mirror</h4>
                                    <p class="text-slate-400 text-sm">github.com/LeiOS-project</p>
                                </div>
                                <UIcon name="i-lucide-external-link" class="ml-auto text-slate-500" />
                            </NuxtLink>
                        </UCard>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Community Section -->
        <section id="community" class="py-24 bg-slate-900/50">
            <UContainer>
                <div class="text-center mb-12">
                    <UBadge color="primary" variant="soft" class="mb-4">Community</UBadge>
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">Join the Community</h2>
                    <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                        Connect with other LeiOS users, get help, and contribute to the project.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <!-- Discord -->
                    <UCard class="bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
                        <NuxtLink to="https://discord.gg/8YC5BXjCc5" target="_blank" class="block p-4 text-center">
                            <div class="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-lucide-message-circle" class="text-3xl text-indigo-400" />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Discord</h3>
                            <p class="text-slate-400 text-sm mb-4">
                                Chat with the community, get support, and share your experience.
                            </p>
                            <UButton color="neutral" variant="soft" size="sm">
                                Join Server
                                <UIcon name="i-lucide-external-link" class="ml-1" />
                            </UButton>
                        </NuxtLink>
                    </UCard>

                    <!-- Blog -->
                    <UCard class="bg-slate-900/80 border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                        <NuxtLink to="https://blog.leicraftmc.de/tag/leios/" target="_blank" class="block p-4 text-center">
                            <div class="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-lucide-newspaper" class="text-3xl text-orange-400" />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Blog</h3>
                            <p class="text-slate-400 text-sm mb-4">
                                Stay updated with the latest news, releases, and development updates.
                            </p>
                            <UButton color="neutral" variant="soft" size="sm">
                                Read Blog
                                <UIcon name="i-lucide-external-link" class="ml-1" />
                            </UButton>
                        </NuxtLink>
                    </UCard>

                    <!-- Contribute -->
                    <UCard class="bg-slate-900/80 border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
                        <NuxtLink to="https://github.com/LeiOS-project" target="_blank" class="block p-4 text-center">
                            <div class="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-lucide-git-pull-request" class="text-3xl text-green-400" />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Contribute</h3>
                            <p class="text-slate-400 text-sm mb-4">
                                Help us improve LeiOS. Every contribution makes a difference.
                            </p>
                            <UButton color="neutral" variant="soft" size="sm">
                                Get Started
                                <UIcon name="i-lucide-external-link" class="ml-1" />
                            </UButton>
                        </NuxtLink>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- CTA Section -->
        <section class="py-24 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-sky-500/10 pointer-events-none"></div>
            
            <UContainer class="relative z-10">
                <div class="text-center max-w-3xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Try <span class="gradient-text">LeiOS</span>?
                    </h2>
                    <p class="text-slate-400 text-lg mb-8">
                        Experience a Linux distribution that just works. Stable, fast, and designed with you in mind.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <UButton to="#download" size="xl" color="primary" class="px-8">
                            <UIcon name="i-lucide-download" class="mr-2" />
                            Download Now
                        </UButton>
                        <UButton to="https://discord.gg/8YC5BXjCc5" target="_blank" size="xl" color="neutral" variant="outline" class="px-8">
                            <UIcon name="i-lucide-message-circle" class="mr-2" />
                            Join Discord
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

<style scoped>

</style>
