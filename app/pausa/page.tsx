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
        <div className="mx-auto mb-7 grid h-12 w-12 place-items-center rounded-md border border-emerald-200 bg-emerald-50 text-sm font-bold text-[#23864f]">
          DD
        </div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#23864f]">
          Proyecto en preparacion
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
          Dieta Digital
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Estamos preparando la primera version publica del sitio. La extension todavia no esta
          disponible para uso publico.
        </p>
        <p className="mt-8 text-sm text-slate-500">
          Contacto:{" "}
          <a className="text-[#23864f] hover:text-[#1b6f42]" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
