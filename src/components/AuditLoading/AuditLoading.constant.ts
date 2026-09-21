export const LOADING_STEPS = [
  "Fetching page HTML & content…",
  "Analyzing mobile performance…",
  "Evaluating accessibility standards…",
  "Reviewing SEO fundamentals…",
  "Preparing your prioritized audit report…",
] as const;

export const LOADING_STEP_INTERVAL_MS = 1600;
export const LOADING_SUPPORTING_COPY =
  "Analyzing and prioritizing your website's biggest opportunities…";
export const LOADING_CANCEL_LABEL = "Cancel analysis";

export const LOADING_RING_SIZE_PX = 132;
export const LOADING_RING_STROKE_WIDTH = 6;
export const LOADING_OUTER_RING_SIZE_PX = 160;

// The step sequence is cosmetic and finishes long before slow real requests
// do, so progress is capped short of 100% until the response actually
// arrives, then creeps slowly while the last step waits — never stuck, never
// falsely "done".
export const LOADING_STEP_SEQUENCE_MAX_FRACTION = 0.94;
export const LOADING_CREEP_INCREMENT = 0.005;
export const LOADING_CREEP_INTERVAL_MS = 900;
export const LOADING_CREEP_MAX_FRACTION = 0.99;
