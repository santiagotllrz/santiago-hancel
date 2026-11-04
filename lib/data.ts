// Todo el contenido del sitio vive aquí. Edita este archivo para cambiar textos,
// trabajos, proyectos, links e imágenes (las imágenes están en /public/images).

export type Photo = {
  src: string;
  alt: string;
  /** Forma en la galería de cada trabajo o proyecto. */
  shape?: "landscape" | "portrait" | "square" | "phone" | "screen";
  /** Muestra la foto en blanco y negro. */
  gray?: boolean;
  /** "contain" muestra la imagen completa sobre el color `bg` (útil para logos). */
  fit?: "cover" | "contain";
  bg?: string;
  /** object-position CSS, p. ej. "left top" para capturas de pantalla. */
  position?: string;
  /** Indica si el elemento de la galería es un video (.mp4). */
  video?: boolean;
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

export type ProjectStatus = "active" | "rip";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug?: string;
  year: string;
  name: string;
  title: string;
  href: string;
  description: string;
  category: string;
  status: ProjectStatus;
  about?: string;
  links?: ProjectLink[];
  highlights?: string[];
  stack?: string[];
  cover?: Photo;
  photos?: Photo[];
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
    slug: "sandia",
    year: "26",
    name: "usesandia.com",
    title: "Sandia",
    href: "https://usesandia.com",
    description: "Infraestructura de datos y AI para el agro.",
    category: "Agtech",
    status: "active",
    about:
      "Infraestructura de datos e IA para el agro colombiano, empezando por precios. Un agente recopila y estructura diariamente las cotizaciones oficiales de las centrales de abastos y construye un histórico de precios por producto y central. Los productores y comerciantes lo consultan desde una web app ligera, sin registro, y pueden recibir alertas diarias de precios por WhatsApp. El objetivo es reducir la asimetría de información en la cadena y digitalizar al agricultor que nunca ha usado tecnología en su negocio.",
    links: [{ label: "usesandia.com", href: "https://usesandia.com" }],
    highlights: [
      "Agente que busca, monitorea y carga en base de datos los cambios en las cotizaciones de precios, de forma autónoma: más de 49.403 registros de cotizaciones.",
      "Histórico de precios construido a diario, sin intervención manual: más de 143 días de datos cargados de forma ininterrumpida.",
      "Más de 23 mil impresiones de búsqueda en Google.",
      "Sistema de alertas diarias de precios por WhatsApp sobre la API oficial de WhatsApp Business.",
      "Precios históricos por producto y central de abastos: 41 productos en 19 centrales, en ciudades como Bogotá, Medellín, Cartagena, Cali y Santa Marta.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Payload CMS",
      "Supabase",
      "n8n",
      "Claude API",
      "Gemini API",
      "Claude Code",
      "Houston Agents",
      "Vercel",
      "Railway",
      "Dokploy",
      "GitHub",
      "Resend",
      "Mintlify",
      "GoDaddy",
      "Notion",
      "Slack",
      "Kapso",
      "WhatsApp Business Cloud API",
      "Google Search Console",
    ],
    cover: { src: "/images/projects/sandia/logo.png", alt: "Sandia" },
    photos: [
      { src: "/images/projects/sandia/logo.png", alt: "Sandia — Logo", shape: "square" },
      { src: "/images/projects/sandia/01-home.png", alt: "Sandia — Buscador de precios agrícolas", shape: "phone" },
      { src: "/images/projects/sandia/02-search.png", alt: "Sandia — Resultados de búsqueda por cultivo", shape: "phone" },
      { src: "/images/projects/sandia/03-price.png", alt: "Sandia — Precio del día en Corabastos", shape: "phone" },
      { src: "/images/projects/sandia/04-history.png", alt: "Sandia — Evolución histórica de precios", shape: "phone" },
      { src: "/images/projects/sandia/05-alerts-form.png", alt: "Sandia — Registro de alertas por WhatsApp", shape: "phone" },
      { src: "/images/projects/sandia/06-alerts-activating.png", alt: "Sandia — Activación de alertas", shape: "phone" },
      { src: "/images/projects/sandia/07-alerts-ready.mp4", alt: "Sandia — Confirmación de alertas activas", shape: "phone", video: true },
      { src: "/images/projects/sandia/08-whatsapp-report.jpg", alt: "Sandia — Reporte diario de precios en WhatsApp", shape: "phone" },
    ],
  },
  {
    slug: "indice-agro",
    year: "26",
    name: "Índice Agro",
    title: "Índice Agro",
    href: "https://www.instagram.com/indiceagro.co/",
    description:
      "Medio sobre agricultura en Colombia. Impulsado con AI y los agentes de Hancel Content. +50 mil seguidores en redes logrados en solo un mes y +10 millones de visualizaciones.",
    category: "Comunidad y media",
    status: "active",
    about:
      "Medio digital sobre el agro colombiano, con presencia en Instagram, Facebook y un portal de noticias propio. Publica a diario noticias, contenido educativo por cultivo y datos de precios, producidos y publicados de forma autónoma con los agentes de Hancel Content. Nació para construir comunidad y llevar tráfico a Sandia, y hoy tiene audiencia en Colombia, México, Estados Unidos y otros países.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/indiceagro.co" },
      { label: "Facebook", href: "https://www.facebook.com/people/%C3%8Dndice-Agro/61593986745138/" },
      { label: "app.usesandia.com", href: "https://app.usesandia.com" },
    ],
    highlights: [
      "Agente que investiga en internet los hechos de un tema, los analiza, crea las piezas, redacta y publica contenido para 3 canales (Instagram, Facebook y portal) de forma autónoma, sin intervención de una persona.",
      "Agente que genera ideas para reels y escribe los guiones escena por escena: más de 30 ideas y guiones, con más de 100 mil visualizaciones en promedio por reel.",
      "Más de 500 publicaciones en redes y más de 250 artículos escritos de forma autónoma para el portal de noticias, con un CTR promedio en Google de 2,6%.",
      "Más de 50 mil seguidores en redes en un solo mes y más de 11 millones de visualizaciones.",
      "Más de 22 piezas de contenido publicadas al día, todos los días: noticias, educativos por cultivo y datos de precios.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Payload CMS",
      "Supabase",
      "n8n",
      "Claude API",
      "Gemini API",
      "Claude Code",
      "Houston Agents",
      "Vercel",
      "Railway",
      "Dokploy",
      "GitHub",
      "Resend",
      "Mintlify",
      "GoDaddy",
      "Notion",
      "Slack",
      "Google Search Console",
      "Bing Webmaster Tools",
      "IndexNow",
      "Google Indexing API",
      "Meta Business Suite",
      "Flow",
    ],
    cover: { src: "/images/projects/indice-agro/logo.png", alt: "Índice Agro" },
    photos: [
      { src: "/images/projects/indice-agro/logo.png", alt: "Índice Agro — Logo", shape: "square" },
      { src: "/images/projects/indice-agro/01-portal.png", alt: "Índice Agro — Portal web de noticias y mercado", shape: "screen" },
      { src: "/images/projects/indice-agro/02-instagram-profile.jpg", alt: "Índice Agro — Perfil y métricas en Instagram", shape: "phone" },
      { src: "/images/projects/indice-agro/03-instagram-feed.jpg", alt: "Índice Agro — Feed de noticias en Instagram", shape: "phone" },
      { src: "/images/projects/indice-agro/04-facebook-profile.jpg", alt: "Índice Agro — Comunidad en Facebook", shape: "phone" },
    ],
  },
  {
    slug: "hancel-content",
    year: "26",
    name: "app.hancel.xyz",
    title: "Hancel Content",
    href: "https://app.hancel.xyz",
    description: "Motor de contenido con IA y agentes para nuestras redes y las de otros fundadores.",
    category: "Herramienta de IA",
    status: "active",
    about:
      "Sistema de agentes de IA especializados en ingesta, análisis y generación que investiga cualquier tema o nicho y produce contenido original de forma autónoma. Filtra noticias con criterios editoriales propios, como momentum, actualidad y temas sensibles, y redacta citando fuentes. Funciona sobre una taxonomía de contenido por capas (pilar, tema, intención, narración, canal, formato y plantilla) que se reutiliza en cuentas de cualquier tema. Es el motor detrás de todo el medio Índice Agro y de las redes de otros fundadores.",
    links: [{ label: "app.hancel.xyz", href: "https://app.hancel.xyz" }],
    highlights: [
      "Impulsa Índice Agro de punta a punta: más de 50 mil seguidores en un mes y más de 11 millones de visualizaciones.",
      "Más de 500 publicaciones en redes y más de 250 artículos generados y publicados sin intervención humana.",
      "Más de 22 piezas al día en 3 canales, todos los días.",
      "Más de 30 guiones de reels escena por escena, con más de 100 mil visualizaciones en promedio.",
      "Taxonomía de contenido de 7 capas, reutilizable en cualquier nicho.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Payload CMS",
      "Supabase",
      "n8n",
      "Claude API",
      "Gemini API",
      "Claude Code",
      "Claude Code Routines",
      "Houston Agents",
      "Serper",
      "Vercel",
      "Railway",
      "Dokploy",
      "GitHub",
      "Resend",
      "Mintlify",
      "GoDaddy",
      "Notion",
      "Slack",
    ],
    cover: { src: "/images/projects/hancel-content/logo.png", alt: "Hancel Content", fit: "contain", bg: "#ffffff" },
    photos: [
      { src: "/images/projects/hancel-content/logo.png", alt: "Hancel Content — Logo", shape: "square" },
      { src: "/images/projects/hancel-content/01-estudio-ingesta.png", alt: "Hancel Engine — Estudio de ingesta y análisis de noticias", shape: "screen" },
      { src: "/images/projects/hancel-content/02-estudio-redes.png", alt: "Hancel Engine — Pipeline de agentes y publicación en redes", shape: "screen" },
      { src: "/images/projects/hancel-content/03-estudio-redaccion.png", alt: "Hancel Engine — Redacción autónoma de artículos web", shape: "screen" },
      { src: "/images/projects/hancel-content/04-conexiones.png", alt: "Hancel Engine — Configuración de modelos de IA y canales", shape: "screen" },
    ],
  },
  {
    year: "26",
    name: "hancel.xyz",
    title: "hancel.xyz",
    href: "https://hancel.xyz",
    description: "Agencia de desarrollo, IA y automatizaciones.",
    category: "Agencia",
    status: "active",
    cover: { src: "/images/projects/hancel-content/logo.png", alt: "Hancel", fit: "contain", bg: "#ffffff" },
  },
  {
    slug: "nottface",
    year: "25",
    name: "nottface.com",
    title: "Nottface",
    href: "https://nottface.com",
    description: "Tienda online de dropshipping.",
    category: "E-commerce",
    status: "rip",
    about:
      "Tienda online de artículos para el cuidado de la piel, operada 100% con dropshipping, y uno de mis primeros negocios. Empecé vendiendo por la página en Colombia, pero no funcionó. Pasé a vender por WhatsApp: me escribían mucho, pero no compraban, porque había mucha fricción en la compra y era difícil escalar. Por último, rediseñé la página de producto y toda la UI/UX, y empecé a vender en Ecuador, donde logré ventas recurrentes. Aun así cerró, porque los pedidos no recibidos generaban costos que las ventas no alcanzaban a cubrir, y terminaba perdiendo dinero.",
    links: [{ label: "nottface.com", href: "https://nottface.com" }],
    highlights: [
      "Más de USD 500 invertidos en ads en Meta.",
      "Chatbot con IA en Instagram que respondía de forma autónoma dudas, preguntas y solicitudes de información de los clientes.",
      "3 canales de venta probados (web en Colombia, WhatsApp y web en Ecuador) hasta lograr ventas recurrentes: cerca de 100 pedidos.",
    ],
    stack: [
      "Dropi",
      "Meta Ads",
      "Gemini API",
      "Meta for Developers",
      "n8n",
      "Hostinger",
      "WooCommerce",
      "Brevo",
    ],
    cover: { src: "/images/projects/nottface/logo.png", alt: "Nottface", fit: "contain", bg: "#ffffff" },
    photos: [
      { src: "/images/projects/nottface/logo.png", alt: "Nottface — Logo", shape: "square" },
      { src: "/images/projects/nottface/01-home.jpg", alt: "Nottface — Home de la tienda en Ecuador", shape: "phone" },
      { src: "/images/projects/nottface/02-catalog.jpg", alt: "Nottface — Catálogo de kits y dúos", shape: "phone" },
      { src: "/images/projects/nottface/03-product-hero.jpg", alt: "Nottface — Página de producto rediseñada", shape: "phone" },
      { src: "/images/projects/nottface/04-product-offer.jpg", alt: "Nottface — Oferta y prueba social del producto", shape: "phone" },
      { src: "/images/projects/nottface/05-benefits-1.jpg", alt: "Nottface — Beneficios del producto", shape: "phone" },
      { src: "/images/projects/nottface/06-benefits-2.jpg", alt: "Nottface — Detalle de beneficios y barra de conversión", shape: "phone" },
      { src: "/images/projects/nottface/07-skin-types.jpg", alt: "Nottface — Guía por tipo de piel", shape: "phone" },
      { src: "/images/projects/nottface/08-results.jpg", alt: "Nottface — Propuesta de valor en rutina diaria", shape: "phone" },
      { src: "/images/projects/nottface/09-timeline.jpg", alt: "Nottface — Línea de tiempo de resultados por semana", shape: "phone" },
      { src: "/images/projects/nottface/10-how-to-use.jpg", alt: "Nottface — Guía de uso día y noche", shape: "phone" },
      { src: "/images/projects/nottface/11-layers.jpg", alt: "Nottface — Paso a paso de aplicación por capas", shape: "phone" },
      { src: "/images/projects/nottface/12-before-after.jpg", alt: "Nottface — Comparativa de resultados antes y después", shape: "phone" },
      { src: "/images/projects/nottface/13-comparison.jpg", alt: "Nottface — Tabla comparativa frente a otros productos", shape: "phone" },
      { src: "/images/projects/nottface/14-rating.jpg", alt: "Nottface — Calificación y reseñas verificadas", shape: "phone" },
      { src: "/images/projects/nottface/15-reviews-1.jpg", alt: "Nottface — Reseñas de clientes en Ecuador", shape: "phone" },
      { src: "/images/projects/nottface/16-reviews-2.jpg", alt: "Nottface — Reseñas de pago contra entrega", shape: "phone" },
      { src: "/images/projects/nottface/17-shipping.jpg", alt: "Nottface — Garantías de envío y pago contra entrega", shape: "phone" },
    ],
  },
  {
    slug: "warebi",
    year: "22",
    name: "warebi.com",
    title: "Warebi",
    href: "https://warebi.com",
    description: "Tiendas virtuales para pymes, creadas desde el celular.",
    category: "SaaS",
    status: "rip",
    about:
      "Mi primer proyecto de desarrollo: una web app para que las pymes crearan su tienda virtual y organizaran su catálogo desde el celular. La idea partía de un problema concreto. Para un negocio era difícil reunir todos sus productos en un solo lugar sin recurrir a tiendas virtuales complejas o a marketplaces que se quedan con los clientes. Con Warebi, cada negocio tenía su propio link (warebi.com/tucuenta) donde podía vender productos físicos o virtuales, e incluso promocionar los de alguien más, con un registro tan fácil como el de una red social. Desde un panel móvil gestionaba ventas, pedidos, categorías, productos, cupones, inventario y clientes, y los clientes seguían siendo suyos.",
    links: [{ label: "warebi.com", href: "https://warebi.com" }],
    highlights: [],
    stack: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
    cover: { src: "/images/projects/warebi/logo.png", alt: "Warebi", fit: "contain", bg: "#ffffff" },
    photos: [
      { src: "/images/projects/warebi/logo.png", alt: "Warebi — Logo", shape: "square" },
      { src: "/images/projects/warebi/01-problema.png", alt: "Warebi — El problema de vender en línea", shape: "screen" },
      { src: "/images/projects/warebi/02-propuesta.png", alt: "Warebi — Ofreces, conectas y vendes", shape: "screen" },
      { src: "/images/projects/warebi/03-link.png", alt: "Warebi — Tu propio link warebi/tucuenta", shape: "screen" },
      { src: "/images/projects/warebi/04-productos.png", alt: "Warebi — Venta de productos físicos, virtuales y afiliados", shape: "screen" },
      { src: "/images/projects/warebi/05-herramienta.png", alt: "Warebi — Tienda móvil y panel de administración", shape: "screen" },
    ],
  },
];

/** Proyectos que tienen página de detalle propia en /projects/[slug]. */
export const detailProjects = projects.filter(
  (p): p is Project & { slug: string } => Boolean(p.slug),
);

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
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];
