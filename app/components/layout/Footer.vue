<script setup lang="ts">
const socialLinks = [
    { icon: 'i-lucide-github', to: 'https://github.com/LeiOS-project', label: 'GitHub' },
    { icon: 'i-lucide-message-circle', to: 'https://discord.gg/8YC5BXjCc5', label: 'Discord' }
]

const resourceLinks = [
    { label: 'Blog', to: 'https://blog.leicraftmc.de/tag/leios/' },
    { label: 'Source Code', to: 'https://git.leicraftmc.de/LeiOS/' },
    { label: 'GitHub', to: 'https://github.com/LeiOS-project' }
]

const communityLinks = [
    { label: 'Discord', to: 'https://discord.gg/8YC5BXjCc5' },
    { label: 'Contribute', to: 'https://github.com/LeiOS-project' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="app-footer">
        <UContainer class="footer-container">
            <div class="footer-grid">
                <!-- Brand -->
                <div class="footer-brand">
                    <span class="logo-text">LeiOS</span>
                    <p class="brand-description">
                        A Debian-based operating system focused on stability, performance, and an exceptional out-of-box experience. Built by developers, for everyone.
                    </p>
                    <div class="social-links">
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
                    </div>
                </div>

                <!-- Resources -->
                <div class="footer-section">
                    <h4 class="section-title">Resources</h4>
                    <ul class="link-list">
                        <li v-for="link in resourceLinks" :key="link.label">
                            <NuxtLink :to="link.to" target="_blank" class="footer-link">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Community -->
                <div class="footer-section">
                    <h4 class="section-title">Community</h4>
                    <ul class="link-list">
                        <li v-for="link in communityLinks" :key="link.label">
                            <NuxtLink :to="link.to" target="_blank" class="footer-link">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">
                    © {{ currentYear }} LeiOS Project. Open Source under GPL License.
                </p>
                <p class="tagline">
                    Built with ❤️ for the community
                </p>
            </div>
        </UContainer>
    </footer>
</template>

<style scoped>
.app-footer {
    border-top: 1px solid rgb(30 41 59);
    background: rgb(2 6 23 / 0.5);
}

.footer-container {
    padding: 3rem 1rem;
}

@media (min-width: 640px) {
    .footer-container {
        padding: 3rem 1.5rem;
    }
}

.footer-grid {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

@media (min-width: 768px) {
    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 2rem;
    }
}

.footer-brand {
    max-width: 100%;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, rgb(56 189 248), rgb(125 211 252));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

.brand-description {
    margin-top: 1rem;
    color: rgb(148 163 184);
    max-width: 100%;
    line-height: 1.6;
    font-size: 0.9375rem;
}

@media (min-width: 768px) {
    .brand-description {
        max-width: 28rem;
    }
}

.social-links {
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
}

.social-btn {
    transition: transform 0.2s ease, color 0.2s ease;
}

.social-btn:hover {
    transform: scale(1.1);
    color: rgb(56 189 248);
}

.footer-section {
    min-width: 0;
}

.section-title {
    font-weight: 600;
    color: rgb(241 245 249);
    margin-bottom: 0.75rem;
    font-size: 0.9375rem;
}

.link-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-link {
    color: rgb(148 163 184);
    text-decoration: none;
    transition: color 0.2s ease;
    font-size: 0.9375rem;
    display: inline-block;
    padding: 0.25rem 0;
}

.footer-link:hover {
    color: rgb(56 189 248);
}

.footer-bottom {
    border-top: 1px solid rgb(30 41 59);
    margin-top: 2rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
}

@media (min-width: 768px) {
    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}

.copyright,
.tagline {
    color: rgb(100 116 139);
    font-size: 0.8125rem;
}

@media (min-width: 640px) {
    .copyright,
    .tagline {
        font-size: 0.875rem;
    }
}
</style>
