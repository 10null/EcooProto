import { useState } from "react";

import { ProjectTile } from "@/components/site/project-tile";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";
import { portfolioProjects, projectCategories } from "@/data/site-content";

/** Full, filterable list of executed projects. */
export const PortfolioProjects = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    projectCategories[0]
  );

  const countFor = (category: string) =>
    category === projectCategories[0]
      ? portfolioProjects.length
      : portfolioProjects.filter((project) => project.category === category)
          .length;

  const visible =
    activeCategory === projectCategories[0]
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="shell relative py-16 md:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos ejecutados"
            title="Todas nuestras obras"
            description="Filtra por línea de trabajo para recorrer los proyectos que ya están en servicio en Colombia."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            role="group"
            aria-label="Filtrar proyectos por línea de trabajo"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.875rem] font-semibold transition-[background-color,border-color,color] duration-150",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {category}
                  <span
                    className={cn(
                      "text-[0.75rem] font-medium",
                      isActive
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground/70"
                    )}
                  >
                    {countFor(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectTile project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
