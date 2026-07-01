import { Button } from "./Button";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    href: string;
    featured: boolean;
  };
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`surface rounded-lg p-6 ${
        plan.featured ? "border-[#23864f]/45 shadow-glow" : "border-slate-200"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p>
      </div>
      <div className="mb-6 text-3xl font-semibold text-slate-950">{plan.price}</div>
      <Button href={plan.href} variant={plan.featured ? "primary" : "secondary"}>
        {plan.cta}
      </Button>
      <ul className="mt-7 grid gap-3 text-sm text-slate-600">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#23864f]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
