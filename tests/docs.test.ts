/// <reference types="bun-types/test.d.ts" />
import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { docsPagesFlat } from "../app/data/docs";

const rootDir = join(import.meta.dir, "..");
const contentDir = join(rootDir, "content");

/** `/docs/usage/release-channels` ↔ `docs/usage/release-channels.md`; `/docs` ↔ `docs/index.md`. */
function routeToContentFile(route: string): string {
	return route === "/docs" ? "docs/index.md" : `${route.slice(1)}.md`;
}

async function contentFiles(): Promise<string[]> {
	const files: string[] = [];
	for await (const file of new Bun.Glob("docs/**/*.md").scan({ cwd: contentDir })) {
		files.push(file.replaceAll("\\", "/"));
	}
	return files;
}

describe("docs navigation", () => {
	test("every page in app/data/docs.ts has a Markdown file", async () => {
		const files = await contentFiles();
		const missing = docsPagesFlat
			.map((page) => routeToContentFile(page.to))
			.filter((file) => !files.includes(file));
		expect(missing).toEqual([]);
	});

	test("every Markdown file is registered in app/data/docs.ts", async () => {
		const registered = docsPagesFlat.map((page) => routeToContentFile(page.to));
		const unregistered = (await contentFiles()).filter((file) => !registered.includes(file));
		expect(unregistered).toEqual([]);
	});

	test("every docs page is listed in the sitemap", async () => {
		const sitemap = await readFile(join(rootDir, "public/static/utils/sitemap.xml"), "utf-8");
		const missing = docsPagesFlat.filter(
			(page) => !sitemap.includes(`<loc>https://www.leios.dev${page.to}</loc>`),
		);
		expect(missing.map((page) => page.to)).toEqual([]);
	});

	test("page paths are unique", () => {
		const paths = docsPagesFlat.map((page) => page.to);
		expect(new Set(paths).size).toBe(paths.length);
	});
});
