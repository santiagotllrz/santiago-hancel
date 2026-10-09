# santiago-hancel

Portafolio personal de Santiago Tellez, construido con Next.js 16 (App Router), Tailwind CSS v4 y Lenis.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Dónde editar

- **Contenido** (textos, trabajos, proyectos, about, links de contacto): `lib/data.ts`
- **Imágenes**: `public/images/` — las de `about/` son de relleno de Pexels (créditos en `public/images/CREDITS.json`). Reemplázalas manteniendo el mismo nombre de archivo o cambia la ruta en `lib/data.ts`.
  - `me/` y fotos de `work/` → imágenes que rotan dentro del nombre en el hero (`heroImages` en `lib/data.ts`)
  - `work/<empresa>/` → foto principal (`cover`), galería y proyectos destacados
  - `about/` → galería de la página About
- **Estilos y animaciones**: `app/globals.css`
- **Logo / favicon**: `public/logo.png`, `app/icon.png` y `app/apple-icon.png`

## Estructura

- `/` — Home: hero, Work (póster), Side Projects, preview de About y Contact
- `/work` — Índice de experiencia
- `/work/[slug]` — Detalle de cada trabajo (Role, Period, Team, Location, About, Highlights, Stack, Proyectos destacados)
- `/about` — Texto completo y galería de fotos

En el texto del hero, las palabras con formato `[palabra|emoji]` cambian a su emoji al pasar el cursor.
