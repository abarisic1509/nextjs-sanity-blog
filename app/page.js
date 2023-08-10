import { draftMode } from "next/headers";
import { getClient } from "@/lib/sanity.client";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";
import DocumentsCount from "@/components/DocumentsCount";
import { groq } from "next-sanity";

export default async function IndexPage() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const client = getClient(preview);

	const query = groq`
    *[_type=='post'] {
      ...,
      author->,
      categories[]->
    } | order(_createdAt desc)
  `;

	const data = await client.fetch(query);

	if (preview) {
		return (
			<PreviewProvider token={preview.token}>
				<h1>Preview enabled</h1>
				<PreviewDocumentsCount data={data} />
			</PreviewProvider>
		);
	}

	return (
		<div>
			<h1>Preview disabled</h1>
			<DocumentsCount data={data} />
		</div>
	);
}
