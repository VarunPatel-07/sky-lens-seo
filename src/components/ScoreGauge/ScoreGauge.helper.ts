import { SCORE_GAUGE_STROKE_WIDTH } from "./ScoreGauge.constant";

export interface ScoreGaugeGeometry {
  radius: number;
  circumference: number;
  dashOffset: number;
}

// Computes the SVG ring geometry for a given size and 0-100 score
export function getScoreGaugeGeometry(sizePx: number, score: number): ScoreGaugeGeometry {
  const radius = (sizePx - SCORE_GAUGE_STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.min(100, Math.max(0, score));
  const dashOffset = circumference * (1 - clampedScore / 100);

  return { radius, circumference, dashOffset };
}
