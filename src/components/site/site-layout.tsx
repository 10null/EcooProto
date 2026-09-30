import { Outlet } from "react-router-dom";

import { ScrollToTop } from "@/components/site/scroll-to-top";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

/** Shared chrome for every routed page. */
export const SiteLayout = () => (
  <div className="flex min-h-full flex-col bg-background">
    <ScrollToTop />
    <SiteHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
