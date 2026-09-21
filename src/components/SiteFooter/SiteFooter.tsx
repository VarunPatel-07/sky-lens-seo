import Link from "next/link";
import { FOOTER_LINKS } from "./SiteFooter.constant";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 py-6 text-sm text-muted">
        {FOOTER_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-ink">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
