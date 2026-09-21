import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SkyphrLegalPage } from "@/components/SkyphrLegalPage/SkyphrLegalPage";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { createPageMetadata } from "@/lib/seo/seo";
import {
  PRIVACY_EYEBROW,
  PRIVACY_HEADLINE_ACCENT,
  PRIVACY_HEADLINE_PREFIX,
  PRIVACY_HERO_SUBTEXT,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  PRIVACY_TITLE,
} from "./privacy.constant";

const PAGE = {
  title: "Privacy Policy - SkyLens",
  description: "How SkyLens, a Skyphr product, handles data when you run a website audit.",
  path: "/privacy",
};

export const metadata: Metadata = createPageMetadata(PAGE);

export default function PrivacyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <JsonLd data={buildWebPageSchema(PAGE)} />
      <SiteHeader />

      <SkyphrLegalPage
        eyebrow={PRIVACY_EYEBROW}
        headlinePrefix={PRIVACY_HEADLINE_PREFIX}
        headlineAccent={PRIVACY_HEADLINE_ACCENT}
        subtext={PRIVACY_HERO_SUBTEXT}
        document={{
          title: PRIVACY_TITLE,
          lastUpdated: PRIVACY_LAST_UPDATED,
          intro: PRIVACY_INTRO,
          sections: PRIVACY_SECTIONS,
        }}
      />

      <SiteFooter />
    </div>
  );
}
