import { ArrowUpRight, GraduationCap, UserRound } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { partners } from "@/data/site-content";

const iconMap = {
  user: UserRound,
  graduation: GraduationCap,
} as const;

export const PartnersSection = () => (
  <section id="alianzas" className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Alianzas"
          title="Trabajamos con quienes investigan y construyen"
          description="Articulamos capacidades técnicas, académicas y profesionales para llevar cada desarrollo al terreno con respaldo metodológico."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
        {partners.map((partner, index) => {
          const Icon = iconMap[partner.icon];
          const Card = (
            <article className="group flex h-full items-start gap-5 rounded-lg border border-border bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-md md:p-7">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary transition-colors duration-200 group-hover:border-primary/30">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-2">
                <span className="eyebrow text-accent-strong">
                  {partner.role}
                </span>
                <h3 className="font-display text-[1.1875rem] font-semibold leading-snug text-foreground">
                  {partner.name}
                </h3>
                <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
                {partner.href && (
                  <span className="mt-1 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary">
                    Visitar sitio
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </div>
            </article>
          );

          return (
            <Reveal key={partner.name} delay={index * 0.08} className="h-full">
              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {Card}
                </a>
              ) : (
                Card
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PartnersSection;
