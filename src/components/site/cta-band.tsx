import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { contactInfo } from "@/data/site-content";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
}

/** Closing call to action reused at the end of the inner pages. */
export const CtaBand = ({
  eyebrow = "Siguiente paso",
  title = "Hablemos de tu proyecto",
  description = "Cuéntanos qué necesitas resolver en terreno y evaluamos la viabilidad, la ruta de trabajo y las tecnologías aplicables.",
  primaryLabel = "Solicitar asesoría",
}: CtaBandProps) => (
  <section className="bg-background">
    <div className="shell py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl bg-gradient-brand p-8 shadow-lg md:p-12">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[46ch]">
              <span className="eyebrow text-accent">{eyebrow}</span>
              <h2 className="display-s mt-4 text-primary-foreground">
                {title}
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-primary-foreground/85">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="gold">
                <Link to="/contacto">
                  {primaryLabel}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="onInk">
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail />
                  Escríbenos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
