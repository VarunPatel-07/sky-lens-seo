import { SCORE_GAUGE_DEFAULT_SIZE_PX, SCORE_GAUGE_STROKE_WIDTH } from "./ScoreGauge.constant";
import { getScoreGaugeGeometry } from "./ScoreGauge.helper";
import { ScoreGaugeProps } from "./ScoreGauge.interface";

export function ScoreGauge({ score, sizePx = SCORE_GAUGE_DEFAULT_SIZE_PX }: ScoreGaugeProps) {
  const { radius, circumference, dashOffset } = getScoreGaugeGeometry(sizePx, score);
  const center = sizePx / 2;

  return (
    <div className="relative" style={{ width: sizePx, height: sizePx }}>
      <svg width={sizePx} height={sizePx} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={SCORE_GAUGE_STROKE_WIDTH}
          className="stroke-report-border"
          fill="none"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={SCORE_GAUGE_STROKE_WIDTH}
          stroke="var(--amber)"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-semibold text-amber-text">
        {score}
      </div>
    </div>
  );
}
