import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/.well-known/vercel/flags",
        destination: "/api/vercel/flags",
      },
    ];
  },
};

const toolbarConfig = withVercelToolbar()(nextConfig);
export default toolbarConfig;
