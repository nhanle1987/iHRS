// @ts-check
import CopyPlugin from "copy-webpack-plugin";


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            { from: "template", to: "static/template" },
          ],
        }),
      )
    }
    return config
  },
};

export default nextConfig;
