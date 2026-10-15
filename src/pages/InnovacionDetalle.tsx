import { ArrowRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { InnovationRelated } from "@/components/site/innovation-related";
import { InnovationSpec } from "@/components/site/innovation-spec";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { innovations } from "@/data/innovations";
import { pageMeta } from "@/data/site-content";
import { usePageMeta } from "@/hooks/use-page-meta";
import NotFound from "@/pages/NotFound";

const InnovacionDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const innovation = innovations.find((item) => item.slug === slug);

  usePageMeta(
    innovation
      ? `${innovation.name} | Innovaciones | ECOP AV LE S.A.S.`
      : pageMeta.innovaciones.title,
    innovation?.summary ?? pageMeta.innovaciones.description
  );

  if (!innovation) return <NotFound />;

  return (
    <>
      <PageHero
        eyebrow={innovation.eyebrow}
        title={innovation.name}
        description={innovation.summary}
        breadcrumb={[
          { label: "Innovaciones", to: "/innovaciones" },
          { label: innovation.name },
        ]}
      />

      <section className="relative overflow-hidden bg-background">
        <div className="shell relative py-16 md:py-24 lg:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <figure className="overflow-hidden rounded-xl border border-border shadow-lg">
                <img
                  src={innovation.image}
                  alt={innovation.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />
              </figure>
            </Reveal>

            <div className="lg:col-span-6">
              <Reveal delay={0.08}>
                <h2 className="display-s text-foreground">{innovation.title}</h2>
                <p className="mt-6 max-w-[64ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {innovation.description}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <ul className="mt-10 flex flex-col gap-3">
                  {innovation.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 rounded-md border border-border bg-card px-4 py-3.5 shadow-xs"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3.5 text-primary" />
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" variant="hero" className="group">
                    <Link to="/contacto">
                      Solicitar asesoría
                      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/innovaciones">Ver todas las innovaciones</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <InnovationRelated currentSlug={innovation.slug} />
          </div>
        </div>
      </section>

      {innovation.spec && <InnovationSpec spec={innovation.spec} />}

      <CtaBand
        eyebrow="Aplicación en obra"
        title="Evaluemos tu caso con esta tecnología"
        description="Revisamos tu caso, el material disponible y las condiciones del proyecto, y te indicamos cómo aplica esta tecnología, con qué respaldo técnico y bajo qué controles de calidad."
        primaryLabel="Agendar visita técnica"
      />
    </>
  );
};

export default InnovacionDetalle;
