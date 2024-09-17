/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["grammy"],
    mdxRs: true,
    middleware: true,
    scrollRestoration: true,
  },
  transpilePackages: ["ui"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ocjaxgkaarttotpzrodh.supabase.co",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
  webpack(config, options) {
    if (options.isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        const preloadImages = require("fs")
          .readdirSync("./public")
          .filter((file) => /\.(jpe?g|png|webp|avif)$/.test(file))
          .map((file) => `import './public/${file}';`)
          .join("\n");

        if (entries["main.js"]) {
          entries["main.js"].unshift(preloadImages);
        }

        return entries;
      };
    }
    return config;
  },
};
