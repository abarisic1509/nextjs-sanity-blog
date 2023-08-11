import React from "react";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

export const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const BlogpostList = ({ data }) => {
	return (
		<div className="flex flex-wrap gap-4 max-w-7xl mx-auto p-6">
			{data.map((item) => (
				<article
					key={item._id}
					className="flex flex-col gap-3 border border-solid border-blue-400 items-center"
				>
					<img
						src={urlForImage(item.mainImage).url()}
						className="w-full h-40 object-cover"
					/>
					<h3>{item.title}</h3>
					<p>{item.author.name}</p>
				</article>
			))}
		</div>
	);
};

export default BlogpostList;
