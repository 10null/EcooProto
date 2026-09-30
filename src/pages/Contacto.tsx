import { ContactSection } from "@/components/site/contact-section";
import { PageHero } from "@/components/site/page-hero";
import { pageHeros, pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Contacto = () => {
  usePageMeta(pageMeta.contacto.title, pageMeta.contacto.description);

  return (
    <>
      <PageHero {...pageHeros.contacto} />
      <ContactSection showHeading={false} />
    </>
  );
};

export default Contacto;
