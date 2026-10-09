import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import { PeekHeader } from "@/components/peek-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { contact, site } from "@/lib/data";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "es_CO",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
  knowsAbout: ["Inteligencia artificial", "Agentes de IA", "Product engineering", "Automatización", "Next.js"],
  sameAs: contact.filter((c) => c.href.startsWith("http")).map((c) => c.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${hostGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="fixed top-2 left-2 z-50 -translate-y-[calc(100%+1rem)] bg-accent px-3 py-2 text-sm font-medium transition-transform duration-150 focus:translate-y-0 motion-reduce:transition-none"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll />
        <ScrollReveal />
        <PeekHeader />
        {children}
      </body>
    </html>
  );
}
