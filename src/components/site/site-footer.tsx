import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { EcopavleLogo } from "@/components/site/ecopavle-logo";
import { contactInfo, innovationNav } from "@/data/site-content";

const footerColumns = [
  {
    title: "Empresa",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Quiénes somos", to: "/quienes-somos" },
      { label: "Portafolio", to: "/portafolio" },
      { label: "Alianzas", to: "/alianzas" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Gerencia de proyectos", to: "/servicios" },
      { label: "Prefactibilidad", to: "/servicios" },
      { label: "Estudios y diseños", to: "/servicios" },
      { label: "Interventoría de suelos", to: "/servicios" },
    ],
  },
];

export const SiteFooter = () => (
  <footer className="section-ink relative overflow-hidden border-t border-ink-border">
    <div className="shell relative py-16 md:pb-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <EcopavleLogo tone="onInk" size="lg" className="self-start" />
          <p className="eyebrow text-accent">
            No extraemos recursos, regeneramos territorios
          </p>
          <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            Empresa colombiana de ingeniería basada en la innovación, con más de
            20 años de servicio continuo en el sector público y privado.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav
            key={column.title}
            className="lg:col-span-2"
            aria-label={column.title}
          >
            <h2 className="eyebrow text-accent">{column.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link
                    to={link.to}
                    className="text-[0.9375rem] text-ink-foreground/[0.72] underline-offset-4 transition-colors duration-150 hover:text-ink-foreground hover:underline hover:decoration-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav className="lg:col-span-2" aria-label="Innovaciones">
          <h2 className="eyebrow text-accent">Innovaciones</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {innovationNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[0.9375rem] text-ink-foreground/[0.72] underline-offset-4 transition-colors duration-150 hover:text-ink-foreground hover:underline hover:decoration-accent"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 flex flex-col gap-3 border-l border-ink-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="text-[0.875rem] text-ink-muted underline-offset-4 transition-colors duration-150 hover:text-ink-foreground hover:underline hover:decoration-accent"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="eyebrow text-accent">Contacto</h2>
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
          © {new Date().getFullYear()} ECOPAVLE S.A.S. Todos los derechos
          reservados.
        </p>
        <p className="text-[0.8125rem] text-ink-muted">
          Powered By ECOPAVLE®
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
