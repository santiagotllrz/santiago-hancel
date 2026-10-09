import { Hero } from "@/components/hero";
import { AboutPreview, ContactSection, ProjectsSection } from "@/components/sections";
import { WorkPoster } from "@/components/work-poster";
import { jobs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-col gap-40 pt-32 pb-40 text-[15px] font-medium outline-none md:text-sm"
      >
        <section id="work" className="scroll-mt-8">
          <WorkPoster jobs={jobs} />
        </section>
        <ProjectsSection />
        <AboutPreview />
        <ContactSection />
      </main>
    </>
  );
}
