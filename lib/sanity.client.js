import { projectId, dataset, apiVersion, useCdn } from "@/sanity/env";
import { createClient } from "next-sanity";

export function getClient({ preview }) {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn,
		perspective: "published",
	});
	if (preview) {
		if (!preview.token) {
			throw new Error("You must provide a token to preview drafts");
		}
		return client.withConfig({
			token: preview.token,
			useCdn: false,
			ignoreBrowserTokenWarning: true,
			perspective: "previewDrafts",
		});
	}
	return client;
}