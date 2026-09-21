# Frontend Design System

SkyLens is one light, polished theme throughout — landing, loading, and
results all live on the same light surfaces and accent colors. An
earlier version put the results report on a near-black panel; that read
as a jarring, low-end "two different apps" split rather than one
product, so results now use the same light system as everything else,
just with a touch more visual richness (soft gradients, shadow, larger
radii) to feel premium rather than flat.

Follow this file for any visual work.

## Color

| Token | Hex | Role |
|---|---|---|
| `bg` | `#F4F5F7` | Landing/loading page background |
| `surface` | `#FFFFFF` | Header, cards, input on the light UI |
| `border` | `#E4E7EB` | Dividers/borders on the light UI |
| `ink` | `#111827` | Primary text on the light UI |
| `muted` | `#6B7280` | Secondary text on the light UI |
| `primary` | `#4F46E5` | Buttons, focus rings, the loading spinner |
| `primary-hover` | `#4338CA` | Hover state for `primary` |
| `report-bg` | `#F8F9FC` | Results panel background — same light family as `bg`, one shade apart for subtle depth |
| `report-panel` | `#FFFFFF` | Header block / category row background in results |
| `report-panel-alt` | `#F3F4F6` | Finding card background (one step darker than `report-panel`) |
| `report-border` | `#E5E7EB` | Dividers/borders in results |
| `report-ink` | `#111827` | Primary text in results (same as `ink`) |
| `report-muted` | `#6B7280` | Secondary text in results (same as `muted`) |
| `amber` | `#F5A623` | The one score accent — gauge stroke, category-badge fill. **Never as text or a border** — it's ~2:1 contrast against every light surface here, well under WCAG's 4.5:1 (text) / 3:1 (non-text) minimums. |
| `amber-soft` | `rgba(245,166,35,0.15)` | Tinted background behind a score badge |
| `amber-text` | `#92400E` | The readable version of the score accent — any time amber meaning needs to be legible text or a border (error states, the "AI-assisted analysis" tag), not a fill/stroke. ~7:1 against white, ~6:1 against `amber-soft`. |
| `teal` | `#0D9488` | Secondary accent for non-score emphasis — currently just the "Fix:" label in a finding card |

`amber` is the only color that carries score meaning, and it shifts by
**opacity/fill amount**, not hue — no red/green traffic-light system.
Never reuse `amber` for anything that isn't a score, even for emphasis —
it reads as another score and confuses the hierarchy. `primary` is UI
chrome (buttons, links, focus rings), `teal` is for calling out a
specific word/label without borrowing the score color.

Score badges (`ScoreCategory`) fill with `amber` at variable opacity but
label the number in `report-ink`, not white — white-on-amber also fails
contrast (amber's luminance is too mid-range for either black or white
text to reliably clear 3:1 against it). Dark text is the safe default
on any amber fill.

## Typography

- **One family throughout**: IBM Plex Sans, for the hero, headings, body,
  and UI chrome — weight carries hierarchy (700 for the hero headline,
  600 for section/category titles, 400–500 for body).
- **Scores use IBM Plex Mono** — the overall score gauge, per-category
  score badges — for the "instrument readout" feel. Never apply mono to
  prose.

## Layout — landing (light)

- Sticky white header: wordmark on the left, nav links on the right
  (`About`, `Contact` — no duplicated links, no more than what's needed).
- Centered hero: small eyebrow line ("Welcome to"), a bold headline
  stating the outcome ("Get your free website audit in minutes"), one
  supporting line, then the URL input + submit button as the single
  call to action.
- Footer: policy/legal links only, muted, small.

## Layout — loading

- A circular progress ring (`primary`) with a checkmark glyph at
  center.
- A simulated step list underneath (fetch → PageSpeed → accessibility →
  SEO → synthesis), each with a status dot, advancing on a timer while
  the real request is in flight. **This is cosmetic** — the backend
  returns one response, not a progress stream — so the sequence keeps
  advancing while waiting and never blocks on a step actually finishing.
- One line of supporting copy below, and a `Cancel analysis` action that
  aborts the in-flight request and returns to the landing state.

## Layout — results

- The whole report sits in one rounded card (`rounded-2xl`, soft
  `shadow-xl`) on `report-bg`, not a flat bordered box — this is the
  "premium" read: elevation and radius do the work color used to do on
  the old dark panel.
- **Header block**: a soft brand-tinted gradient card (light
  indigo → white → light amber, `shadow-sm`) — two columns on desktop
  (stack on mobile) — score gauge + URL + one-sentence summary on the
  left, the annotated homepage screenshot on the right.
- **Four category rows**, full-width, stacked vertically inside one
  white card (not a card grid): a score badge + category name on the
  left, that category's finding cards on the right. Findings always
  render inline and static — no click-to-collapse. That interaction
  was tried and removed: clicking a row to close it read as an
  accidental dead-end, not a feature, on a report meant to be scanned
  top to bottom in one pass.
- **No numbered step markers** on the four categories — they aren't a
  sequence.
- **No closing CTA / email capture.** This was tried (an email-gated
  "get a PDF" card at the bottom) and removed — the report ends after
  the category list.

## Motion

- One deliberate staggered reveal when the report finishes generating
  (header block, then screenshot, then each category row) — not a
  fade-and-slide on every scroll section.
- The loading ring rotates continuously; step-list rows fade/slide in
  one at a time as the simulated sequence advances.
- No hover-lift effects on every card. Keep hover states to a subtle
  border or background shift.

## Copy tone

- Plain, direct, non-alarming. "Your main button is hard to read for
  many visitors" — not "Critical accessibility violation detected."
- Every finding: **what's wrong → why it matters → the fix** — one
  sentence each.
- Don't state a statistic the backend didn't actually compute (e.g. "3
  of these are quick fixes, 2 need a developer") unless that
  classification is a real field in the API response — invented
  precision reads as fake.

## Component-level notes

- `ScoreGauge`: circular ring, `amber` stroke proportional to score,
  the number in Plex Mono at center. Used once, for the overall score.
- `ScoreCategory`: full-width row, `amber`-tinted square badge (Plex
  Mono) on the left, findings on the right, always static/open — no
  click handler on the row at all.
- `FindingCard`: three-line structure (issue / impact / fix) as
  described in Copy tone.
- `SiteScreenshot`: framed like a real browser window (light chrome
  bar with traffic-light dots + the URL, white body) rather than a
  bare image, so it reads as an intentional screenshot mockup. Natural
  aspect ratio, capped width, annotations as a dot + leader line +
  label, positioned by percentage so they track the image at any size.

## What to avoid

- Inventing data the API response doesn't contain (fake metrics,
  fake "X quick fixes" counts)
- Red/green traffic-light scoring
- A card grid for the four categories (they're a vertical scan)
- More than two nav links unless there's an actual page behind them
