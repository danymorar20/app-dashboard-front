/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
    }
};

export default nextConfig;
