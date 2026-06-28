import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto de Dieta Digital."
};

export default function ContactoPage() {
  return (
    <Section
      eyebrow="Contacto"
      title="Hablemos de una experiencia digital mas liviana."
      description="Para beta, prensa, alianzas o soporte inicial, podes escribirnos por correo."
    >
      <div className="surface max-w-2xl rounded-lg p-6 md:p-8">
        <p className="text-lg font-semibold text-cream">{site.email}</p>
        <p className="mt-4 leading-7 text-cream/68">
          Recomendamos incluir tu navegador, pais y una breve descripcion de como te gustaria usar
          Dieta Digital.
        </p>
        <div className="mt-7">
          <Button href={`mailto:${site.email}`}>Enviar email</Button>
        </div>
      </div>
    </Section>
  );
}
