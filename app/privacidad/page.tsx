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
          Esta politica describe el enfoque de privacidad de Dieta Digital. La extension permite
          personalizar categorias de contenido dentro del navegador y esta preparada para un modelo
          gratis con funciones Pro.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Datos personales</h2>
        <p className="mt-3">
          El plan gratis no requiere crear una cuenta. Si activas Pro, podemos usar tu email y una
          licencia para verificar el estado de la suscripcion. Si nos escribis por correo, usaremos
          ese dato solo para responder tu consulta o gestionar soporte.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Preferencias de uso</h2>
        <p className="mt-3">
          Las preferencias de contenido se guardan en el navegador mediante el almacenamiento de
          Chrome. La validacion Pro puede consultar un servidor de licencias para confirmar si tu
          suscripcion esta activa.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Pagos</h2>
        <p className="mt-3">
          Los pagos se procesan en una pagina externa segura, como Lemon Squeezy u otro proveedor
          equivalente. Dieta Digital no debe almacenar datos completos de tarjeta dentro de la
          extension.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-950">Cambios futuros</h2>
        <p className="mt-3">
          Si mas adelante incorporamos login, sincronizacion en la nube o cambios en el proveedor de
          pagos, esta politica se actualizara antes de activar esas funciones.
        </p>
      </article>
    </Section>
  );
}
