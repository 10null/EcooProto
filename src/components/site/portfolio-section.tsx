import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ProjectsGallery } from "@/components/site/projects-gallery";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { portfolioProjects } from "@/data/site-content";

const featured = portfolioProjects
  .filter((project) => project.images.length > 0)
  .slice(0, 3);

export const PortfolioSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="flex-1">
          <SectionHeading
            eyebrow="Portafolio"
            title="Obras ejecutadas en el territorio"
            description="Infraestructura vial, geoestructuras de pavimento y obras asociadas a la Metro Línea 1 de Bogotá."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/portafolio">
              Ver portafolio completo
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <ProjectsGallery projects={featured} />
    </div>
  </section>
);

export default PortfolioSection;
