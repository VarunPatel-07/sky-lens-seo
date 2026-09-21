"use client";

import { motion } from "motion/react";
import { ScoreCategory } from "@/components/ScoreCategory/ScoreCategory";
import { ScoreGauge } from "@/components/ScoreGauge/ScoreGauge";
import { SiteScreenshot } from "@/components/SiteScreenshot/SiteScreenshot";
import {
  STAGGER_REVEAL_CONTAINER_VARIANTS,
  STAGGER_REVEAL_ITEM_VARIANTS,
} from "@/constants/motion.constant";
import { AI_GENERATED_LABEL, STATIC_TEMPLATE_LABEL } from "./AuditReport.constant";
import { AuditReportProps } from "./AuditReport.interface";

export function AuditReport({ result }: AuditReportProps) {
  return (
    <motion.div
      variants={STAGGER_REVEAL_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl rounded-2xl border border-report-border bg-report-bg p-6 text-report-ink shadow-xl shadow-gray-200/60 sm:p-8"
    >
      <motion.div
        variants={STAGGER_REVEAL_ITEM_VARIANTS}
        className="flex flex-col gap-6 rounded-xl border border-report-border bg-linear-to-br from-indigo-50 via-white to-amber-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-5">
          <ScoreGauge score={result.overallScore} />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-report-muted">{result.url}</p>
            <p className="max-w-sm text-report-ink">{result.summary}</p>
            <span className="w-fit rounded-full bg-amber-soft px-2.5 py-1 text-xs font-medium text-amber-text">
              {result.aiGenerated ? AI_GENERATED_LABEL : STATIC_TEMPLATE_LABEL}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={STAGGER_REVEAL_ITEM_VARIANTS} className="mt-6 flex justify-center">
        <SiteScreenshot screenshotBase64={result.screenshotBase64} siteUrl={result.url} />
      </motion.div>

      <motion.div
        variants={STAGGER_REVEAL_ITEM_VARIANTS}
        className="mt-6 flex flex-col rounded-xl border border-report-border bg-report-panel px-5 shadow-sm"
      >
        {result.categories.map((category) => (
          <ScoreCategory key={category.name} category={category} />
        ))}
      </motion.div>
    </motion.div>
  );
}
