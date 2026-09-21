# Code Style & Naming

Applies to both `frontend/` and `backend/` unless a section says otherwise.

## Naming — general

- **Variables & functions**: `camelCase`, named for what they hold or do,
  not how they're implemented. `siteScore` not `s`. `fetchSiteHtml` not
  `doFetch`.
- **Components**: `PascalCase`, matching their folder name exactly
  (`AuditReport.tsx` inside `AuditReport/`).
- **Booleans** read as a yes/no question: `isLoading`, `hasError`,
  `shouldCallAi` — never `loading`, `error`, `flag`.
- **Functions** start with a verb: `getAuditScore`, `formatFinding`,
  `validateUrl`. A function name should let you guess its return type
  without opening it.
- **No abbreviations** unless universally understood (`url`, `id`, `html`
  are fine; `cfg`, `usr`, `resp` are not — write `config`, `user`, `response`).
- **Constants** that are fixed values: `SCREAMING_SNAKE_CASE` when it's a
  primitive (`MAX_RETRIES`), `PascalCase` when it's an object/array of
  config (`ScoreThresholds`).

## Interfaces — where they live

**Frontend (React/TypeScript): every interface gets its own
`.interface.ts` file, next to the file that uses it.**

- A component's props type is never declared inside the `.tsx` file.
- Small or "obvious-looking" prop shapes are not an exception — even a
  two-field prop type goes in `ComponentName.interface.ts`. Consistency
  matters more than saving a file for a trivial case.
- A type shared by more than one component (e.g. `AuditResult`, used by
  both `AuditReport` and `ScoreCategory`) goes in `types/audit.interface.ts`
  instead of being duplicated per-component. If you find yourself
  copy-pasting a type into a second `.interface.ts` file, that's the
  signal to move it to `types/` instead.

```ts
// AuditReport.interface.ts
export interface AuditReportProps {
  result: AuditResult;
  onRetry: () => void;
}
```

```tsx
// AuditReport.tsx
import { AuditReportProps } from './AuditReport.interface';

export function AuditReport({ result, onRetry }: AuditReportProps) {
  // ...
}
```

**Backend (Node.js/Express): no `.interface.ts` files required.**

Type definitions can live directly in the same file as the logic that
uses them, or in `types/audit.ts` if shared across services/controllers.
The separate-interface-file convention is a frontend/component
convention — the backend has no components to pair files with, so
splitting every type into its own file there just adds indirection with
no benefit. Keep backend types co-located with their usage unless
they're shared across 3+ files, in which case put them in `types/audit.ts`.

## Helpers vs. components

- A `.tsx` component file contains rendering (JSX) and light glue logic
  only — event handlers that call a helper, state hooks, and the return
  statement.
- Any calculation, formatting, data transformation, or conditional logic
  that isn't directly about "what JSX to render" belongs in the sibling
  `.helper.ts` (or `.helper.tsx` if it needs to return JSX, like a
  function that renders a list of finding cards from raw data).
- Rule of thumb: if you could unit-test the logic without rendering
  anything, it belongs in the helper file, not the component.

## Constants

- Any literal that could plausibly change (a threshold, a label, a
  prompt template, a URL) goes in a `.constant.ts` file — never inline
  in a component, controller, or service.
- If the same constant is used in more than one place, it belongs in
  `constants/`, not duplicated in two `.constant.ts` files.

## General clean-code rules

- One function does one thing. If a function's name needs "and" to
  describe it (`fetchAndValidateSite`), split it.
- No commented-out code left in commits — delete it; git history is the
  backup.
- No `console.log` left in committed code — use a real logger (even a
  simple wrapper) in the backend, and strip debug logs from the frontend
  before finishing a task.
- Every exported function has a one-line comment above it stating what
  it returns, unless the name and types already make it obvious.
