import { Sora } from "next/font/google";
import path from "path";

const sora = Sora({ subsets: ["latin"] });

const skills = [
    {
        name: "Git",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z",
    },
    {
        name: "Python",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z",
    },
    {
        name: "Java",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z",
    },
    {
        name: "Django",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z",
    },

    {
        name: "React",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z",
    },
    {
        name: "JavaScripts",
        xmlns: "http://www.w3.org/2000/svg",
        path: "M37.1147 41.9176C38.1911 43.666 39.3609 45.3414 41.8389 45.3414C43.9202 45.3414 45.0122 44.3069 45.0122 42.8758C45.0122 41.1631 43.8829 40.5549 41.5931 39.5578L40.3378 39.0227C36.7149 37.4858 34.3053 35.56 34.3053 31.4923C34.3053 27.7434 37.1753 24.8905 41.66 24.8905C44.8536 24.8905 47.148 25.9965 48.8031 28.8929L44.8924 31.3927C44.0322 29.8558 43.102 29.2507 41.66 29.2507C40.1884 29.2507 39.2567 30.1794 39.2567 31.3927C39.2567 32.8922 40.19 33.4989 42.3445 34.4276L43.5998 34.9627C47.8698 36.7811 50.2778 38.6385 50.2778 42.8136C50.2778 47.3122 46.7249 49.7778 41.9556 49.7778C37.2905 49.7778 34.6413 47.4367 33.1667 44.5387L37.1147 41.9176ZM19.092 42.0451C19.8791 43.4545 21.0753 44.5387 22.7958 44.5387C24.4416 44.5387 25.3889 43.8885 25.3889 41.3607V24.8889H30.5736V42.1571C30.5736 47.3947 27.5356 49.7778 23.0991 49.7778C19.0904 49.7778 16.1971 47.0618 15.018 44.5387L19.092 42.0451Z",
    },
];

export default function Skills() {
    return (
        <div className="w-full px-8 gap-5">
            <div className="pt-5 pb-2 lg:pb-8 w-full font-sora text-3xl md:text-5xl text-center font-['Sora'] items-center">
                My <span className="text-black font-extrabold">Skills</span>
            </div>

            <div className="py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <div
                        className="flex justify-center items-center"
                        key={index}
                    >
                        <div className="w-32 h-32 sm:w-48 sm:h-48 p-4 bg-white rounded border-2 border-black flex flex-col justify-center items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                                <svg
                                    xmlns={skill.xmlns}
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 56 56"
                                    fill="none"
                                >
                                    <path d={skill.path} fill="black" />
                                </svg>
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
