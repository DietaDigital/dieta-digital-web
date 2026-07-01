import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instalar",
  description: "Instala Dieta Digital."
};

export default function InstalarPage() {
  return (
    <Section
      eyebrow="Instalar"
      title="Empeza a usar Dieta Digital."
      description="La extension esta pensada para personalizar tu experiencia en redes sociales sin bloquear internet completo."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
        <div className="surface rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Que incluye</h2>
          <div className="mt-6 grid gap-4 text-slate-600">
            {[
              "Categorias de contenido configurables.",
              "Una experiencia enfocada en productividad y bienestar digital.",
              "Preferencias locales en el navegador.",
              "Control flexible sin enfoque de castigo o vigilancia."
            ].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="surface rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-slate-950">Instalacion</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Si todavia no publicamos el enlace de la tienda, escribinos y te indicamos la forma
            recomendada de instalar la extension.
          </p>
          <div className="mt-7">
            <Button href={`mailto:${site.email}?subject=Quiero instalar Dieta Digital`}>
              Pedir enlace de instalacion
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}
