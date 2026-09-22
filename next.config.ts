import type { NextConfig } from "next";

// Human page paths that also serve markdown to AI agents via `Accept: text/markdown` content negotiation.
const AGENT_MARKDOWN_PAGE_PATHS = ["/", "/about", "/contact", "/privacy", "/terms"];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // These must run in beforeFiles: the destination paths below are real pages,
      // so plain/afterFiles rewrites would never fire — the filesystem match wins first.
      beforeFiles: AGENT_MARKDOWN_PAGE_PATHS.map((sourcePath) => ({
        source: sourcePath,
        has: [
          {
            type: "header" as const,
            key: "accept",
            value: "(.*)text/markdown(.*)",
          },
        ],
        destination: sourcePath === "/" ? "/agent" : `/agent${sourcePath}`,
      })),
    };
  },
};

export default nextConfig;
