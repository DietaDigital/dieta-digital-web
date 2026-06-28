import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes de Dieta Digital para beta, uso personal y equipos."
};

export default function PreciosPage() {
  return (
    <Section
      eyebrow="Precios"
      title="Planes simples para empezar con calma."
      description="Durante la primera etapa no hay pagos activos. La beta es el camino para probar la extension y ayudar a definir la version final."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Section>
  );
}
