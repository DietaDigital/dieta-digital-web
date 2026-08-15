import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes Gratis y Pro de Dieta Digital."
};

export default function PreciosPage() {
  return (
    <Section
      eyebrow="Precios"
      title="Empeza gratis. Desbloquea Pro cuando quieras mas control."
      description="El plan gratis incluye filtros esenciales. Pro esta preparado para desbloquear todas las categorias y listas personales sin limite cuando conectemos el checkout."
    >
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
        El pago se procesara con Lemon Squeezy o un proveedor equivalente. La extension nunca debe
        pedir datos de tarjeta dentro del popup: el cobro se realiza en una pagina segura externa.
      </p>
    </Section>
  );
}
