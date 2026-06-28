import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-fern">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight text-cream md:text-5xl">{title}</h2>
        {description ? (
          <p className="mt-5 text-base leading-7 text-cream/68 md:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
