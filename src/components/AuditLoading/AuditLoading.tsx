"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import {
  LOADING_CANCEL_LABEL,
  LOADING_CREEP_INCREMENT,
  LOADING_CREEP_INTERVAL_MS,
  LOADING_CREEP_MAX_FRACTION,
  LOADING_OUTER_RING_SIZE_PX,
  LOADING_RING_SIZE_PX,
  LOADING_RING_STROKE_WIDTH,
  LOADING_STEPS,
  LOADING_STEP_INTERVAL_MS,
  LOADING_STEP_SEQUENCE_MAX_FRACTION,
  LOADING_SUPPORTING_COPY,
} from "./AuditLoading.constant";
import { getRingGeometry, getStepIcon, getStepProgressFraction } from "./AuditLoading.helper";
import { AuditLoadingProps } from "./AuditLoading.interface";

export function AuditLoading({ onCancel }: AuditLoadingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [creepFraction, setCreepFraction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((step) => Math.min(step + 1, LOADING_STEPS.length - 1));
    }, LOADING_STEP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const isOnFinalStep = currentStep === LOADING_STEPS.length - 1;

  useEffect(() => {
    if (!isOnFinalStep) {
      return;
    }

    const maxCreep = LOADING_CREEP_MAX_FRACTION - LOADING_STEP_SEQUENCE_MAX_FRACTION;
    const interval = setInterval(() => {
      setCreepFraction((fraction) => Math.min(fraction + LOADING_CREEP_INCREMENT, maxCreep));
    }, LOADING_CREEP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isOnFinalStep]);

  const sequenceFraction =
    getStepProgressFraction(currentStep, LOADING_STEPS.length) * LOADING_STEP_SEQUENCE_MAX_FRACTION;
  const progressFraction = isOnFinalStep
    ? Math.min(sequenceFraction + creepFraction, LOADING_CREEP_MAX_FRACTION)
    : sequenceFraction;
  const progressPercent = Math.round(progressFraction * 100);
  const { radius, circumference, dashOffset } = getRingGeometry(
    LOADING_RING_SIZE_PX,
    LOADING_RING_STROKE_WIDTH,
    progressFraction,
  );
  const ringCenter = LOADING_RING_SIZE_PX / 2;

  return (
    <div className="relative flex w-full max-w-md flex-col items-center gap-10 py-12 text-center">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-16 h-56 w-56 rounded-full bg-amber/20 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative" style={{ width: LOADING_OUTER_RING_SIZE_PX, height: LOADING_OUTER_RING_SIZE_PX }}>
        <div
          className="absolute inset-0 animate-spin rounded-full border border-dashed border-primary/30"
          style={{ animationDuration: "9s" }}
        />

        <div
          className="absolute inset-0 m-auto"
          style={{ width: LOADING_RING_SIZE_PX, height: LOADING_RING_SIZE_PX }}
        >
          <svg
            width={LOADING_RING_SIZE_PX}
            height={LOADING_RING_SIZE_PX}
            className="-rotate-90 drop-shadow-[0_0_10px_rgba(79,70,229,0.35)]"
          >
            <circle
              cx={ringCenter}
              cy={ringCenter}
              r={radius}
              strokeWidth={LOADING_RING_STROKE_WIDTH}
              className="stroke-border"
              fill="none"
            />
            <motion.circle
              cx={ringCenter}
              cy={ringCenter}
              r={radius}
              strokeWidth={LOADING_RING_STROKE_WIDTH}
              className="stroke-primary"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-8 w-8 items-center justify-center text-primary"
              >
                {getStepIcon(currentStep)}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.span
                key={progressPercent}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-sm font-medium text-muted"
              >
                {progressPercent}%
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative flex w-full max-w-sm flex-col gap-5 text-left">
        <div
          className="absolute left-2.75 top-1 bottom-1 w-px bg-border"
          aria-hidden
        />
        <motion.div
          className="absolute left-2.75 top-1 w-px origin-top bg-primary"
          style={{ bottom: 1 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progressFraction }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden
        />

        {LOADING_STEPS.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={step} className="relative z-10 flex items-center gap-3">
              <span
                className={clsx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isCompleted && "border-primary bg-primary text-white",
                  isActive && "border-primary bg-surface",
                  !isCompleted && !isActive && "border-border bg-surface",
                )}
              >
                {isActive && (
                  <motion.span
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <AnimatePresence>
                  {isCompleted && (
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </span>
              <span className={clsx("text-sm", isActive || isCompleted ? "text-ink" : "text-muted")}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      <p className="max-w-sm text-muted">{LOADING_SUPPORTING_COPY}</p>

      <button
        type="button"
        onClick={onCancel}
        className="rounded-full bg-border px-5 py-2 text-sm font-medium text-ink hover:bg-border/70"
      >
        {LOADING_CANCEL_LABEL}
      </button>
    </div>
  );
}
