import type { NextConfig } from "next";

// Extend the experimental config type to include our needed properties
type ExtendedExperimentalConfig = {
  outputFileTracingIncludes?: {
    [key: string]: string[];
  };
};

type ExtendedNextConfig = NextConfig & {
  experimental?: ExtendedExperimentalConfig;
};

const nextConfig: ExtendedNextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/**": [
      "./node_modules/.pnpm/steamapi@3.0.12/**/*",
      "./node_modules/steamapi/**/*",
    ],
  },
};

export default nextConfig;
