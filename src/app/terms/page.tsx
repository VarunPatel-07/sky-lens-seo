import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SkyphrLegalPage } from "@/components/SkyphrLegalPage/SkyphrLegalPage";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { createPageMetadata } from "@/lib/seo/seo";
import {
  TERMS_EYEBROW,
  TERMS_HEADLINE_ACCENT,
  TERMS_HEADLINE_PREFIX,
  TERMS_HERO_SUBTEXT,
  TERMS_INTRO,
  TERMS_LAST_UPDATED,
  TERMS_SECTIONS,
  TERMS_TITLE,
} from "./terms.constant";

const PAGE = {
  title: "Terms of Service - SkyLens by Skyphr",
  description: "The terms that govern using SkyLens, a Skyphr product.",
  path: "/terms",
};

export const metadata: Metadata = createPageMetadata(PAGE);

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <JsonLd data={buildWebPageSchema(PAGE)} />
      <SiteHeader />

      <SkyphrLegalPage
        eyebrow={TERMS_EYEBROW}
        headlinePrefix={TERMS_HEADLINE_PREFIX}
        headlineAccent={TERMS_HEADLINE_ACCENT}
        subtext={TERMS_HERO_SUBTEXT}
        document={{
          title: TERMS_TITLE,
          lastUpdated: TERMS_LAST_UPDATED,
          intro: TERMS_INTRO,
          sections: TERMS_SECTIONS,
        }}
      />

      <SiteFooter />
    </div>
  );
}
