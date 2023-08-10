import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

export const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const DocumentsCount = ({ data }) => {
	console.log("data", data);
	return (
		<div>
			{data.map((post) => (
				<article key={post._id}>
					<Image
						src={urlForImage(post.mainImage).url()}
						alt={post.title}
						fill
					/>
					<h2>{post.title}</h2>
					<p>{post.author.name}</p>
				</article>
			))}
		</div>
	);
};

export default DocumentsCount;
