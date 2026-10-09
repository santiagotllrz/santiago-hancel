// Todo el contenido del sitio vive aquí. Edita este archivo para cambiar textos,
// trabajos, proyectos, links e imágenes (las imágenes están en /public/images).

export type Photo = {
  src: string;
  alt: string;
  /** "portrait" ocupa dos filas en las tiras de fotos, "landscape" dos columnas. */
  shape?: "landscape" | "portrait" | "big";
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
    "Soy AI product & software engineer. Construyo software y productos con [IA|🤖] y [agentes|🦾], y me encanta estar en todo el proceso de creación, siempre en modo [fundador|🚀] con todo lo que toco. Ahora mismo estoy construyendo algo propio, en [stealth|🥷]. Cuando no estoy construyendo, me encuentras [caminando|🚶], en el [campo|🌾] o de [excursión|🥾].",
};

/** Imágenes que rotan dentro del nombre en el hero. */
export const heroImages: string[] = [
  "/images/me/01-laptop.jpg",
  "/images/work/colombiatech/01-stage.jpg",
  "/images/me/02-hiking.jpg",
  "/images/work/plogy/01-code.jpg",
  "/images/me/03-countryside.jpg",
  "/images/work/colombiatech/02-crowd.jpg",
  "/images/me/04-walking.jpg",
  "/images/work/bbraun/01-office.jpg",
  "/images/me/05-andes.jpg",
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
        photo: { src: "/images/work/colombiatech/02-crowd.jpg", alt: "App Colombia Tech Fest" },
      },
      {
        name: "Sponsors Hub CTF",
        description:
          "Portal de patrocinadores con onboarding, entregables y gestión de agenda.",
        photo: { src: "/images/work/colombiatech/04-office.jpg", alt: "Sponsors Hub" },
      },
    ],
    photos: [
      { src: "/images/work/colombiatech/01-stage.jpg", alt: "Escenario", shape: "landscape" },
      { src: "/images/work/colombiatech/02-crowd.jpg", alt: "Festival", shape: "landscape" },
      { src: "/images/work/colombiatech/03-team.jpg", alt: "Equipo", shape: "landscape" },
      { src: "/images/work/colombiatech/04-office.jpg", alt: "Oficina", shape: "landscape" },
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
        photo: { src: "/images/work/plogy/01-code.jpg", alt: "TuVetia" },
      },
    ],
    photos: [
      { src: "/images/work/plogy/01-code.jpg", alt: "Código", shape: "landscape" },
      { src: "/images/work/plogy/02-vet.jpg", alt: "Producto", shape: "landscape" },
      { src: "/images/work/plogy/03-team.jpg", alt: "Equipo", shape: "landscape" },
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
    photos: [
      { src: "/images/work/bbraun/01-office.jpg", alt: "Oficina", shape: "landscape" },
      { src: "/images/work/bbraun/02-lab.jpg", alt: "Laboratorio", shape: "landscape" },
      { src: "/images/work/bbraun/03-desk.jpg", alt: "Escritorio", shape: "landscape" },
    ],
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
    // TODO: confirma el link de Instagram
    href: "https://www.instagram.com/indiceagro",
    description: "Comunidad sobre el agro colombiano en Instagram.",
    category: "Comunidad",
  },
  {
    year: "26",
    name: "app.hancel.xyz",
    href: "https://app.hancel.xyz",
    description: "Motor de contenido con IA que impulsa Índice Agro.",
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
    "Ahora estoy construyendo un proyecto propio, todavía en stealth. En los lugares donde he trabajado siempre terminé involucrándome en el producto más allá de mi rol, así que tenía sentido intentarlo por mi cuenta.",
    "Fuera del trabajo me gusta caminar, salir al campo y hacer excursiones.",
  ],
  photos: [
    { src: "/images/about/01-trail.jpg", alt: "Sendero", shape: "portrait" },
    { src: "/images/about/02-field.jpg", alt: "Campo", shape: "landscape" },
    { src: "/images/about/04-mountains.jpg", alt: "Montañas", shape: "landscape" },
    { src: "/images/about/05-coffee.jpg", alt: "Finca", shape: "big" },
    { src: "/images/about/03-workspace.jpg", alt: "Escritorio", shape: "portrait" },
    { src: "/images/about/06-sunset.jpg", alt: "Atardecer", shape: "landscape" },
    { src: "/images/me/03-countryside.jpg", alt: "Campo", shape: "landscape" },
  ] satisfies Photo[],
};

export const contact = [
  // TODO: reemplaza con tu perfil de LinkedIn
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/santiagotllrz" },
  // TODO: reemplaza con tu email
  { label: "Email", href: "mailto:tu@email.com" },
] as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];
