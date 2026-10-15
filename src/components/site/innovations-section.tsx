import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { innovations } from "@/data/innovations";

interface InnovationsSectionProps {
  showHeading?: boolean;
}

export const InnovationsSection = ({
  showHeading = true,
}: InnovationsSectionProps) => (
  <section className="section-ink texture-grid-ink relative overflow-hidden">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      {showHeading && (
        <Reveal>
          <SectionHeading
            tone="onInk"
            eyebrow="Innovaciones"
            title="Tecnología propia para construir sin extraer"
            description="Investigamos, desarrollamos y aplicamos conceptos tecnológicos que asisten los métodos constructivos y los procesos industriales del país. Dos líneas de I+D nacidas de nuestra propia operación."
          />
        </Reveal>
      )}

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
        {innovations.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-border bg-ink-800 shadow-ink-card transition-[transform,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary-bright/[0.45]">
              <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 ease-engineered group-hover:scale-x-100" />
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.04] sm:h-64"
              />
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-accent">{item.eyebrow}</span>
                  <h3 className="display-s text-ink-foreground">{item.name}</h3>
                  <p className="eyebrow text-primary-bright">{item.title}</p>
                </div>

                <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted">
                  {item.summary}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[0.9375rem] leading-snug text-ink-muted"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.subLines && (
                  <div className="flex flex-wrap gap-2">
                    {item.subLines.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/innovaciones/${sub.slug}`}
                        className="rounded-full border border-ink-strong px-3.5 py-1.5 text-[0.8125rem] text-ink-muted transition-colors duration-150 hover:border-primary-bright/60 hover:text-primary-bright"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">                  <Link
                    to={`/innovaciones/${item.slug}`}
                    className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary-bright transition-colors hover:text-accent"
                  >
                    Ver línea completa
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  {item.spec && (
                    <span className="eyebrow text-ink-muted">
                      Incluye especificación técnica
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default InnovationsSection;
