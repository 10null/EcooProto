import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { BackToTop } from "@/components/site/back-to-top";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const EASE_ENGINEERED: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Shared chrome for every routed page, with a soft cross-fade between pages. */
export const SiteLayout = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  // Con "reducir movimiento" activado se mantiene el fundido pero sin desplazamiento.
  const enterOffset = reduceMotion ? 0 : 12;
  const exitOffset = reduceMotion ? 0 : -8;

  return (
    <div className="flex min-h-full flex-col bg-background">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: enterOffset }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: exitOffset,
              transition: { duration: 0.16, ease: EASE_ENGINEERED },
            }}
            transition={{ duration: 0.3, ease: EASE_ENGINEERED }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default SiteLayout;
