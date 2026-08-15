# Dieta Digital Web

Sitio oficial de Dieta Digital, creado con Next.js, TypeScript y Tailwind CSS.

## Estado actual

- Landing profesional
- Pagina de precios con plan Gratis y Pro
- Pagina de beta
- Politica de privacidad
- Terminos
- Contacto
- Checkout preparado para conectar Lemon Squeezy

Falta reemplazar el link temporal de checkout en `lib/site.ts` por el link real de Lemon Squeezy.

## Modo pausa

El sitio se puede ocultar temporalmente con una pantalla de preparacion.

Para volver a mostrar la landing completa, cambiar `sitePaused` a `false` en:

```text
lib/config.ts
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Deploy

El proyecto esta preparado para deploy en Vercel conectando el repositorio de GitHub.
