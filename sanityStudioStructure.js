import Iframe from "sanity-plugin-iframe-pane";

export const defaultDocumentNode = (S, { schemaType }) => {
	// Only show preview pane on `post` schema type documents
	switch (schemaType) {
		case `post`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: "http://localhost:3000/studio/preview",
					})
					.title("Preview"),
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};