import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-slate-600 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-semibold text-slate-950">{site.name}</div>
          <p className="max-w-md leading-6">
            Una extension para ajustar tu entorno digital con mas intencion, menos ruido y sin
            convertir internet en una jaula.
          </p>
        </div>
        <div className="grid gap-3">
          <Link href="/precios" className="hover:text-[#23864f]">
            Precios
          </Link>
          <Link href="/instalar" className="hover:text-[#23864f]">
            Instalar
          </Link>
          <Link href="/contacto" className="hover:text-[#23864f]">
            Contacto
          </Link>
        </div>
        <div className="grid gap-3">
          <Link href="/privacidad" className="hover:text-[#23864f]">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-[#23864f]">
            Terminos
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-[#23864f]">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
