import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { createPageMetadata } from "@/lib/seo/seo";
import { ContactContent } from "./ContactContent";

const PAGE = {
  title: "Contact - SkyLens",
  description: "How to reach the Skyphr team behind SkyLens with questions, feedback, or support requests.",
  path: "/contact",
};

export const metadata: Metadata = createPageMetadata(PAGE);

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <JsonLd data={buildWebPageSchema(PAGE)} />
      <SiteHeader />
      <ContactContent />
      <SiteFooter />
    </div>
  );
}
