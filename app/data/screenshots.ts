/** Screenshots shown on the landing and features pages; files live in public/static/screenshots/. */
export interface Screenshot {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
}

export const screenshots: Screenshot[] = [
	{
		src: "/static/screenshots/desktop.webp",
		alt: "The LeiOS desktop: KDE Plasma with the LeiOS wallpaper, a centered taskbar and a Konsole window running fastfetch.",
		caption: "The LeiOS desktop with KDE Plasma 6, the LeiOS theme and Konsole.",
		width: 1920,
		height: 1080,
	},
];
