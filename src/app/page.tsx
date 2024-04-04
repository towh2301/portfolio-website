"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Sora } from "next/font/google";
import Welcome from "./pages/welcome";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Project from "./pages/project";
import { useRef } from "react";
import Button from "./components/Button";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Create a reference to scroll to section
    const about = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const skills = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);

    const menu_items = [
        {
            name: "About Me",
            href: "/",
            ref: about
        },
        {
            name: "Skills",
            href: "/skills",
            ref: skills
        },
        {
            name: "Projects",
            href: "/pages/project",
            ref: projects
        },
        {
            name: "Contact",
            href: "/contact",
            ref: contact
        }
    ];

    // Hàm để cuộn đến section
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className=" w-full ">
            <header className="header py-3 flex items-center justify-center md:px-20 lg:px-20  sticky top-0 bg-white z-10 shadow-xl">
                <nav className="px-8 py-0 w-full md:flex justify-between items-center">
                    <div className="logo gap-3 flex items-center justify-between">
                        <div className="flex justify-center items-center gap-3">
                            <img
                                className="rounded-lg"
                                src="/assets/fox.jpg"
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                            <span className="text-2xl font-extrabold tracking-[-0.4px] capitalize">
                                Portfolio
                            </span>
                        </div>
                        <span
                            className="font-bold text-3xl cursor-pointer"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 md:hidden "
                                    name="menu"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 md:hidden "
                                    name="menu"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12h18M3 6h18M3 18h18"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>
                    {/* Menu Item */}
                    <ul
                        className={`menu_items justify-center items-center gap-8 md:flex ${
                            menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10 hidden md:flex  md:opacity-100 md:translate-y-0"
                        } transition-all duration-300`}
                    >
                        {menu_items.map((item, index) => (
                            <li
                                key={index}
                                className="text-xl font-bold tracking-[-0.4px] capitalize font-sora my-4 md:my-0  md:opacity-100 md:translate-y-0"
                            >
                                <button
                                    onClick={() => scrollToSection(item.ref)}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <span
                        className={`${
                            menuOpen
                                ? "opacity-100 translate-y-0 "
                                : "opacity-0 translate-y-10 hidden md:flex md:opacity-100 md:translate-y-0"
                        }`}
                    >
                        <Button>
                            <span
                                className={`text-xl font-medium tracking-[-0.4px] capitalize text-white font-sora `}
                            >
                                Download
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </span>
                </nav>
            </header>
            <section
                ref={about}
                className="w-full welcome py-[110px] flex items-center md:px-20 lg:px-20"
            >
                <Welcome />
            </section>
            <section
                ref={skills}
                className="skills flex items-center justify-start overflow-hidden md:px-20 lg:px-20"
            >
                <Skills />
            </section>
            <section className="mt-[60px] py-[60px] bg-black w-full h-fit">
                <Experience />
            </section>
            <section
                ref={projects}
                className="projects w-full welcome py-[110px] flex items-center md:px-20 lg:px-20"
            >
                <Project />
            </section>
        </div>
    );
}
