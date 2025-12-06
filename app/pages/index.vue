<script setup lang="ts">
useSeoMeta({
    title: 'LeiOS - Debian-based OS for Developers',
    description: 'LeiOS is a Debian-based operating system focused on stability, great performance, and an exceptional out-of-box experience. Perfect for developers and everyday users alike.',
    ogTitle: 'LeiOS - Debian-based OS for Developers',
    ogDescription: 'A stable, performant Linux distribution with a focus on developer experience and ease of use.',
    ogType: 'website',
    ogUrl: 'https://www.leios.dev',
    ogSiteName: 'LeiOS',
    ogLocale: 'de_DE',
    ogImage: 'https://www.leios.dev/static/logo/logo.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'LeiOS - Debian-based OS for Developers',
    twitterDescription: 'A stable, performant Linux distribution with a focus on developer experience and ease of use.',
    twitterImage: 'https://www.leios.dev/static/logo/logo.png',
})

// Structured Data (JSON-LD) für bessere Suchmaschinenindexierung
useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'LeiOS',
                applicationCategory: 'OperatingSystem',
                operatingSystem: 'Linux',
                description: 'LeiOS is a Debian-based operating system focused on stability, great performance, and an exceptional out-of-box experience.',
                url: 'https://leios.dev',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD'
                },
                author: {
                    '@type': 'Organization',
                    name: 'LeiOS Project',
                    url: 'https://leios.dev'
                }
            })
        }
    ]
})

definePageMeta({
    layout: 'default'
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

const communityCards = [
    {
        to: 'https://discord.gg/8YC5BXjCc5',
        icon: 'i-lucide-message-circle',
        title: 'Discord',
        description: 'Chat with the community, get support, and share your experience.',
        buttonText: 'Join Server',
        color: 'indigo'
    },
    {
        to: 'https://blog.leicraftmc.de/tag/leios/',
        icon: 'i-lucide-newspaper',
        title: 'Blog',
        description: 'Stay updated with the latest news, releases, and development updates.',
        buttonText: 'Read Blog',
        color: 'orange'
    },
    {
        to: 'https://github.com/LeiOS-project',
        icon: 'i-lucide-git-pull-request',
        title: 'Contribute',
        description: 'Help us improve LeiOS. Every contribution makes a difference.',
        buttonText: 'Get Started',
        color: 'green'
    }
]

const sourceLinks = [
    {
        to: 'https://git.leicraftmc.de/LeiOS/',
        icon: 'i-lucide-git-branch',
        title: 'Main Repository',
        subtitle: 'git.leicraftmc.de/LeiOS'
    },
    {
        to: 'https://github.com/LeiOS-project',
        icon: 'i-lucide-github',
        title: 'GitHub Mirror',
        subtitle: 'github.com/LeiOS-project'
    }
]
</script>

<template>
    <div class="home-page">
        <!-- Hero Section -->
        <section class="hero-section hero-glow">
            <!-- Background decoration -->
            <div class="hero-bg-decoration">
                <div class="glow-orb glow-orb--top"></div>
                <div class="glow-orb glow-orb--bottom"></div>
            </div>

            <UContainer class="hero-content">
                <div class="hero-inner">
                    <!-- Badge -->
                    <UBadge color="primary" variant="soft" size="lg" class="hero-badge">
                        <UIcon name="i-lucide-sparkles" class="badge-icon" />
                        Debian-based Linux Distribution
                    </UBadge>

                    <!-- Headline -->
                    <h1 class="hero-title">
                        Linux, <span class="gradient-text">Refined</span>
                    </h1>

                    <!-- Subtitle -->
                    <p class="hero-subtitle">
                        A Debian-based OS focused on stability, performance, and an exceptional out-of-box experience. 
                        Built for developers. Designed for everyone.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="hero-actions">
                        <UButton to="#download" size="xl" color="primary" class="cta-btn">
                            <UIcon name="i-lucide-download" class="btn-icon" />
                            Download LeiOS
                        </UButton>
                        <UButton to="https://github.com/LeiOS-project" target="_blank" size="xl" color="neutral" variant="outline" class="cta-btn">
                            <UIcon name="i-lucide-github" class="btn-icon" />
                            View on GitHub
                        </UButton>
                    </div>

                    <!-- Stats -->
                    <div class="stats-grid">
                        <div v-for="stat in stats" :key="stat.label" class="stat-item">
                            <div class="stat-value">{{ stat.value }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </UContainer>

            <!-- Scroll indicator -->
            <div class="scroll-indicator">
                <UIcon name="i-lucide-chevron-down" class="scroll-icon" />
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="features-section">
            <UContainer>
                <header class="section-header">
                    <UBadge color="primary" variant="soft">Features</UBadge>
                    <h2 class="section-title">Why Choose LeiOS?</h2>
                    <p class="section-description">
                        Every aspect of LeiOS is designed with care to provide you the best Linux experience.
                    </p>
                </header>

                <div class="features-grid">
                    <UCard 
                        v-for="feature in features" 
                        :key="feature.title"
                        class="feature-card"
                    >
                        <div class="feature-content">
                            <div class="feature-icon-wrapper">
                                <UIcon :name="feature.icon" class="feature-icon" />
                            </div>
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-description">{{ feature.description }}</p>
                        </div>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- Download Section -->
        <section id="download" class="download-section">
            <div class="download-bg-gradient"></div>
            
            <UContainer class="download-content">
                <header class="section-header">
                    <UBadge color="primary" variant="soft">Download</UBadge>
                    <h2 class="section-title">Get Started with LeiOS</h2>
                    <p class="section-description">
                        Download the latest version and experience Linux the way it should be.
                    </p>
                </header>

                <div class="download-main">
                    <UCard class="download-card">
                        <div class="download-card-inner">
                            <div class="download-icon-wrapper">
                                <UIcon name="i-lucide-download" class="download-icon" />
                            </div>
                            <h3 class="download-title">LeiOS Latest</h3>
                            <p class="download-info">
                                Based on Debian Stable • 64-bit (x86_64)
                            </p>
                            
                            <div class="download-actions">
                                <UButton size="lg" color="primary" class="download-btn" disabled>
                                    <UIcon name="i-lucide-download" class="btn-icon" />
                                    Download ISO (Coming Soon)
                                </UButton>
                            </div>

                            <p class="download-note">
                                Check our 
                                <NuxtLink to="https://blog.leicraftmc.de/tag/leios/" target="_blank" class="link-highlight">blog</NuxtLink>
                                for release announcements and updates.
                            </p>
                        </div>
                    </UCard>

                    <!-- Source Code Links -->
                    <div class="source-links">
                        <UCard 
                            v-for="link in sourceLinks" 
                            :key="link.title"
                            class="source-card"
                        >
                            <NuxtLink :to="link.to" target="_blank" class="source-link">
                                <div class="source-icon-wrapper">
                                    <UIcon :name="link.icon" class="source-icon" />
                                </div>
                                <div class="source-info">
                                    <h4 class="source-title">{{ link.title }}</h4>
                                    <p class="source-subtitle">{{ link.subtitle }}</p>
                                </div>
                                <UIcon name="i-lucide-external-link" class="external-icon" />
                            </NuxtLink>
                        </UCard>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Community Section -->
        <section id="community" class="community-section">
            <UContainer>
                <header class="section-header">
                    <UBadge color="primary" variant="soft">Community</UBadge>
                    <h2 class="section-title">Join the Community</h2>
                    <p class="section-description">
                        Connect with other LeiOS users, get help, and contribute to the project.
                    </p>
                </header>

                <div class="community-grid">
                    <UCard 
                        v-for="card in communityCards" 
                        :key="card.title"
                        :class="['community-card', `community-card--${card.color}`]"
                    >
                        <NuxtLink :to="card.to" target="_blank" class="community-link">
                            <div :class="['community-icon-wrapper', `community-icon-wrapper--${card.color}`]">
                                <UIcon :name="card.icon" class="community-icon" />
                            </div>
                            <h3 class="community-title">{{ card.title }}</h3>
                            <p class="community-description">{{ card.description }}</p>
                            <UButton color="neutral" variant="soft" size="sm" class="community-btn">
                                {{ card.buttonText }}
                                <UIcon name="i-lucide-external-link" class="btn-icon-sm" />
                            </UButton>
                        </NuxtLink>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="cta-bg-gradient"></div>
            
            <UContainer class="cta-content">
                <div class="cta-inner">
                    <h2 class="cta-title">
                        Ready to Try <span class="gradient-text">LeiOS</span>?
                    </h2>
                    <p class="cta-description">
                        Experience a Linux distribution that just works. Stable, fast, and designed with you in mind.
                    </p>
                    <div class="cta-actions">
                        <UButton to="#download" size="xl" color="primary" class="cta-btn">
                            <UIcon name="i-lucide-download" class="btn-icon" />
                            Download Now
                        </UButton>
                        <UButton to="https://discord.gg/8YC5BXjCc5" target="_blank" size="xl" color="neutral" variant="outline" class="cta-btn">
                            <UIcon name="i-lucide-message-circle" class="btn-icon" />
                            Join Discord
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

<style scoped>
/* ===========================
   Hero Section
   =========================== */
.hero-section {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-bg-decoration {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
}

.glow-orb {
    position: absolute;
    width: 24rem;
    height: 24rem;
    border-radius: 9999px;
    filter: blur(64px);
}

.glow-orb--top {
    top: 25%;
    left: 25%;
    background: rgb(14 165 233 / 0.1);
}

.glow-orb--bottom {
    bottom: 25%;
    right: 25%;
    background: rgb(56 189 248 / 0.05);
}

.hero-content {
    position: relative;
    z-index: 10;
}

.hero-inner {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
}

.hero-badge {
    margin-bottom: 1.5rem;
}

.badge-icon {
    margin-right: 0.25rem;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.025em;
    margin-bottom: 1.5rem;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    color: rgb(148 163 184);
    margin-bottom: 2rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
}

@media (min-width: 640px) {
    .hero-actions {
        flex-direction: row;
    }
}

.cta-btn {
    padding-left: 2rem;
    padding-right: 2rem;
}

.btn-icon {
    margin-right: 0.5rem;
}

.btn-icon-sm {
    margin-left: 0.25rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 32rem;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.stat-item {
    text-align: center;
}

.stat-value {
    font-size: clamp(1.5rem, 4vw, 1.875rem);
    font-weight: 700;
    color: rgb(56 189 248);
}

.stat-label {
    font-size: 0.875rem;
    color: rgb(100 116 139);
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 1s infinite;
}

.scroll-icon {
    font-size: 1.5rem;
    color: rgb(100 116 139);
}

@keyframes bounce {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-10px);
    }
}

/* ===========================
   Section Common Styles
   =========================== */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header :deep(.badge) {
    margin-bottom: 1rem;
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.section-description {
    font-size: 1.125rem;
    color: rgb(148 163 184);
    max-width: 42rem;
    margin: 0 auto;
}

/* ===========================
   Features Section
   =========================== */
.features-section {
    padding: 6rem 0;
    background: rgb(15 23 42 / 0.5);
}

.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .features-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.feature-card {
    background: rgb(15 23 42 / 0.5);
    border-color: rgb(30 41 59);
    transition: all 0.3s ease;
}

.feature-card:hover {
    border-color: rgb(56 189 248 / 0.5);
    transform: translateY(-4px);
}

.feature-content {
    padding: 0.5rem;
}

.feature-icon-wrapper {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: rgb(14 165 233 / 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.feature-icon {
    font-size: 1.5rem;
    color: rgb(56 189 248);
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.feature-description {
    color: rgb(148 163 184);
    line-height: 1.6;
}

/* ===========================
   Download Section
   =========================== */
.download-section {
    padding: 6rem 0;
    position: relative;
}

.download-bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent, rgb(14 165 233 / 0.05), transparent);
    pointer-events: none;
}

.download-content {
    position: relative;
    z-index: 10;
}

.download-main {
    max-width: 48rem;
    margin: 0 auto;
}

.download-card {
    background: rgb(15 23 42 / 0.8);
    border-color: rgb(30 41 59);
}

.download-card-inner {
    padding: 1.5rem;
    text-align: center;
}

.download-icon-wrapper {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background: rgb(14 165 233 / 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.download-icon {
    font-size: 2.5rem;
    color: rgb(56 189 248);
}

.download-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.download-info {
    color: rgb(148 163 184);
    margin-bottom: 1.5rem;
}

.download-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
    .download-actions {
        flex-direction: row;
    }
}

.download-btn {
    padding-left: 2rem;
    padding-right: 2rem;
}

.download-note {
    font-size: 0.875rem;
    color: rgb(100 116 139);
}

.link-highlight {
    color: rgb(56 189 248);
    text-decoration: none;
    transition: text-decoration 0.2s;
}

.link-highlight:hover {
    text-decoration: underline;
}

.source-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
}

@media (min-width: 640px) {
    .source-links {
        grid-template-columns: repeat(2, 1fr);
    }
}

.source-card {
    background: rgb(15 23 42 / 0.5);
    border-color: rgb(30 41 59);
    transition: border-color 0.2s;
}

.source-card:hover {
    border-color: rgb(56 189 248 / 0.5);
}

.source-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    text-decoration: none;
    color: inherit;
}

.source-icon-wrapper {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: rgb(30 41 59);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.source-icon {
    font-size: 1.25rem;
    color: rgb(56 189 248);
}

.source-info {
    flex: 1;
    min-width: 0;
}

.source-title {
    font-weight: 600;
}

.source-subtitle {
    font-size: 0.875rem;
    color: rgb(148 163 184);
}

.external-icon {
    color: rgb(100 116 139);
    flex-shrink: 0;
}

/* ===========================
   Community Section
   =========================== */
.community-section {
    padding: 6rem 0;
    background: rgb(15 23 42 / 0.5);
}

.community-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 56rem;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .community-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.community-card {
    background: rgb(15 23 42 / 0.8);
    border-color: rgb(30 41 59);
    transition: all 0.3s ease;
}

.community-card:hover {
    transform: translateY(-4px);
}

.community-card--indigo:hover {
    border-color: rgb(129 140 248 / 0.5);
}

.community-card--orange:hover {
    border-color: rgb(251 146 60 / 0.5);
}

.community-card--green:hover {
    border-color: rgb(74 222 128 / 0.5);
}

.community-link {
    display: block;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    color: inherit;
}

.community-icon-wrapper {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
}

.community-icon-wrapper--indigo {
    background: rgb(129 140 248 / 0.1);
}

.community-icon-wrapper--orange {
    background: rgb(251 146 60 / 0.1);
}

.community-icon-wrapper--green {
    background: rgb(74 222 128 / 0.1);
}

.community-icon {
    font-size: 2rem;
}

.community-card--indigo .community-icon {
    color: rgb(129 140 248);
}

.community-card--orange .community-icon {
    color: rgb(251 146 60);
}

.community-card--green .community-icon {
    color: rgb(74 222 128);
}

.community-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.community-description {
    font-size: 0.875rem;
    color: rgb(148 163 184);
    margin-bottom: 1rem;
    line-height: 1.5;
}

.community-btn {
    pointer-events: none;
}

/* ===========================
   CTA Section
   =========================== */
.cta-section {
    padding: 6rem 0;
    position: relative;
    overflow: hidden;
}

.cta-bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgb(14 165 233 / 0.1), transparent, rgb(14 165 233 / 0.1));
    pointer-events: none;
}

.cta-content {
    position: relative;
    z-index: 10;
}

.cta-inner {
    text-align: center;
    max-width: 48rem;
    margin: 0 auto;
}

.cta-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.cta-description {
    font-size: 1.125rem;
    color: rgb(148 163 184);
    margin-bottom: 2rem;
}

.cta-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}

@media (min-width: 640px) {
    .cta-actions {
        flex-direction: row;
    }
}

/* ===========================
   Scrollbar Styles
   =========================== */

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgb(15 23 42);
}

::-webkit-scrollbar-thumb {
    background: rgb(56 189 248 / 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(56 189 248 / 0.5);
}

/* Firefox scrollbar */
* {
    scrollbar-width: thin;
    scrollbar-color: rgb(56 189 248 / 0.3) rgb(15 23 42);
}

/* ===========================
   Utility Classes
   =========================== */

/* Gradient text */
.gradient-text {
    background: linear-gradient(135deg, rgb(56 189 248), rgb(125 211 252));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Hero background glow effect */
.hero-glow {
    background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), transparent);
}

/* Glass effect */
.glass {
    background: rgb(15 23 42 / 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgb(30 41 59);
}

/* Card hover effect */
.card-hover {
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-4px);
    border-color: rgb(56 189 248 / 0.5);
}

/* Glow effect on hover */
.glow-hover {
    transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
    box-shadow: 0 0 20px rgb(56 189 248 / 0.3);
}

/* ===========================
   Animation Keyframes
   =========================== */

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 20px rgb(56 189 248 / 0.2);
    }
    50% {
        box-shadow: 0 0 40px rgb(56 189 248 / 0.4);
    }
}

/* Animation utility classes */
.animate-fade-in {
    animation: fade-in 0.6s ease-out;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

</style>
