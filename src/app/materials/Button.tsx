import React from "react";
import { Inter } from "next/font/google";
import { randomFill, randomFillSync } from "crypto";

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="my-4 md:my-0 download_resume h-14 px-5 py-4 justify-center items-center gap-2 rounded bg-black flex">
            {children}
        </button>
    );
};

export default Button;
