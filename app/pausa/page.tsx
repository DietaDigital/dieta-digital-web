import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dieta Digital",
  description: "Dieta Digital esta en preparacion.",
  robots: {
    index: false,
    follow: false
  }
};

export default function PausaPage() {
  return (
    <section className="mx-auto grid min-h-screen max-w-4xl place-items-center px-5 py-16">
      <div className="surface rounded-lg p-8 text-center md:p-12">
        <div className="mx-auto mb-7 grid h-12 w-12 place-items-center rounded-md border border-fern/40 bg-fern/12 text-sm font-bold text-fern">
          DD
        </div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-fern">
          Proyecto en preparacion
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-cream md:text-6xl">
          Dieta Digital
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-cream/70 md:text-lg">
          Estamos preparando la primera version publica del sitio. La extension todavia no esta
          disponible para beta abierta.
        </p>
        <p className="mt-8 text-sm text-cream/50">
          Contacto:{" "}
          <a className="text-fern hover:text-mint" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
