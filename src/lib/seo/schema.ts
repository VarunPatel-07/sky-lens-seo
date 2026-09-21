import { DEFAULT_DESCRIPTION, PUBLISHER_NAME, PUBLISHER_URL, SITE_NAME, SITE_URL } from "./seo.constant";
import { absoluteUrl } from "./seo";
import { JsonLdSchema, WebPageSchemaInput } from "./schema.interface";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildOrganizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: PUBLISHER_NAME,
    url: PUBLISHER_URL,
    logo: absoluteUrl("/favicon/android-chrome-512x512.png"),
  };
}

export function buildWebSiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildWebPageSchema({ title, description, path }: WebPageSchemaInput): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
  };
}
