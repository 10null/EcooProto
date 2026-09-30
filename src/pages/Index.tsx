import { HeroSection } from "@/components/site/hero-section";
import { CredentialsBand } from "@/components/site/credentials-band";
import { AboutSection } from "@/components/site/about-section";
import { InnovationsSection } from "@/components/site/innovations-section";
import { ServicesSection } from "@/components/site/services-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { PartnersSection } from "@/components/site/partners-section";
import { CtaBand } from "@/components/site/cta-band";
import { pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <>
      <HeroSection />
      <CredentialsBand />
      <AboutSection />
      <InnovationsSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnersSection />
      <CtaBand />
    </>
  );
};

export default Index;
