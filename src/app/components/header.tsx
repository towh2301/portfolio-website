import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({ subsets: ["latin"] });

const menu_items = [
    {
        name: "About Me",
        href: "/",
    },
    {
        name: "Skills",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Header() {
    return (
        <div className="px-8 py-0 w-[1280px] flex justify-between items-center flex-shrink-0">
            <div className="logo gap-3 flex items-center">
                <img
                    className="rounded-lg"
                    src="/assets/fox.jpg"
                    alt="Logo"
                    width={60}
                    height={60}
                />
                <span
                    className={
                        "text-2xl font-extrabold tracking-[-0.4px] capitalize" +
                        sora.className
                    }
                >
                    Portfolio
                </span>
            </div>
            <div
                className={"menu_items flex justify-center items-center gap-8"}
            >
                {menu_items.map((item, index) => (
                    <a
                        key={index}
                        className="text-xl font-bold tracking-[-0.4px] capitalize font-sora"
                        href={item.href}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="download_resume flex h-14 px-5 py-4 justify-center items-center gap-2 rounded bg-black ">
                <span className="text-xl font-medium tracking-[-0.4px] capitalize text-white font-sora">
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}
