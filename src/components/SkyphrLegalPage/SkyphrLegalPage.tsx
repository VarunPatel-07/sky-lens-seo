"use client";

import { motion } from "motion/react";
import { LegalDocument } from "@/components/LegalDocument/LegalDocument";
import { SKYPHR_REVEAL_CONTAINER_VARIANTS, SKYPHR_REVEAL_ITEM_VARIANTS } from "@/constants/motion.constant";
import { SKYPHR_SECTION_PADDING } from "@/constants/skyphrBrand.constant";
import { instrumentSans, playfairDisplay } from "@/lib/fonts/skyphrBrandFonts";
import { SkyphrLegalPageProps } from "./SkyphrLegalPage.interface";

export function SkyphrLegalPage({ eyebrow, headlinePrefix, headlineAccent, subtext, document }: SkyphrLegalPageProps) {
  return (
    <main
      className={`skyphr-brand ${instrumentSans.variable} ${playfairDisplay.variable} font-instrument-sans flex-1 bg-(--root-white-color) text-(--text-main-color)`}
    >
      <motion.div
        variants={SKYPHR_REVEAL_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className={`skyphr-container flex flex-col items-center gap-10 text-center ${SKYPHR_SECTION_PADDING}`}
      >
        <div className="flex max-w-2xl flex-col items-center gap-4">
          <motion.p
            variants={SKYPHR_REVEAL_ITEM_VARIANTS}
            className="text-sm font-semibold text-(--cta-button-background)"
          >
            {eyebrow}
          </motion.p>
          <motion.h1 variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="text-4xl font-bold tracking-tight xl:text-6xl">
            {headlinePrefix}{" "}
            <span className="font-playfair-display font-semibold italic">{headlineAccent}</span>
          </motion.h1>
          <motion.p
            variants={SKYPHR_REVEAL_ITEM_VARIANTS}
            className="text-base text-(--text-secondary-color) sm:text-lg"
          >
            {subtext}
          </motion.p>
        </div>

        <motion.div variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="w-full text-left">
          <LegalDocument {...document} />
        </motion.div>
      </motion.div>
    </main>
  );
}
