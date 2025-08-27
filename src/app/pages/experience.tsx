"use client";
import React, { useEffect } from "react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const company = [
	{
		title: "IT Staff",
		company: "TOIN",
		duration: "July 2025 - September 2025",
		description:
			"Working at IT Staff role helped me gain more knowledge about different aspects of IT industry. I was not only working with Software but also Hardware, maintaining the IT infrastructure and applying networking knowledge to resolve the problem. This role has given me a chance to understand the client's needs when they are using an Software.",
		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLEoQQxWkYz5njjUMGsLygN25XR6o8aCu0Q&s",
	},
	{
		title: "Web Developer Intern",
		company: "Becamex IDC",
		duration: "March 2024 - July 2024",
		description:
			"I gained exposure to real-world development environments using Agile. The company let me participated in sprint-based development cycles and peer collaboration. I've improved understanding of backend workflows, version control, and enterprise software structures. I also so had the experience when I built a real project for company as well as internal software using Angular and Flutter.",
		icon: "https://play-lh.googleusercontent.com/Rm0LGPq-H2-Xjn7u_B-ebV375LW9ArGQbEkOWxQ5JQFcBKZ_OYLmYsnghRasILNsMUE",
	},
];

export default function Experience() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const reveals = document.querySelectorAll<HTMLElement>(".reveal");
		if (!("IntersectionObserver" in window)) {
			// fallback: just make them visible
			reveals.forEach((el) => el.classList.add("is-visible"));
			return;
		}

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						// unobserve after visible to avoid repeated triggers
						obs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);

		reveals.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	return (
		<div className="text-white gap-5  p-4 md:px-20">
			<div className=" pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center mb-7 page-title reveal">
				My <span className=" font-extrabold">Experience</span>
			</div>
			<div className="w-full h-auto p-1 md:p-8 flex-row">
				{company.map((item, index) => (
					<div
						key={index}
						// 'reveal' will animate when element enters viewport; 'card' adds hover lift and shadow
						className="reveal card w-full h-auto p-8 border-blue-50 rounded-md border-2 mb-8 bg-transparent"
					>
						<div className="w-full h-auto grid md:grid-cols-2 gap-3 mb-3">
							<div className="w-full flex py-auto place-items-center ">
								<img
									src={item.icon}
									alt={item.company}
									className="w-10 h-auto mr-4 rounded-md"
								/>

								<div className="w-full flex text-start text-white text-lg md:text-2xl font-semibold font-['Sora'] leading-7 item-center align-middle">
									{item.title}
								</div>
							</div>
							<div className="w-full text-start md:text-end lg:text-end text-zinc-300 font-['Sora'] justify-center items-center">
								{item.duration}
							</div>
						</div>
						<div className="w-full text-zinc-300 text-base font-normal font-['Sora'] leading-normal tracking-tight justify-center items-center text-justify">
							{item.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
