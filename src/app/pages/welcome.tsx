import { url } from "inspector";
import { Sora } from "next/font/google";
import React, { useEffect, useState } from "react";
import Toast from "../components/Toast";
const sora = Sora({ subsets: ["latin"] });
export default function Welcome() {
	const [toastMessage, setToastMessage] = useState<string | null>(null);

	const copyToClipboard: React.FC<any> = ({ isVisible, message }: any) => {
		if (!isVisible) return null;

		return (
			<div
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					backgroundColor: "green",
					color: "white",
					padding: "10px 15px",
					borderRadius: "5px",
					zIndex: 1000,
				}}
			>
				{message}
			</div>
		);
	};

	const handleCopyAndNotify = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setToastMessage("Copied to clipboard!");
			return;
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	// auto-hide toast after 1.5s
	useEffect(() => {
		if (toastMessage) {
			const timer = setTimeout(() => setToastMessage(null), 1500);
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);

	const contact_icons = [
		{
			name: "Phone",
			src: "https://cdn.jsdelivr.net/npm/tabler-icons@1.35.0/icons/phone.svg",
			url: "0326540994",
		},
		{
			name: "Mail",
			src: "https://cdn.jsdelivr.net/npm/tabler-icons@1.35.0/icons/mail.svg",
			url: "huy.buihoang2301@gmai.com",
		},
		{
			name: "Github",
			src: "https://cdn.jsdelivr.net/npm/tabler-icons@1.35.0/icons/brand-github.svg",
			url: "https://github.com/towh2301/",
		},
	];

	return (
		<div className="w-full pt-5 px-6 flex items-center justify-center justify-items-center">
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
							I'm Studying To Be A{" "}
						</span>
						<span className="text-black font-extrabold  ">
							Developer.{" "}
						</span>
						<span className="text-black  font-normal justify-between content-between">
							I'm From{" "}
						</span>
						<span className="text-black  font-extrabold ">
							Vietnam.
						</span>
					</div>
				</div>
				<div className="self-stretch text-zinc-500  font-normal font-['Sora'] leading-6 tracking-tight justify-center items-center text-justify">
					I'm Bui Hoang Huy. I love to build things that live on the
					internet. I develop exceptional websites and web apps that
					provide intuitive, pixel-perfect user interfaces with
					efficient and modern backends. I am always eager to learn
					new technologies and frameworks. I am passionate about
					building excellent software that improves the lives of those
					around me. Eager to take on dynamic challenges, bringing
					creativity, problem-solving skills, and an user-focused
					mindset. Proven ability to manage projects effectively and
					collaborate seamlessly within cross-functional teams.
				</div>
				<div className="w-full grid grid-cols-2 h-16 py-1 place-items-center justify-center items-center gap-8 md:inline-flex">
					{contact_icons.map((icon, index) => (
						<div
							className="w-14 h-14 p-4 border-2 border-black rounded justify-center items-center gap-2 flex"
							key={index}
							onClick={async () => {
								if (icon.name !== "Github") {
									await handleCopyAndNotify(icon.url);
								} else {
									location.href = icon.url;
								}
							}}
						>
							<div className="w-5 h-5 justify-center items-center flex">
								<div className="w-5 h-5 relative flex-col justify-start items-start flex">
									<img
										src={icon.src}
										alt={icon.name}
										className="w-6 h-6 object-contain"
									/>
								</div>
							</div>
						</div>
					))}
					{/* Toast (only one instance, fixed position) */}
				</div>
			</div>
			{toastMessage && <Toast message={toastMessage} duration={1500} />}
		</div>
	);
}
