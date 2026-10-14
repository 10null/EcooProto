import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { ProjectsGallery } from "@/components/site/projects-gallery";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Portafolio = () => {
  usePageMeta(pageMeta.portafolio.title, pageMeta.portafolio.description);

  return (
    <>
      <PageHero {...pageHeros.portafolio} />

      <section className="relative overflow-hidden bg-background">
        <div className="shell relative py-16 md:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Proyectos ejecutados"
              title="Todas nuestras obras"
              description="Toca cualquier obra para ver su galería completa de fotos. Filtra por línea de trabajo para recorrerlas."
            />
          </Reveal>

          <ProjectsGallery showFilters />
        </div>
      </section>

      <CtaBand
        eyebrow="Tu proyecto"
        title="Sumemos una obra más a este portafolio"
        description="Cuéntanos el alcance y la ubicación de tu proyecto para definir la ruta técnica más conveniente."
      />
    </>
  );
};

export default Portafolio;
