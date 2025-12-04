<script setup lang="ts">
interface NavLink {
    label: string
    to: string
    external?: boolean
}

interface Props {
    links: NavLink[]
}

defineProps<Props>()
</script>

<template>
    <nav class="app-nav">
        <ul class="nav-list">
            <li v-for="link in links" :key="link.label">
                <NuxtLink 
                    :to="link.to" 
                    :target="link.external ? '_blank' : undefined"
                    class="nav-link"
                >
                    {{ link.label }}
                    <UIcon v-if="link.external" name="i-lucide-external-link" class="external-icon" />
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.app-nav {
    display: none;
}

@media (min-width: 768px) {
    .app-nav {
        display: block;
    }
}

.nav-list {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: rgb(148 163 184);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    transition: color 0.2s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: rgb(56 189 248);
    transition: width 0.2s ease;
}

.nav-link:hover {
    color: rgb(241 245 249);
}

.nav-link:hover::after {
    width: 100%;
}

.external-icon {
    font-size: 0.75rem;
    opacity: 0.7;
}
</style>
