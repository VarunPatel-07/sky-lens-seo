# Project Overview — SkyLens (by Skyphr)

Read this file first, on every session, before writing or editing any code.
It tells you which other file to open for which kind of task. Do not skip
straight to coding — open the relevant file(s) below first.

## Product name & domain

**SkyLens**, hosted at **lens.skyphr.com** (frontend) and
**api.lens.skyphr.com** (backend). Use "SkyLens" in any user-facing copy,
page titles, and metadata — not "Skyphr Audit" or any earlier working name.

## What this project is

A tool that takes a URL, runs real technical checks against that site
(performance, SEO basics, accessibility, content clarity), and uses an LLM
to turn the raw findings into a plain-language audit report with a score
and prioritized fixes. No user accounts, no database — each request is
stateless.

## Stack

- **Frontend**: Next.js (App Router) + TypeScript
- **Backend**: Node.js + Express + TypeScript, deployed on a VPS (not serverless)
- **AI**: OpenAI API (used only when needed — see thresholds in code)
- **Data sources**: Google PageSpeed Insights API, axe-core (accessibility),
  Playwright (page fetch + screenshot)

## Which file to read for which task

| If you're about to... | Read this file first |
|---|---|
| Create any new file, or aren't sure where a file belongs | `01-FOLDER-STRUCTURE.md` |
| Name a variable, function, interface, or component | `02-CODE-STYLE.md` |
| Add or change a backend endpoint | `03-BACKEND-API-SPEC.md` |
| Touch anything visual on the frontend (color, layout, component) | `04-FRONTEND-DESIGN-SYSTEM.md` |

## Non-negotiables (apply regardless of task)

1. **No database.** Every request is stateless. Do not add persistence
   "just in case" — if a feature seems to need storage, stop and flag it
   instead of adding one silently.
2. **Interfaces live in their own `.interface.ts` file** on the frontend.
   Never declare a prop type or data shape inline inside a `.tsx` file.
   See `02-CODE-STYLE.md` for the exact rule and the Node.js exception.
3. **The AI call is conditional, not automatic.** If every signal for a
   site is already good, skip the OpenAI call entirely and return a static
   template response. The threshold values live in
   `backend/src/constants/thresholds.constant.ts` — never hardcode a
   number inline where this check happens.
4. **Never commit `.env` files.** Both `frontend/.env.local` and
   `backend/.env` must be in `.gitignore`. If you need a new environment
   variable, add it to the relevant `.env.example` file, not just the real one.
5. **All API keys stay server-side.** The frontend never calls OpenAI,
   PageSpeed, or any external API directly — it only ever calls this
   project's own backend.

## Before you open a pull request / finish a task

- Does every new component have its own `.interface.ts` (if frontend)?
- Did you avoid adding a database, an email step, or a login step that
  wasn't asked for?
- Did you check `03-BACKEND-API-SPEC.md` if you touched any endpoint,
  to make sure validation and error shape still match?
