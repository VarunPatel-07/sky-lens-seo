"use client";

import skyphrLogo from "@/assets/images/skyphr-logo.png";
import { SkyphrCtaButton } from "@/components/SkyphrCtaButton/SkyphrCtaButton";
import { SKYPHR_REVEAL_CONTAINER_VARIANTS, SKYPHR_REVEAL_ITEM_VARIANTS } from "@/constants/motion.constant";
import { SKYPHR_HOMEPAGE_URL } from "@/constants/skyphr.constant";
import { SKYPHR_CARD_RADIUS, SKYPHR_HOMEPAGE_LABEL, SKYPHR_SECTION_PADDING } from "@/constants/skyphrBrand.constant";
import { instrumentSans, playfairDisplay } from "@/lib/fonts/skyphrBrandFonts";
import { motion } from "motion/react";
import Image from "next/image";
import {
  ABOUT_DATA_SOURCES,
  ABOUT_HEADLINE_ACCENT,
  ABOUT_HEADLINE_PREFIX,
  ABOUT_HEADLINE_SUFFIX,
  ABOUT_HOW_IT_WORKS_STEPS,
  ABOUT_MISSION_PARAGRAPHS,
  ABOUT_SKYPHR_HEADING,
  ABOUT_SKYPHR_LINK_LABEL,
  ABOUT_SKYPHR_PARAGRAPHS,
  ABOUT_SUBTEXT,
} from "./about.constant";

export function AboutContent() {
  return (
    <main
      className={`skyphr-brand ${instrumentSans.variable} ${playfairDisplay.variable} font-instrument-sans flex-1 bg-(--root-white-color) text-(--text-main-color)`}>
      <motion.div
        variants={SKYPHR_REVEAL_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className={`skyphr-container flex flex-col items-center gap-14 text-center ${SKYPHR_SECTION_PADDING}`}>
        <div className="flex max-w-2xl flex-col items-center gap-4">
          <motion.h1 variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="text-4xl font-bold tracking-tight xl:text-6xl">
            {ABOUT_HEADLINE_PREFIX}{" "}
            <span className="font-playfair-display font-semibold italic">{ABOUT_HEADLINE_ACCENT}</span>{" "}
            {ABOUT_HEADLINE_SUFFIX}
          </motion.h1>
          <motion.p
            variants={SKYPHR_REVEAL_ITEM_VARIANTS}
            className="text-base text-(--text-secondary-color) sm:text-lg">
            {ABOUT_SUBTEXT}
          </motion.p>
        </div>

        <motion.div
          variants={SKYPHR_REVEAL_ITEM_VARIANTS}
          className={`flex w-full max-w-3xl flex-col gap-4 border border-(--skyphr-border-color) bg-(--about-us-card-bg) p-6 text-left sm:p-8 ${SKYPHR_CARD_RADIUS}`}>
          {ABOUT_MISSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-(--text-secondary-color) sm:text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="flex w-full max-w-4xl flex-col gap-6">
          <h2 className="text-[28px] font-semibold md:text-3xl xl:text-[36px]">How it works</h2>
          <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col gap-2 border border-(--skyphr-border-color) bg-(--root-white-color) p-5 ${SKYPHR_CARD_RADIUS}`}>
                <span className="text-sm font-semibold text-(--cta-button-background)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold">{step.title}</p>
                <p className="text-sm text-(--text-secondary-color)">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="flex flex-wrap items-center justify-center gap-2">
          {ABOUT_DATA_SOURCES.map((source) => (
            <span
              key={source}
              className="rounded-full border border-(--skyphr-border-color) px-3 py-1 text-xs font-medium text-(--text-secondary-color)">
              {source}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={SKYPHR_REVEAL_ITEM_VARIANTS}
          className={`flex w-full max-w-3xl flex-col items-start gap-4 border border-(--skyphr-border-color) bg-(--about-us-card-bg) p-6 text-left sm:p-8 ${SKYPHR_CARD_RADIUS}`}>
          <Image src={skyphrLogo} alt={SKYPHR_HOMEPAGE_LABEL} className="h-6 w-auto" />
          <h2 className="text-xl font-semibold">{ABOUT_SKYPHR_HEADING}</h2>
          {ABOUT_SKYPHR_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-(--text-secondary-color) sm:text-base">
              {paragraph}
            </p>
          ))}

          <SkyphrCtaButton href={SKYPHR_HOMEPAGE_URL} btnStyle="CTA_PRIMARY" target="_blank">
            {ABOUT_SKYPHR_LINK_LABEL}
          </SkyphrCtaButton>
        </motion.div>
      </motion.div>
    </main>
  );
}
