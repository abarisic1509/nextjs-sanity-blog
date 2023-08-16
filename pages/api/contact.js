// import { emailOptions, transporter } from "@/lib/nodemailer";
import Message from "@/emails/Message";
import { Resend } from "resend";

export default async function handler(req, res) {
	//check if its correct method
	if (req.method === "POST") {
		const data = req.body;

		//check if all the fields are filled
		if (!data.name || !data.email || !data.message) {
			return res.status(400).json({ message: "Bad request" });
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		try {
			// await transporter.sendMail({
			// 	...emailOptions,
			// 	subject: "Demo inquiry",
			// 	text: "Test message",
			// 	html: `<h2>New message from ${data.name} (${data.email})</h2><p>${data.message}</p>`,
			// });
			resend.emails.send({
				from: "info@dev-ana.com",
				to: "abarisic993@gmail.com",
				subject: "Hello World",
				react: (
					<Message name={data.name} email={data.email} message={data.message} />
				),
			});
			return res.status(200).json({ success: true });
		} catch (error) {
			console.log("error", error);
			return res.status(400).json({ message: error.message });
		}
	}
	return res.status(400).json({ message: "Bad request" });
}
