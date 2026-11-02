/// <reference types="bun-types/test.d.ts" />
import { afterEach, describe, expect, spyOn, test } from "bun:test";
import {
	fetchLatestImage,
	formatImageSize,
	type RegistryPackage,
	type RegistryPackageFile,
	releasePackages,
	toLiveImage,
} from "../app/utils/live-images";

// Shaped like GitLab's responses for LeiOS/live/images (project 5).
const pkg = (
	id: number,
	version: string,
	createdAt: string,
	extra: Partial<RegistryPackage> = {},
) => ({
	id,
	name: `release-${version}`,
	version,
	package_type: "generic",
	status: "default",
	created_at: createdAt,
	...extra,
});

const file = (
	name: string,
	createdAt: string,
	sha256: string | null = "a".repeat(64),
	size = 3_106_269_184,
) => ({
	file_name: name,
	size,
	file_sha256: sha256,
	created_at: createdAt,
});

const release0100 = pkg(21, "0.10.0-20261025", "2026-10-25T19:21:45.499Z");
const files0100: RegistryPackageFile[] = [
	file(
		"leios-live-0.10.0-20261025-amd64.files",
		"2026-10-25T19:21:45.506Z",
		"b".repeat(64),
		18_202_005,
	),
	file(
		"leios-live-0.10.0-20261025-amd64.hybrid.iso",
		"2026-10-25T19:22:17.312Z",
		"89be1c4f1c2d206f7b298ddf7b5af8e43d1e18305a7253f2a369094e2aaff091",
	),
];

describe("releasePackages", () => {
	test("keeps published release packages, newest first", () => {
		const packages = [
			pkg(9, "0.6.0", "2025-11-18T18:46:26.985Z"),
			release0100,
			pkg(30, "0.11.0-20261102", "2026-11-02T10:00:00.000Z", { status: "processing" }),
			{ ...pkg(31, "1.0.0", "2026-11-02T11:00:00.000Z"), name: "something-else" },
			pkg(15, "0.9.0-20260816", "2026-08-16T17:31:15.067Z"),
		];
		expect(releasePackages(packages).map((p) => p.id)).toEqual([21, 15, 9]);
	});
});

describe("toLiveImage", () => {
	test("describes the amd64 image of a dated release", () => {
		expect(toLiveImage(release0100, files0100)).toEqual({
			version: "0.10.0",
			date: "2026-10-25",
			architecture: "amd64",
			fileName: "leios-live-0.10.0-20261025-amd64.hybrid.iso",
			url: "https://git.leicraftmc.de/api/v4/projects/5/packages/generic/release-0.10.0-20261025/0.10.0-20261025/leios-live-0.10.0-20261025-amd64.hybrid.iso",
			sizeBytes: 3_106_269_184,
			sha256: "89be1c4f1c2d206f7b298ddf7b5af8e43d1e18305a7253f2a369094e2aaff091",
		});
	});

	test("takes the date from the file for releases without a date in the version", () => {
		const image = toLiveImage(pkg(12, "0.6.3", "2025-11-20T12:13:52.414Z"), [
			file("leios-live-0.6.3-amd64.hybrid.iso", "2025-11-20T12:14:30.000Z"),
		]);
		expect(image?.version).toBe("0.6.3");
		expect(image?.date).toBe("2025-11-20");
	});

	test("uses the newest upload when an image was uploaded twice", () => {
		const image = toLiveImage(release0100, [
			file("leios-live-0.10.0-20261025-amd64.hybrid.iso", "2026-10-25T19:22:17.312Z", "1".repeat(64)),
			file("leios-live-0.10.0-20261025-amd64.hybrid.iso", "2026-10-25T20:00:00.000Z", "2".repeat(64)),
		]);
		expect(image?.sha256).toBe("2".repeat(64));
	});

	test("skips packages without an amd64 image or checksum", () => {
		expect(
			toLiveImage(release0100, [
				file("leios-live-0.10.0-20261025-amd64.files", "2026-10-25T19:21:45Z"),
			]),
		).toBe(undefined);
		expect(
			toLiveImage(release0100, [
				file("leios-live-0.10.0-20261025-arm64.hybrid.iso", "2026-10-25T19:30:00Z"),
			]),
		).toBe(undefined);
		expect(
			toLiveImage(release0100, [
				file("leios-live-0.10.0-20261025-amd64.hybrid.iso", "2026-10-25T19:22:17Z", null),
			]),
		).toBe(undefined);
	});
});

describe("fetchLatestImage", () => {
	let fetchSpy: ReturnType<typeof spyOn> | undefined;
	afterEach(() => fetchSpy?.mockRestore());

	test("skips a newer release whose image isn't uploaded yet", async () => {
		const responses: Record<string, unknown> = {
			"/projects/5/packages?package_type=generic&order_by=created_at&sort=desc&per_page=20": [
				pkg(22, "0.11.0-20261102", "2026-11-02T10:00:00.000Z"),
				release0100,
			],
			"/projects/5/packages/22/package_files?per_page=100": [
				file("leios-live-0.11.0-20261102-amd64.files", "2026-11-02T10:00:01.000Z"),
			],
			"/projects/5/packages/21/package_files?per_page=100": files0100,
		};
		fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (
			input: string | URL | Request,
		) => {
			const path = String(input).replace("https://git.leicraftmc.de/api/v4", "");
			return path in responses
				? Response.json(responses[path])
				: new Response("not found", { status: 404 });
		}) as typeof fetch);

		expect((await fetchLatestImage()).version).toBe("0.10.0");
	});

	test("fails when the registry can't be read", async () => {
		fetchSpy = spyOn(globalThis, "fetch").mockImplementation(
			(async () =>
				new Response("unavailable", {
					status: 503,
					statusText: "Service Unavailable",
				})) as unknown as typeof fetch,
		);
		await expect(fetchLatestImage()).rejects.toThrow("503");
	});
});

test("formatImageSize uses decimal gigabytes", () => {
	expect(formatImageSize(3_106_269_184)).toBe("3.1 GB");
});
