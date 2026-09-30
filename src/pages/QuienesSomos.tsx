import { AboutSection } from "@/components/site/about-section";
import { AboutHighlights } from "@/components/site/about-highlights";
import { CtaBand } from "@/components/site/cta-band";
import { CredentialsBand } from "@/components/site/credentials-band";
import { PageHero } from "@/components/site/page-hero";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const QuienesSomos = () => {
  usePageMeta(pageMeta.quienesSomos.title, pageMeta.quienesSomos.description);

  return (
    <>
      <PageHero {...pageHeros.quienesSomos} />
      <AboutSection showMoreLink={false} />
      <AboutHighlights />
      <CredentialsBand />
      <CtaBand
        title="Trabajemos juntos en tu próximo proyecto"
        description="Cuéntanos qué necesitas resolver y te contamos cómo lo abordaríamos, con qué tecnologías y en qué plazos."
      />
    </>
  );
};

export default QuienesSomos;
