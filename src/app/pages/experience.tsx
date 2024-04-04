import React from "react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const company = [
    {
        title: "Junior Software Developer",
        company: "Big Red Cloud",
        duration: "Nov 2022 - Present",
        description:
            "I am currently working as a student developer at Eastern International University. I am responsible for developing and maintaining the university's website and web applications. I also work on various projects to improve the university's digital presence and user experience.",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-big-44-283543.png?f=webp&w=256"
    },
    {
        title: "Business Development Intern",
        company: "Eastern International University",
        duration: "Nov 2020 - 2022",
        description:
            "I am currently working as a student developer at Eastern International University. I am responsible for developing and maintaining the university's website and web applications. I also work on various projects to improve the university's digital presence and user experience.",
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
    },
    {
        title: "Internship Program for IT Students",
        company: "Binance Vietnam",
        duration: "Nov 2019 - 2020",
        description:
            "I am currently working as a student developer at Eastern International University. I am responsible for developing and maintaining the university's website and web applications. I also work on various projects to improve the university's digital presence and user experience.",
        icon: "https://cdn-icons-png.flaticon.com/512/6557/6557077.png"
    }
];

export default function Experience() {
    return (
        <div className="text-white gap-5  p-4 md:px-20">
            <div className=" pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center mb-7">
                My <span className=" font-extrabold">Experience</span>
            </div>
            <div className="w-full h-auto p-1 md:p-8 flex-row">
                {company.map((item, index) => (
                    <div
                        key={index}
                        className=" w-full h-auto p-8 border-blue-50 rounded-md border-2 mb-8 "
                    >
                        <div className="w-full h-auto grid md:grid-cols-2 gap-3 mb-3">
                            <div className="w-full flex py-auto place-items-center ">
                                <img
                                    src={item.icon}
                                    alt={item.company}
                                    className="w-10 h-auto mr-4"
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
