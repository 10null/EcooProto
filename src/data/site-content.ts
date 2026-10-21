export const siteNav = [
  { id: "inicio", label: "Inicio", to: "/" },
  { id: "quienes-somos", label: "Quiénes Somos", to: "/quienes-somos" },
  { id: "innovaciones", label: "Innovaciones", to: "/innovaciones" },
  { id: "servicios", label: "Servicios", to: "/servicios" },
  { id: "portafolio", label: "Portafolio", to: "/portafolio" },
  { id: "alianzas", label: "Alianzas", to: "/alianzas" },
  { id: "contacto", label: "Contáctanos", to: "/contacto" },
];

export interface InnovationNavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

export const innovationNav: InnovationNavItem[] = [
  {
    label: "ECOHYBRIDPAVLE®",
    to: "/innovaciones/ecohybridpavle",
    children: [
      {
        label: "Litificación para estructuras",
        to: "/innovaciones/litificacion",
      },
      {
        label: "Ladrillos sostenibles",
        to: "/innovaciones/ladrillos-sostenibles",
      },
    ],
  },
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

export const heroImage = "/img/hero-1920.webp";

export const heroImageSrcSet =
  "/img/hero-1280.webp 1280w, /img/hero-1920.webp 1920w";

export const territoryImage = "/img/territorio.webp";

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
    title: "Quiénes somos | ECOPAVLE S.A.S.",
    description:
      "Más de 20 años de ingeniería basada en la innovación: gerencia de proyectos, prefactibilidad, estudios y diseños e interventoría de suelos con tecnologías limpias.",
  },
  innovaciones: {
    title: "Innovaciones | ECOHYBRIDPAVLE® + S-SEIM y BIOMORF",
    description:
      "Dos líneas de I+D propias: el sistema ECOHYBRIDPAVLE® + S-SEIM para geoestructuras de pavimento ejecutadas in situ, y BIOMORF para convertir residuos contaminados en material granular inerte.",
  },
  servicios: {
    title: "Servicios de ingeniería | ECOPAVLE S.A.S.",
    description:
      "Gerencia de proyectos, prefactibilidad, estudios y diseños, e interventoría de suelos para el sector público y privado.",
  },
  portafolio: {
    title: "Portafolio de proyectos | ECOPAVLE S.A.S.",
    description:
      "Vías con litificación en sitio, estudios y diseños geotécnicos e interventoría de obras de infraestructura.",
  },
  alianzas: {
    title: "Alianzas | ECOPAVLE S.A.S.",
    description:
      "Alianzas profesionales y académicas que respaldan metodológicamente cada desarrollo llevado al terreno.",
  },
  contacto: {
    title: "Contacto | ECOPAVLE S.A.S.",
    description:
      "Solicita asesoría técnica: Cra 15 #66a - 18, Barrios Unidos, Bogotá D.C. Colombia. info@ecopavle.com",
  },
} as const;

/* ------------------------------------------------------------------------- */
/* Quiénes somos                                                             */
/* ------------------------------------------------------------------------- */

export const missionVision = [
  {
    icon: "target",
    label: "Misión",
    paragraphs: [
      "En ECOPAVLE S.A.S. desarrollamos e implementamos tecnología e ingeniería colombiana para transformar materiales disponibles en el territorio y pasivos ambientales en soluciones de infraestructura eficientes, sostenibles y de alto desempeño.",
      "Integramos innovación, ingeniería, economía circular y conocimiento aplicado para reducir el consumo de recursos naturales, optimizar los procesos constructivos y generar valor ambiental, social y económico.",
      "Nuestro propósito es transformar la manera de construir infraestructura, aprovechando responsablemente los recursos disponibles y llevando soluciones tecnológicas a los territorios donde más se necesitan.",
    ],
  },
  {
    icon: "eye",
    label: "Visión",
    paragraphs: [
      "En la próxima década, ECOPAVLE S.A.S. se consolidará como una empresa colombiana líder en innovación tecnológica aplicada a la infraestructura sostenible y la economía circular, con presencia y reconocimiento a nivel nacional e internacional.",
      "Seremos referentes en el desarrollo de una nueva generación de infraestructura, caracterizada por el alto desempeño técnico, la sostenibilidad y el aprovechamiento responsable de los recursos, promoviendo soluciones que reduzcan la dependencia de la extracción intensiva de recursos naturales.",
      "Desde Colombia, proyectaremos nuestra tecnología, ingeniería y conocimiento al mundo, impulsando la transformación sostenible de los territorios y contribuyendo al desarrollo de una infraestructura más eficiente, responsable y preparada para los desafíos del futuro.",
    ],
  },
] as const;

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

export interface ProjectPhoto {
  /** 200 px wide — gallery thumbnails. */
  thumb: string;
  /** 640 px wide — grid covers. */
  card: string;
  /** Up to 1200 px wide — gallery main image. */
  full: string;
}

export interface PortfolioProject {
  title: string;
  year?: string;
  location: string;
  category: string;
  images: ProjectPhoto[];
  videoUrl?: string;
}

const projectPhotos = (slug: string, numbers: number[]): ProjectPhoto[] =>
  numbers.map((number) => {
    const file = String(number).padStart(2, "0");
    return {
      thumb: `/proyectos/${slug}/thumb-${file}.webp`,
      card: `/proyectos/${slug}/card-${file}.webp`,
      full: `/proyectos/${slug}/full-${file}.webp`,
    };
  });

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Intersección vial, Yopal – vía Sirivana",
    year: "2023",
    location: "Yopal, Casanare",
    category: "Infraestructura vial",
    images: projectPhotos("interesccion-yopal-sirivana", [2]),
  },
  {
    title:
      "Disposición final de estériles de minería en geoestructura de pavimento",
    year: "2024",
    location: "Muzo, Boyacá",
    category: "Geoestructuras de pavimento",
    images: projectPhotos("esteriles-muzo-boyaca", [3]),
  },
  {
    title: "Plataforma de izaje de equipos, estación 1 – Metro Línea 1",
    year: "2025",
    location: "Bogotá D.C.",
    category: "Metro Línea 1",
    images: projectPhotos("metro-linea1-plataforma-izaje", [1, 2, 3, 4, 5, 6]),
  },
  {
    title: "Construcción vía La Cristalina, centro poblado de Puerto Gaitán",
    year: "2025",
    location: "Puerto Gaitán, Meta",
    category: "Infraestructura vial",
    images: projectPhotos("via-la-cristalina-puerto-gaitan", [1]),
  },
  {
    title: "Tramo de vía Chaparral",
    year: "2020",
    location: "Tauramena, Casanare",
    category: "Infraestructura vial",
    images: projectPhotos("tramo-chaparral-tauramena", [2]),
  },
  {
    title: "Geoestructura en proceso manual, vía Peñas Blancas",
    year: "2022",
    location: "Borbur, Boyacá",
    category: "Geoestructuras de pavimento",
    images: projectPhotos("geoestructura-borbur-boyaca", [2]),
  },
  {
    title:
      "Conformación y recubrimiento de talud, plataforma de izaje de equipos 1 – Metro Línea 1",
    year: "2025",
    location: "Bogotá D.C.",
    category: "Metro Línea 1",
    images: projectPhotos("metro-linea1-talud", [1, 2, 5]),
  },
  {
    title: "Vía Las Tapas",
    location: "Yopal, Casanare",
    category: "Infraestructura vial",
    images: [],
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
