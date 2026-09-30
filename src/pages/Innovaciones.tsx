import { CtaBand } from "@/components/site/cta-band";
import { InnovationsSection } from "@/components/site/innovations-section";
import { PageHero } from "@/components/site/page-hero";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Innovaciones = () => {
  usePageMeta(pageMeta.innovaciones.title, pageMeta.innovaciones.description);

  return (
    <>
      <PageHero {...pageHeros.innovaciones} />
      <InnovationsSection showHeading={false} />
      <CtaBand
        eyebrow="Aplicación en obra"
        title="Evaluemos tu caso con nuestras tecnologías"
        description="Revisamos el material disponible, las condiciones del corredor y te decimos qué línea de I+D aplica y con qué respaldo técnico."
        primaryLabel="Agendar visita técnica"
      />
    </>
  );
};

export default Innovaciones;
