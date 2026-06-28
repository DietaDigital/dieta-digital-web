import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mint/10 bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Dieta Digital">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-fern/40 bg-fern/12 text-sm font-bold text-fern">
            DD
          </span>
          <span className="text-sm font-semibold tracking-wide text-cream">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-cream/70 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-fern">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/beta">Unirme a la beta</Button>
        </div>

        <Link
          href="/beta"
          className="rounded-md border border-mint/20 px-3 py-2 text-xs font-semibold text-cream md:hidden"
        >
          Beta
        </Link>
      </div>
    </header>
  );
}
