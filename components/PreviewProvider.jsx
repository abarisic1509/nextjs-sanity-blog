"use client";
import { useMemo } from "react";
import { LiveQueryProvider } from "next-sanity/preview";
import { getClient } from "@/lib/sanity.client";

const PreviewProvider = ({ children, token }) => {
	const client = useMemo(() => getClient({ token }), [token]);
	return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
};

export default PreviewProvider;
