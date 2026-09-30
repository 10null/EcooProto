export const siteNav = [
  { id: "inicio", label: "Inicio", to: "/" },
  { id: "quienes-somos", label: "Quiénes Somos", to: "/quienes-somos" },
  { id: "innovaciones", label: "Innovaciones", to: "/innovaciones" },
  { id: "servicios", label: "Servicios", to: "/servicios" },
  { id: "portafolio", label: "Portafolio", to: "/portafolio" },
  { id: "alianzas", label: "Alianzas", to: "/alianzas" },
  { id: "contacto", label: "Contáctanos", to: "/contacto" },
];

export const innovationNav = [
  { label: "ECOHYBRIDPAVLE®", to: "/innovaciones/ecohybridpavle" },
  { label: "Litificación para estructuras", to: "/innovaciones/litificacion" },
  { label: "Ladrillos sostenibles", to: "/innovaciones/ladrillos-sostenibles" },
  { label: "BIOMORF", to: "/innovaciones/biomorf" },
];

export const contactInfo = {
  address: "Cra 15 #66a - 18, Barrios Unidos, Bogotá D.C. (Colombia)",
  phones: ["+57 314 518 5485", "+57 312 824 8650"],
  email: "info@ecopavle.com",
  hours: "Lun - Sab 7:00 - 19:00",
  instagram: "https://www.instagram.com/ecopavle.co",
  facebook: "https://www.facebook.com/share/v/174nVDxe8M/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cra+15+%2366a-18%2C+Barrios+Unidos%2C+Bogot%C3%A1",
};

export const credentials = [
  {
    icon: "hardhat",
    label: "+20 años",
    text: "Servicio continuo en gerencia de proyectos, prefactibilidad, estudios y diseños e interventoría de suelos.",
  },
  {
    icon: "globe",
    label: "Presencia nacional e internacional",
    text: "Proyectos para el sector público y privado dentro y fuera de Colombia.",
  },
  {
    icon: "flask",
    label: "I+D propio",
    text: "ECOHYBRIDPAVLE® y BIOMORF: desarrollos tecnológicos creados y validados en laboratorio.",
  },
  {
    icon: "recycle",
    label: "Tecnologías limpias",
    text: "Reúso de materiales provenientes de pasivos ambientales generados por procesos industriales.",
  },
] as const;

export const capabilities = [
  "Gerencia de proyectos",
  "Prefactibilidad",
  "Estudios y diseños",
  "Interventoría de suelos",
];

export const heroImage =
  "https://cdn.enter.pro/resources/uid_100604786/ecopavle-hero_54ed9703.png";

export const territoryImage =
  "https://cdn.enter.pro/resources/uid_100604786/ecopavle-territorio_6aea4ee2.png";

/* ------------------------------------------------------------------------- */
/* Encabezados de página                                                     */
/* ------------------------------------------------------------------------- */

export const pageHeros = {
  quienesSomos: {
    eyebrow: "Quiénes somos",
    title: "Ingeniería colombiana que regenera territorios",
    description:
      "Somos una empresa de ingeniería basada en la innovación: a través de la investigación, el desarrollo y la aplicación de nuevos conceptos tecnológicos que asisten métodos constructivos y procesos industriales, con tecnologías limpias.",
    breadcrumb: [{ label: "Quiénes somos" }],
  },
  innovaciones: {
    eyebrow: "Innovaciones",
    title: "Tecnología propia para construir sin extraer",
    description:
      "Investigamos, desarrollamos y aplicamos conceptos tecnológicos que asisten los métodos constructivos y los procesos industriales del país. Dos líneas de I+D nacidas de nuestra propia operación.",
    breadcrumb: [{ label: "Innovaciones" }],
  },
  servicios: {
    eyebrow: "Servicios",
    title: "Soluciones de ingeniería de principio a fin",
    description:
      "Acompañamos el ciclo completo del proyecto: desde la prefactibilidad y el diseño hasta la supervisión en obra, con criterios técnicos y ambientales verificables.",
    breadcrumb: [{ label: "Servicios" }],
  },
  portafolio: {
    eyebrow: "Portafolio",
    title: "Nuestros proyectos",
    description:
      "Obras ejecutadas para el sector público y privado: infraestructura vial, geoestructuras de pavimento y obras asociadas a la Metro Línea 1 de Bogotá.",
    breadcrumb: [{ label: "Portafolio" }],
  },
  alianzas: {
    eyebrow: "Alianzas",
    title: "Trabajamos con quienes investigan y construyen",
    description:
      "Articulamos capacidades técnicas, académicas y profesionales para llevar cada desarrollo al terreno con respaldo metodológico.",
    breadcrumb: [{ label: "Alianzas" }],
  },
  contacto: {
    eyebrow: "Contáctanos",
    title: "Hablemos de tu proyecto",
    description:
      "Cuéntanos qué necesitas resolver en terreno. Nuestro equipo técnico evalúa la viabilidad, la ruta de trabajo y las tecnologías aplicables antes de definir cualquier propuesta.",
    breadcrumb: [{ label: "Contáctanos" }],
  },
} as const;

export const pageMeta = {
  home: {
    title: "ECOPAVLE S.A.S. | Ingeniería regenerativa e innovación sostenible",
    description:
      "Empresa colombiana de ingeniería basada en la innovación: estudios y diseños, interventoría de suelos y tecnologías limpias como ECOHYBRIDPAVLE® y BIOMORF. No extraemos recursos, regeneramos territorios.",
  },
  quienesSomos: {
    title: "Quiénes somos | ECOP AVLE S.A.S.",
    description:
      "Más de 20 años de ingeniería basada en la innovación: gerencia de proyectos, prefactibilidad, estudios y diseños e interventoría de suelos con tecnologías limpias.",
  },
  innovaciones: {
    title: "Innovaciones | ECOHYBRIDPAVLE® y BIOMORF",
    description:
      "Líneas de I+D propias: ECOHYBRIDPAVLE® para litificación de suelos, ladrillos sostenibles para construcción y BIOMORF para estabilidad de taludes con vegetación integrada.",
  },
  servicios: {
    title: "Servicios de ingeniería | ECOP AVLE S.A.S.",
    description:
      "Gerencia de proyectos, prefactibilidad, estudios y diseños, e interventoría de suelos para el sector público y privado.",
  },
  portafolio: {
    title: "Portafolio de proyectos | ECOP AVLE S.A.S.",
    description:
      "Vías con litificación en sitio, estudios y diseños geotécnicos e interventoría de obras de infraestructura.",
  },
  alianzas: {
    title: "Alianzas | ECOP AVLE S.A.S.",
    description:
      "Alianzas profesionales y académicas que respaldan metodológicamente cada desarrollo llevado al terreno.",
  },
  contacto: {
    title: "Contacto | ECOP AVLE S.A.S.",
    description:
      "Solicita asesoría técnica: Cra 15 #66a - 18, Barrios Unidos, Bogotá D.C. Colombia. info@ecopavle.com",
  },
} as const;

/* ------------------------------------------------------------------------- */
/* Quiénes somos                                                             */
/* ------------------------------------------------------------------------- */

export const aboutBlocks = [
  {
    icon: "leaf",
    title: "Nuestro enfoque",
    text: "Diseñamos mecanismos y sistemas que permiten la estabilidad a través del uso y el reúso de los materiales provenientes de los pasivos ambientales generados por procesos industriales y de otros materiales disponibles en la región.",
  },
  {
    icon: "flask",
    title: "Investigación y desarrollo",
    text: "Investigamos, desarrollamos y aplicamos nuevos conceptos tecnológicos que asisten los métodos constructivos y los procesos industriales con tecnologías limpias.",
  },
  {
    icon: "handshake",
    title: "Compromiso con el territorio",
    text: "Trabajamos para que las técnicas e innovaciones aplicadas se vean reflejadas de manera efectiva en el desarrollo y bienestar ambiental, social y económico, contando con el apoyo de la región y de conformidad con las políticas de gobierno.",
  },
  {
    icon: "shield",
    title: "Trayectoria",
    text: "Más de 20 años de servicio continuo en la gerencia de proyectos, prefactibilidad, estudios y diseños e interventoría de suelos del sector público y privado.",
  },
] as const;

/* ------------------------------------------------------------------------- */
/* Innovaciones                                                              */
/* ------------------------------------------------------------------------- */

export const innovations = {
  hero: {
    name: "ECOHYBRIDPAVLE®",
    slug: "ecohybridpavle",
    eyebrow: "Línea principal",
    title: "Litificación de suelos en sitio",
    description:
      "Estabilizamos el material disponible en la región para conformar capas estructurales de alto desempeño, reduciendo la extracción de agregados y el transporte asociado. Un sistema híbrido que convierte el suelo existente en un pavimento durable.",
    bullets: [
      "Menor huella de carbono por kilómetro construido",
      "Aprovechamiento del material local del corredor",
      "Capas de rodadura con desempeño estructural verificable",
    ],
    image:
      "https://cdn.enter.pro/resources/uid_100604786/ecopavle-ecohybrid_9dad2044.png",
  },
  products: [
    {
      slug: "litificacion",
      name: "Litificación para estructuras",
      description:
        "Conformación de estructuras de pavimento mediante procesos de litificación, con control técnico de laboratorio y obra.",
      icon: "layers",
      image: null,
    },
    {
      slug: "ladrillos-sostenibles",
      name: "Ladrillos sostenibles para construcción",
      description:
        "Elementos de construcción fabricados a partir del reúso de materiales de pasivos ambientales, con desempeño mecánico controlado.",
      icon: "blocks",
      image:
        "https://cdn.enter.pro/resources/uid_100604786/ecopavle-ladrillos_33bbb3ea.png",
    },
  ],
  biomorf: {
    name: "BIOMORF",
    slug: "biomorf",
    eyebrow: "Bioingeniería",
    description:
      "Diseñamos mecanismos y sistemas que permiten estabilidad en taludes, laderas y bordes de vía, integrando vegetación y materiales del territorio. Estabilidad estructural con regeneración del ecosistema intervenido.",
    image:
      "https://cdn.enter.pro/resources/uid_100604786/ecopavle-biomorf-muro-vegetado_b36f0bd1.png",
  },
};

export const innovationDetails = [
  {
    slug: "ecohybridpavle",
    name: "ECOHYBRIDPAVLE®",
    eyebrow: "Línea principal",
    title: "Litificación de suelos en sitio",
    description:
      "Estabilizamos el material disponible en la región para conformar capas estructurales de alto desempeño, reduciendo la extracción de agregados y el transporte asociado. Un sistema híbrido que convierte el suelo existente en un pavimento durable.",
    image: innovations.hero.image,
    bullets: [
      "Menor huella de carbono por kilómetro construido",
      "Aprovechamiento del material local del corredor",
      "Capas de rodadura con desempeño estructural verificable",
    ],
    related: ["litificacion", "ladrillos-sostenibles"],
    breadcrumb: [
      { label: "Innovaciones", to: "/innovaciones" },
      { label: "ECOHYBRIDPAVLE®" },
    ],
  },
  {
    slug: "litificacion",
    name: "Litificación para estructuras",
    eyebrow: "Subproducto de ECOHYBRIDPAVLE®",
    title: "Estructuras de pavimento conformadas en sitio",
    description:
      "La litificación permite conformar estructuras de pavimento a partir del material existente, con control técnico de laboratorio y obra. El resultado son capas estructurales verificables, con menos material importado y menos residuos.",
    image: innovations.hero.image,
    bullets: [
      "Conformación de estructuras de pavimento por litificación",
      "Control técnico de laboratorio y de obra",
      "Aprovechamiento del material disponible en el corredor",
      "Menor movimiento de agregados importados",
    ],
    related: ["ecohybridpavle", "ladrillos-sostenibles"],
    breadcrumb: [
      { label: "Innovaciones", to: "/innovaciones" },
      { label: "Litificación para estructuras" },
    ],
  },
  {
    slug: "ladrillos-sostenibles",
    name: "Ladrillos sostenibles para construcción",
    eyebrow: "Subproducto de ECOHYBRIDPAVLE®",
    title: "Elementos de construcción a partir del reúso",
    description:
      "Fabricamos elementos de construcción a partir del reúso de materiales provenientes de pasivos ambientales, con desempeño mecánico controlado. Una alternativa que transforma residuos industriales en material útil para la obra.",
    image: innovations.products[1].image,
    bullets: [
      "Reúso de materiales de pasivos ambientales",
      "Desempeño mecánico controlado y verificable",
      "Materiales disponibles en la región",
      "Menos residuos enviados a disposición final",
    ],
    related: ["ecohybridpavle", "litificacion"],
    breadcrumb: [
      { label: "Innovaciones", to: "/innovaciones" },
      { label: "Ladrillos sostenibles" },
    ],
  },
  {
    slug: "biomorf",
    name: "BIOMORF",
    eyebrow: "Bioingeniería",
    title: "Estabilidad con vegetación integrada",
    description:
      "BIOMORF reúne nuestros mecanismos y sistemas para estabilidad de taludes, laderas y bordes de vía, integrando vegetación y materiales del territorio. La estructura resuelve la estabilidad y, al mismo tiempo, regenera el ecosistema intervenido.",
    image: innovations.biomorf.image,
    bullets: [
      "Muros de contención con vegetación integrada",
      "Estabilidad de taludes, laderas y bordes de vía",
      "Control de erosión con materiales del territorio",
      "Regeneración del ecosistema intervenido",
    ],
    related: ["ecohybridpavle", "litificacion"],
    breadcrumb: [
      { label: "Innovaciones", to: "/innovaciones" },
      { label: "BIOMORF" },
    ],
  },
] as const;

/* ------------------------------------------------------------------------- */
/* Servicios                                                                 */
/* ------------------------------------------------------------------------- */

export const services = [
  {
    icon: "clipboard",
    title: "Gerencia de proyectos",
    description:
      "Dirección técnica, programación y control de obras de infraestructura desde la planeación hasta la entrega.",
    deliverables: [
      "Programación y control de obra",
      "Dirección técnica y seguimiento",
      "Informes de avance y cierre",
    ],
  },
  {
    icon: "compass",
    title: "Prefactibilidad",
    description:
      "Análisis técnico y económico preliminar para definir la viabilidad real de cada intervención.",
    deliverables: [
      "Análisis técnico preliminar",
      "Evaluación económica",
      "Recomendación de alternativas",
    ],
  },
  {
    icon: "gauge",
    title: "Estudios y diseños",
    description:
      "Estudios de suelos, diseños geométricos, estructurales y de pavimentos con criterios de sostenibilidad.",
    deliverables: [
      "Estudios de suelos",
      "Diseño geométrico y estructural",
      "Diseño de pavimentos",
    ],
  },
  {
    icon: "shield",
    title: "Interventoría de suelos",
    description:
      "Supervisión técnica independiente que garantiza calidad, trazabilidad y cumplimiento normativo.",
    deliverables: [
      "Supervisión técnica independiente",
      "Control de calidad y trazabilidad",
      "Verificación del cumplimiento normativo",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico y prefactibilidad",
    text: "Evaluamos el terreno, las condiciones del corredor y la viabilidad técnica y económica de la intervención.",
  },
  {
    step: "02",
    title: "Estudios y diseños",
    text: "Estudios de suelos y diseños geométricos, estructurales y de pavimentos con criterios de sostenibilidad.",
  },
  {
    step: "03",
    title: "Ejecución y gerencia",
    text: "Dirección técnica, programación y control de la obra, aplicando nuestras tecnologías propias cuando aportan valor.",
  },
  {
    step: "04",
    title: "Interventoría y cierre",
    text: "Supervisión independiente, verificación de especificaciones y entrega documentada del proyecto.",
  },
] as const;

/* ------------------------------------------------------------------------- */
/* Portafolio y alianzas                                                     */
/* ------------------------------------------------------------------------- */

export const projectCategories = [
  "Todos",
  "Infraestructura vial",
  "Geoestructuras de pavimento",
  "Metro Línea 1",
] as const;

export interface PortfolioProject {
  title: string;
  year?: string;
  location: string;
  category: string;
  image: string | null;
  videoUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Intersección vial, Yopal – vía Sirivana",
    year: "2023",
    location: "Yopal, Casanare",
    category: "Infraestructura vial",
    image: "/proyectos/interesccion-yopal-sirivana.jpg",
  },
  {
    title:
      "Disposición final de estériles de minería en geoestructura de pavimento",
    year: "2024",
    location: "Muzo, Boyacá",
    category: "Geoestructuras de pavimento",
    image: "/proyectos/esteriles-muzo-boyaca.jpg",
  },
  {
    title: "Plataforma de izaje de equipos, estación 1 – Metro Línea 1",
    year: "2025",
    location: "Bogotá D.C.",
    category: "Metro Línea 1",
    image: "/proyectos/metro-linea1-plataforma-izaje.jpg",
  },
  {
    title:
      "Construcción vía La Cristalina, centro poblado de Puerto Gaitán",
    year: "2025",
    location: "Puerto Gaitán, Meta",
    category: "Infraestructura vial",
    image: "/proyectos/via-la-cristalina-puerto-gaitan.jpg",
  },
  {
    title: "Tramo de vía Chaparral",
    year: "2020",
    location: "Tauramena, Casanare",
    category: "Infraestructura vial",
    image: "/proyectos/tramo-chaparral-tauramena.jpg",
  },
  {
    title: "Geoestructura en proceso manual, vía Peñas Blancas",
    year: "2022",
    location: "Borbur, Boyacá",
    category: "Geoestructuras de pavimento",
    image: "/proyectos/geoestructura-borbur-boyaca.jpg",
  },
  {
    title:
      "Conformación y recubrimiento de talud, plataforma de izaje de equipos 1 – Metro Línea 1",
    year: "2025",
    location: "Bogotá D.C.",
    category: "Metro Línea 1",
    image: "/proyectos/metro-linea1-talud.jpg",
  },
  {
    title: "Vía Las Tapas",
    location: "Yopal, Casanare",
    category: "Infraestructura vial",
    image: null,
    videoUrl: "https://ecopavle.com/gallery/EcoPav%20Video%20Las%20Tapas.mp4",
  },
];

export const partners = [
  {
    icon: "user",
    name: "Juan Carlos Borrero Plaza",
    role: "Alianza profesional",
    description:
      "Trabajo conjunto en gerencia y desarrollo de proyectos de ingeniería.",
    detail:
      "Aportamos experiencia técnica y capacidad de ejecución en la estructuración y el desarrollo de proyectos de infraestructura.",
    href: null,
  },
  {
    icon: "graduation",
    name: "Corporación Universitaria San José",
    role: "Alianza académica",
    description:
      "Cooperación académica para investigación aplicada y transferencia tecnológica.",
    detail:
      "Articulamos investigación aplicada, formación y transferencia tecnológica para validar y escalar nuestros desarrollos.",
    href: "https://sitio.usanjose.edu.co/",
  },
] as const;

/* ------------------------------------------------------------------------- */
/* Contacto                                                                  */
/* ------------------------------------------------------------------------- */

export const projectTypes = [
  "Infraestructura vial",
  "Edificación",
  "Interventoría",
  "Estudios y diseños",
  "Investigación y desarrollo",
  "Otra",
];
