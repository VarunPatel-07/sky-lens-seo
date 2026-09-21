import { LegalSection } from "@/components/LegalDocument/LegalDocument.interface";

export const TERMS_EYEBROW = "Terms";
export const TERMS_HEADLINE_PREFIX = "The";
export const TERMS_HEADLINE_ACCENT = "fine print";
export const TERMS_HERO_SUBTEXT = "The rules for using SkyLens, written so you'd actually want to read them.";

export const TERMS_TITLE = "Terms of Service";
export const TERMS_LAST_UPDATED = "September 19, 2026";

export const TERMS_INTRO = [
  "These terms govern your use of SkyLens, a website-audit tool built and operated by Skyphr at lens.skyphr.com. By submitting a URL to SkyLens, you agree to these terms.",
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "What SkyLens is",
    paragraphs: [
      "SkyLens takes a URL, runs real technical checks against it (performance, SEO basics, accessibility, content clarity), and uses those results — sometimes with the help of an AI model — to produce a plain-language audit with a score and prioritized fixes.",
      "SkyLens has no user accounts. Each audit is a single, stateless request: you submit a URL, you get a report back, and nothing is saved on our side.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: [
      "Only submit URLs for sites you own or have permission to audit. SkyLens fetches pages and takes screenshots on your behalf, so running it against a site without authorization is your responsibility, not ours.",
      "Don't use SkyLens to attack, scrape at scale, or otherwise abuse a third-party site, and don't attempt to circumvent any rate limits or abuse protections built into the service.",
    ],
  },
  {
    heading: "Reports are informational, not guaranteed",
    paragraphs: [
      "Audit results — including any AI-generated explanations — are provided for informational purposes to help you improve a site. They are automated and may be incomplete, out of date, or occasionally wrong. SkyLens is not a substitute for a professional technical, legal, or accessibility audit, and we make no guarantee about the accuracy or completeness of any report.",
    ],
  },
  {
    heading: "No persistence, no backups",
    paragraphs: [
      "Because SkyLens doesn't use a database, a report is not stored anywhere after it's returned to your browser. If you want to keep a copy, save or export it yourself — running the same audit again may produce different results as the target site or SkyLens's checks change over time.",
    ],
  },
  {
    heading: "Third-party services",
    paragraphs: [
      "SkyLens relies on third-party services — including Google PageSpeed Insights and, when needed, the OpenAI API — to generate results. Their availability, accuracy, and terms are outside our control, and SkyLens is not responsible for outages or errors originating from these providers.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The SkyLens name, logo, and underlying software belong to Skyphr. The report generated for a URL you submit is yours to use, but the tool that produces it remains Skyphr's property.",
    ],
  },
  {
    heading: "Disclaimer & limitation of liability",
    paragraphs: [
      "SkyLens is provided \"as is\" and \"as available,\" without warranties of any kind, express or implied. To the fullest extent permitted by law, Skyphr is not liable for any indirect, incidental, or consequential damages arising from your use of SkyLens or reliance on any report it produces.",
    ],
  },
  {
    heading: "Changes to SkyLens or these terms",
    paragraphs: [
      "We may update SkyLens's checks, scoring, or these terms over time. If these terms change materially, we'll update the date at the top of this page. Continuing to use SkyLens after a change means you accept the revised terms.",
    ],
  },
  {
    heading: "SkyLens and Skyphr",
    paragraphs: [
      "SkyLens is a product of Skyphr, and these terms govern SkyLens specifically. You can learn more about Skyphr, the company behind SkyLens, at skyphr.com.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: ["Questions about these terms can be sent to legal@skyphr.com."],
  },
];
