import { ArrowUpRight, Blocks, Layers } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { innovations } from "@/data/site-content";

const productIcons = {
  layers: Layers,
  blocks: Blocks,
} as const;

export const InnovationsSection = () => {
  const { hero, products, biomorf } = innovations;

  return (
    <section
      id="innovaciones"
      className="section-ink texture-grid-ink relative overflow-hidden"
    >
      <div className="shell relative py-16 md:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            tone="onInk"
            eyebrow="Innovaciones"
            title="Tecnología propia para construir sin extraer"
            description="Investigamos, desarrollamos y aplicamos conceptos tecnológicos que asisten los métodos constructivos y los procesos industriales del país. Dos líneas de I+D nacidas de nuestra propia operación."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          {/* ECOHYBRIDPAVLE® */}
          <Reveal className="lg:col-span-7">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-border bg-ink-800 shadow-ink-card transition-[transform,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary-bright/[0.45]">
              <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 ease-engineered group-hover:scale-x-100" />
              <img
                src={hero.image}
                crossOrigin="anonymous"
                alt="Superficie de pavimento con litificación de suelos y muestra de núcleo"
                className="h-52 w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.04] sm:h-64"
              />
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-accent">{hero.eyebrow}</span>
                  <h3 className="display-s text-ink-foreground">{hero.name}</h3>
                  <p className="eyebrow text-primary-bright">
                    {hero.title}
                  </p>
                </div>
                <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-muted">
                  {hero.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {hero.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[0.9375rem] leading-snug text-ink-muted"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-[0.9375rem] font-semibold text-primary-bright transition-colors hover:text-accent"
                >
                  Agendar visita técnica
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>

          {/* Subproductos */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {products.map((product, index) => {
              const Icon = productIcons[product.icon as keyof typeof productIcons];
              return (
                <Reveal key={product.name} delay={0.08 + index * 0.07}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-border bg-ink-800 p-6 shadow-ink-card transition-[transform,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary-bright/[0.45] md:p-7">
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 ease-engineered group-hover:scale-x-100" />
                    {product.image ? (
                      <img
                        src={product.image}
                        crossOrigin="anonymous"
                        alt="Ladrillos sostenibles apilados en obra"
                        className="mb-6 h-40 w-full rounded-md object-cover"
                      />
                    ) : (
                      <span className="mb-6 flex size-10 items-center justify-center rounded-sm border border-ink-strong bg-ink-700">
                        <Icon className="size-[18px] text-primary-bright" />
                      </span>
                    )}
                    <h3 className="font-display text-[1.25rem] font-semibold leading-snug text-ink-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {product.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* BIOMORF */}
        <Reveal delay={0.1} className="mt-6">
          <article className="group grid overflow-hidden rounded-lg border border-ink-border bg-ink-800 shadow-ink-card transition-[transform,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary-bright/[0.45] lg:grid-cols-2">
            <img
              src={biomorf.image}
              crossOrigin="anonymous"
              alt="Muro de contención en concreto estabilizando un talud junto a la vía"
              className="h-56 w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.04] lg:h-full lg:min-h-[340px]"
            />
            <div className="flex flex-col justify-center gap-5 p-6 md:p-10">
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-accent">{biomorf.eyebrow}</span>
                <h3 className="display-s text-ink-foreground">
                  {biomorf.name}
                </h3>
              </div>
              <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-muted">
                {biomorf.description}
              </p>
              <a
                href="#contacto"
                className="inline-flex w-fit items-center gap-2 text-[0.9375rem] font-semibold text-primary-bright transition-colors hover:text-accent"
              >
                Evaluar una aplicación
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default InnovationsSection;
