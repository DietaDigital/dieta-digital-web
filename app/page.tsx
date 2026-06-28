import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

const categories = ["Noticias", "Politica", "Deportes", "Entretenimiento", "Productividad"];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-fern">
            Bienestar digital sin bloqueo total
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-cream md:text-7xl">
            Dieta Digital
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/72 md:text-xl">
            Una extension de navegador que te permite personalizar lo que ves en redes sociales.
            No bloquea internet: te ayuda a reducir, ocultar o permitir categorias de contenido
            segun tus preferencias.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/beta">Unirme a la beta</Button>
            <Button href="/precios" variant="secondary">
              Ver planes
            </Button>
          </div>
        </div>

        <div className="surface rounded-lg p-4 md:p-6">
          <div className="rounded-md border border-mint/10 bg-ink/70 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-mint/10 pb-4">
              <div>
                <div className="text-sm font-semibold text-cream">Preferencias de contenido</div>
                <div className="text-xs text-cream/52">Tu entorno, tus reglas</div>
              </div>
              <div className="rounded-md bg-fern/16 px-3 py-1 text-xs font-semibold text-fern">
                Activo
              </div>
            </div>
            <div className="grid gap-3">
              {categories.map((category, index) => (
                <div key={category} className="rounded-md border border-mint/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-cream">{category}</span>
                    <span className="text-xs text-cream/52">
                      {index % 2 === 0 ? "Reducir" : "Permitir"}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/8">
                    <div
                      className="h-2 rounded-full bg-fern"
                      style={{ width: `${index % 2 === 0 ? 42 + index * 8 : 78}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Enfoque"
        title="Menos ruido, mas eleccion."
        description="Dieta Digital no pretende decidir por vos. Te da una capa simple para ajustar el tipo de contenido que aparece en tus redes y recuperar atencion sin cortar tu vida digital."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Reducir", "Baja la presencia de categorias que te distraen o te saturan."],
            ["Ocultar", "Limpia contenido que preferis evitar durante tu dia."],
            ["Permitir", "Mantene visible lo que si queres ver, aprender o seguir."]
          ].map(([title, text]) => (
            <div key={title} className="surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-7 text-cream/64">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Diferencia"
        title="No es control parental. No es antivirus. No es castigo."
        description="Es una herramienta premium de bienestar digital y productividad personal para usar redes con mas intencion."
      >
        <div className="grid gap-3 text-sm text-cream/72 md:grid-cols-2">
          {[
            "No bloquea todo internet.",
            "No reemplaza tu criterio.",
            "No vende miedo.",
            "No necesita login en esta etapa.",
            "No instala pagos todavia.",
            "Esta pensada para adultos que quieren foco."
          ].map((item) => (
            <div key={item} className="rounded-md border border-mint/10 bg-white/[0.03] p-4">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Planes"
        title="Primero beta, despues lanzamiento."
        description="La primera version se enfoca en validar la experiencia y escuchar usuarios reales antes de activar pagos."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Section>
    </>
  );
}
