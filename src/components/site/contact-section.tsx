import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { contactInfo } from "@/data/site-content";

const infoRows = [
  {
    icon: MapPin,
    label: "Dirección",
    value: contactInfo.address,
    href: contactInfo.mapsUrl,
  },
  {
    icon: Phone,
    label: "Contacto",
    value: contactInfo.phones.join(" · "),
    href: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: contactInfo.hours,
    href: null,
  },
];

interface ContactSectionProps {
  showHeading?: boolean;
}

export const ContactSection = ({
  showHeading = true,
}: ContactSectionProps) => (
  <section className="section-ink texture-grid-ink relative overflow-hidden">
    <div className="shell relative py-16 md:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {showHeading && (
            <Reveal>
              <SectionHeading
                tone="onInk"
                eyebrow="Contáctanos"
                title="Hablemos de tu proyecto"
                description="Cuéntanos qué necesitas resolver en terreno. Nuestro equipo técnico evalúa la viabilidad, la ruta de trabajo y las tecnologías aplicables antes de definir cualquier propuesta."
              />
            </Reveal>
          )}
          <Reveal delay={0.1} className={showHeading ? "mt-10" : ""}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.14} className="lg:col-span-5">
          <div className="flex h-full flex-col gap-8 rounded-lg border border-ink-border bg-ink-800 p-6 shadow-ink-card md:p-8">
            <div className="flex flex-col gap-6">
              {infoRows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-ink-strong bg-ink-700">
                    <Icon className="size-[18px] text-accent" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="eyebrow text-ink-muted">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noreferrer noopener"
                            : undefined
                        }
                        className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-foreground underline-offset-4 transition-colors hover:text-primary-bright hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-foreground">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-5 border-t border-ink-border pt-6">
              <div>
                <span className="eyebrow text-accent">Síguenos</span>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram de ECOP AVLE"
                    className="flex size-11 items-center justify-center rounded-sm border border-ink-strong text-ink-foreground transition-colors hover:border-primary-bright/60 hover:text-primary-bright"
                  >
                    <Instagram className="size-[18px]" />
                  </a>
                  <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook de ECOP AVLE"
                    className="flex size-11 items-center justify-center rounded-sm border border-ink-strong text-ink-foreground transition-colors hover:border-primary-bright/60 hover:text-primary-bright"
                  >
                    <Facebook className="size-[18px]" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md bg-ink-700/60 p-4">
                <span className="mt-1 h-8 w-[3px] shrink-0 rounded-full bg-gradient-gold" />
                <p className="text-[0.875rem] leading-relaxed text-ink-muted">
                  Atendemos proyectos del sector público y privado en Colombia y
                  en el exterior, con equipo propio en sitio.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
