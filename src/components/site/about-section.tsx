import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { capabilities, territoryImage } from "@/data/site-content";

interface AboutSectionProps {
  showHeading?: boolean;
  showMoreLink?: boolean;
}

export const AboutSection = ({
  showHeading = true,
  showMoreLink = true,
}: AboutSectionProps) => (
  <section className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow={showHeading ? "Quiénes somos" : "Nuestra esencia"}
              title="ECOPAVLE S.A.S., ingeniería basada en la innovación"
              description="Diseñamos mecanismos y sistemas que permiten la estabilidad a través del uso y el reúso de los materiales provenientes de los pasivos ambientales generados por procesos industriales y de otros materiales disponibles en la región."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[68ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
              Trabajamos para que las técnicas e innovaciones aplicadas se vean
              reflejadas de manera efectiva en el desarrollo y bienestar
              ambiental, social y económico, contando con el apoyo de la región y
              de conformidad con las políticas de gobierno;
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5 shadow-xs transition-shadow duration-200 hover:shadow-sm"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3.5 text-primary" />
                  </span>
                  <span className="text-[0.9375rem] font-medium text-foreground">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {showMoreLink && (
            <Reveal delay={0.24}>
              <Button asChild variant="outline" size="lg" className="group mt-8">
                <Link to="/quienes-somos">
                  Conoce más sobre nosotros
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.12} className="lg:col-span-6">
          <figure className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <img
              src={territoryImage}
              alt="Vía terciaria estabilizada atravesando paisaje rural verde"
              loading="lazy"
              decoding="async"
              className="h-[320px] w-full object-cover transition-transform duration-700 ease-engineered hover:scale-[1.03] sm:h-[420px] lg:h-[520px]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-ink-fade p-6 pt-20 sm:p-8 sm:pt-24">
              <span className="eyebrow text-accent">Nuestro principio</span>
              <p className="mt-3 max-w-[22ch] font-display text-[1.5rem] font-semibold leading-tight text-ink-foreground sm:text-[1.875rem]">
                “No extraemos recursos, regeneramos territorios”
              </p>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-start gap-4 rounded-lg border border-border bg-secondary p-5">
            <span className="mt-0.5 h-10 w-[3px] shrink-0 rounded-full bg-gradient-gold" />
            <p className="text-[0.9375rem] leading-relaxed text-secondary-foreground">
              Más de 20 años de servicio continuo en la gerencia de proyectos,
              prefactibilidad, estudios y diseños e interventoría de suelos del
              sector público y privado.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
