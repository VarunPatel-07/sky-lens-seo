import { NextResponse } from "next/server";
import { LLMS_TXT_CONTENT } from "./llmsTxt.constant";

// Serves the plain-text llms.txt site index for AI agents/LLMs.
export async function GET() {
  return new NextResponse(LLMS_TXT_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
