"use client";

import { useState, useEffect } from "react";
import { getClient } from "@/lib/sanity.client";
import { query } from "@/components/BlogpostList";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewList from "@/components/PreviewList";

// export async function getStaticProps() {
// 	const client = getClient(false);
// 	const posts = await client.fetch(query);
// 	// const res = await fetch('https://.../posts')
// 	// const posts = await res.json()

// 	if (!posts) {
// 		throw new Error(`Failed to fetch posts, received status ${res.status}`);
// 	}

// 	// If the request was successful, return the posts
// 	// and revalidate every 60 seconds.
// 	return {
// 		props: {
// 			posts,
// 		},
// 		revalidate: 60,
// 	};
// }

export default function Preview() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const client = getClient(true);
	const token = process.env.SANITY_API_READ_TOKEN;

	useEffect(() => {
		async function fetchData() {
			const posts = await client.fetch(query);
			setData(posts);
			setLoading(false);
		}
		fetchData();
	}, []);

	if (loading) {
		return (
			<div role="status">
				<h2>Loading preview</h2>
			</div>
		);
	}

	return (
		<PreviewProvider token={token}>
			<h1>Preview enabled</h1>
			<PreviewList data={data} />
		</PreviewProvider>
	);
}
