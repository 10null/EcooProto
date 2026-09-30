import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { EcopavleLogo } from "@/components/site/ecopavle-logo";
import { contactInfo } from "@/data/site-content";

const footerColumns = [
  {
    title: "Empresa",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Quiénes somos", href: "#quienes-somos" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Alianzas", href: "#alianzas" },
    ],
  },
  {
    title: "Innovaciones",
    links: [
      { label: "ECOHYBRIDPAVLE®", href: "#innovaciones" },
      { label: "Litificación para estructuras", href: "#innovaciones" },
      { label: "Ladrillos sostenibles", href: "#innovaciones" },
      { label: "BIOMORF", href: "#innovaciones" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Gerencia de proyectos", href: "#servicios" },
      { label: "Prefactibilidad", href: "#servicios" },
      { label: "Estudios y diseños", href: "#servicios" },
      { label: "Interventoría de suelos", href: "#servicios" },
    ],
  },
];

export const SiteFooter = () => (
  <footer className="section-ink relative overflow-hidden border-t border-ink-border">
    <div className="shell relative py-16 md:pb-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <EcopavleLogo tone="onInk" className="h-9 md:h-10" />
          <p className="eyebrow text-accent">
            No extraemos recursos, regeneramos territorios
          </p>
          <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            Empresa colombiana de ingeniería basada en la innovación, con más de
            20 años de servicio continuo en el sector público y privado.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} className="lg:col-span-2" aria-label={column.title}>
            <h3 className="eyebrow text-accent">{column.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-ink-foreground/[0.72] underline-offset-4 transition-colors duration-150 hover:text-ink-foreground hover:underline hover:decoration-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h3 className="eyebrow text-accent">Contacto</h3>
          <ul className="flex flex-col gap-4 text-[0.9375rem] text-ink-foreground/[0.72]">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span className="leading-relaxed">{contactInfo.address}</span>
            </li>
            {contactInfo.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-150 hover:text-ink-foreground"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors duration-150 hover:text-ink-foreground"
              >
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6 border-t border-ink-border pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[0.8125rem] text-ink-muted">
          © {new Date().getFullYear()} ECOP AVLE S.A.S. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-5">
          <span className="text-[0.8125rem] text-ink-muted">
            Hecho en Colombia
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="flex size-11 items-center justify-center rounded-sm border border-ink-strong text-ink-foreground transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-ink-foreground/[0.08]"
          >
            <ArrowUp className="size-[18px]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
