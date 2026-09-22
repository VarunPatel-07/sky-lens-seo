import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { createPageMetadata } from "@/lib/seo/seo";
import { HomeContent } from "./HomeContent";

const PAGE = {
  title: "SkyLens - Free Instant Website Audit by Skyphr",
  description:
    "SkyLens by Skyphr analyzes page speed, SEO, accessibility, and content quality with real data. Get a scored, plain-language report in minutes - no sign-up needed.",
  path: "/",
};

export const metadata: Metadata = createPageMetadata(PAGE);

export default function Home() {
  return (
    <>
      <JsonLd data={buildWebPageSchema(PAGE)} />
      <HomeContent />
    </>
  );
}
