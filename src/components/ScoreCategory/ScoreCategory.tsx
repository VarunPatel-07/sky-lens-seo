import { FindingCard } from "@/components/FindingCard/FindingCard";
import { NO_FINDINGS_MESSAGE } from "./ScoreCategory.constant";
import { getAmberOpacityForScore, getCategoryLabel } from "./ScoreCategory.helper";
import { ScoreCategoryProps } from "./ScoreCategory.interface";

export function ScoreCategory({ category }: ScoreCategoryProps) {
  return (
    <div className="flex w-full flex-col gap-4 border-b border-report-border py-6 last:border-b-0 sm:flex-row sm:items-start">
      <div className="flex items-center gap-4 sm:w-56 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-md font-mono text-xl font-semibold text-report-ink shadow-sm"
          style={{ backgroundColor: `rgba(245, 166, 35, ${getAmberOpacityForScore(category.score)})` }}
        >
          {category.score}
        </span>
        <span className="font-semibold text-report-ink">{getCategoryLabel(category.name)}</span>
      </div>

      <div className="flex w-full flex-col gap-2">
        {category.findings.length === 0 ? (
          <p className="text-report-muted">{NO_FINDINGS_MESSAGE}</p>
        ) : (
          category.findings.map((finding, index) => (
            <FindingCard
              key={`${category.name}-${index}`}
              issue={finding.issue}
              impact={finding.impact}
              fix={finding.fix}
            />
          ))
        )}
      </div>
    </div>
  );
}
