import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mint/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-cream/62 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-semibold text-cream">{site.name}</div>
          <p className="max-w-md leading-6">
            Una extension para ajustar tu entorno digital con mas intencion, menos ruido y sin
            convertir internet en una jaula.
          </p>
        </div>
        <div className="grid gap-3">
          <Link href="/precios" className="hover:text-fern">
            Precios
          </Link>
          <Link href="/beta" className="hover:text-fern">
            Beta
          </Link>
          <Link href="/contacto" className="hover:text-fern">
            Contacto
          </Link>
        </div>
        <div className="grid gap-3">
          <Link href="/privacidad" className="hover:text-fern">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-fern">
            Terminos
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-fern">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
