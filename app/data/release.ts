/**
 * The installer image offered on /download. Update this file when a new image is published to
 * https://git.leicraftmc.de/LeiOS/live/images/-/packages (the registry lists size and SHA-256 per
 * file). Installed systems update themselves, so this only changes the starting point.
 */
export interface LiveImage {
	/** Image version, as in `leios-live-<version>-<date>-<arch>.hybrid.iso`. */
	version: string;
	/** Build date (ISO 8601). */
	date: string;
	architecture: "amd64";
	fileName: string;
	url: string;
	sizeBytes: number;
	sha256: string;
}

const version = "0.10.0";
const buildTag = "20261025";
const fileName = `leios-live-${version}-${buildTag}-amd64.hybrid.iso`;

export const latestImage: LiveImage = {
	version,
	date: "2026-10-25",
	architecture: "amd64",
	fileName,
	url: `https://git.leicraftmc.de/api/v4/projects/5/packages/generic/release-${version}-${buildTag}/${version}-${buildTag}/${fileName}`,
	sizeBytes: 3_106_269_184,
	sha256: "89be1c4f1c2d206f7b298ddf7b5af8e43d1e18305a7253f2a369094e2aaff091",
};

/** `3_106_269_184` → `"3.1 GB"` (decimal units, like file managers and download dialogs). */
export function formatImageSize(bytes: number): string {
	return `${(bytes / 1e9).toFixed(1)} GB`;
}
