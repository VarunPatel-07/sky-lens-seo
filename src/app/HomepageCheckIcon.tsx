import type { ReactNode } from "react";
import { HomepageCheckIconProps } from "./HomepageCheckIcon.interface";

const ICON_PATHS: Record<HomepageCheckIconProps["name"], ReactNode> = {
  performance: <path d="M3 13h3.5l2-7 4 14 2-7H19" />,
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M20 20l-4.8-4.8" />
    </>
  ),
  accessibility: (
    <>
      <path d="M12 3l7 3.2v4.6c0 4.6-3 8.6-7 10-4-1.4-7-5.4-7-10V6.2L12 3z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  content: (
    <>
      <rect x="5.5" y="3.5" width="13" height="17" rx="1.8" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" />
    </>
  ),
};

export function HomepageCheckIcon({ name, className }: HomepageCheckIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
