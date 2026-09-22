import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_ROBOTS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "./seo.constant";
import { PageMetadataInput } from "./seo.interface";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = {
    url: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
    width: DEFAULT_OG_IMAGE_WIDTH,
    height: DEFAULT_OG_IMAGE_HEIGHT,
    alt: DEFAULT_OG_IMAGE_ALT,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: DEFAULT_ROBOTS,
  };
}
