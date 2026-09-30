import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/site/reveal";

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: readonly Crumb[];
}

/** Dark banner used at the top of every inner page. */
export const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumb = [],
}: PageHeroProps) => (
  <section className="section-ink texture-grid-ink relative overflow-hidden">
    <div className="shell relative pb-14 pt-[176px] md:pb-16 md:pt-[208px] lg:pt-[224px]">
      <Reveal>
        <nav aria-label="Ruta de navegación">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink-muted">
            <li>
              <Link
                to="/"
                className="underline-offset-4 transition-colors hover:text-ink-foreground hover:underline"
              >
                Inicio
              </Link>
            </li>
            {breadcrumb.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="size-3.5 text-ink-strong" />
                {crumb.to && index < breadcrumb.length - 1 ? (
                  <Link
                    to={crumb.to}
                    className="underline-offset-4 transition-colors hover:text-ink-foreground hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink-foreground">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Reveal>

      <div className="mt-8 max-w-[52rem]">
        <Reveal delay={0.05}>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-gold" />
            <span className="eyebrow text-accent">{eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="display-l mt-6 text-ink-foreground">{title}</h1>
        </Reveal>

        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
