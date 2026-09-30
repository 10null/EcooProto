import { SiteLayout } from "./components/site/site-layout";
import Alianzas from "./pages/Alianzas";
import Contacto from "./pages/Contacto";
import Index from "./pages/Index";
import InnovacionDetalle from "./pages/InnovacionDetalle";
import Innovaciones from "./pages/Innovaciones";
import NotFound from "./pages/NotFound";
import Portafolio from "./pages/Portafolio";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";

export const routers = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, name: "home", element: <Index /> },
      {
        path: "quienes-somos",
        name: "quienes-somos",
        element: <QuienesSomos />,
      },
      { path: "innovaciones", name: "innovaciones", element: <Innovaciones /> },
      {
        path: "innovaciones/:slug",
        name: "innovacion-detalle",
        element: <InnovacionDetalle />,
      },
      { path: "servicios", name: "servicios", element: <Servicios /> },
      { path: "portafolio", name: "portafolio", element: <Portafolio /> },
      { path: "alianzas", name: "alianzas", element: <Alianzas /> },
      { path: "contacto", name: "contacto", element: <Contacto /> },
      /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
      { path: "*", name: "404", element: <NotFound /> },
    ],
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
