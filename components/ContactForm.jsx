"use client";

import { sendContactForm } from "@/lib/api";
import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [touched, setTouched] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleBlur = (e) => {
		const { name } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const res = await sendContactForm(formData);
		console.log("res", res);
		if (res.status == 200) {
			setFormData({
				name: "",
				email: "",
				message: "",
			});
			setTouched({});
		} else {
			setError(true);
		}
		setLoading(false);
	};

	return (
		<section className=" bg-slate-800 flex flex-col gap-6 p-6 rounded-md max-w-xl">
			<h2>Contact</h2>
			{error && (
				<p className=" text-xs text-red-500 mt-1">
					Something went wrong, please try again
				</p>
			)}
			<form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
				<label htmlFor="name">
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Full name"
						required
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`border border-solid rounded-sm p-3 text-base text-stone-950 w-full ${
							touched.name && !formData.name
								? "border-red-500"
								: " border-slate-200"
						}`}
					/>
					{touched.name && !formData.name && (
						<p className=" text-xs text-red-500 mt-1">Name is required</p>
					)}
				</label>
				<label htmlFor="email">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						required
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`border border-solid rounded-sm p-3 text-base w-full text-stone-950 ${
							touched.email && !formData.email
								? "border-red-500"
								: " border-slate-200"
						}`}
					/>
					{touched.email && !formData.email && (
						<p className=" text-xs text-red-500 mt-1">Email is required</p>
					)}
				</label>
				<label htmlFor="message">
					<textarea
						id="message"
						name="message"
						placeholder="Message"
						required
						value={formData.message}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`border border-solid rounded-sm p-3 text-base w-full resize-none text-stone-950 ${
							touched.message && !formData.message
								? "border-red-500"
								: " border-slate-200"
						}`}
					/>
					{touched.message && !formData.message && (
						<p className=" text-xs text-red-500 mt-1">Message is required</p>
					)}
				</label>

				<button
					type="submit"
					className=" bg-blue-500 py-2 disabled:opacity-50"
					disabled={!formData.name || !formData.email || !formData.message}
				>
					{loading ? "Sending..." : "Send"}
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
