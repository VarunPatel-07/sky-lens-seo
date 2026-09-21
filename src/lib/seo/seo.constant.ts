import type { Metadata } from "next";
import { SKYPHR_HOMEPAGE_URL } from "@/constants/skyphr.constant";

export const SITE_NAME = "SkyLens";
export const SITE_URL = "https://lens.skyphr.com";
export const SITE_LOCALE = "en_US";

export const DEFAULT_TITLE = "SkyLens - Free Instant Website Audit";
export const DEFAULT_DESCRIPTION =
  "SkyLens runs real technical checks against your site and turns the findings into a plain-language audit with a score and prioritized fixes.";

export const PUBLISHER_NAME = "Skyphr";
export const PUBLISHER_URL = SKYPHR_HOMEPAGE_URL;

export const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
