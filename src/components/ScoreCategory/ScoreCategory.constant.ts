import { AuditCategoryName } from "@/types/audit.interface";

export const CATEGORY_LABELS: Record<AuditCategoryName, string> = {
  performance: "Performance",
  seo: "SEO",
  accessibility: "Accessibility",
  content: "Content",
  "best-practices": "Best practices",
  "agentic-browsing": "Agentic browsing",
};

export const MIN_AMBER_OPACITY = 0.55;
export const MAX_AMBER_OPACITY = 1;

export const NO_FINDINGS_MESSAGE = "No issues found in this category.";
