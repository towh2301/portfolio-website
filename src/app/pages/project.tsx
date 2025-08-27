"use client";
import React from "react";
import Image from "next/image";

const projects = [
	{
		title: "Integrated Education System",
		description:
			"Developed backend services to support a multi-user educational platform for students, teachers, and admins. Designed and implemented REST APIs for user management, course handling, and notifications. Built modular microservices including Identity, Profile, Course, and Notification services. Managed authentication and authorization using Spring Security and JWT. Tech stack: Spring Boot 3, MongoDB, MySQL, ReactJS, React Native.",
		image: "/assets/educational.png",
		github: [
			{
				label: "Course Service",
				url: "https://github.com/towh2301/course-service",
			},
			{
				label: "Identity Service",
				url: "https://github.com/towh2301/identity-svc",
			},
			{
				label: "Profile Service",
				url: "https://github.com/towh2301/profile-service",
			},
			{
				label: "Frontend",
				url: "https://github.com/towh2301/Shadcn-system",
			},
		],
	},
	{
		title: "Mobile E-Commerce Application",
		description:
			"Built a mobile e-commerce application using React Native and MySQL. Implemented validation with Zod, API integration with Axios and TanStack Query, and state management with Zustand. Focused on responsive UI and smooth shopping experience.",
		image: "/assets/mobile.jpg",
		github: [
			{
				label: "GitHub",
				url: "https://github.com/towh2301/CSE441_Ecommerce",
			},
		],
	},
	{
		title: "Food Ordering System",
		description:
			"Developed a restaurant food ordering backend using Django and MySQL. Implemented order and cart management logic, CRUD functionality, relational database schemas, and server-side logic consumed by the frontend.",
		image: "/assets/food.jpg",
		github: [
			{
				label: "GitHub",
				url: "https://github.com/towh2301/ecommerce-web",
			},
		],
	},
	{
		title: "Mobile Markdown Note Taking Application",
		description:
			"Developed a note-taking application using Markdown for Mobile. Using Markdown and preview simultaneously gives users a exiting experience, enhance productivity, especially IT students who have to use Markdown every project. This app use Flutter framework with Dart to create a simple note taking app. ",
		image: "https://simplenote.com/wp-content/uploads/2016/08/markdown-ios.jpg",
		github: [
			{
				label: "GitHub",
				url: "https://github.com/towh2301/note_app",
			},
		],
	},
];

export default function Project() {
	return (
		<div className="w-full px-2 gap-5">
			<div className="pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora']">
				My <span className="text-black font-extrabold">Projects</span>
			</div>
			<div className="w-full justify-center items-center gap-14 p-5">
				{projects.map((project, index) => (
					<div key={index}>
						{index % 2 === 0 ? (
							<div className="w-full py-10 md:flex gap-10 lg:flex justify-center items-center grid">
								<Image
									src={project.image}
									alt={project.title}
									width={450}
									height={350}
									className="rounded-2xl"
								/>
								<div className="grid gap-6 h-full w-full">
									<div className="font-bold text-[30px]">
										0{index + 1}. {project.title}
									</div>
									<div className="text-zinc-500 font-normal font-['Sora'] leading-6 tracking-tight text-justify">
										{project.description}
									</div>
									{project.github.length > 0 && (
										<div className="flex gap-4 flex-wrap mt-2 ">
											{project.github.map((repo, i) => (
												<a
													key={i}
													href={repo.url}
													target="_blank"
													className="text-white bg-black rounded-md px-3 py-2 transition-transform duration-300 hover:scale-105"
												>
													{repo.label}
												</a>
											))}
										</div>
									)}
								</div>
							</div>
						) : (
							<div className="w-full py-10 gap-10 md:flex lg:flex justify-center items-center text-right grid">
								<div className="grid gap-6 h-full w-full">
									<div className="font-bold text-[30px]">
										0{index + 1}. {project.title}
									</div>
									<div className="text-zinc-500 font-normal font-['Sora'] leading-6 tracking-tight text-justify">
										{project.description}
									</div>
									{project.github.length > 0 && (
										<div className="flex gap-4 flex-wrap mt-2 justify-end">
											{project.github.map((repo, i) => (
												<a
													key={i}
													href={repo.url}
													target="_blank"
													className="text-white bg-black rounded-md px-3 py-2 transition-transform duration-300 hover:scale-105"
												>
													{repo.label}
												</a>
											))}
										</div>
									)}
								</div>
								<Image
									src={project.image}
									alt={project.title}
									width={450}
									height={350}
									className="rounded-2xl"
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
