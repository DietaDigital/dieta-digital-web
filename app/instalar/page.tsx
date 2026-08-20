import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instalar",
  description: "Instala Dieta Digital para Chrome."
};

export default function InstalarPage() {
  return (
    <Section
      eyebrow="Instalar"
      title="Empeza a usar Dieta Digital."
      description="Instala la extension, usa el plan gratis y activa Pro desde Go Pro cuando quieras desbloquear todas las funciones."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
        <div className="surface rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Que incluye</h2>
          <div className="mt-6 grid gap-4 text-slate-600">
            {[
              "Plan gratis con Sexualizacion, Violencia y Humor.",
              "Controles para mostrar, reducir u ocultar contenido.",
              "Hasta 3 perfiles, palabras o paginas por lista en gratis.",
              "Go Pro preparado para activar licencia y desbloquear todo."
            ].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="surface rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-slate-950">Instalacion Oficial</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Dieta Digital ya esta publicada y verificada oficialmente en la tienda de extensiones de Google Chrome.
          </p>
          <div className="mt-7">
            <Button href={site.chromeStoreUrl} target="_blank" rel="noopener noreferrer">
              Instalar desde Chrome Web Store
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}
