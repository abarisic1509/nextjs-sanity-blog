import { useLiveQuery } from "next-sanity/preview";
import BlogpostList, { query } from "./BlogpostList";

const PreviewList = ({ data: initialData }) => {
	const [data] = useLiveQuery(initialData, query);

	return <BlogpostList data={data} />;
};

export default PreviewList;
