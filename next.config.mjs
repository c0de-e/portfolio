/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    headers: [
        {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=86400',
        }
    ]
};

export default nextConfig;
