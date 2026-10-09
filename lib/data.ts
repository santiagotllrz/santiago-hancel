// Todo el contenido del sitio vive aquí. Edita este archivo para cambiar textos,
// trabajos, proyectos, links e imágenes (las imágenes están en /public/images).

export type Photo = {
  src: string;
  alt: string;
  /** Forma en la galería de cada trabajo. */
  shape?: "landscape" | "portrait";
  /** Muestra la foto en blanco y negro. */
  gray?: boolean;
  /** "contain" muestra la imagen completa sobre el color `bg` (útil para logos). */
  fit?: "cover" | "contain";
  bg?: string;
  /** object-position CSS, p. ej. "left top" para capturas de pantalla. */
  position?: string;
};

export type FeaturedProject = {
  name: string;
  description: string;
  photo: Photo;
  href?: string;
};

export type Job = {
  slug: string;
  company: string;
  role: string;
  period: string;
  short: string;
  team: string;
  location: string;
  about: string;
  highlights: string[];
  stack: string[];
  projects: FeaturedProject[];
  /** Foto principal: fondo del póster en el home y miniatura en /work. */
  cover: Photo;
  /** Galería de la página del trabajo. */
  photos: Photo[];
};

export type Project = {
  year: string;
  name: string;
  href: string;
  description: string;
  category: string;
};

export const site = {
  name: "Santiago Tellez",
  firstName: "Santiago",
  lastName: "Tellez",
  role: "AI Product & Software Engineer",
  location: "Bogotá, Colombia",
  url: "https://santiago-hancel.vercel.app",
  description:
    "Santiago Tellez es AI product & software engineer en Bogotá. Construye software y productos con IA y agentes, siempre en modo fundador.",
  /**
   * Descripción del home. Las palabras con formato [palabra|emoji] cambian
   * a su emoji al pasar el cursor por encima.
   */
  intro:
    "Soy AI product & software engineer. Construyo software y productos con [IA|🤖] y [agentes|🦾], me encanta estar en todo el proceso de creación, siempre en modo [fundador|🚀] con todo lo que toco. Ahora mismo estoy construyendo algo propio, en [stealth|🥷]. Cuando no estoy construyendo, me encuentras [caminando|🚶], en el [campo|🌾] o de [excursión|🥾].",
};

/**
 * Imágenes que rotan dentro del nombre en el hero (se muestran en blanco y negro).
 * `ms` es cuánto tiempo se queda cada una.
 */
export const heroImages: { src: string; ms: number }[] = [
  { src: "/images/me/santiago.jpg", ms: 2600 },
  ...[
    "/images/home/home-04.jpg",
    "/images/work/colombiatech/ct-1.jpg",
    "/images/home/home-01.jpg",
    "/images/home/home-07.jpg",
    "/images/work/plogy/plogy-2.jpg",
    "/images/home/home-02.jpg",
    "/images/home/home-05.jpg",
    "/images/work/colombiatech/ct-2.jpg",
    "/images/home/home-06.jpg",
    "/images/home/home-03.jpg",
    "/images/work/plogy/plogy-1.jpg",
    "/images/home/home-10.jpg",
    "/images/home/home-08.jpg",
    "/images/home/home-11.jpg",
    "/images/home/home-09.jpg",
  ].map((src) => ({ src, ms: 900 })),
];

export const jobs: Job[] = [
  {
    slug: "colombiatech",
    company: "Colombia Tech",
    role: "Product Engineer",
    period: "Abril – Agosto 2026",
    short: "26",
    team: "Product",
    location: "Bogotá",
    about:
      "Fue mi primera experiencia en una startup (lo deseaba obsesivamente). Entré como builder, creando flujos de automatización e IA para el equipo de Customer Success, y después di el salto al equipo de producto como product engineer. Ahí aprendí a tomar ownership total y a sacar adelante proyectos de principio a fin, incluso cuando no había un camino claro para lograrlo.",
    highlights: [
      "Lideré y diseñé el flujo de producto de la primera app oficial de Colombia Tech Fest hasta su lanzamiento, con más de 3.000 usuarios activos durante el festival.",
      "Lideré la evaluación de más de 20 plataformas para la app de Colombia Tech Fest y la elección del partner de desarrollo.",
      "Construí Sponsors Hub, el portal de patrocinadores con onboarding, seguimiento de entregables y gestión de agenda.",
      "Desarrollé un radar de noticias con IA que detecta señales de prospectos y los carga al CRM en un clic.",
      "Migré el CRM comercial de Lovable a un stack propio y escalable.",
    ],
    stack: [
      "Next.js",
      "Payload CMS",
      "Supabase",
      "n8n",
      "Claude API",
      "Claude Code",
      "Vercel",
      "GitHub",
      "Notion",
      "Slack",
      "Node.js",
      "Dokploy",
      "Railway",
      "Houston Agents",
      "Resend",
      "Mintlify",
      "GoDaddy",
      "Gemini API",
    ],
    projects: [
      {
        name: "App Colombia Tech Fest",
        description:
          "La primera app oficial del festival, con más de 3.000 usuarios activos.",
        photo: { src: "/images/work/colombiatech/app-cft.jpg", alt: "App Colombia Tech Fest" },
      },
      {
        name: "Sponsors Hub CTF",
        description:
          "Portal de patrocinadores con onboarding, entregables y gestión de agenda.",
        photo: { src: "/images/work/colombiatech/sponsor-hub.png", alt: "Sponsors Hub", position: "left top" },
      },
    ],
    cover: { src: "/images/work/colombiatech/ct-2.jpg", alt: "Colombia Tech Fest" },
    photos: [
      { src: "/images/work/colombiatech/ct-1.jpg", alt: "AI Summit", shape: "portrait" },
      { src: "/images/work/colombiatech/ct-2.jpg", alt: "Colombia Tech Fest", shape: "landscape" },
    ],
  },
  {
    slug: "plogy",
    company: "Plogy",
    role: "AI Engineer Freelancer",
    period: "Junio – Agosto 2026",
    short: "26",
    team: "Developers",
    location: "Bogotá",
    about:
      "Me uní como desarrollador freelance para construir uno de los proyectos de software e IA más relevantes en la historia de Plogy. Trabajé de la mano con el founding team, construyendo y aprendiendo sobre la marcha.",
    highlights: [
      "Desarrollé junto al equipo de developers TuVetia, uno de los proyectos de software e IA más relevantes de Plogy, junto al founding team.",
      "Diseñé la base de datos y la arquitectura multi-tenant de la plataforma.",
      "Desarrollé parte de la capa agéntica que interactúa con los usuarios.",
      "Integré pagos por suscripción.",
      "Co-diseñé el flujo de producto y lo llevamos a producción.",
      "Apoyé el Plogy Academy Concurso, una competencia de talento freelance que cerró con Demo Day en Plogy Nights.",
    ],
    stack: [
      "Next.js",
      "Payload CMS",
      "Supabase",
      "n8n",
      "Claude API",
      "Claude Code",
      "Vercel",
      "GitHub",
      "Notion",
      "Slack",
      "Node.js",
      "Dokploy",
      "Railway",
      "Houston Agents",
      "Resend",
      "Wompi",
      "Cohere",
    ],
    projects: [
      {
        name: "TuVetia",
        description:
          "Plataforma multi-tenant con capa agéntica y pagos por suscripción, llevada a producción.",
        photo: { src: "/images/work/plogy/tuvetia.png", alt: "TuVetia", position: "left top" },
      },
    ],
    cover: { src: "/images/work/plogy/plogy-1.jpg", alt: "Plogy", gray: true },
    photos: [
      { src: "/images/work/plogy/plogy-1.jpg", alt: "Plogy", shape: "landscape" },
      { src: "/images/work/plogy/plogy-2.jpg", alt: "Equipo de Plogy", shape: "landscape" },
    ],
  },
  {
    slug: "bbraun",
    company: "B. Braun",
    role: "IT Analyst",
    period: "Agosto 2024 – Marzo 2025",
    short: "24",
    team: "IT",
    location: "Bogotá",
    about:
      "Mi primera experiencia laboral formal y mi entrada al mundo corporativo. Mi interés por los negocios hizo que disfrutara especialmente ver de cerca cómo funciona una empresa por dentro, y reafirmé que prefiero estar en un entorno de más exigencia, más cerca del usuario desde la creación hasta el output, e inventar de la nada absoluta.",
    highlights: [
      "Curiosamente, aunque no era mi área, terminé creando videos con IA para el equipo de Finanzas.",
    ],
    stack: ["Microsoft 365", "Excel", "Teams", "SharePoint", "Outlook"],
    projects: [],
    cover: { src: "/images/work/bbraun/bbraun-1.png", alt: "B. Braun", fit: "contain", bg: "#01a87a" },
    photos: [{ src: "/images/work/bbraun/bbraun-1.png", alt: "B. Braun", shape: "landscape" }],
  },
];

export const projects: Project[] = [
  {
    year: "26",
    name: "usesandia.com",
    href: "https://usesandia.com",
    description: "Infraestructura de datos e IA para el agro, empezando por precios.",
    category: "Agtech",
  },
  {
    year: "26",
    name: "Índice Agro",
    href: "https://www.instagram.com/indiceagro.co/",
    description: "Medio sobre el agro colombiano en Instagram. Impulsado con AI y los agents de Hancel Content.",
    category: "Comunidad y media",
  },
  {
    year: "26",
    name: "app.hancel.xyz",
    href: "https://app.hancel.xyz",
    description: "Motor de contenido con IA y agentes para nuestras redes y las de otros fundadores.",
    category: "Herramienta de IA",
  },
  {
    year: "26",
    name: "hancel.xyz",
    href: "https://hancel.xyz",
    description: "Agencia de desarrollo, IA y automatizaciones.",
    category: "Agencia",
  },
  {
    year: "25",
    name: "nottface.com",
    href: "https://nottface.com",
    description: "Tienda online de dropshipping.",
    category: "E-commerce",
  },
  {
    year: "22",
    name: "warebi.com",
    href: "https://warebi.com",
    description: "Tiendas virtuales para pymes, creadas desde el celular.",
    category: "SaaS",
  },
];

export const about = {
  /** Se muestra en el home como preview y como entrada en /about. */
  preview:
    "Hola, soy Santiago. Construyo productos con IA. La mayor parte de mi experiencia ha sido en startups, trabajando cerca de producto y de los equipos fundadores.",
  paragraphs: [
    "Hola, soy Santiago. Soy software & product AI engineer y construyo productos con IA. La mayor parte de mi experiencia ha sido en startups, trabajando cerca de producto y de los equipos fundadores, aunque también he hecho trabajo independiente. Empecé en el mundo corporativo, pero rápidamente me di cuenta de que no era lo mío.",
    "Me encanta automatizar todo. Desde que jugaba Minecraft armaba mis propias granjas automáticas; ahora hago lo mismo en el mundo real.",
    "Estoy en octavo semestre de Ingeniería de Sistemas y recientemente me gradué de Makers como Makers Coding Fellow, cohorte 2026-2.",
    "Ahora estoy construyendo un proyecto propio, todavía en stealth. En los lugares donde he trabajado siempre terminé involucrándome en el producto más allá de mi rol, así que tenía sentido intentarlo por mi cuenta.",
    "Fuera del trabajo me gusta caminar, salir al campo y hacer excursiones.",
  ],
};

export const contact = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-tllz" },
  { label: "GitHub", href: "https://github.com/santiagotllrz" },
  { label: "Email", href: "mailto:santiagotllrz@gmail.com" },
] as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];
