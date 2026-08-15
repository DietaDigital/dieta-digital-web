const checkoutUrl = "https://tu-tienda.lemonsqueezy.com/checkout/buy/reemplazar";

export const site = {
  name: "Dieta Digital",
  description:
    "Extension freemium para personalizar lo que ves en redes sociales sin bloquear internet.",
  url: "https://dietadigital.app",
  email: "hellodigitaldiet@gmail.com",
  chromeStoreUrl: "/instalar",
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
    price: "",
    description: "Para desbloquear todas las categorias y listas ilimitadas.",
    features: [
      "Todas las categorias de contenido",
      "Listas personales sin limite",
      "Activacion por email y licencia",
      "Estadisticas simples",
      "Preparado para suscripcion con Lemon Squeezy"
    ],
    cta: "Go Pro",
    href: checkoutUrl,
    featured: true
  }
];
