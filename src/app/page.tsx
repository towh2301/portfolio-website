import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sora } from "next/font/google";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Skills from "./components/skills";
import Experience from "./components/experience";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className=" w-full ">
            <header className="header py-3 flex items-center justify-center md:px-20 lg:px-20  sticky top-0 bg-white z-10 shadow-xl">
                <Header />
            </header>
            <section className="w-full welcome py-[110px] flex items-center md:px-20 lg:px-20">
                <Welcome />
            </section>
            <section className="skills flex items-center justify-start overflow-hidden md:px-20 lg:px-20">
                <Skills />
            </section>
            <section className="mt-[60px] py-[60px] bg-black w-full h-fit">
                <Experience />
            </section>
        </div>
    );
}
