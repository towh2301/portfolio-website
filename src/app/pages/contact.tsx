import { Sora } from "next/font/google";
import React from "react";
const sora = Sora({ subsets: ["latin"] });

export default function Contact() {
    return (
        <div className="w-full gap-5 px-8 pt-14">
            <div className="mb-14 pt-5 pb-2 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center">
                My <span className="text-black font-extrabold">Contact</span>
            </div>
            <div className="w-full flex-row md:flex gap-10 items-center justify-center">
                <div className="justify-center items-center md:inline-flex grid grid-col-1 gap-24">
                    <div className="self-stretch py-5 flex-col justify-center items-center">
                        <form className="w-max h-96 flex-col justify-start items-start gap-5 flex">
                            <div className="w-full flex-col justify-start items-start gap-3 flex">
                                <input
                                    placeholder="Your name..."
                                    className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black justify-start items-center inline-flex"
                                ></input>
                            </div>
                            <div className="w-full flex-col justify-start items-start gap-3 flex">
                                <input
                                    placeholder="Your email..."
                                    className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black justify-start items-center inline-flex"
                                ></input>
                            </div>
                            <div className="w-full flex-col justify-start items-start gap-3 flex">
                                <input
                                    placeholder="Your website(If exists)..."
                                    className="w-full md:w-96 md:h-14 px-6 py-4 rounded border border-black justify-start items-center inline-flex"
                                ></input>
                            </div>
                            <div className="w-full flex-col justify-start items-start gap-3 flex">
                                <input
                                    placeholder="How can I help?"
                                    className="w-full md:w-96 md:h-36 px-6 py-4 rounded border border-black justify-start items-start inline-flex"
                                ></input>
                            </div>
                            <div className="justify-start items-start gap-6 inline-flex">
                                <button className="h-14 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-5 w-[136px]">
                                    Get in Touch
                                </button>
                                {/* <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 justify-center items-center flex">
                                        <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                                            <img
                                                className="w-5 h-5"
                                                src="https://via.placeholder.com/20x20"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 justify-center items-center flex">
                                        <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                                    </div>
                                </div>
                                <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center gap-2 flex">
                                    <div className="w-5 h-5 justify-center items-center flex">
                                        <div className="w-5 h-5 px-px justify-center items-center inline-flex">
                                            <div className="w-4 h-5 relative"></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full py-5 flex-col justify-start gap-6 flex items-right text-justify">
                    <div className="text-black text-3xl md:text-4xl font-extrabold font-['sora'] leading-10">
                        Let’s talk for
                    </div>
                    <div className="self-stretch text-black text-4xl md:text-5xl font-extrabold font-['sora'] leading-10">
                        Something special
                    </div>
                    <div className="self-stretch text-zinc-500 text-base font-normal font-['sora'] leading-normal tracking-tight">
                        I seek to push the limits of creativity to create
                        high-engaging, user-friendly, and memorable interactive
                        experiences. I am always eager to learn new technologies
                        and frameworks. I am passionate about building excellent
                        software that improves the lives of those around me.
                        That is why I am always looking for new opportunities to
                        work with people who share the same passion and vision
                        as me.
                    </div>
                    <div className="self-stretch text-black text-xl md:text-3xl font-semibold font-['sora'] leading-loose">
                        huy.buihoang2301@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* 
                            <div className="self-stretch  gap-4 inline-flex">
                                <div className="text-black text-5xl font-extrabold font-['sora'] leading-10">
                                    Let’s
                                </div>
                                <div className="text-5xl font-extrabold font-['sora'] leading-10">
                                    talk
                                </div>
                                <div className="text-black text-5xl font-extrabold font-['sora'] leading-10">
                                    for
                                </div>
                            </div>
                            <div className="self-stretch text-black text-5xl font-extrabold font-['sora'] leading-10">
                                Something special
                            </div>
                        </div>
                        <div className="self-stretch text-zinc-500 text-base font-normal font-['sora'] leading-normal tracking-tight">
                            I seek to push the limits of creativity to create
                            high-engaging, user-friendly, and memorable
                            interactive experiences.
                        </div>

                         */
}
