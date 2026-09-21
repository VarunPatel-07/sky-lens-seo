import type { Metadata } from "next";
import { DEFAULT_ROBOTS, SITE_LOCALE, SITE_NAME, SITE_URL } from "./seo.constant";
import { PageMetadataInput } from "./seo.interface";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: DEFAULT_ROBOTS,
  };
}
