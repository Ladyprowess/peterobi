import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up to the home
  // directory looking for a lockfile and warns on every build.
  turbopack: { root: __dirname },
};

export default nextConfig;
