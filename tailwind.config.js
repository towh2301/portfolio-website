/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,tsx}",
        "./src/**/*.{js,jsx}",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                "displaytext-regular-font-family": "Sora-Regular, sans-serif",
                "displaytext-extra-bold-font-family":
                    "Sora-ExtraBold, sans-serif",
                "outlined-extra-bold-font-family": "Sora-ExtraBold, sans-serif",
                "paragraph-p-2-regular-font-family": "Sora-Regular, sans-serif"
            },
            fontSize: {
                "displaytext-regular-font-size": "48px",
                "displaytext-extra-bold-font-size": "48px",
                "outlined-extra-bold-font-size": "48px",
                "paragraph-p-2-regular-font-size": "16px"
            },
            fontWeight: {
                "displaytext-regular-font-weight": "400",
                "displaytext-extra-bold-font-weight": "800",
                "outlined-extra-bold-font-weight": "800",
                "paragraph-p-2-regular-font-weight": "400"
            },
            lineHeight: {
                "displaytext-regular-line-height": "56px",
                "displaytext-extra-bold-line-height": "56px",
                "outlined-extra-bold-line-height": "56px",
                "paragraph-p-2-regular-line-height": "24px"
            },
            borderRadius: {},
            colors: {
                "primary-black": "#000000",
                "zinc-500": "#71717a"
            },
            spacing: {},
            width: {},
            minWidth: {},
            maxWidth: {},
            height: {},
            minHeight: {},
            maxHeight: {}
        }
    },
    plugins: []
};
