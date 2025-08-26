"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define the properties (props) for the Toast component
interface ToastProps {
	message: string;
	duration?: number; // Optional duration in milliseconds
}

const Toast = ({ message, duration = 3000 }: ToastProps) => {
	const [isVisible, setIsVisible] = useState(false);

	// Use a useEffect hook to show the toast and set a timer to hide it
	useEffect(() => {
		if (message) {
			setIsVisible(true);
			const timer = setTimeout(() => {
				setIsVisible(false);
			}, duration);
			return () => clearTimeout(timer); // Cleanup the timer
		}
	}, [message, duration]);

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					variants={variants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className="fixed bottom-3 rounded-lg bg-gray-800 px-4 py-2 text-white shadow-lg z-[9999]"
				>
					{message}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Toast;
