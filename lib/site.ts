export const site = {
  name: "Dieta Digital",
  description:
    "Extension de navegador para personalizar lo que ves en redes sociales sin bloquear internet.",
  url: "https://dietadigital.app",
  email: "contacto@dietadigital.app",
  nav: [
    { label: "Precios", href: "/precios" },
    { label: "Beta", href: "/beta" },
    { label: "Contacto", href: "/contacto" }
  ]
};

export const plans = [
  {
    name: "Beta",
    price: "$0",
    description: "Para probar Dieta Digital antes del lanzamiento oficial.",
    features: [
      "Acceso anticipado",
      "Filtros por categorias de contenido",
      "Preferencias locales en el navegador",
      "Feedback directo para mejorar el producto"
    ],
    cta: "Unirme a la beta",
    href: "/beta",
    featured: true
  },
  {
    name: "Personal",
    price: "Proximamente",
    description: "Para usuarios que quieren una experiencia digital mas calma.",
    features: [
      "Perfiles de preferencias",
      "Listas de permitir y ocultar",
      "Estadisticas simples",
      "Sin vender tus datos personales"
    ],
    cta: "Ver beta",
    href: "/beta",
    featured: false
  },
  {
    name: "Equipos",
    price: "Proximamente",
    description: "Para equipos que buscan foco sin vigilancia invasiva.",
    features: [
      "Configuraciones compartidas",
      "Politicas de bienestar digital",
      "Soporte prioritario",
      "Sin enfoque de control parental"
    ],
    cta: "Contactar",
    href: "/contacto",
    featured: false
  }
];
