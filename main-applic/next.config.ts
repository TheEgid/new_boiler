import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: { webpackBuildWorker: true },
    sassOptions: {
        silenceDeprecations: ["legacy-js-api"],
    },
    reactStrictMode: true,
    distDir: "build",
    onDemandEntries: { maxInactiveAge: 25 * 10000 },
};

export default nextConfig;
