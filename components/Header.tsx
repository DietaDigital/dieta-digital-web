import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Dieta Digital">
          <Image src="/logo.png" alt="" width={34} height={34} className="h-9 w-9" />
          <span className="text-sm font-semibold tracking-wide text-slate-900">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#23864f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/instalar">Instalar extension</Button>
        </div>

        <Link
          href="/instalar"
          className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800 md:hidden"
        >
          Instalar
        </Link>
      </div>
    </header>
  );
}
