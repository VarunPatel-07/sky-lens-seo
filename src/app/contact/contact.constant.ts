import { ContactChannel } from "./contact.interface";

export const CONTACT_EYEBROW = "Contact";
export const CONTACT_HEADLINE_PREFIX = "Get in";
export const CONTACT_HEADLINE_ACCENT = "touch";
export const CONTACT_SUBTEXT =
  "SkyLens has no accounts or dashboards to log into — if something needs a human, this is where to find one.";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "General & support",
    description: "Questions about a report, something that looks wrong, or how a check works.",
    email: "support@skyphr.com",
  },
  {
    label: "Privacy",
    description: "Questions about how SkyLens handles data — see the Privacy Policy for the full details.",
    email: "privacy@skyphr.com",
  },
  {
    label: "Business & partnerships",
    description: "Press, partnerships, or anything about Skyphr, the company behind SkyLens.",
    email: "hello@skyphr.com",
  },
];

export const CONTACT_SKYPHR_NOTE =
  "SkyLens is built and supported by Skyphr, so every message above reaches the Skyphr team. For anything beyond SkyLens itself, visit skyphr.com.";
export const CONTACT_SKYPHR_LINK_LABEL = "Visit Skyphr";
