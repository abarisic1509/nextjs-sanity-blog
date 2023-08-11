import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";

export const schema = {
	types: [
		post,
		author,
		category,
		blockContent,
		{
			name: "user",
			title: "User",
			type: "document",
			fields: [
				{
					name: "email",
					title: "Email",
					type: "string",
				},
				{
					name: "password",
					title: "Password",
					type: "string",
				},
				{
					name: "role",
					title: "Role",
					type: "reference",
					to: [{ type: "role" }],
				},
			],
		},
		{
			name: "role",
			title: "Role",
			type: "document",
			fields: [
				{
					name: "name",
					title: "Name",
					type: "string",
				},
				{
					name: "permissions",
					title: "Permissions",
					type: "array",
					of: [{ type: "string" }],
					options: {
						list: [
							{ title: "Read", value: "read" },
							{ title: "Write", value: "write" },
							{ title: "Create", value: "create" },
							{ title: "Manage", value: "manage" },
						],
					},
				},
			],
		},
	],
	intents: [
		{
			name: "admin",
			type: "document",
			items: ["post", "author", "category", "blockContent", "user", "role"],
		},
		{
			name: "user",
			type: "document",
			items: ["post", "author"],
		},
	],
};
