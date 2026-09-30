import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioProjects } from "@/components/site/portfolio-projects";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Portafolio = () => {
  usePageMeta(pageMeta.portafolio.title, pageMeta.portafolio.description);

  return (
    <>
      <PageHero {...pageHeros.portafolio} />
      <PortfolioProjects />
      <CtaBand
        eyebrow="Tu proyecto"
        title="Sumemos una obra más a este portafolio"
        description="Cuéntanos el alcance y la ubicación de tu proyecto para definir la ruta técnica más conveniente."
      />
    </>
  );
};

export default Portafolio;
