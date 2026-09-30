import { CtaBand } from "@/components/site/cta-band";
import { CredentialsBand } from "@/components/site/credentials-band";
import { PageHero } from "@/components/site/page-hero";
import { PartnersSection } from "@/components/site/partners-section";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Alianzas = () => {
  usePageMeta(pageMeta.alianzas.title, pageMeta.alianzas.description);

  return (
    <>
      <PageHero {...pageHeros.alianzas} />
      <PartnersSection showHeading={false} />
      <CredentialsBand />
      <CtaBand
        eyebrow="Convenios"
        title="¿Quieres explorar una alianza con nosotros?"
        description="Trabajamos con entidades públicas, empresas privadas, academia y gremios. Escríbenos y revisamos juntos el alcance."
        primaryLabel="Proponer una alianza"
      />
    </>
  );
};

export default Alianzas;
