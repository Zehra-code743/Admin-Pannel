/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreduringbuilds: true
      },
    images: {
        domains: ["cdn.sanity.io"],
    },
};

export default nextConfig;
