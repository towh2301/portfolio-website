"use client";
import { useRef } from "react";
import React, { useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Markdown Note Taking Application",
        description:
            "I have developed a markdown note-taking application using React and Tailwind CSS. The application allows users to create, edit, and delete notes. It also supports markdown syntax highlighting and live preview. The application is responsive and works on all devices. I have also implemented a dark mode feature using local storage. The application is hosted on Vercel and the source code is available on GitHub.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Portfolio Website",
        description:
            "I have developed a portfolio website using Next.js and Tailwind CSS. The website showcases my projects, skills, and experience. It also includes a blog section where I write about web development and programming. The website is responsive and works on all devices. I have also implemented a dark mode feature using local storage. The website is hosted on Vercel and the source code is available on GitHub.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "E-commerce Website",
        description:
            "I have developed an e-commerce website using React, Redux, and Tailwind CSS. The website allows users to browse products, add them to the cart, and checkout. It also includes a search feature and a product filter. The website is responsive and works on all devices. I have also implemented a dark mode feature using local storage. The website is hosted on Vercel and the source code is available on GitHub.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export default function Project() {
    return (
        <div className="w-full px-2 gap-5">
            <div className="pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center">
                My <span className="text-black font-extrabold">Projects</span>
            </div>
            <div className="w-full justify-center items-center gap-14 p-5 ">
                {projects.map((project, index) => (
                    <div key={index}>
                        {index % 2 === 0 ? (
                            <div className="w-full py-10 md:flex gap-10 lg:flex justify-center items-center grid">
                                <Image
                                    src={project.image} // Enter your image URL here
                                    alt="Picture of something"
                                    width={450} // Desired width
                                    height={350}
                                    className="rounded-2xl"
                                />
                                <div className="gird gap-10 h-full w-full">
                                    <div className="font-bold text-[40px]">
                                        0{index + 1}
                                    </div>
                                    <div className="font-bold text-[20px] mb-3 ">
                                        {project.title}
                                    </div>
                                    <div className=" text-zinc-500  font-normal font-['Sora'] leading-6 tracking-tight justify-center items-center text-justify">
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="w-full py-10 gap-10 md:flex lg:flex justify-center items-center text-right grid"
                            >
                                <div className="gird gap-10 h-full w-full">
                                    <div className="font-bold text-[40px]">
                                        0{index + 1}
                                    </div>
                                    <div className="font-bold text-[20px] mb-3">
                                        {project.title}
                                    </div>
                                    <div className=" text-zinc-500  font-normal font-['Sora'] leading-6 tracking-tight justify-center items-center text-justify">
                                        {project.description}
                                    </div>
                                </div>
                                <Image
                                    src={project.image} // Enter your image URL here
                                    alt="Picture of something"
                                    width={450} // Desired width
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
