import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/site/reveal";
import { innovationDetails } from "@/data/site-content";

interface InnovationRelatedProps {
  slugs: readonly string[];
}

/** Other I+D lines, linked from an innovation detail page. */
export const InnovationRelated = ({ slugs }: InnovationRelatedProps) => {
  const related = innovationDetails.filter((item) =>
    slugs.includes(item.slug)
  );

  if (related.length === 0) return null;

  return (
    <div className="border-t border-border pt-10">
      <span className="eyebrow text-accent-strong">Otras líneas de I+D</span>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.07} className="h-full">
            <Link
              to={`/innovaciones/${item.slug}`}
              className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-md"
            >
              <span className="eyebrow text-accent-strong">{item.eyebrow}</span>
              <h3 className="font-display text-[1.0625rem] font-semibold leading-snug text-foreground">
                {item.name}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                {item.title}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[0.875rem] font-semibold text-primary">
                Ver detalle
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default InnovationRelated;
