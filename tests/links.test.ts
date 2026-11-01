/// <reference types="bun-types/test.d.ts" />
import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
// The slugger @nuxtjs/mdc uses for heading ids (runtime/parser/compiler.js).
import Slugger from "github-slugger";
import { docsPagesFlat } from "../app/data/docs";

const rootDir = join(import.meta.dir, "..");
const contentDir = join(rootDir, "content");
const pagesDir = join(rootDir, "app/pages");

/** Site pages outside the docs, with the file that renders each. */
const sitePages: Record<string, string> = {
	"/": "index.vue",
	"/download": "download.vue",
	"/features": "features.vue",
	"/switch-from-windows": "switch-from-windows.vue",
};

function contentFileFor(route: string): string {
	return join(contentDir, route === "/docs" ? "docs/index.md" : `${route.slice(1)}.md`);
}

/** Heading ids of a Markdown page, as @nuxtjs/mdc generates them. */
function headingIds(markdown: string): Set<string> {
	const slugger = new Slugger();
	const ids = new Set<string>();
	const withoutCode = markdown.replace(/^\s*```[\s\S]*?^\s*```/gm, "");
	for (const [, text] of withoutCode.matchAll(/^#{1,6}\s+(.+)$/gm)) {
		const plain = (text ?? "")
			.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
			.replace(/[*`]/g, "")
			.trim();
		ids.add(slugger.slug(plain).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1"));
	}
	return ids;
}

interface Link {
	source: string;
	target: string;
}

async function collectLinks(): Promise<Link[]> {
	const links: Link[] = [];
	for await (const file of new Bun.Glob("**/*.md").scan({ cwd: contentDir })) {
		const source = await readFile(join(contentDir, file), "utf-8");
		for (const [, target] of source.matchAll(/\]\((\/[^)\s]*)\)/g))
			links.push({ source: file, target: target ?? "" });
		for (const [, target] of source.matchAll(/^\s*to:\s*(\/\S*)\s*$/gm))
			links.push({ source: file, target: target ?? "" });
	}
	for await (const file of new Bun.Glob("app/**/*.{vue,ts}").scan({ cwd: rootDir })) {
		const source = await readFile(join(rootDir, file), "utf-8");
		for (const [, target] of source.matchAll(/\bto(?:=|:\s*)"(\/[^"]*)"/g))
			links.push({ source: file, target: target ?? "" });
	}
	return links;
}

describe("internal links", () => {
	test("every internal link points to an existing page and anchor", async () => {
		const docsRoutes = new Set(docsPagesFlat.map((page) => page.to));
		const broken: string[] = [];

		for (const { source, target } of await collectLinks()) {
			const [path = "", anchor] = target.split("#");
			if (path === "" || path.startsWith("/static/")) continue;

			if (docsRoutes.has(path)) {
				if (anchor && !headingIds(await readFile(contentFileFor(path), "utf-8")).has(anchor)) {
					broken.push(`${source}: ${target} (no such heading)`);
				}
			} else if (path in sitePages) {
				const page = await readFile(join(pagesDir, sitePages[path] ?? ""), "utf-8");
				if (anchor && !page.includes(`id="${anchor}"`) && !page.includes(`id: "${anchor}"`)) {
					broken.push(`${source}: ${target} (no such id)`);
				}
			} else {
				broken.push(`${source}: ${target} (no such page)`);
			}
		}

		expect(broken).toEqual([]);
	});
});
