import Link from "next/link";
import clsx from "clsx";
import { SkyphrCtaButtonProps } from "./SkyphrCtaButton.interface";

export function SkyphrCtaButton({ href, label, variant = "primary", external = false }: SkyphrCtaButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={clsx(
        "group/btn relative inline-flex min-h-[45px] items-center overflow-hidden rounded-full px-6 font-instrument-sans text-sm font-semibold ring-1 transition-colors duration-300 sm:text-base",
        isPrimary
          ? "bg-(--cta-button-background) text-(--text-white-color) ring-(--cta-button-background)"
          : "bg-transparent text-(--text-main-color) ring-(--skyphr-border-color) hover:text-(--text-white-color)",
      )}
    >
      {!isPrimary && (
        <span
          aria-hidden
          className="absolute inset-0 origin-center scale-0 rounded-full bg-(--cta-button-background) transition-transform duration-300 group-hover/btn:scale-100"
        />
      )}

      <span
        className={clsx(
          "relative z-10 transition-transform duration-300",
          isPrimary && "group-hover/btn:-translate-x-3",
        )}
      >
        {label}
      </span>

      {isPrimary && (
        <span
          aria-hidden
          className="relative z-10 ml-3 flex h-6 w-6 translate-x-8 items-center justify-center rounded-full bg-(--root-white-color) text-(--cta-button-background) opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
            <path
              d="M3 8h10M8.5 3.5 13 8l-4.5 4.5"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Link>
  );
}
