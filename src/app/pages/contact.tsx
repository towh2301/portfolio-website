"use client";
import { useState } from "react";

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		website: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setSent(true);
				setForm({ name: "", email: "", website: "", message: "" });
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full gap-5 px-8 pt-14">
			<div
				className="mb-14 pt-5 pb-2 w-full text-3xl md:text-5xl text-center font-sora page-title reveal"
				style={{ transitionDelay: "30ms" }}
			>
				My <span className="text-black font-extrabold">Contact</span>
			</div>
			<div className="w-full flex-col md:flex md:flex-row gap-10 items-start justify-center">
				<div
					className="md:inline-flex grid gap-10 reveal card"
					tabIndex={0}
					style={{ transitionDelay: "70ms" }}
				>
					<form
						onSubmit={handleSubmit}
						className="w-max flex-col justify-start items-start gap-5 flex"
					>
						<input
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Your name..."
							className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black"
							required
						/>
						<input
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Your email..."
							type="email"
							className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black"
							required
						/>
						<input
							name="website"
							value={form.website}
							onChange={handleChange}
							placeholder="Your website (If exists)..."
							className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black"
						/>
						<input
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="How can I help?"
							className="w-full md:w-96 md:h-36 px-6 py-4 rounded border border-black"
							required
						/>
						<button
							type="submit"
							disabled={loading}
							className="h-14 px-5 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform"
						>
							{loading ? "Sending..." : "Get in Touch"}
						</button>
						{sent && (
							<p className="text-green-600 mt-2">
								✅ Message sent!
							</p>
						)}
					</form>
				</div>
				<div
					className="w-full py-5 flex-col gap-6 flex text-justify reveal card"
					tabIndex={0}
					style={{ transitionDelay: "130ms" }}
				>
					<div className="text-3xl md:text-4xl font-extrabold">
						Let’s talk for
					</div>
					<div className="text-4xl md:text-5xl font-extrabold">
						Something special
					</div>
					<p className="text-zinc-500 text-base leading-normal">
						I seek to push the limits of creativity to create
						engaging, user-friendly experiences. Always eager to
						learn and build software that improves lives.
					</p>
					<div className="text-sm md:text-3xl font-semibold">
						huy.buihoang2301@gmail.com
					</div>
				</div>
			</div>
		</div>
	);
}
