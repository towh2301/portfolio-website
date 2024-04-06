import { Sora } from "next/font/google";
import React from "react";
const sora = Sora({ subsets: ["latin"] });
export default function Welcome() {
    return (
        <div className="pt-5 px-6 flex items-center justify-center justify-items-center">
            <div className="w-full md:w-3/4 h-80 flex-col justify-center items-center gap-14 inline-flex text-center">
                <div className="self-stretch h-14 flex-col justify-center items-center flex text-3xl md:text-5xl ">
                    <div className="justify-between items-start gap-4 font-['sora']">
                        <span className="text-black  font-normal leading-tight justify-between content-between">
                            Hello I’am{" "}
                        </span>
                        <span className="text-black font-extrabold">
                            Bui Hoang Huy.{" "}
                        </span>
                        <span className="text-black  font-normal justify-between content-between">
                            I'm a{" "}
                        </span>
                        <span className="text-black font-extrabold  ">
                            SE Student{" "}
                        </span>
                        <span className="text-black  font-normal justify-between content-between">
                            Based In{" "}
                        </span>
                        <span className="text-black  font-extrabold ">
                            Vietnam.
                        </span>
                    </div>
                </div>
                <div className="self-stretch text-zinc-500  font-normal font-['Sora'] leading-6 tracking-tight justify-center items-center text-justify">
                    I'm Bui Hoang Huy. I'm a CS student based in Vietnam. I love
                    to code and build things that live on the internet. I
                    develop exceptional websites and web apps that provide
                    intuitive, pixel-perfect user interfaces with efficient and
                    modern backends. I am a fast learner and I am always eager
                    to learn new technologies and frameworks. I am passionate
                    about building excellent software that improves the lives of
                    those around me.
                </div>
                <div className="w-80 h-16 py-1 justify-start items-start gap-8 inline-flex">
                    <div className="w-14 h-14 p-4 border-2 border-black rounded justify-center items-center gap-2 flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center items-center gap-2 flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-auto h-auto relative flex-col justify-start items-start flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center items-center gap-2 flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-14 h-14 p-4 rounded border-2 border-black justify-center items-center gap-2 flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 px-px justify-center items-center inline-flex">
                                <div className="w-4 h-5 relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
