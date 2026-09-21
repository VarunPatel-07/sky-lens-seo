import { FindingCardProps } from "./FindingCard.interface";

export function FindingCard({ issue, impact, fix }: FindingCardProps) {
  return (
    <div className="rounded-lg border border-report-border bg-report-panel-alt p-3">
      <p className="font-medium text-report-ink">{issue}</p>
      <p className="mt-1 text-sm text-report-muted">{impact}</p>
      <p className="mt-1 text-sm text-report-muted">
        <span className="font-semibold text-teal">Fix: </span>
        {fix}
      </p>
    </div>
  );
}
