"use client";
import { useRef } from "react";
import { Sora } from "next/font/google";
import path from "path";
import React, { useState } from "react";

const sora = Sora({ subsets: ["latin"] });

export const skills_list = [
	{
		name: "Java",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
	},
	{
		name: "Python",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	},
	{
		name: "JavaScript",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		name: "TypeScript",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	},
	{
		name: "React",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		name: "Spring",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
	},
	{
		name: "Node.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	{
		name: "Git",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
];

export default function Skills() {
	return (
		<div className="w-full px-8 gap-5">
			<div className="pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center">
				My <span className="text-black font-extrabold">Skills</span>
			</div>

			<div className="py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{skills_list.map((skill, index) => (
					<div
						className="flex justify-center items-center"
						key={index}
					>
						<div className="w-32 h-32 sm:w-48 sm:h-48 p-4 bg-white rounded border-2 border-black flex flex-col justify-center items-center gap-4">
							<div className="w-12 h-12 sm:w-14 sm:h-14 relative">
								<img
									src={skill.src}
									alt={skill.name}
									className="w-full h-full object-contain rounded-md"
								/>
							</div>
							<div className="text-center text-black text-lg font-bold font-sans capitalize leading-normal">
								{skill.name}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
