/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ["images.unsplash.com", "themoviedb.org"]
    }
};

module.exports = nextConfig;
