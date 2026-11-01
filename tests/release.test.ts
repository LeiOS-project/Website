/// <reference types="bun-types/test.d.ts" />
import { describe, expect, test } from "bun:test";
import { formatImageSize, latestImage } from "../app/data/release";

describe("download image data", () => {
	test("the file name, URL and version agree", () => {
		expect(latestImage.fileName).toMatch(
			new RegExp(
				`^leios-live-${latestImage.version.replaceAll(".", "\\.")}-\\d{8}-amd64\\.hybrid\\.iso$`,
			),
		);
		expect(latestImage.url).toStartWith("https://");
		expect(latestImage.url).toEndWith(`/${latestImage.fileName}`);
		expect(latestImage.fileName).toContain(latestImage.date.replaceAll("-", ""));
	});

	test("the checksum is a SHA-256 hex digest", () => {
		expect(latestImage.sha256).toMatch(/^[0-9a-f]{64}$/);
	});

	test("the size is formatted in decimal gigabytes", () => {
		expect(formatImageSize(3_106_269_184)).toBe("3.1 GB");
	});
});
