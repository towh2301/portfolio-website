import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sora } from "next/font/google";
import Header from "./components/header";
import { Welcome } from "./components/welcome";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="">
            <header className="px-20 py-6 flex items-center justify-center relative">
                <Header />
            </header>
            <section className="welcome px-20 py-[110px] flex items-center justify-start overflow-hidden">
                <Welcome />
            </section>
            <section className="welcome px-20 py-[150px] flex items-center justify-start overflow-hidden"></section>
        </div>
    );
}
