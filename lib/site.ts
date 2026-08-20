const checkoutUrl = "https://digitaldiet.lemonsqueezy.com/checkout/buy/5d0eb7a6-ebc5-49f4-b618-90f972d35dbe";

export const site = {
  name: "Dieta Digital",
  description:
    "Extension freemium para personalizar lo que ves en redes sociales sin bloquear internet.",
  url: "https://dieta-digital-web.vercel.app",
  email: "hellodigitaldiet@gmail.com",
  chromeStoreUrl: "https://chromewebstore.google.com/detail/dieta-digital/cgdmlneaegadlbfkbhnfckoloabaoncl",
  checkoutUrl,
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
    description: "Para empezar con filtros esenciales y limites simples.",
    features: [
      "Sexualizacion, Violencia y Humor incluidos",
      "Mostrar, reducir u ocultar categorias gratis",
      "Hasta 3 perfiles, palabras o paginas por lista",
      "Preferencias locales en el navegador",
      "Sin cuenta obligatoria"
    ],
    cta: "Instalar extension",
    href: "/instalar",
    featured: false
  },
  {
    name: "Pro",
    price: "$3.99 / mes",
    description: "Para desbloquear todas las categorias y listas ilimitadas.",
    features: [
      "Todas las 19 categorias de contenido",
      "Subtemas personalizados por categoria",
      "Listas personales sin limite",
      "Activacion instantanea por email y licencia",
      "Estadisticas de contenidos filtrados"
    ],
    cta: "Go Pro",
    href: checkoutUrl,
    featured: true
  }
];
