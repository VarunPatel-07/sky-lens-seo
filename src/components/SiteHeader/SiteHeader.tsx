import Image from "next/image";
import Link from "next/link";
import skylensLogo from "@/assets/images/skylens-logo-transperent.png";
import { NAV_LINKS } from "./SiteHeader.constant";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src={skylensLogo} alt="SkyLens" className="h-7 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
