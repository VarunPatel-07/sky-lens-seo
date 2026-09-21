# SEO

What's actually implemented in this repo, as of 2026-09-21. `lens.skyphr.com`
is the live domain, currently five routes: `/`, `/about`, `/contact`,
`/privacy`, `/terms` - no `hire`/`services`/`blog` routes or AI-agent
discoverability layer (`.well-known/`, `llms.txt`, MCP) exist here; if any of
that gets built later, extend this doc rather than assuming it from an old
draft.

## 1. Metadata factory

`src/lib/seo/seo.constant.ts` holds the site-wide constants (name, URL,
default title/description, default robots directives). `src/lib/seo/seo.ts`
exports `createPageMetadata({ title, description, path })`, which every page
calls to build its `<title>`, description, canonical URL (`alternates`),
Open Graph, Twitter card, and robots directives from one place - instead of
hand-writing each field per page.

Every route defines its own `title`/`description` via a local `PAGE` const
passed into `createPageMetadata()`:

| Route | Title |
|---|---|
| `/` | SkyLens - Free Instant Website Audit |
| `/about` | About - SkyLens |
| `/contact` | Contact - SkyLens |
| `/privacy` | Privacy Policy - SkyLens |
| `/terms` | Terms of Service - SkyLens |

The root layout ([src/app/layout.tsx](src/app/layout.tsx)) sets
`metadataBase`, the favicon set, and calls `createPageMetadata()` for `/` as
the site-wide default that child routes inherit from where they don't
override it.

The home route ([src/app/page.tsx](src/app/page.tsx)) is a server component
that only exports metadata and renders `HomeContent` (moved out of `page.tsx`
because it needs `"use client"` for the audit form state - Next's metadata
exports only work in Server Components).

## 2. Structured data (JSON-LD)

`src/lib/seo/schema.ts` builds plain JSON-LD objects:
`buildOrganizationSchema()`, `buildWebSiteSchema()` (both rendered once,
site-wide, in the root layout, linked by `@id`), and
`buildWebPageSchema({ title, description, path })` (rendered per-page).
`src/components/JsonLd/JsonLd.tsx` renders them as
`<script type="application/ld+json">`, XSS-escaping `<` per
[Next's own JSON-LD guidance](node_modules/next/dist/docs/01-app/02-guides/json-ld.md).

No BreadcrumbList/FAQPage/Service schemas - there's no nested nav or FAQ
content on any current page to generate them from.

## 3. Sitemap & crawl control

- [src/app/sitemap.ts](src/app/sitemap.ts) - static list of the 5 routes
  with per-route `changeFrequency`/`priority`. Not auto-derived from nav
  data (there's no nested nav to walk); add new routes here by hand.
- [src/app/robots.ts](src/app/robots.ts) - allows all crawlers, points at
  `sitemap.xml`. No `Disallow` - there's no `/api/*` or private route in
  this frontend to hide (the backend audit API is a separate origin).

## 4. Icons, manifest, OG image

- [src/app/manifest.ts](src/app/manifest.ts) - PWA manifest using the
  existing `public/favicon/android-chrome-*.png` icons (previously unused).
- Root layout `metadata.icons` wires up the rest of `public/favicon/*`
  (16/32/apple-touch) - also previously generated but never referenced.
- [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) - a single
  1200×630 OG/Twitter image generated at build time with `next/og`
  (brand colors, no external asset needed), used as the fallback for every
  route since no page defines its own.

## Not done here

- **Per-page OG images** - every route shares the one generated image.
- **GEO/AEO layer** (`llms.txt`, `.well-known/agent-card.json`, MCP
  descriptors, markdown content-negotiation) - no routes exist for this app
  that would warrant it (no docs/blog content), and it wasn't asked for.
  If this becomes relevant, scope it as its own task.
- **Google Tag Manager / analytics** - not wired in; separate from SEO.
