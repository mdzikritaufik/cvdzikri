import type { NextConfig } from "next";

// Set by the GitHub Pages workflow to "/<repo>"; empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a plain HTML/CSS/JS bundle into `out/` that any static host can serve.
  output: "export",

  // GitHub Pages serves the site from https://<user>.github.io/<repo>.
  basePath,

  // Emit `experience/index.html` rather than `experience.html`, which is the
  // shape GitHub Pages resolves most reliably.
  trailingSlash: true,

  // A static export has no server to optimize images on request, so files are
  // served exactly as they sit in `public/`. Keep them small at rest.
  images: { unoptimized: true },
};

export default nextConfig;
