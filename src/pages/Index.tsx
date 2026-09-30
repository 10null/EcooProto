import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { CredentialsBand } from "@/components/site/credentials-band";
import { AboutSection } from "@/components/site/about-section";
import { InnovationsSection } from "@/components/site/innovations-section";
import { ServicesSection } from "@/components/site/services-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { PartnersSection } from "@/components/site/partners-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";

const Index = () => (
  <div className="flex min-h-full flex-col bg-background">
    <SiteHeader />
    <main>
      <HeroSection />
      <CredentialsBand />
      <AboutSection />
      <InnovationsSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnersSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
