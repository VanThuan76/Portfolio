/** @type {import('next').NextConfig} */
const hostnames = [
  "p9n2c8y2.rocketcdn.me",
  "aceternity.com",
  "assets.aceternity.com",
  "avatars.githubusercontent.com",
  "ocjaxgkaarttotpzrodh.supabase.co",
];
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/admin",
      },
    ];
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
    optimizeFonts: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
