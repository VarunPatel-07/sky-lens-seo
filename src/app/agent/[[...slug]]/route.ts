import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { HOME_MARKDOWN_SLUG, MARKDOWN_CONTENT_DIR_SEGMENTS } from "@/constants/agentMarkdown.constant";

const MARKDOWN_CONTENT_DIR = path.join(process.cwd(), ...MARKDOWN_CONTENT_DIR_SEGMENTS);

type AgentRouteContext = { params: Promise<{ slug?: string[] }> };

// Serves the markdown file matching the requested slug, or a 404 response if none exists.
export async function GET(_request: Request, context: AgentRouteContext) {
  const { slug } = await context.params;
  const requestedSlug = slug && slug.length > 0 ? slug.join("/") : HOME_MARKDOWN_SLUG;

  if (requestedSlug.includes("..")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(MARKDOWN_CONTENT_DIR, `${requestedSlug}.md`);

  if (!filePath.startsWith(MARKDOWN_CONTENT_DIR + path.sep)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const markdown = await readFile(filePath, "utf-8");

    return new NextResponse(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        Vary: "Accept",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
