/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      loader: "akamai",
      path: "",
    },
    assetPrefix: "/",
    reactStrictMode: true,
  };

export default nextConfig;
