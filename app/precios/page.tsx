import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes de Dieta Digital para uso personal y equipos."
};

export default function PreciosPage() {
  return (
    <Section
      eyebrow="Precios"
      title="Planes simples para personalizar tu feed."
      description="Empeza gratis con las funciones esenciales. Las opciones avanzadas se sumaran cuando el producto lo necesite."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Section>
  );
}
