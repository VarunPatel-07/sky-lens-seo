"use client";

import { AuditLoading } from "@/components/AuditLoading/AuditLoading";
import { AuditReport } from "@/components/AuditReport/AuditReport";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { UrlInputForm } from "@/components/UrlInputForm/UrlInputForm";
import { STAGGER_REVEAL_CONTAINER_VARIANTS, STAGGER_REVEAL_ITEM_VARIANTS } from "@/constants/motion.constant";
import { runAudit } from "@/lib/api/auditApi";
import { AuditResult } from "@/types/audit.interface";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { HomepageCheckIcon } from "./HomepageCheckIcon";
import {
  HERO_FEATURE_PILLS,
  HERO_HEADLINE,
  HERO_SUBTEXT,
  HOMEPAGE_CHECK_ACCENT_CLASSES,
  HOMEPAGE_CHECKS,
  HOMEPAGE_CHECKS_HEADING,
  HOMEPAGE_CHECKS_SUBTEXT,
  HOMEPAGE_INTRO,
  HOMEPAGE_STEPS,
  HOMEPAGE_STEPS_HEADING,
} from "./page.constant";

type ViewState = "idle" | "loading" | "success" | "error";

export function HomeContent() {
  const [viewState, setViewState] = useState<ViewState>("idle");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  async function handleSubmit(url: string) {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setViewState("loading");
    setErrorMessage(null);
    setResult(null);

    const response = await runAudit(url, controller.signal);

    if (controller.signal.aborted) {
      return;
    }

    if (response.ok) {
      setResult(response.data);
      setViewState("success");
    } else {
      setErrorMessage(response.error.message);
      setViewState("error");
    }
  }

  function handleCancel() {
    abortControllerRef.current?.abort();
    setViewState("idle");
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div className="flex flex-col items-center justify-center px-6 py-20 sm:py-28">
          {viewState === "loading" && <AuditLoading onCancel={handleCancel} />}

          {viewState !== "loading" && viewState !== "success" && (
            <motion.div
              variants={STAGGER_REVEAL_CONTAINER_VARIANTS}
              initial="hidden"
              animate="visible"
              className="relative flex w-full max-w-2xl flex-col items-center gap-7 text-center">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-20 h-72 w-72 rounded-full bg-primary-hover/15 blur-3xl"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Plain element, not motion-hidden: it's the LCP candidate, and opacity:0 until hydration would delay paint. */}
              <h1 className="relative bg-linear-to-r from-primary via-ink to-primary-hover bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                {HERO_HEADLINE}
              </h1>

              <motion.p variants={STAGGER_REVEAL_ITEM_VARIANTS} className="relative max-w-md text-lg text-muted">
                {HERO_SUBTEXT}
              </motion.p>

              <motion.div variants={STAGGER_REVEAL_ITEM_VARIANTS} className="relative w-full max-w-xl">
                <UrlInputForm onSubmit={handleSubmit} isLoading={false} />
              </motion.div>

              {viewState === "error" && errorMessage && (
                <motion.p variants={STAGGER_REVEAL_ITEM_VARIANTS} className="relative text-amber-text">
                  {errorMessage}
                </motion.p>
              )}

              <motion.div
                variants={STAGGER_REVEAL_ITEM_VARIANTS}
                className="relative flex flex-wrap items-center justify-center gap-2">
                {HERO_FEATURE_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                    {pill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          )}

          {viewState === "success" && result && (
            <div className="flex w-full flex-col items-center gap-6">
              <AuditReport result={result} />
            </div>
          )}
        </div>

        <section className="w-full border-t border-border bg-surface">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 sm:py-28">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_REVEAL_ITEM_VARIANTS}
              className="mx-auto max-w-2xl text-center leading-relaxed text-muted">
              {HOMEPAGE_INTRO}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_REVEAL_CONTAINER_VARIANTS}
              className="flex flex-col gap-10">
              <motion.div
                variants={STAGGER_REVEAL_ITEM_VARIANTS}
                className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{HOMEPAGE_CHECKS_HEADING}</h2>
                <p className="max-w-md text-sm text-muted">{HOMEPAGE_CHECKS_SUBTEXT}</p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {HOMEPAGE_CHECKS.map((check) => (
                  <motion.div
                    key={check.title}
                    variants={STAGGER_REVEAL_ITEM_VARIANTS}
                    className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-lg hover:shadow-gray-200/70">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${HOMEPAGE_CHECK_ACCENT_CLASSES[check.accent]}`}>
                      <HomepageCheckIcon name={check.icon} className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <p className="font-semibold text-ink">{check.title}</p>
                      <p className="text-sm leading-relaxed text-muted">{check.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_REVEAL_CONTAINER_VARIANTS}
              className="flex flex-col gap-10">
              <motion.div
                variants={STAGGER_REVEAL_ITEM_VARIANTS}
                className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{HOMEPAGE_STEPS_HEADING}</h2>
              </motion.div>

              <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div aria-hidden className="absolute top-6 right-12 left-12 hidden h-px bg-border lg:block" />
                {HOMEPAGE_STEPS.map((step, index) => (
                  <motion.div
                    key={step}
                    variants={STAGGER_REVEAL_ITEM_VARIANTS}
                    className="relative flex flex-col gap-3">
                    <span className="ring-surface relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-white ring-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
