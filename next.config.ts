import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Set base path (the slug of your GitHub repository)
   */
  basePath: "/pagina-ale",

  /**
   * Disable server-based image optimization since we're using static export
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
