import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

const feedSignals = [
  { name: "Politica intensa", mode: "Reducir", value: 38 },
  { name: "Productividad", mode: "Permitir", value: 86 },
  { name: "Drama viral", mode: "Ocultar", value: 18 },
  { name: "Aprendizaje", mode: "Priorizar", value: 74 }
];

const problems = [
  "El feed mezcla lo importante con lo impulsivo.",
  "Las plataformas optimizan por retencion, no por bienestar.",
  "Bloquear todo suele ser demasiado rigido para la vida real."
];

const steps = [
  ["Elegis categorias", "Definis que temas queres reducir, ocultar o permitir."],
  ["Ajustas intensidad", "No todo tiene que desaparecer: podes bajar el volumen del ruido."],
  ["Navegas con intencion", "Tu feed se vuelve mas alineado con tu momento, energia y objetivos."]
];

const categories = [
  "Politica",
  "Noticias",
  "Apuestas",
  "Drama viral",
  "Contenido sensible",
  "Productividad",
  "Aprendizaje",
  "Bienestar"
];

const blockers = [
  ["Bloqueador comun", "Corta anuncios, popups o sitios completos."],
  ["Dieta Digital", "Personaliza categorias del feed sin convertir internet en una pared."],
  ["Control parental", "Impone limites desde afuera."],
  ["Dieta Digital", "Parte de tus preferencias y de tu propio criterio."]
];

const faqs = [
  [
    "Dieta Digital bloquea internet?",
    "No. La idea es reducir, ocultar o permitir tipos de contenido dentro de redes sociales, no apagar toda la web."
  ],
  [
    "Es un adblocker?",
    "No esta pensado como bloqueador de anuncios clasico. Su foco es el consumo consciente del feed y el control de categorias."
  ],
  [
    "Es control parental?",
    "No. Esta disenado para adultos que quieren ordenar su entorno digital sin vigilancia ni castigo."
  ],
  [
    "Necesita cuenta?",
    "En esta primera etapa no. Mas adelante podria haber login para sincronizar preferencias, pero todavia no esta implementado."
  ]
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-73px)] overflow-hidden border-b border-mint/10">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(7,16,13,0.72),#07100d_88%)]" />
        <div className="absolute left-1/2 top-12 -z-10 w-[64rem] -translate-x-1/2 rounded-xl border border-mint/10 bg-white/[0.035] p-4 opacity-70 shadow-glow md:top-20">
          <div className="rounded-lg border border-mint/10 bg-ink/85 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-mint/10 pb-4">
              <div>
                <div className="text-sm font-semibold text-cream">Control del feed</div>
                <div className="text-xs text-cream/48">Preferencias activas para esta sesion</div>
              </div>
              <div className="rounded-md bg-fern/16 px-3 py-1 text-xs font-semibold text-fern">
                Calmo
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {feedSignals.map((signal) => (
                <div key={signal.name} className="rounded-md border border-mint/10 bg-white/[0.035] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-cream">{signal.name}</span>
                    <span className="text-xs text-cream/52">{signal.mode}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/8">
                    <div className="h-2 rounded-full bg-fern" style={{ width: `${signal.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-end px-5 pb-14 pt-28 md:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-fern">
              Bienestar digital para redes sociales
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] text-cream md:text-7xl">
              Dieta Digital
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/74 md:text-xl">
              Personaliza lo que ves en redes sociales. Reduce ruido, oculta categorias que te
              saturan y permite contenido que si queres consumir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/beta">Unirme a la beta</Button>
              <Button href="/precios" variant="secondary">
                Ver planes
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 text-sm text-cream/62 sm:grid-cols-3">
              <span>Sin bloqueo total</span>
              <span>Sin control parental</span>
              <span>Sin tono antivirus</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Problema"
        title="Tu feed no siempre trabaja para vos."
        description="Las redes pueden ser utiles, pero tambien convierten cada pausa en una secuencia de impulsos. El problema no es internet: es la falta de control fino sobre lo que aparece."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem} className="surface rounded-lg p-6">
              <p className="text-lg leading-7 text-cream">{problem}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Solucion"
        title="Un filtro personal para consumir contenido con mas intencion."
        description="Dieta Digital no te obliga a desaparecer de las redes. Te da una capa de preferencias para que el algoritmo no sea el unico que decide tu dieta de informacion."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Reducir", "Baja la frecuencia de temas que drenan atencion."],
            ["Ocultar", "Saca de vista categorias que preferis evitar."],
            ["Permitir", "Mantiene visible lo que te aporta valor."],
            ["Priorizar", "Da mas espacio a contenido alineado con tus objetivos."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-mint/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-7 text-cream/66">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Como funciona"
        title="Tres decisiones simples, un feed mas saludable."
        description="La experiencia esta pensada para ser clara, reversible y menos extrema que un bloqueo completo."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article key={title} className="surface rounded-lg p-6">
              <div className="mb-6 grid h-10 w-10 place-items-center rounded-md bg-fern/14 text-sm font-semibold text-fern">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-7 text-cream/64">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Categorias"
        title="Control granular, no botones de panico."
        description="La beta apunta a trabajar con categorias de contenido, no solo con dominios o listas negras."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-md border border-mint/10 bg-white/[0.035] px-4 py-5 text-sm font-medium text-cream/78"
            >
              {category}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Diferencial"
        title="No compite por miedo. Compite por claridad."
        description="Los bloqueadores comunes resuelven popups, anuncios o molestias tecnicas. Dieta Digital se ubica en otro lugar: bienestar digital, personalizacion del feed y consumo consciente."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {blockers.map(([title, text], index) => (
            <div
              key={`${title}-${index}`}
              className={`rounded-lg border p-6 ${
                title === "Dieta Digital"
                  ? "border-fern/40 bg-fern/10"
                  : "border-mint/10 bg-white/[0.025]"
              }`}
            >
              <h3 className="text-lg font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-7 text-cream/66">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Planes"
        title="Primero beta, despues producto completo."
        description="La prioridad es validar que la experiencia realmente ayude antes de activar pagos, login o sincronizacion."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Privacidad"
        title="Preferencias personales, no vigilancia."
        description="La direccion del producto es clara: ayudarte a decidir mejor lo que ves, no observarte como un sistema de control."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Sin cuenta en beta", "La primera etapa no necesita login."],
            ["Datos minimos", "Solo lo necesario para gestionar acceso temprano."],
            ["Preparado para futuro", "Supabase puede agregarse despues con reglas claras."]
          ].map(([title, text]) => (
            <div key={title} className="surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-7 text-cream/64">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Preguntas frecuentes"
        title="Lo importante, sin vueltas."
        description="Dieta Digital todavia esta en etapa inicial, pero la posicion del producto ya esta definida."
      >
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="surface rounded-lg p-5">
              <summary className="cursor-pointer text-lg font-semibold text-cream">{question}</summary>
              <p className="mt-4 leading-7 text-cream/66">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-lg border border-fern/35 bg-fern/10 p-8 text-center shadow-glow md:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-fern">
            Beta privada
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-cream md:text-5xl">
            Probemos una forma mas consciente de usar redes.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cream/70">
            Sumate a la beta y ayudanos a construir una extension que no te trate como un problema,
            sino como alguien que quiere elegir mejor.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/beta">Unirme a la beta</Button>
          </div>
        </div>
      </section>
    </>
  );
}
