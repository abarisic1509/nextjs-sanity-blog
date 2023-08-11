//import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import { getClient } from "@/lib/sanity.client";
import BlogpostList, { query } from "@/components/BlogpostList";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
	const client = getClient(false);
	const posts = await client.fetch(query);
	// const res = await fetch('https://.../posts')
	// const posts = await res.json()

	if (!posts) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`);
	}

	// If the request was successful, return the posts
	// and revalidate every 60 seconds.
	return {
		props: {
			posts,
		},
		revalidate: 60,
	};
}

export default function Home({ posts }) {
	return (
		<div>
			<BlogpostList data={posts} />
		</div>
	);
}
