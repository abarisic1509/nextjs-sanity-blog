export default function preview(req, res) {
	res.setPreviewData({});
	res.writeHead(307, { Location: "/studio/preview" });
	res.end("Preview mode enabled");
}
