import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { ProcessSteps } from "@/components/site/process-steps";
import { ServiceDetails } from "@/components/site/service-details";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Servicios = () => {
  usePageMeta(pageMeta.servicios.title, pageMeta.servicios.description);

  return (
    <>
      <PageHero {...pageHeros.servicios} />
      <ServiceDetails />
      <ProcessSteps />
      <CtaBand
        title="¿Necesitas uno o varios servicios?"
        description="Podemos encargarnos de una etapa puntual o acompañar el proyecto completo, desde la prefactibilidad hasta la interventoría final."
      />
    </>
  );
};

export default Servicios;
