/**
 * The installer image on /download: the newest one in the live-images package registry
 * (https://git.leicraftmc.de/LeiOS/live/images/-/packages), where `leios-live-build publish` uploads
 * each image as the generic package `release-<version>`. The page reads it while the site is
 * generated (see `useLatestImage`), and the live-images pipeline rebuilds the site after publishing.
 */

const GITLAB_API = "https://git.leicraftmc.de/api/v4";
/** LeiOS/live/images, the project `leios-live-build publish` uploads to. */
const LIVE_IMAGES_PROJECT_ID = 5;

export interface LiveImage {
	/** Image version, such as `0.10.0`. */
	version: string;
	/** Build date (ISO 8601). */
	date: string;
	architecture: "amd64";
	fileName: string;
	url: string;
	sizeBytes: number;
	sha256: string;
}

/** The fields of GitLab's package API (`GET /projects/:id/packages`) used here. */
export interface RegistryPackage {
	id: number;
	name: string;
	version: string;
	package_type: string;
	status: string;
	created_at: string;
}

/** The fields of GitLab's package file API (`GET /projects/:id/packages/:id/package_files`) used here. */
export interface RegistryPackageFile {
	file_name: string;
	size: number;
	file_sha256: string | null;
	created_at: string;
}

const amd64ImageFile = /^leios-live-.+-amd64\.hybrid\.iso$/;

/** Published image packages, newest first. */
export function releasePackages(packages: RegistryPackage[]): RegistryPackage[] {
	return packages
		.filter(
			(pkg) =>
				pkg.package_type === "generic" && pkg.status === "default" && pkg.name.startsWith("release-"),
		)
		.sort((a, b) => b.created_at.localeCompare(a.created_at));
}

/** The amd64 image of a package, or `undefined` while it has none (an upload still running or failed). */
export function toLiveImage(
	pkg: RegistryPackage,
	files: RegistryPackageFile[],
): LiveImage | undefined {
	const iso = files
		.filter((file) => amd64ImageFile.test(file.file_name) && file.file_sha256)
		.sort((a, b) => b.created_at.localeCompare(a.created_at))[0];
	if (!iso?.file_sha256) return undefined;

	// Package versions are `<version>-<YYYYMMDD>`; the first images had no date.
	const dated = /^(.+)-(\d{4})(\d{2})(\d{2})$/.exec(pkg.version);
	return {
		version: dated?.[1] ?? pkg.version,
		date: dated ? `${dated[2]}-${dated[3]}-${dated[4]}` : iso.created_at.slice(0, 10),
		architecture: "amd64",
		fileName: iso.file_name,
		url: `${GITLAB_API}/projects/${LIVE_IMAGES_PROJECT_ID}/packages/generic/${encodeURIComponent(pkg.name)}/${encodeURIComponent(pkg.version)}/${encodeURIComponent(iso.file_name)}`,
		sizeBytes: iso.size,
		sha256: iso.file_sha256,
	};
}

async function getJson<T>(path: string): Promise<T> {
	const response = await fetch(`${GITLAB_API}${path}`);
	if (!response.ok) throw new Error(`GitLab API ${path}: ${response.status} ${response.statusText}`);
	return (await response.json()) as T;
}

/** The newest published amd64 image. Throws if the registry can't be read or has no image. */
export async function fetchLatestImage(): Promise<LiveImage> {
	const project = `/projects/${LIVE_IMAGES_PROJECT_ID}`;
	const packages = await getJson<RegistryPackage[]>(
		`${project}/packages?package_type=generic&order_by=created_at&sort=desc&per_page=20`,
	);
	for (const pkg of releasePackages(packages)) {
		const files = await getJson<RegistryPackageFile[]>(
			`${project}/packages/${pkg.id}/package_files?per_page=100`,
		);
		const image = toLiveImage(pkg, files);
		if (image) return image;
	}
	throw new Error("The live-images package registry has no published amd64 image.");
}

/** `3_106_269_184` → `"3.1 GB"` (decimal units, like file managers and download dialogs). */
export function formatImageSize(bytes: number): string {
	return `${(bytes / 1e9).toFixed(1)} GB`;
}
