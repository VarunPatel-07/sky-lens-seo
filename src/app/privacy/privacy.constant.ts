import { LegalSection } from "@/components/LegalDocument/LegalDocument.interface";

export const PRIVACY_EYEBROW = "Privacy";
export const PRIVACY_HEADLINE_PREFIX = "Your data,";
export const PRIVACY_HEADLINE_ACCENT = "simplified";
export const PRIVACY_HERO_SUBTEXT =
  "No accounts, no database, no tracking beyond what it takes to run the audit you asked for.";

export const PRIVACY_TITLE = "Privacy Policy";
export const PRIVACY_LAST_UPDATED = "September 19, 2026";

export const PRIVACY_INTRO = [
  "SkyLens is a product built and operated by Skyphr. This policy explains what happens to your data when you use SkyLens to audit a website, and it applies whenever you submit a URL at lens.skyphr.com.",
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "The short version",
    paragraphs: [
      "SkyLens has no user accounts and no database. Every audit is a single, stateless request: you submit a URL, we run real checks against it, and we return a report. We don't keep a copy of your report, your URL, or the site's contents after that request finishes.",
    ],
  },
  {
    heading: "What we process",
    paragraphs: [
      "The URL you submit for analysis.",
      "Technical data fetched from that URL in order to run the audit — the page's HTML, a screenshot of the homepage, performance metrics, accessibility scan results, and basic SEO signals.",
      "We do not ask for or process your name, email address, password, or any other account information, because SkyLens doesn't have accounts.",
    ],
  },
  {
    heading: "How we use it",
    paragraphs: [
      "The data described above is used only to generate the audit report you requested — scoring the site, identifying issues, and (when needed) using an AI model to turn the raw findings into plain-language explanations and fixes.",
      "We don't use it for advertising, don't sell it, and don't build a profile of you or the sites you audit.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "Because SkyLens is stateless, nothing about your request is written to a database. The HTML, screenshot, and findings generated during an audit exist only for the lifetime of that request and are discarded once your report is returned to your browser.",
    ],
  },
  {
    heading: "Third-party services",
    paragraphs: [
      "Running an audit involves calling a small number of third-party services on your behalf: Google PageSpeed Insights (performance data) and, when a report needs AI-assisted analysis, the OpenAI API. The URL you submit and the technical findings from it are shared with these providers only as needed to produce your report, and are subject to their own privacy policies.",
      "All of these calls happen from SkyLens's backend — your browser never talks to these providers directly, and no API keys are ever exposed to the frontend.",
    ],
  },
  {
    heading: "Cookies & tracking",
    paragraphs: [
      "SkyLens does not set advertising or cross-site tracking cookies. If that ever changes — for example, to add basic, privacy-respecting analytics — this policy will be updated first.",
    ],
  },
  {
    heading: "Children's privacy",
    paragraphs: [
      "SkyLens is not directed at children under 13, and we do not knowingly process data from children under 13.",
    ],
  },
  {
    heading: "SkyLens and Skyphr",
    paragraphs: [
      "SkyLens is developed and operated by Skyphr. When you contact us about privacy, you're reaching the Skyphr team responsible for SkyLens. You can learn more about Skyphr at skyphr.com.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If this policy changes in a meaningful way, we'll update the date at the top of this page. Continued use of SkyLens after a change means you accept the revised policy.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      "Questions about this policy or how SkyLens handles data can be sent to privacy@skyphr.com.",
    ],
  },
];
