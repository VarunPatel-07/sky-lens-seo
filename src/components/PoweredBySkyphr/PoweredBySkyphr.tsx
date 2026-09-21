import Image from "next/image";
import Link from "next/link";
import skyphrLogo from "@/assets/images/skyphr-logo.png";
import { SKYPHR_HOMEPAGE_URL } from "@/constants/skyphr.constant";
import { POWERED_BY_LABEL } from "./PoweredBySkyphr.constant";

export function PoweredBySkyphr() {
  return (
    <Link
      href={SKYPHR_HOMEPAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted shadow-sm transition-colors hover:bg-report-panel-alt"
    >
      {POWERED_BY_LABEL}
      <Image src={skyphrLogo} alt="SkyPhr" className="h-3 w-auto" />
    </Link>
  );
}
