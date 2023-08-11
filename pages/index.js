import { Inter } from "next/font/google";
import { getClient } from "@/lib/sanity.client";
import BlogpostList, { query } from "@/components/BlogpostList";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewList from "@/components/PreviewList";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ preview }) {
	const client = getClient(Boolean(preview));
	const posts = await client.fetch(query);

	if (!posts) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`);
	}
	return {
		props: {
			preview: Boolean(preview),
			posts,
		},
		revalidate: 60,
	};
}

export default function Home({ preview, posts }) {
	if (preview) {
		const token = process.env.SANITY_API_READ_TOKEN;
		return (
			<PreviewProvider token={token}>
				<h1>Preview enabled</h1>
				<PreviewList data={posts} />
			</PreviewProvider>
		);
	}
	return (
		<div>
			<BlogpostList data={posts} />
		</div>
	);
}
