import { fetchLatestImage, type LiveImage } from "~/utils/live-images";

/**
 * The newest LeiOS installer image. It is fetched from GitLab while the site is generated and then
 * served from the page's payload, so the static site makes no API calls at runtime. If GitLab can't
 * be reached, the page fails with a 502, which fails `nuxt generate` instead of publishing a
 * download page without a download.
 */
export async function useLatestImage(): Promise<Ref<LiveImage>> {
	const { data, error } = await useAsyncData("latest-live-image", fetchLatestImage);
	if (error.value || !data.value) {
		throw createError({
			statusCode: 502,
			statusMessage: "Could not read the latest LeiOS image from GitLab",
			cause: error.value,
			fatal: true,
		});
	}
	return data as Ref<LiveImage>;
}
