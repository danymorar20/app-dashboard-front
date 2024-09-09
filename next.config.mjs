/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL,
    }
};

export default nextConfig;
