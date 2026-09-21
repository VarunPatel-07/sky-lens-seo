import { AuditCategoryName } from "@/types/audit.interface";
import { CATEGORY_LABELS, MAX_AMBER_OPACITY, MIN_AMBER_OPACITY } from "./ScoreCategory.constant";

// Maps a 0-100 score to an amber opacity — lower scores read as more saturated/urgent
export function getAmberOpacityForScore(score: number): number {
  const clampedScore = Math.min(100, Math.max(0, score));
  const range = MAX_AMBER_OPACITY - MIN_AMBER_OPACITY;
  return MAX_AMBER_OPACITY - (clampedScore / 100) * range;
}

// Returns the sentence-case display label for a category name
export function getCategoryLabel(name: AuditCategoryName): string {
  return CATEGORY_LABELS[name];
}
