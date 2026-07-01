export const site = {
  name: "Dieta Digital",
  description:
    "Extension de navegador para personalizar lo que ves en redes sociales sin bloquear internet.",
  url: "https://dietadigital.app",
  email: "hellodigitaldiet@gmail.com",
  nav: [
    { label: "Precios", href: "/precios" },
    { label: "Instalar", href: "/instalar" },
    { label: "Contacto", href: "/contacto" }
  ]
};

export const plans = [
  {
    name: "Gratis",
    price: "$0",
    description: "Para empezar a personalizar tu feed con filtros esenciales.",
    features: [
      "Filtros por categorias de contenido",
      "Preferencias locales en el navegador",
      "Reduccion u ocultamiento de temas",
      "Sin cuenta obligatoria"
    ],
    cta: "Instalar extension",
    href: "/instalar",
    featured: true
  },
  {
    name: "Personal",
    price: "Proximamente",
    description: "Para usuarios que quieren mas control, perfiles y estadisticas.",
    features: [
      "Perfiles de preferencias",
      "Listas de permitir y ocultar",
      "Estadisticas simples",
      "Sin vender tus datos personales"
    ],
    cta: "Usar gratis",
    href: "/instalar",
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
