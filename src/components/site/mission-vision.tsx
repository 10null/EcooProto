import { Eye, Target, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { missionVision } from "@/data/site-content";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  eye: Eye,
};

export const MissionVision = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="shell relative py-16 md:py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Propósito"
          title="Nuestra misión y nuestra visión"
          description="Lo que hacemos hoy y hacia dónde vamos con la ingeniería regenerativa."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
        {missionVision.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.label} delay={index * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-md md:p-8">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 ease-engineered group-hover:scale-x-100" />

                <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 transition-colors duration-200 group-hover:bg-primary/15">
                  <Icon className="size-5 text-primary" />
                </span>

                <h3 className="font-display text-[1.25rem] font-semibold leading-snug text-foreground md:text-[1.375rem]">
                  {item.label}
                </h3>

                <p className="max-w-[62ch] text-[1rem] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default MissionVision;
