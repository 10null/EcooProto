import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { EcopavleLogo } from "@/components/site/ecopavle-logo";
import { contactInfo, innovationNav, siteNav } from "@/data/site-content";
import { cn } from "@/lib/utils";

const EASE_ENGINEERED: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navItemClass =
  "relative rounded-sm px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-gold after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const solid = scrolled || menuOpen;

  const linkTone = (isActive: boolean) =>
    cn(
      navItemClass,
      solid
        ? isActive
          ? "text-foreground after:scale-x-100"
          : "text-foreground/[0.78] hover:text-foreground"
        : isActive
          ? "text-ink-foreground after:scale-x-100"
          : "text-ink-foreground/[0.86] hover:text-ink-foreground"
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 ease-out",
          solid
            ? "border-border bg-background/[0.92] shadow-sm"
            : "border-ink-border/60 bg-ink-900/[0.68]"
        )}
      >
        {/* Franja de utilidades: se pliega al hacer scroll */}
        <div
          className={cn(
            "overflow-hidden border-ink-border/60 transition-[height,opacity] duration-200 ease-out",
            solid ? "h-0 opacity-0" : "h-11 border-b opacity-100"
          )}
        >
          <div className="shell flex h-11 items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-[0.8125rem] text-ink-muted">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 transition-colors hover:text-ink-foreground"
              >
                <Mail className="size-3.5 text-accent" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
                <span className="sm:hidden">Correo</span>
              </a>
              <span className="hidden h-4 w-px bg-ink-border md:block" />
              <span className="hidden items-center gap-2 md:flex">
                <Clock className="size-3.5 text-accent" />
                {contactInfo.hours}
              </span>
            </div>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[0.8125rem] text-ink-muted transition-colors hover:text-ink-foreground"
            >
              <Phone className="size-3.5 text-accent" />
              {contactInfo.phones[0]}
            </a>
          </div>
        </div>

        <div className="shell flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center py-4"
            aria-label="ECOPAVLE S.A.S. — Inicio"
          >
            <EcopavleLogo tone={solid ? "ink" : "onInk"} />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {siteNav.map((item) =>
              item.id === "innovaciones" ? (
                <div key={item.id} className="group relative">
                  <NavLink to={item.to} className={({ isActive }) => linkTone(isActive)}>
                    {item.label}
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full z-10 w-[19rem] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mt-2 overflow-hidden rounded-lg border border-border bg-card p-2 shadow-lg">
                      <p className="eyebrow px-3 pb-2 pt-3 text-accent-strong">
                        Investigación y desarrollo
                      </p>
                      {innovationNav.map((item) => (
                        <div key={item.to} className="pb-1">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              cn(
                                "block rounded-sm px-3 py-2.5 text-[0.9375rem] font-medium transition-colors hover:bg-secondary hover:text-primary",
                                isActive ? "text-primary" : "text-foreground/80"
                              )
                            }
                          >
                            {item.label}
                          </NavLink>

                          {item.children && (
                            <div className="mb-1 ml-4 border-l border-border pl-1">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    cn(
                                      "block rounded-sm px-3 py-2 text-[0.875rem] transition-colors hover:bg-secondary hover:text-primary",
                                      isActive
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                    )
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.id}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => linkTone(isActive)}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 py-3">
            <Button
              asChild
              size="sm"
              variant="hero"
              className="hidden sm:inline-flex"
            >
              <Link to="/contacto">Solicitar asesoría</Link>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors xl:hidden",
                solid
                  ? "text-foreground hover:bg-secondary"
                  : "text-ink-foreground hover:bg-ink-foreground/10"
              )}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-ink-900/[0.7] backdrop-blur-sm" />
            <motion.div
              className="section-ink texture-grid-ink absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: EASE_ENGINEERED }}
            >
              <div className="relative flex items-center justify-between">
                <EcopavleLogo tone="onInk" />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="relative mt-10 flex flex-col">
                {siteNav.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.04 + index * 0.03,
                      ease: EASE_ENGINEERED,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block border-b border-ink-border py-4 font-display text-[1.375rem] font-semibold transition-colors hover:text-primary-bright",
                          isActive ? "text-primary-bright" : "text-ink-foreground"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.id === "innovaciones" && (
                      <div className="flex flex-col border-b border-ink-border pb-3">
                        {innovationNav.flatMap((line) =>
                          line.children
                            ? line.children.map((child) => (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  onClick={() => setMenuOpen(false)}
                                  className="border-l border-ink-border py-2.5 pl-5 text-[0.9375rem] text-ink-muted transition-colors hover:text-primary-bright"
                                >
                                  {child.label}
                                </NavLink>
                              ))
                            : []
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="relative mt-8 flex flex-col gap-4">
                <Button asChild size="lg" variant="hero">
                  <Link to="/contacto" onClick={() => setMenuOpen(false)}>
                    Solicitar asesoría
                  </Link>
                </Button>
                <div className="flex flex-col gap-2 text-sm text-ink-muted">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 hover:text-ink-foreground"
                  >
                    <Mail className="size-4 text-accent" />
                    {contactInfo.email}
                  </a>
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 hover:text-ink-foreground"
                    >
                      <Phone className="size-4 text-accent" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteHeader;
