import { motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { BackToTop } from "@/components/site/back-to-top";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const EASE_ENGINEERED: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Shared chrome for every routed page.
 * Al cambiar de página el contenido entra deslizándose suavemente, sin fundido a
 * blanco: así no hay destello entre pestañas.
 */
export const SiteLayout = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-full flex-col bg-background">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ y: reduceMotion ? 0 : 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.34, ease: EASE_ENGINEERED }}
        >
          <Outlet />
        </motion.div>
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default SiteLayout;
