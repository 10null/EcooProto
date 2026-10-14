import { ArrowRight, Leaf, MapPin, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { heroImage, heroImageSrcSet } from "@/data/site-content";

const trustSeals = [
  { icon: ScrollText, label: "Estudios, diseños e interventoría" },
  { icon: MapPin, label: "Presencia nacional e internacional" },
  { icon: Leaf, label: "Tecnologías limpias propias" },
];

export const HeroSection = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-ink-900">
    <img
      src={heroImage}
      srcSet={heroImageSrcSet}
      sizes="100vw"
      width={1920}
      height={1080}
      fetchPriority="high"
      decoding="async"
      alt="Obra vial en la montaña colombiana con maquinaria de pavimentación y vegetación nativa"
      className="absolute inset-0 h-full w-full object-cover object-center motion-safe:animate-slow-pan"
    />
    <div className="absolute inset-0 bg-gradient-hero-overlay" />
    <div className="absolute inset-0 bg-gradient-hero-bottom" />

    <div className="shell relative pb-16 pt-[176px] md:pb-20 md:pt-[208px] lg:pb-24 lg:pt-[232px]">
      <div className="max-w-[46rem]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-gold" />
            <span className="eyebrow text-accent">
              Ingeniería regenerativa · +20 años
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="display-xl mt-6 text-ink-foreground">
            No extraemos recursos,{" "}
            <span className="text-primary-bright">regeneramos territorios</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted md:text-lg">
            Somos una empresa colombiana de ingeniería basada en la innovación:
            investigamos, desarrollamos y aplicamos nuevas tecnologías limpias
            para métodos constructivos y procesos industriales.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="xl" variant="hero" className="group/cta">
              <Link to="/contacto">
                Solicitar asesoría
                <ArrowRight className="transition-transform duration-200 group-hover/cta:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="onInk">
              <Link to="/innovaciones/ecohybridpavle">
                Conocer ECOHYBRIDPAVLE®
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.32} className="mt-14 md:mt-20">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-3">
          {trustSeals.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 bg-ink-900/[0.72] px-5 py-4 backdrop-blur-sm"
            >
              <Icon className="size-4 shrink-0 text-accent" />
              <span className="text-[0.875rem] leading-snug text-ink-muted">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default HeroSection;
