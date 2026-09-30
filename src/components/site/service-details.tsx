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

/** Detailed breakdown of every service line. */
export const ServiceDetails = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-24 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Cuatro líneas de servicio, un mismo equipo"
          description="Cada servicio puede contratarse por separado o como acompañamiento integral del proyecto."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.title} delay={index * 0.07} className="h-full">
              <article className="group flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-md md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <span className="eyebrow text-muted-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-[1.25rem] font-semibold leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] leading-snug text-foreground"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceDetails;
