import {
  ClipboardList,
  Compass,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/data/site-content";

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  compass: Compass,
  gauge: Gauge,
  shield: ShieldCheck,
};

export const ServicesSection = () => (
  <section id="servicios" className="relative overflow-hidden bg-secondary">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones de ingeniería de principio a fin"
          description="Acompañamos el ciclo completo del proyecto: desde la prefactibilidad y el diseño hasta la supervisión en obra, con criterios técnicos y ambientales verificables."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.title} delay={index * 0.07} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-md md:p-7">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 ease-engineered group-hover:scale-x-100" />
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 transition-colors duration-200 group-hover:bg-primary/15">
                  <Icon className="size-5 text-primary" />
                </span>
                <h3 className="mt-6 font-display text-[1.125rem] font-semibold leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-auto h-px w-full bg-border" />
                <span className="eyebrow pt-4 text-muted-foreground/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
