import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ProjectTile } from "@/components/site/project-tile";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";
import {
  portfolioProjects,
  projectCategories,
  type PortfolioProject,
} from "@/data/site-content";

const isVideo = (project: PortfolioProject) => Boolean(project.videoUrl);

export const PortfolioSection = () => {
  const featured = portfolioProjects.filter((project) => !isVideo(project)).slice(0, 3);

  return (
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectTile project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
