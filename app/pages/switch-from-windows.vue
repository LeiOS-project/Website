<script setup lang="ts">
import SectionHeader from "~/components/site/SectionHeader.vue";

usePageSeo({
	title: "Switch from Windows to LeiOS",
	description:
		"Moving from Windows to LeiOS: what feels the same, which apps replace your Windows programs, gaming, what's different, and a step-by-step plan to switch.",
	ogImage: "https://www.leios.dev/static/og/leios-desktop.jpg",
});

const reasons = [
	{
		icon: "i-lucide-badge-euro",
		title: "Free, for real",
		description: "No license key, no subscription, no upsell. LeiOS and its updates cost nothing.",
	},
	{
		icon: "i-lucide-laptop",
		title: "Runs on the PC you have",
		description:
			"No TPM chip or CPU list required. Windows 10 is out of support, but your computer doesn't have to be.",
	},
	{
		icon: "i-lucide-eye-off",
		title: "No ads, no account",
		description:
			"No ads in the start menu, no online account to sign in, and LeiOS collects no usage data.",
	},
	{
		icon: "i-lucide-clock",
		title: "Updates when you want",
		description: "You decide when to update. LeiOS never restarts your computer on its own.",
	},
	{
		icon: "i-lucide-shield-check",
		title: "Safer by design",
		description:
			"Apps come from signed, trusted sources instead of random downloads, and Windows malware can't run on LeiOS.",
	},
	{
		icon: "i-lucide-paintbrush",
		title: "Make it yours",
		description:
			"Panels, themes, shortcuts, window behavior: KDE Plasma lets you change almost everything.",
	},
];

const sameThings = [
	{ windows: "Start menu", leios: "Application Launcher, in the same corner", keys: "Windows key" },
	{ windows: "Taskbar and system tray", leios: "The panel at the bottom of the screen", keys: "" },
	{ windows: "File Explorer", leios: "Dolphin", keys: "Windows + E" },
	{ windows: "Settings and Control Panel", leios: "System Settings", keys: "" },
	{ windows: "Microsoft Store", leios: "Discover", keys: "" },
	{ windows: "Task Manager", leios: "System Monitor", keys: "Ctrl + Esc" },
	{ windows: "Snipping Tool", leios: "Spectacle", keys: "Print" },
	{ windows: "Switch windows", leios: "The same", keys: "Alt + Tab" },
	{ windows: "Snap windows to a side", leios: "The same", keys: "Windows + arrow keys" },
	{ windows: "Lock the screen", leios: "The same", keys: "Windows + L" },
	{ windows: "Clipboard history", leios: "The same", keys: "Windows + V" },
	{ windows: "Emoji picker", leios: "The same", keys: "Windows + ." },
];

const apps = [
	{
		windows: "Edge or Chrome",
		leios: "Firefox (installed); Chrome, Edge, Brave and Chromium from Flathub",
	},
	{ windows: "Microsoft Office", leios: "LibreOffice (installed), or Microsoft 365 in the browser" },
	{
		windows: "Outlook",
		leios: "KMail (installed), Thunderbird from Flathub, or Outlook on the web",
	},
	{ windows: "Photos and Paint", leios: "Gwenview and GIMP (installed), Krita from Flathub" },
	{ windows: "Notepad", leios: "KWrite and Kate (installed)" },
	{ windows: "Media Player", leios: "Dragon Player and JuK (installed), VLC from Flathub" },
	{ windows: "7-Zip or WinRAR", leios: "Ark (installed): ZIP, 7z, RAR and more" },
	{ windows: "Spotify, Discord, Steam, Zoom", leios: "The same apps, from Flathub" },
	{ windows: "Visual Studio Code", leios: "The same app, from Flathub" },
	{ windows: "Teams", leios: "Teams in the browser" },
];

const differences = [
	{
		icon: "i-lucide-store",
		title: "Apps come from Discover, not .exe files",
		description:
			"Instead of downloading installers from websites, you search Discover and click Install. Windows programs don't run directly; for some, compatibility tools like Bottles (from Flathub) help.",
	},
	{
		icon: "i-lucide-ban",
		title: "Some programs have no Linux version",
		description:
			"The desktop versions of Microsoft Office and Adobe Creative Cloud are not available. Use LibreOffice, GIMP and Krita, or the web versions of Microsoft 365.",
	},
	{
		icon: "i-lucide-folder-tree",
		title: "No C: drive",
		description:
			"Your files live in your home folder, in Documents, Downloads, Pictures and so on. USB sticks and other drives show up in Dolphin's sidebar.",
	},
	{
		icon: "i-lucide-terminal",
		title: "A terminal, when you want it",
		description:
			"Everyday tasks need no commands. For some advanced steps, these docs give you a command to copy into Konsole, the terminal app.",
	},
];

const steps = [
	{
		title: "List the apps you use",
		description:
			"Check the table above for each one. Most have a LeiOS version or a good alternative.",
		to: "#apps",
	},
	{
		title: "Back up your files",
		description:
			"Copy your documents, pictures and other files to an external drive or cloud storage. If you keep Windows and use BitLocker, write down your recovery key.",
		to: "/docs/getting-started/dual-boot#before-you-start",
	},
	{
		title: "Try LeiOS live",
		description: "Start LeiOS from a USB stick. Nothing on your computer changes until you install.",
		to: "/docs/getting-started/create-a-bootable-usb",
	},
	{
		title: "Install: replace Windows or keep both",
		description:
			"Erase the disk for a clean start, or install LeiOS next to Windows and pick one at startup.",
		to: "/docs/getting-started/installation",
	},
	{
		title: "Bring your files and apps",
		description: "Copy your files back into your home folder and install your apps from Discover.",
		to: "/docs/getting-started/first-steps",
	},
];

const faq = [
	{
		label: "Is LeiOS really free?",
		content:
			"Yes. LeiOS, its updates and the apps in Discover's default sources cost nothing. There is no trial period, no license key and no paid edition.",
	},
	{
		label: "Can I keep Windows?",
		content:
			"Yes. The installer can put LeiOS next to Windows, and you pick one when the computer starts. The dual boot guide in the docs walks you through it, including how to make room on the disk safely.",
	},
	{
		label: "Can I play my games?",
		content:
			"Many of them. Steam from Flathub runs a large part of the Windows game library through Proton, Valve's compatibility layer; check a game on ProtonDB before you switch. Some online games with anti-cheat that blocks Linux don't run.",
	},
	{
		label: "Do I need an antivirus?",
		content:
			"Windows malware can't run on LeiOS, and your apps come from signed, trusted sources. Install updates when Discover offers them and avoid running scripts you don't understand, and you are well protected.",
	},
	{
		label: "Do I have to use the terminal?",
		content:
			"No. Installing apps, updating, changing settings and managing files all work with the mouse. The terminal is there for advanced tasks, and the docs always give you the exact command.",
	},
	{
		label: "Can I go back to Windows?",
		content:
			"Yes. You can install Windows again at any time with Microsoft's installation media, or keep it from the start with a dual boot setup.",
	},
];
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)] pb-20 pt-20 sm:pt-24">
            <UContainer class="relative z-10">
                <div class="mx-auto max-w-3xl text-center">
                    <UBadge color="primary" variant="soft" size="xl" class="mb-6 inline-flex items-center gap-1">
                        <UIcon name="i-lucide-arrow-right-left" />
                        Switch from Windows
                    </UBadge>
                    <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Leaving Windows?
                        <span class="bg-linear-to-tr from-sky-400 to-sky-200 bg-clip-text text-transparent">You'll feel at home.</span>
                    </h1>
                    <p class="mb-8 text-lg text-slate-400 sm:text-xl">
                        LeiOS works the way you expect: a taskbar, a start menu, your files in folders. Here is what stays
                        the same, what changes, and how to move over without losing anything.
                    </p>
                    <div class="flex flex-col justify-center gap-4 sm:flex-row">
                        <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                            Download LeiOS
                        </UButton>
                        <UButton to="#how-to-switch" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-list-ordered">
                            How to switch
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Why -->
        <section id="why" class="bg-slate-950/50 py-20">
            <UContainer>
                <SectionHeader
                    badge="Why switch"
                    title="What you get with LeiOS"
                    description="A modern desktop that respects you and your computer."
                />
                <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <div v-for="reason in reasons" :key="reason.title" class="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10">
                            <UIcon :name="reason.icon" class="text-xl text-sky-400" />
                        </div>
                        <h3 class="mb-2 text-lg font-semibold">{{ reason.title }}</h3>
                        <p class="leading-relaxed text-slate-400">{{ reason.description }}</p>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Familiar -->
        <section id="familiar" class="py-20">
            <UContainer>
                <SectionHeader
                    badge="Familiar"
                    title="What stays the same"
                    description="The things you use every day have a direct counterpart, often with the same shortcut."
                />
                <UCard class="mx-auto max-w-4xl overflow-x-auto border-slate-800 bg-slate-900/50">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="border-b border-slate-800 text-sm text-slate-400">
                                <th scope="col" class="py-3 pr-4 font-medium">On Windows</th>
                                <th scope="col" class="py-3 pr-4 font-medium">On LeiOS</th>
                                <th scope="col" class="py-3 font-medium">Shortcut</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800">
                            <tr v-for="row in sameThings" :key="row.windows">
                                <td class="py-3 pr-4 text-slate-300">{{ row.windows }}</td>
                                <td class="py-3 pr-4 text-slate-100">{{ row.leios }}</td>
                                <td class="py-3">
                                    <UKbd v-if="row.keys" :value="row.keys" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </UCard>
                <p class="mx-auto mt-4 max-w-4xl text-center text-sm text-slate-500">
                    On Linux the Windows key is often called the <em>Meta</em> or <em>Super</em> key.
                    <NuxtLink to="/docs/usage/desktop" class="text-sky-400 hover:underline">More about the desktop</NuxtLink>
                </p>
            </UContainer>
        </section>

        <!-- Apps -->
        <section id="apps" class="scroll-mt-20 bg-slate-950/50 py-20">
            <UContainer>
                <SectionHeader
                    badge="Apps"
                    title="Your apps on LeiOS"
                    description="Many apps you know run on LeiOS as they are. For the rest, there is a good alternative."
                />
                <UCard class="mx-auto max-w-4xl overflow-x-auto border-slate-800 bg-slate-900/50">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="border-b border-slate-800 text-sm text-slate-400">
                                <th scope="col" class="py-3 pr-4 font-medium">On Windows</th>
                                <th scope="col" class="py-3 font-medium">On LeiOS</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800">
                            <tr v-for="row in apps" :key="row.windows">
                                <td class="py-3 pr-4 text-slate-300">{{ row.windows }}</td>
                                <td class="py-3 text-slate-100">{{ row.leios }}</td>
                            </tr>
                        </tbody>
                    </table>
                </UCard>

                <div class="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
                    <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                        <h3 class="mb-2 flex items-center gap-2 text-lg font-semibold">
                            <UIcon name="i-lucide-gamepad-2" class="text-sky-400" />
                            Gaming
                        </h3>
                        <p class="leading-relaxed text-slate-400">
                            Install Steam from Flathub and turn on Steam Play: Proton runs a large part of the Windows game
                            library. Check your games on
                            <NuxtLink to="https://www.protondb.com" target="_blank" class="text-sky-400 hover:underline">ProtonDB</NuxtLink>
                            first. Some online games with anti-cheat that blocks Linux don't run.
                        </p>
                    </div>
                    <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                        <h3 class="mb-2 flex items-center gap-2 text-lg font-semibold">
                            <UIcon name="i-lucide-store" class="text-sky-400" />
                            Installing apps
                        </h3>
                        <p class="leading-relaxed text-slate-400">
                            Open Discover, search for the app, click Install. That's it. Updates for all your apps arrive
                            in the same place.
                        </p>
                        <UButton to="/docs/usage/installing-apps" color="primary" variant="link" class="mt-2 px-0" trailing-icon="i-lucide-arrow-right">
                            How to install apps
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Differences -->
        <section id="different" class="py-20">
            <UContainer>
                <SectionHeader
                    badge="Good to know"
                    title="What's different"
                    description="LeiOS is not Windows. These are the changes worth knowing before you switch."
                />
                <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    <div v-for="item in differences" :key="item.title" class="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10">
                            <UIcon :name="item.icon" class="text-xl text-sky-400" />
                        </div>
                        <div>
                            <h3 class="mb-2 text-lg font-semibold">{{ item.title }}</h3>
                            <p class="leading-relaxed text-slate-400">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- How to switch -->
        <section id="how-to-switch" class="scroll-mt-20 bg-slate-950/50 py-20">
            <UContainer>
                <SectionHeader
                    badge="Step by step"
                    title="How to switch"
                    description="Take it one step at a time. You can stop after trying LeiOS live; nothing changes until you install."
                />
                <ol class="mx-auto max-w-3xl space-y-4">
                    <li v-for="(step, index) in steps" :key="step.title">
                        <NuxtLink
                            :to="step.to"
                            class="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-sky-400/50"
                        >
                            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-bold text-slate-950">
                                {{ index + 1 }}
                            </span>
                            <div class="flex-1">
                                <h3 class="font-semibold text-slate-100 group-hover:text-sky-400">{{ step.title }}</h3>
                                <p class="text-slate-400">{{ step.description }}</p>
                            </div>
                            <UIcon name="i-lucide-arrow-right" class="mt-1 shrink-0 text-slate-500 group-hover:text-sky-400" />
                        </NuxtLink>
                    </li>
                </ol>
            </UContainer>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-20">
            <UContainer>
                <SectionHeader badge="FAQ" title="Questions from Windows users" />
                <UAccordion :items="faq" class="mx-auto max-w-3xl" :ui="{ trigger: 'text-base', body: 'text-slate-400 leading-relaxed' }" />
                <p class="mx-auto mt-8 max-w-3xl text-center text-slate-400">
                    More answers in the <NuxtLink to="/docs/faq" class="text-sky-400 hover:underline">FAQ</NuxtLink>.
                </p>

                <div class="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                    <UButton to="/download" size="xl" color="primary" class="justify-center px-8" icon="i-lucide-download">
                        Download LeiOS
                    </UButton>
                    <UButton to="/docs/getting-started/dual-boot" size="xl" color="neutral" variant="outline" class="justify-center px-8" icon="i-lucide-split">
                        Dual boot guide
                    </UButton>
                </div>
            </UContainer>
        </section>
    </div>
</template>
