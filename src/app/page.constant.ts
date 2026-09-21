import { HomepageCheck } from "./page.interface";

export const HERO_HEADLINE = "Get your free website audit in minutes";
export const HERO_SUBTEXT =
  "Analyze page speed, SEO, accessibility, and content quality with real data. No chat needed.";

export const HERO_FEATURE_PILLS = ["Performance", "SEO", "Accessibility", "Content"] as const;

export const HOMEPAGE_INTRO =
  "Most site audits either drown you in raw metrics or hide the results behind a login wall. SkyLens takes a different approach: paste a URL, and in a couple of minutes you get a real technical check of your site's performance, SEO fundamentals, accessibility, and content clarity, explained in plain language instead of jargon. Every score comes from real data, not a guess: Google PageSpeed Insights for performance, axe-core for accessibility, and an actual rendered page fetch for SEO and content checks.";

export const HOMEPAGE_CHECKS_HEADING = "What SkyLens checks";
export const HOMEPAGE_CHECKS_SUBTEXT =
  "Every audit runs the same four checks against your live page, using real data instead of guesses.";

export const HOMEPAGE_CHECKS: HomepageCheck[] = [
  {
    title: "Performance",
    description:
      "SkyLens pulls your page's Google PageSpeed Insights data and surfaces the metrics that actually affect visitors, like Largest Contentful Paint on mobile, so you can see where load time is being lost.",
  },
  {
    title: "SEO",
    description:
      "Your rendered page is checked for the fundamentals search engines and AI crawlers rely on: titles, descriptions, headings, and enough real content to be worth indexing.",
  },
  {
    title: "Accessibility",
    description:
      "An axe-core scan runs against the live page to catch issues like low color contrast and missing landmark regions that make a site harder to use with assistive technology.",
  },
  {
    title: "Content",
    description:
      "SkyLens flags thin or unclear page content and, when it helps, uses an AI model to turn a raw finding into a plain-language explanation of what to fix and why it matters.",
  },
];

export const HOMEPAGE_STEPS_HEADING = "How an audit runs";
export const HOMEPAGE_STEPS = [
  "Paste the URL of the site you want checked - no account or sign-up required.",
  "SkyLens loads the live page with Playwright and runs performance, accessibility, and SEO checks against what's actually rendered.",
  "Findings are scored and, where it adds clarity, explained in plain language instead of raw metrics.",
  "You get a scored report right in your browser. Nothing about the audit is saved or tracked on our end.",
] as const;
