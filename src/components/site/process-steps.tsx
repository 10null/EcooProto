import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { processSteps } from "@/data/site-content";

export const ProcessSteps = () => (
  <section className="section-ink texture-grid-ink relative overflow-hidden">
    <div className="shell relative py-16 md:py-24 lg:py-28">
      <Reveal>
        <SectionHeading
          tone="onInk"
          eyebrow="Metodología"
          title="Cómo llevamos un proyecto de la idea a la obra"
          description="Un mismo equipo acompaña el proyecto en sus cuatro etapas, desde el diagnóstico hasta la interventoría final."
        />
      </Reveal>

      <ol className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((item, index) => (
          <li
            key={item.step}
            className="lg:border-l lg:border-ink-border lg:px-7 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <Reveal delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4">
                <span className="stat-number text-[2rem] text-accent">
                  {item.step}
                </span>
                <span className="h-px w-full bg-ink-border" />
                <h3 className="font-display text-[1.0625rem] font-semibold leading-snug text-ink-foreground">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
