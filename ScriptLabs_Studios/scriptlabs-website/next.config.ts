import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ScriptLabs_Site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
