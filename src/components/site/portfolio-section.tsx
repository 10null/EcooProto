import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { contactInfo, portfolio } from "@/data/site-content";

export const PortfolioSection = () => (
  <section id="portafolio" className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="flex-1">
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos, estudios e interventoría"
            description="Experiencia continua en obras de infraestructura para el sector público y privado. Explora una muestra de nuestras intervenciones en video."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild size="lg" variant="outline">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              Nuestros proyectos
              <ExternalLink />
            </a>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="h-full">
            <article className="group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-lg border border-ink-border bg-ink-900 lg:min-h-[460px]">
              <img
                src={item.image}
                crossOrigin="anonymous"
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-ink-fade opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative p-6 md:p-7">
                <span className="eyebrow text-accent">{item.eyebrow}</span>
                <h3 className="mt-3 font-display text-[1.375rem] font-semibold leading-snug text-ink-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.875rem] text-ink-muted">{item.meta}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
