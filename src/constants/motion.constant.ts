export const STAGGER_REVEAL_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

export const STAGGER_REVEAL_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Skyphr brand's "blur + rise" reveal (About/Contact/Privacy/Terms) — the
// same shape as their GSAP reveal (y: 50 -> 0, opacity: 0 -> 1, blur(10px)
// -> blur(0px)), reproduced with the `motion` library already used
// elsewhere in this app instead of adding GSAP as a new dependency.
export const SKYPHR_REVEAL_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const SKYPHR_REVEAL_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};
