"use client";

import { useLiveQuery } from "next-sanity/preview";
import DocumentsCount, { query } from "@/components/DocumentsCount";

export default function PreviewDocumentsCount({ data: initialData }) {
	const [data] = useLiveQuery(initialData, query);

	return <DocumentsCount data={data} />;
}
