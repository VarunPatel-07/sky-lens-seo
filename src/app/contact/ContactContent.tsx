"use client";

import { SkyphrCtaButton } from "@/components/SkyphrCtaButton/SkyphrCtaButton";
import { SKYPHR_REVEAL_CONTAINER_VARIANTS, SKYPHR_REVEAL_ITEM_VARIANTS } from "@/constants/motion.constant";
import { SKYPHR_HOMEPAGE_URL } from "@/constants/skyphr.constant";
import { SKYPHR_CARD_RADIUS, SKYPHR_SECTION_PADDING } from "@/constants/skyphrBrand.constant";
import { instrumentSans, playfairDisplay } from "@/lib/fonts/skyphrBrandFonts";
import { motion } from "motion/react";
import {
  CONTACT_CHANNELS,
  CONTACT_HEADLINE_ACCENT,
  CONTACT_HEADLINE_PREFIX,
  CONTACT_SKYPHR_LINK_LABEL,
  CONTACT_SKYPHR_NOTE,
  CONTACT_SUBTEXT,
} from "./contact.constant";

export function ContactContent() {
  return (
    <main
      className={`skyphr-brand ${instrumentSans.variable} ${playfairDisplay.variable} font-instrument-sans flex-1 bg-(--root-white-color) text-(--text-main-color)`}>
      <motion.div
        variants={SKYPHR_REVEAL_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className={`skyphr-container flex flex-col items-center gap-12 text-center ${SKYPHR_SECTION_PADDING}`}>
        <div className="flex max-w-2xl flex-col items-center gap-4">
          <motion.h1 variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="text-4xl font-bold tracking-tight xl:text-6xl">
            {CONTACT_HEADLINE_PREFIX}{" "}
            <span className="font-playfair-display font-semibold italic">{CONTACT_HEADLINE_ACCENT}</span>
          </motion.h1>
          <motion.p
            variants={SKYPHR_REVEAL_ITEM_VARIANTS}
            className="text-base text-(--text-secondary-color) sm:text-lg">
            {CONTACT_SUBTEXT}
          </motion.p>
        </div>

        <motion.div variants={SKYPHR_REVEAL_ITEM_VARIANTS} className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.email}
              className={`flex flex-col gap-3 border border-(--skyphr-border-color) bg-(--about-us-card-bg) p-5 text-left ${SKYPHR_CARD_RADIUS}`}>
              <p className="font-semibold">{channel.label}</p>
              <p className="flex-1 text-sm text-(--text-secondary-color)">{channel.description}</p>
              <a
                href={`mailto:${channel.email}`}
                className="text-sm font-medium text-(--cta-button-background) hover:underline">
                {channel.email}
              </a>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={SKYPHR_REVEAL_ITEM_VARIANTS}
          className={`flex w-full max-w-3xl flex-col items-center gap-4 border border-(--skyphr-border-color) bg-(--about-us-card-bg) p-6 sm:p-8 ${SKYPHR_CARD_RADIUS}`}>
          <p className="text-sm leading-relaxed text-(--text-secondary-color) sm:text-base">{CONTACT_SKYPHR_NOTE}</p>
          <SkyphrCtaButton href={SKYPHR_HOMEPAGE_URL} btnStyle="CTA_PRIMARY" target="_blank">
            {CONTACT_SKYPHR_LINK_LABEL}
          </SkyphrCtaButton>
        </motion.div>
      </motion.div>
    </main>
  );
}
