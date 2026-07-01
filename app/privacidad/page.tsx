import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description: "Politica de privacidad de Dieta Digital."
};

export default function PrivacidadPage() {
  return (
    <Section eyebrow="Legal" title="Politica de privacidad">
      <article className="surface max-w-3xl rounded-lg p-6 leading-7 text-slate-600 md:p-8">
        <p>
          Esta politica describe el enfoque inicial de privacidad de Dieta Digital. La extension se
          encuentra en etapa inicial y no implementa pagos, login ni base de datos en esta primera
          version.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Datos personales</h2>
        <p className="mt-3">
          En esta etapa, Dieta Digital no requiere crear una cuenta. Si nos escribis por correo,
          usaremos ese dato solo para responder tu consulta o gestionar el acceso a la extension.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Preferencias de uso</h2>
        <p className="mt-3">
          Las preferencias de contenido estan pensadas para guardarse localmente en el navegador,
          salvo que en una version futura se indique claramente otra modalidad.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Cambios futuros</h2>
        <p className="mt-3">
          Si mas adelante incorporamos Supabase, login o pagos, esta politica se actualizara antes
          de activar esas funciones.
        </p>
      </article>
    </Section>
  );
}
