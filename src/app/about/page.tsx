import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { createPageMetadata } from "@/lib/seo/seo";
import { AboutContent } from "./AboutContent";

const PAGE = {
  title: "About - SkyLens",
  description:
    "What SkyLens does, how it works, and how its performance, SEO, accessibility, and content checks are built by Skyphr.",
  path: "/about",
};

export const metadata: Metadata = createPageMetadata(PAGE);

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <JsonLd data={buildWebPageSchema(PAGE)} />
      <SiteHeader />
      <AboutContent />
      <SiteFooter />
    </div>
  );
}
