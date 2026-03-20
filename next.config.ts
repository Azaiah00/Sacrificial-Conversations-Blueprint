import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Hide the Next.js dev indicator (icon in bottom-left) in development
  devIndicators: false,
  // Pin Turbopack to THIS app folder. Without this, Next may treat C:\Users\azaia (pnpm-lock)
  // as the workspace root and show confusing warnings / odd behavior on Windows.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
