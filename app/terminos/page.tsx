import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terminos",
  description: "Terminos y condiciones de Dieta Digital."
};

export default function TerminosPage() {
  return (
    <Section eyebrow="Legal" title="Terminos y condiciones">
      <article className="surface max-w-3xl rounded-lg p-6 leading-7 text-slate-600 md:p-8">
        <p>
          Dieta Digital es una herramienta de personalizacion de contenido para navegadores. Su
          objetivo es ayudar a reducir ruido digital y mejorar la experiencia en redes sociales.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Uso de la herramienta</h2>
        <p className="mt-3">
          La extension no garantiza eliminar todo tipo de contenido ni reemplaza el criterio del
          usuario. Las plataformas externas pueden cambiar su funcionamiento y afectar los filtros.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Disponibilidad</h2>
        <p className="mt-3">
          La extension puede cambiar, incluir errores o modificar funciones mientras evoluciona.
          No hay pagos activos en esta etapa.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Responsabilidad</h2>
        <p className="mt-3">
          Dieta Digital se ofrece como apoyo para bienestar digital y productividad. No es un
          sistema de seguridad, antivirus, control parental ni herramienta medica.
        </p>
      </article>
    </Section>
  );
}
