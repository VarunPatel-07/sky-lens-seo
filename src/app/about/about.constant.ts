import { AboutHowItWorksStep } from "./about.interface";

export const ABOUT_HEADLINE_PREFIX = "A";
export const ABOUT_HEADLINE_ACCENT = "clearer";
export const ABOUT_HEADLINE_SUFFIX = "way to see your website";
export const ABOUT_SUBTEXT =
  "SkyLens turns a URL into a plain-language audit — what's working, what isn't, and what to fix first.";

export const ABOUT_MISSION_PARAGRAPHS = [
  "Most site audits either drown you in raw metrics or hide behind a login wall. SkyLens takes a different approach: paste a URL, and in minutes you get a real technical check of your site's performance, SEO fundamentals, accessibility, and content clarity — explained in plain language, not jargon.",
  "Every score comes from real data, not a guess: Google PageSpeed Insights for performance, axe-core for accessibility, and an actual rendered page fetch for SEO and content checks. When a finding needs more context, SkyLens uses AI to turn the raw result into a clear explanation of what's wrong, why it matters, and how to fix it.",
];

export const ABOUT_HOW_IT_WORKS_STEPS: AboutHowItWorksStep[] = [
  {
    title: "Submit a URL",
    description: "No sign-up, no account — just the address of the site you want checked.",
  },
  {
    title: "We fetch & scan it",
    description: "SkyLens loads the live page and runs performance, accessibility, and SEO checks against it.",
  },
  {
    title: "Findings get synthesized",
    description: "When it's useful, an AI model turns the raw results into a plain-language explanation.",
  },
  {
    title: "You get a scored report",
    description: "An overall score plus prioritized, category-by-category fixes — nothing saved, nothing tracked.",
  },
];

export const ABOUT_DATA_SOURCES = ["Performance", "SEO", "Accessibility", "Content"] as const;

export const ABOUT_SKYPHR_HEADING = "Built by Skyphr";
export const ABOUT_SKYPHR_PARAGRAPHS = [
  "SkyLens is a product of Skyphr. Skyphr builds tools aimed at making technical decisions clearer for people who aren't necessarily developers — SkyLens is that philosophy applied to website audits.",
  "SkyLens runs as its own focused product at lens.skyphr.com, but it's built, maintained, and supported by the Skyphr team.",
];
export const ABOUT_SKYPHR_LINK_LABEL = "Visit Skyphr";
