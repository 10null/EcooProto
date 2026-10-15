import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta("Página no encontrada | ECOPAVLE S.A.S.");

  return (
    <section className="section-ink texture-grid-ink relative overflow-hidden">
      <div className="shell relative flex min-h-[70vh] flex-col items-center justify-center pb-20 pt-[176px] text-center md:pt-[208px]">
        <span className="flex size-14 items-center justify-center rounded-md border border-ink-strong bg-ink-800">
          <Compass className="size-6 text-accent" />
        </span>
        <span className="eyebrow mt-8 text-accent">Error 404</span>
        <h1 className="display-l mt-5 max-w-[24ch] text-ink-foreground">
          No encontramos esta página
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          Puede que el enlace haya cambiado o que la dirección esté mal escrita.
          Vuelve al inicio o escríbenos y te ayudamos a encontrar lo que buscas.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero">
            <Link to="/">
              <ArrowLeft />
              Volver al inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="onInk">
            <Link to="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
