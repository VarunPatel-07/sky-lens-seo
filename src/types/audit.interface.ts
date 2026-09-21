import { ButtonHTMLAttributes } from "react";

export type AuditCategoryName =
  | "performance"
  | "seo"
  | "accessibility"
  | "content"
  | "best-practices"
  | "agentic-browsing";

export interface AuditFinding {
  issue: string;
  impact: string;
  fix: string;
}

export interface AuditCategory {
  name: AuditCategoryName;
  score: number;
  findings: AuditFinding[];
}

export interface AuditResult {
  url: string;
  overallScore: number;
  summary: string;
  screenshotBase64: string;
  categories: AuditCategory[];
  aiGenerated: boolean;
}

export type AuditErrorCode =
  | "invalid_url"
  | "site_unreachable"
  | "rate_limited"
  | "upstream_failure"
  | "internal_error";

export interface AuditErrorResponse {
  error: AuditErrorCode;
  message: string;
  source?: "pagespeed" | "openai";
}

export interface ButtonEleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY";
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  rel?: string;
  theme?: "LIGHT" | "DARK";
}
