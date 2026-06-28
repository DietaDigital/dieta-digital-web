import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beta",
  description: "Unite a la beta de Dieta Digital."
};

export default function BetaPage() {
  return (
    <Section
      eyebrow="Beta"
      title="Sumate a la primera version de Dieta Digital."
      description="Estamos abriendo acceso temprano para usuarios que quieran personalizar su experiencia en redes sociales sin caer en bloqueos extremos."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
        <div className="surface rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-cream">Que incluye la beta</h2>
          <div className="mt-6 grid gap-4 text-cream/72">
            {[
              "Acceso anticipado a las funciones principales.",
              "Categorias de contenido configurables.",
              "Una experiencia enfocada en productividad y bienestar digital.",
              "Canal directo para enviar feedback antes del lanzamiento."
            ].map((item) => (
              <div key={item} className="rounded-md border border-mint/10 bg-white/[0.03] p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="surface rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-cream">Solicitar acceso</h3>
          <p className="mt-4 leading-7 text-cream/68">
            Por ahora el alta se gestiona por contacto directo. Escribinos y contanos que navegador
            usas y que redes queres ordenar primero.
          </p>
          <div className="mt-7">
            <Button href={`mailto:${site.email}?subject=Quiero unirme a la beta de Dieta Digital`}>
              Escribir para unirme
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}
