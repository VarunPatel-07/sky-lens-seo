# Folder Structure

This is the source of truth for where every file goes. If you're about to
create a file and its correct location isn't obvious from this doc, stop
and ask rather than guessing — don't invent a new top-level folder.

## Repo layout (two apps, one repo)

```
skyphr-audit/
  frontend/         # Next.js app
  backend/          # Node.js + Express app
  README.md
```

They are deployed and run independently. The frontend never imports
backend code or vice versa.

---

## Backend structure

```
backend/
  src/
    server.ts                        # entry point — creates the Express app, starts listening

    routes/
      audit.route.ts                 # maps HTTP verb + path -> controller function

    controllers/
      audit.controller.ts            # parses req, calls services, shapes res — no business logic here

    services/
      site/
        fetchSite.ts                 # launches Playwright, fetches HTML + screenshot
      pagespeed/
        pagespeed.ts                 # calls Google PageSpeed Insights API
        pagespeed.helper.ts          # pure functions: shape/normalize the PageSpeed response
      accessibility/
        axeScan.ts                   # injects + runs axe-core inside the Playwright page
      openai/
        generateAuditNarrative.ts    # the one OpenAI call
        generateAuditNarrative.constant.ts   # prompt template lives here, never inline in the .ts logic
        generateAuditNarrative.helper.ts     # builds the prompt payload from raw findings

    types/
      audit.ts                       # shared types used across services/controllers (see code-style doc — Node.js does not require .interface.ts)

    constants/
      thresholds.constant.ts         # the score thresholds that decide when the OpenAI call fires

    middleware/
      errorHandler.ts                # central error handler, last app.use()
      validateRequest.ts             # generic zod-validation middleware

    utils/
      scoring.ts                     # weighted score calculation
      validateUrl.ts                 # URL sanity checks before Playwright touches it

  .env                                # real secrets — NEVER committed
  .env.example                       # placeholder keys, committed, kept in sync with .env
  package.json
  tsconfig.json
```

### Backend `.env.example`

```
OPENAI_API_KEY=
PAGESPEED_API_KEY=
PORT=4000
ALLOWED_ORIGIN=https://lens.skyphr.com
NODE_ENV=development
```

---

## Frontend structure

```
frontend/
  src/
    app/
      page.tsx                       # landing page - server wrapper, exports metadata, renders HomeContent
      HomeContent.tsx                 # the actual "use client" landing page logic (metadata can't live in a client component)
      page.constant.ts
      layout.tsx                     # root metadata defaults (metadataBase, icons) + site-wide JSON-LD
      globals.css
      sitemap.ts                     # SEO - see SEO.md
      robots.ts                      # SEO - see SEO.md
      manifest.ts                    # SEO - see SEO.md
      opengraph-image.tsx            # SEO - see SEO.md

    components/
      UrlInputForm/
        UrlInputForm.tsx
        UrlInputForm.interface.ts
        UrlInputForm.constant.ts
        UrlInputForm.helper.ts

      AuditReport/
        AuditReport.tsx
        AuditReport.interface.ts
        AuditReport.helper.tsx

      ScoreCategory/
        ScoreCategory.tsx
        ScoreCategory.interface.ts

      FindingCard/
        FindingCard.tsx
        FindingCard.interface.ts

      SiteScreenshot/
        SiteScreenshot.tsx
        SiteScreenshot.interface.ts

      JsonLd/
        JsonLd.tsx                   # renders schema.org objects as XSS-escaped <script type="application/ld+json">
        JsonLd.interface.ts

    lib/
      api/
        auditApi.ts                  # the one function that calls the backend's /audit endpoint
        auditApi.interface.ts

      seo/
        seo.ts                       # createPageMetadata() - the one place page <title>/OG/Twitter/canonical/robots get built
        seo.interface.ts
        seo.constant.ts              # site name, URL, default title/description, default robots
        schema.ts                    # buildOrganizationSchema/buildWebSiteSchema/buildWebPageSchema - JSON-LD builders
        schema.interface.ts

    types/
      audit.interface.ts             # shared cross-component types (e.g. AuditResult) — see code-style doc

    constants/
      routes.constant.ts             # any internal route paths, if/when more pages exist

  .env.local                         # real values — NEVER committed
  .env.local.example
  package.json
  tsconfig.json
  tailwind.config.ts                 # if using Tailwind — see design-system doc
```

### Frontend `.env.local.example`

```
NEXT_PUBLIC_API_BASE_URL=https://api.lens.skyphr.com
```

Note: only variables genuinely safe to expose to the browser get the
`NEXT_PUBLIC_` prefix. No API keys ever go in the frontend `.env` —
they live only in the backend.

---

## Naming rule for new files

Every file name matches the folder/component it belongs to, followed by
its role suffix (`.interface.ts`, `.constant.ts`, `.helper.ts` /
`.helper.tsx`). See `02-CODE-STYLE.md` for exactly when each suffix
applies and when it doesn't (Node.js backend is exempt from `.interface.ts`).
