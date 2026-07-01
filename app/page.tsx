import Image from "next/image";
import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

const settings = [
  ["Ocultar contenido politico intenso", true],
  ["Reducir drama viral", true],
  ["Permitir aprendizaje y productividad", true],
  ["Ocultar apuestas y contenido sensible", true],
  ["Pausar filtro en este sitio", false]
];

const problems = [
  "El algoritmo mezcla lo que queres ver con lo que solo captura tu atencion.",
  "Las redes no distinguen entre informarte, entretenerte y saturarte.",
  "Bloquear toda una app suele ser demasiado extremo para el dia a dia."
];

const steps = [
  ["Elegis categorias", "Seleccionas temas que queres permitir, reducir u ocultar."],
  ["Ajustas tu nivel", "No todo tiene que desaparecer: podes bajar la intensidad."],
  ["Usas redes con criterio", "El feed queda mas alineado con tu energia, objetivos y momento."]
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

const faqs = [
  [
    "Dieta Digital bloquea internet?",
    "No. Te ayuda a personalizar categorias de contenido dentro de redes sociales, sin apagar toda la web."
  ],
  [
    "Es un adblocker?",
    "No es un bloqueador clasico de anuncios o popups. Su foco es el feed, las categorias y el consumo consciente."
  ],
  [
    "Es control parental?",
    "No. Esta pensado para personas que quieren decidir mejor que consumen, no para vigilar a otros."
  ],
  [
    "Ya se puede usar?",
    "Si. La primera version esta orientada a uso inicial de la extension y se ira mejorando con feedback real."
  ]
];

function Toggle({ active }: { active: boolean }) {
  return (
    <span
      className={`flex h-6 w-11 items-center rounded-full p-1 transition ${
        active ? "bg-[#23864f]" : "bg-slate-300"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${
          active ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </span>
  );
}

function ProductPanel() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_22px_70px_rgba(31,45,37,0.14)]">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={38} height={38} className="h-10 w-10" />
          <div>
            <div className="text-sm font-semibold text-slate-950">Dieta Digital</div>
            <div className="text-xs text-slate-500">Personaliza tu experiencia</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#23864f]">
          Activo
        </span>
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900">newtab</div>
            <div className="mt-1 text-xs text-slate-500">4 categorias ajustadas en este sitio</div>
          </div>
          <Toggle active />
        </div>
        <button className="mt-3 flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-800">
          Personalizar contenido
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-slate-200">
        <div className="grid grid-cols-2 border-b border-slate-200 text-center text-sm font-semibold">
          <div className="border-b-2 border-[#23864f] px-4 py-3 text-slate-950">Preferencias</div>
          <div className="px-4 py-3 text-slate-400">Estadisticas</div>
        </div>
        <div className="divide-y divide-slate-100">
          {settings.map(([label, active]) => (
            <div key={label as string} className="flex items-center justify-between gap-4 px-4 py-4">
              <span className="text-sm font-medium text-slate-700">{label}</span>
              <Toggle active={Boolean(active)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#23864f]">
              Bienestar digital para redes sociales
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] text-slate-950 md:text-7xl">
              Controla tu feed sin bloquear tu vida digital.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Dieta Digital es una extension para personalizar lo que ves en redes sociales:
              reduce, oculta o permite categorias de contenido segun tus preferencias.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/instalar">Instalar extension</Button>
              <Button href="/precios" variant="secondary">
                Ver planes
              </Button>
            </div>
            <div className="mt-9 grid max-w-2xl gap-3 text-sm font-medium text-slate-500 sm:grid-cols-3">
              <span>Sin tono antivirus</span>
              <span>Sin control parental</span>
              <span>Sin bloqueo total</span>
            </div>
          </div>

          <ProductPanel />
        </div>
      </section>

      <Section
        eyebrow="Problema"
        title="Tu feed no siempre trabaja para vos."
        description="Las plataformas optimizan por atencion. Dieta Digital parte de otra pregunta: que queres consumir realmente?"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem} className="surface rounded-lg p-6">
              <p className="text-lg leading-7 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Solucion"
        title="Personalizacion del algoritmo, no castigo digital."
        description="No se trata de desaparecer de internet. Se trata de darle forma a tu entorno para consumir contenido con mas intencion."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Reducir", "Baja la frecuencia de temas que te saturan."],
            ["Ocultar", "Saca de vista categorias que preferis evitar."],
            ["Permitir", "Mantiene visible lo que si queres ver."],
            ["Priorizar", "Da mas espacio a contenido que te aporta."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Como funciona"
        title="Tres pasos simples."
        description="La experiencia esta pensada para sentirse clara como una extension moderna: activar, ajustar y seguir navegando."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article key={title} className="surface rounded-lg p-6">
              <div className="mb-6 grid h-10 w-10 place-items-center rounded-md bg-emerald-50 text-sm font-semibold text-[#23864f]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Categorias"
        title="Control granular para tu dieta de contenido."
        description="A diferencia de un bloqueador comun, el centro no son los anuncios: son las categorias que moldean tu atencion."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-md border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Diferencial"
        title="No es adblocker clasico. No es antivirus. No es control parental."
        description="Dieta Digital se enfoca en bienestar digital, personalizacion del feed, control del algoritmo y consumo consciente de contenido."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Bloqueadores comunes", "Cortan popups, anuncios o sitios completos."],
            ["Dieta Digital", "Ajusta categorias de contenido sin apagar toda la experiencia."],
            ["Control parental", "Impone limites desde afuera."],
            ["Dieta Digital", "Parte de tus preferencias y de tu propio criterio."]
          ].map(([title, text]) => (
            <div
              key={`${title}-${text}`}
              className={`rounded-lg border p-6 shadow-sm ${
                title === "Dieta Digital"
                  ? "border-[#23864f]/30 bg-emerald-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Planes"
        title="Empeza gratis. Mejora cuando necesites mas control."
        description="La primera version se enfoca en uso real de la extension. Las funciones avanzadas pueden sumarse despues sin complicar la experiencia inicial."
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
        description="El producto esta orientado a ayudarte a decidir que ves, no a monitorearte ni vender miedo."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Sin cuenta obligatoria", "La experiencia inicial puede funcionar con preferencias locales."],
            ["Datos minimos", "Solo lo necesario para contacto y mejora del producto."],
            ["Preparado para crecer", "Supabase puede agregarse despues con reglas claras."]
          ].map(([title, text]) => (
            <div key={title} className="surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Preguntas frecuentes"
        title="Lo importante, sin vueltas."
        description="Dieta Digital no intenta reemplazar tu criterio: te da herramientas para aplicarlo mejor."
      >
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="surface rounded-lg p-5">
              <summary className="cursor-pointer text-lg font-semibold text-slate-950">
                {question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-lg border border-[#23864f]/25 bg-emerald-50 p-8 text-center shadow-sm md:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#23864f]">
            Disponible para usar
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
            Dale forma a lo que consumis cada dia.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Instala Dieta Digital y empeza a ajustar tu feed con una logica mas consciente,
            flexible y personal.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/instalar">Instalar extension</Button>
          </div>
        </div>
      </section>
    </>
  );
}
