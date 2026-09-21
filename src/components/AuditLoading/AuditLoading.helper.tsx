import { ReactElement } from "react";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEP_ICONS: ReactElement[] = [
  <svg key="fetch" {...ICON_PROPS}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
  <svg key="performance" {...ICON_PROPS}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12l4-4" />
  </svg>,
  <svg key="accessibility" {...ICON_PROPS}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  <svg key="seo" {...ICON_PROPS}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>,
  <svg key="synthesis" {...ICON_PROPS}>
    <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
  </svg>,
];

// Returns the decorative icon for a given step index, falling back to the last icon
export function getStepIcon(stepIndex: number): ReactElement {
  return STEP_ICONS[stepIndex] ?? STEP_ICONS[STEP_ICONS.length - 1];
}

// Returns how far through the sequence a step index represents, as a 0-1 fraction
export function getStepProgressFraction(stepIndex: number, totalSteps: number): number {
  return (stepIndex + 1) / totalSteps;
}

export interface RingGeometry {
  radius: number;
  circumference: number;
  dashOffset: number;
}

// Computes the SVG ring geometry for a given size and 0-1 progress fraction
export function getRingGeometry(sizePx: number, strokeWidth: number, fraction: number): RingGeometry {
  const radius = (sizePx - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - fraction);

  return { radius, circumference, dashOffset };
}
