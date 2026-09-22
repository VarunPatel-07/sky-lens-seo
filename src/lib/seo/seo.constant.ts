import type { Metadata } from "next";
import { SKYPHR_HOMEPAGE_URL } from "@/constants/skyphr.constant";

export const SITE_NAME = "SkyLens";
export const SITE_URL = "https://lens.skyphr.com";
export const SITE_LOCALE = "en_US";

export const DEFAULT_TITLE = "SkyLens - Free Instant Website Audit by Skyphr";
export const DEFAULT_DESCRIPTION =
  "SkyLens by Skyphr runs real technical checks against your site and turns the findings into a plain-language audit with a score and prioritized fixes.";

export const PUBLISHER_NAME = "Skyphr";
export const PUBLISHER_URL = SKYPHR_HOMEPAGE_URL;

// Shared social preview image for every page - see openGraph.images / twitter.images in createPageMetadata.
export const DEFAULT_OG_IMAGE_PATH = "/images/sky-lens-meta-image.png";
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;
export const DEFAULT_OG_IMAGE_ALT = `${SITE_NAME} - instant site audits`;

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
