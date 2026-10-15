export interface InnovationSpecBlock {
  code: string;
  title: string;
  paragraphs?: string[];
  items?: { label: string; text: string }[];
  image?: string;
  imageAlt?: string;
}

export interface Innovation {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  /** Imagen alternativa para la página de detalle (por ejemplo, con etiquetas). */
  detailImage?: string;
  detailImageAlt?: string;
  /** Sub-líneas que cuelgan de esta línea de I+D. */
  subLines?: { name: string; slug: string }[];
  /** Línea principal a la que pertenece una sub-línea. */
  parent?: { name: string; slug: string };
  spec?: {
    label: string;
    title: string;
    reference: string;
    blocks: InnovationSpecBlock[];
  };
}

/**
 * Líneas de I+D propias.
 * La especificación técnica de ECOHYBRIDPAVLE® reproduce el documento
 * "ESPECIFICACIÓN TÉCNICA ECOHYBRIDPAVLE® + S-SEIM" de ECOP AV LE S.A.S.
 */
export const innovations: Innovation[] = [
  {
    slug: "ecohybridpavle",
    name: "ECOHYBRIDPAVLE®",
    eyebrow: "Geoestructuras de pavimento",
    title: "Sistema ECOHYBRIDPAVLE® + S-SEIM",
    summary:
      "Geoestructuras ejecutadas in situ con el suelo del territorio, RCD y pasivos previamente acondicionados, que actúan a la vez como estructura de pavimento y rodadura.",
    description:
      "Esta especificación establece los lineamientos para el diseño, construcción y control de calidad de geoestructuras ECOHYBRIDPAVLE® + S-SEIM, ejecutadas in situ con suelo del territorio, RCD y/o pasivos previamente acondicionados, las cuales pueden actuar simultáneamente como estructura de pavimento y rodadura, protegidas mediante un sello superficial no estructural para textura, hermeticidad y seguridad de uso.",
    bullets: [
      "Estructura de pavimento y rodadura en una sola geoestructura portante",
      "Materiales del territorio: suelo in situ, RCD y pasivos acondicionados",
      "Refuerzo multiescalar con micro y macrofibras integradas",
      "Menor explotación de canteras y menor traslado de materiales",
    ],
    image:
      "/img/ecohybridpavle-camino.webp",
    imageAlt:
      "Sección de la estructura de pavimento: slurry seal, CP3 semirrígida, CP2 apoyo y CP1 soporte",
    detailImage: "/img/ecohybridpavle-capas.webp",
    detailImageAlt:
      "Esquema de las capas de la geoestructura: slurry seal, CP3 semirrígida, CP2 apoyo y CP1 soporte",
    subLines: [
      { name: "Litificación para estructuras", slug: "litificacion" },
      {
        name: "Ladrillos sostenibles para construcción",
        slug: "ladrillos-sostenibles",
      },
    ],
    spec: {
      label: "Especificación técnica",
      title: "ECOHYBRIDPAVLE® + S-SEIM",
      reference:
        "Documento: Especificación técnica ECOHYBRIDPAVLE® + S-SEIM · ECOP AV LE S.A.S. (NIT 901.474.791-1)",
      blocks: [
        {
          code: "EH.1",
          title: "Descripción",
          paragraphs: [
            "Esta especificación establece los lineamientos para el diseño, construcción y control de calidad de geoestructuras ECOHYBRIDPAVLE® + S-SEIM, ejecutadas in situ con suelo del territorio, RCD y/o pasivos previamente acondicionados, las cuales pueden actuar simultáneamente como estructura de pavimento y rodadura, protegidas mediante un sello superficial no estructural para textura, hermeticidad y seguridad de uso.",
          ],
        },
        {
          code: "EH.2",
          title: "Materiales",
          items: [
            {
              label: "Suelos y materiales del territorio",
              text: "Los materiales provienen preferentemente del territorio: suelos in situ, residuos de construcción y demolición (RCD) y, cuando aplique, pasivos previamente acondicionados hasta alcanzar condición granular apta según los estudios del proyecto. En la fase de diagnóstico se determinan, como mínimo, granulometría, plasticidad, humedad natural y presencia de compuestos que puedan interferir con el desempeño del sistema.",
            },
            {
              label: "Producto ECOHYBRIDPAVLE®",
              text: "Formulación cementicia de naturaleza puzolánica que integra funciones densificantes, adhesivas, humectantes, impermeabilizantes y de refuerzo mediante micro y macrofibras siempre presentes, diseñada para ser mezclada con el material propio del territorio. Su acción fisicoquímica, descrita como aleación molecular acelerada, produce una litificación controlada de tipo “roca sedimentaria” a escala de ingeniería, con encapsulamiento hidrófugo de finos y vacíos y un refuerzo multiescalar que incrementa el módulo efectivo y la ductilidad de la geoestructura resultante.",
            },
            {
              label: "Agua",
              text: "El agua para el mezclado y la compactación puede provenir de cualquier fuente disponible en el proyecto, incluida agua empozada durante largos periodos, incluso contaminada con aceites, hidrocarburos u otras sustancias, siempre que dicha condición se considere explícitamente en el diseño y en la dosificación del sistema. El constructor registra y controla las características del agua y sus contaminantes relevantes, sin comprometer las reacciones puzolánicas ni el desempeño mecánico e hidráulico de la geoestructura.",
            },
            {
              label: "Sello protector no estructural",
              text: "Capa superficial delgada, de carácter no estructural, cuya función es proporcionar textura, hermeticidad superficial, protección frente a agentes climáticos y seguridad de uso mediante condiciones adecuadas de deslizamiento. Corresponde preferentemente a productos desarrollados y suministrados por ECOP AV LE S.A.S., diseñados para no aportar capacidad resistente adicional; cualquier alternativa diferente debe ser expresamente aprobada por el proyectista y por ECOP AV LE S.A.S.",
            },
          ],
        },
        {
          code: "EH.3",
          title: "Método constructivo S-SEIM",
          items: [
            {
              label: "EH.3.1 Diagnóstico del material del territorio",
              text: "Antes de iniciar la construcción de la geoestructura se realiza un diagnóstico del material del territorio (suelo in situ, RCD y/o pasivos acondicionados) que incluye, como mínimo, granulometría, plasticidad, humedad natural y observación de materia orgánica o contaminantes evidentes.",
            },
            {
              label: "EH.3.2 Dosificación de ECOHYBRIDPAVLE®",
              text: "La dosificación (formulación con fibras integradas) se define en función del tipo de material del territorio, del nivel de servicio de la vía y de los criterios de desempeño adoptados, expresada en kg de producto por metro cúbico de material mezclado, conforme a los diseños de laboratorio y estudios aprobados para cada proyecto.",
            },
            {
              label: "EH.3.3 Mezclado, conformación y compactación por capas",
              text: "El mezclado debe producir una masa homogénea, con humedad óptima y sin segregaciones visibles, que se extiende y conforma en capas sucesivas hasta alcanzar el espesor de diseño, de acuerdo con el método S-SEIM. Cada capa se compacta hasta el grado especificado, verificando la densidad mediante ensayos de campo habituales para obras viales.",
            },
            {
              label: "EH.3.4 Curado y liberación por tramos",
              text: "La geoestructura se somete a un periodo de curado de 72 horas, durante el cual se permite el tránsito controlado de vehículos sobre la superficie, siempre que no se realicen giros de llantas sobre la geoestructura. Durante este periodo se controla la humedad según el plan de obra y la liberación por tramos se hace una vez verificadas las condiciones mínimas de resistencia y apariencia superficial.",
            },
            {
              label: "EH.3.5 Aplicación del sello protector no estructural",
              text: "Cumplido el curado y verificadas las condiciones de la superficie, se aplica el sello protector no estructural definido en el proyecto, cuya función es aportar textura, hermeticidad y condiciones de seguridad de uso, sin modificar la función resistente de la geoestructura.",
            },
          ],
        },
        {
          code: "EH.4",
          title: "Criterios de diseño y desempeño",
          items: [
            {
              label: "EH.4.1 Resistencia mecánica",
              text: "El diseño debe garantizar que la resistencia a la compresión inconfinada de la mezcla suelo/RCD/pasivo + ECOHYBRIDPAVLE® a 7 días sea, como mínimo, un múltiplo de la resistencia del material natural compactado, en condiciones secas y después de exposición al agua. Los documentos del proyecto establecen los valores objetivo a 7, 14 y 28 días y el criterio de aceptación según el nivel de servicio y el tipo de vía.",
            },
            {
              label: "EH.4.2 Desempeño frente al agua (IRA, RRi, RRc)",
              text: "Para las geoestructuras que trabajen con función estructural se garantiza que la relación entre la resistencia a la compresión en condición saturada (por inmersión y/o capilaridad) y la resistencia en condición seca cumpla un índice de resistencia al agua (IRA) igual o superior al mínimo adoptado en el proyecto. Los porcentajes de resistencia residual después de inmersión (RRi) y de capilaridad (RRc) se determinan en laboratorio según las normas de ensayo adoptadas.",
            },
            {
              label: "EH.4.3 Compactación y densidad",
              text: "La geoestructura debe alcanzar un grado de compactación tal que el límite inferior del intervalo de confianza del porcentaje de compactación del lote no sea inferior al valor mínimo de referencia para capas estabilizadas con productos químicos no tradicionales. La verificación se realiza con ensayos de densidad en campo y de compactación en laboratorio, antes del curado y del desarrollo completo de las reacciones del sistema.",
            },
            {
              label: "EH.4.4 Espesor de la geoestructura",
              text: "El espesor de diseño es definido por ECOP AV LE S.A.S. en los documentos del proyecto, en función del nivel de servicio, el tipo de vía y las condiciones del material del territorio. El espesor medio construido no puede ser inferior al de diseño y los espesores individuales deben cumplir las tolerancias establecidas para capas estructurales.",
            },
          ],
        },
        {
          code: "EH.5",
          title: "Control de calidad y aceptación",
          items: [
            {
              label: "EH.5.1 Control de compactación",
              text: "Se realiza mediante ensayos de densidad en campo y de compactación en laboratorio, empleando métodos habituales en obras viales (por ejemplo, cono y arena o equipos nucleares) sobre muestras representativas. El grado de compactación mínimo aceptable y el tamaño de los lotes de control se definen en los documentos del proyecto.",
            },
            {
              label: "EH.5.2 Control de espesor",
              text: "Los puntos de control se seleccionan de forma coherente con los sitios de verificación de densidad, determinando el espesor real mediante calicatas o métodos equivalentes aprobados. En caso de incumplimiento, el tramo puede ser objeto de corrección o rechazo según se disponga contractualmente.",
            },
            {
              label: "EH.5.3 Control de resistencia y desempeño frente al agua",
              text: "La resistencia a la compresión inconfinada y los indicadores IRA, RRi y RRc se determinan en laboratorio sobre probetas de la mezcla. Adicionalmente se pueden extraer núcleos de espesor completo para verificar, como mínimo, resistencia a compresión y módulo elástico, permeabilidad o coeficiente de filtración, y absorción de agua en núcleos con un procedimiento análogo a ASTM C642.",
            },
            {
              label: "EH.5.4 Control de dosificación y trazabilidad",
              text: "El constructor lleva registro continuo de la dosificación de ECOHYBRIDPAVLE® (kg/m³ de material del territorio), de las fuentes y características del agua utilizada y de las condiciones de operación del método S-SEIM, de manera que se garantice la trazabilidad técnica de cada tramo construido. Estos registros hacen parte del sistema de aseguramiento de la calidad de la obra.",
            },
          ],
        },
        {
          code: "EH.6",
          title: "Aspectos ambientales y remediación de pasivos",
          items: [
            {
              label: "EH.6.1 Uso de materiales del territorio y RCD",
              text: "La geoestructura privilegia el uso de suelo del territorio y, cuando es técnica y ambientalmente conveniente, la integración de RCD previamente acondicionados hasta condición granular apta, reduciendo la necesidad de explotación de canteras y el transporte de materiales externos. El proyecto documenta las fuentes de materiales y las cantidades aprovechadas localmente.",
            },
            {
              label: "EH.6.2 Remediación y acondicionamiento de pasivos",
              text: "La remediación y/o acondicionamiento de pasivos (RCD, pasivos peligrosos y no peligrosos) constituye un servicio independiente de la construcción de la geoestructura, con sus propios procedimientos, permisos, cronograma y costos. Los pasivos remediados se acondicionan hasta lograr un material granular apto, se integran al suelo local y posteriormente se tratan con ECOHYBRIDPAVLE® bajo el método S-SEIM.",
            },
            {
              label: "EH.6.3 Beneficios ambientales y operativos",
              text: "El sistema reduce la huella ambiental del proyecto al minimizar traslados de materiales, favorecer el uso responsable de recursos del territorio y permitir la incorporación de RCD y pasivos remediados cuando aplica. La logística in situ, los menores tiempos de puesta en servicio y el esquema de control basado en densidad, humedad y ensayos habituales optimizan recursos y plazos de ejecución.",
            },
          ],
        },
        {
          code: "EH.7",
          title: "Definiciones",
          items: [
            {
              label: "EH.7.1 Geoestructura ECOHYBRIDPAVLE® + S-SEIM",
              text: "Estructura portante ejecutada in situ mediante la integración fisicoquímica de ECOHYBRIDPAVLE® con el material del territorio, conformada y compactada por capas según el método S-SEIM, que puede actuar simultáneamente como estructura de pavimento y rodadura.",
            },
            {
              label:
                "EH.7.2 S-SEIM (Sistema de Soporte Estructural Integral Multicapas)",
              text: "Método constructivo por capas sucesivas que incluye diagnóstico del material, dosificación de ECOHYBRIDPAVLE®, mezclado, conformación, compactación, curado y aplicación de sello protector no estructural, orientado a obtener una geoestructura microflexible de comportamiento semirrígido no frágil.",
            },
            {
              label: "EH.7.3 Sello protector no estructural",
              text: "Capa superficial delgada aplicada sobre la geoestructura, cuya función es aportar textura, hermeticidad superficial y características antideslizantes, sin tener función resistente dentro de la estructura.",
            },
            {
              label: "EH.7.4 Material del territorio",
              text: "Conjunto de materiales disponibles en el área de influencia del proyecto (suelo in situ, RCD y pasivos previamente acondicionados hasta condición granular apta) que pueden ser integrados a la geoestructura.",
            },
            {
              label: "EH.7.5 Pasivos acondicionados",
              text: "Residuos o pasivos ambientales, peligrosos o no peligrosos según la clasificación aplicable, sometidos a procesos de remediación y acondicionamiento hasta alcanzar un comportamiento granular apto para su integración en la geoestructura.",
            },
          ],
        },
        {
          code: "EH.8",
          title: "Medida y forma de pago",
          items: [
            {
              label: "EH.8.1 Medida de la geoestructura",
              text: "La unidad de medida de la geoestructura es el metro cúbico (m³) de mezcla ECOHYBRIDPAVLE® + material del territorio, colocada, compactada y aprobada según la especificación y los documentos del proyecto. El volumen se determina con base en las secciones de diseño y las longitudes realmente ejecutadas, previa verificación del espesor y ancho dentro de las tolerancias admitidas.",
            },
            {
              label: "EH.8.2 Medida del producto ECOHYBRIDPAVLE®",
              text: "Cuando el contrato establezca el pago separado del producto, la unidad de medida es el kilogramo (kg) de producto incorporado a la mezcla y aceptado en los tramos ejecutados, determinado a partir de la dosificación aprobada (kg/m³) y de los volúmenes efectivamente construidos.",
            },
            {
              label: "EH.8.3 Forma de pago",
              text: "El pago incluye, salvo disposición diferente del contrato, el suministro de ECOHYBRIDPAVLE®, el aprovechamiento y/o acondicionamiento del material del territorio, las operaciones de mezclado, conformación, compactación, curado y aplicación del sello protector no estructural, así como los ensayos y controles de calidad requeridos.",
            },
          ],
        },
        {
          code: "EH.9",
          title: "Referencias normativas y ensayos",
          items: [
            {
              label: "EH.9.1 Referencias normativas",
              text: "Para el diseño y la verificación del desempeño se adoptan como referencia las Especificaciones Generales de Construcción de Carreteras 2022 de INVÍAS, en especial lo relativo a capas tratadas con productos químicos no tradicionales, sin perjuicio de los requisitos adicionales que se definan en el proyecto.",
            },
            {
              label: "EH.9.2 Ensayos mínimos recomendados",
              text: "Se recomienda considerar ensayos de clasificación, compactación, resistencia y desempeño frente al agua, coherentes con las normas INV y demás normas adoptadas en el proyecto (por ejemplo, resistencia a la compresión inconfinada e índice de resistencia al agua para mezclas estabilizadas). Los documentos del proyecto deben listar los ensayos exigibles en laboratorio y campo y su frecuencia mínima según la categoría de la vía y el nivel de servicio esperado.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "biomorf",
    name: "BIOMORF",
    eyebrow: "Tecnología de conversión físico–química",
    title: "De residuo contaminado a material granular inerte",
    summary:
      "Transformamos residuos contaminados con hidrocarburos y solventes en un material granular inerte, estable y seguro, aprovechable dentro de esquemas de economía circular.",
    description:
      "BIOMORF es una tecnología innovadora diseñada para transformar residuos contaminados con hidrocarburos y solventes en un material granular inerte, estable y seguro. Su fundamento se basa en un proceso físico–químico de dos etapas que elimina la peligrosidad del residuo y lo convierte en un recurso aprovechable dentro de esquemas de economía circular. Este sistema responde a la necesidad de reducir pasivos ambientales, minimizar riesgos legales y generar valor económico, social y ambiental.",
    bullets: [
      "Elimina la peligrosidad del residuo contaminado",
      "Neutraliza hidrocarburos y compuestos fenólicos",
      "Producto final inerte, libre de hidrocarburos y humedad",
      "Disposición final controlada o aprovechamiento como insumo",
    ],
    image: "/img/biomorf-crudo.webp",
    imageAlt:
      "Piscina de crudo de petróleo con residuos de hidrocarburos tratados con BIOMORF",
    spec: {
      label: "Cómo funciona",
      title: "Proceso físico–químico de dos etapas",
      reference:
        "BIOMORF · ECOP AV LE S.A.S. · No extraemos recursos, regeneramos territorios",
      blocks: [
        {
          code: "FASE 1",
          title: "Ruptura oleo–molecular controlada",
          paragraphs: [
            "La primera fase consiste en aplicar un agente químico formulado para desactivar y fragmentar los enlaces físico–químicos de la fase oleosa. Este procedimiento neutraliza hidrocarburos, elimina compuestos fenólicos y suprime completamente la capacidad de migración o lixiviación.",
          ],
          image: "/img/biomorf-fase-1.webp",
          imageAlt:
            "Residuo oleoso tratado con el agente químico de ruptura oleo–molecular",
        },
        {
          code: "FASE 2",
          title: "Secado reactivo y estabilización granular",
          paragraphs: [
            "En la segunda fase se incorpora un compuesto sólido de acción química que libera el agua retenida en la matriz del residuo. Este paso genera una reconfiguración estructural de las partículas, dando como resultado un material granular seco, inerte y estable frente a condiciones ambientales externas.",
          ],
          image: "/img/biomorf-fase-2.webp",
          imageAlt:
            "Secado reactivo de la matriz del residuo hasta material granular",
        },
        {
          code: "RESULTADO",
          title: "Material granular inerte y aprovechable",
          paragraphs: [
            "El producto final de BIOMORF es un material granular inerte, libre de hidrocarburos y humedad, con estabilidad físico–química comprobada. Su potencial de contaminación es nulo y cumple con las condiciones para disposición final controlada o para su integración en esquemas de aprovechamiento dentro de la economía circular.",
            "El proceso tiene una duración máxima de semanas y asegura la eliminación de contaminantes libres y de la humedad retenida, obteniendo un producto estable, sólido y ambientalmente seguro.",
          ],
          image: "/img/biomorf-resultado.webp",
          imageAlt:
            "Muestra del material granular inerte obtenido al final del proceso",
        },
      ],
    },
  },
];

/**
 * Sub-líneas de ECOHYBRIDPAVLE®.
 * Reproducen el contenido de las páginas "Litificación para estructuras" y
 * "Ladrillos sostenibles para construcción" de ECOP AV LE S.A.S.
 */
export const innovationSubLines: Innovation[] = [
  {
    slug: "litificacion",
    name: "Litificación para estructuras",
    eyebrow: "ECOHYBRIDPAVLE® · Sub-línea",
    title: "Litificación in situ para estructuras portantes",
    summary:
      "Transformamos suelos in situ y RCD mediante aleación molecular acelerada con micro y macrofibras, creando geoestructuras semirrígidas, microflexibles y dúctiles.",
    description:
      "Somos un sistema y un producto: transformamos suelos in situ y RCD mediante aleación molecular acelerada con micro y macro fibras, creando geoestructuras semirrígidas, microflexibles y dúctiles. Entregamos pavimentos, plataformas, losetas, bloques y adoquines que resisten cargas repetidas con deformación controlada, con sustentabilidad ambiental.",
    bullets: [
      "Pavimentos, plataformas, losetas, bloques y adoquines",
      "Resistencia a cargas repetidas con deformación controlada",
      "Geoestructuras semirrígidas, microflexibles y dúctiles",
      "Sustentabilidad ambiental en todo el proceso",
    ],
    image: "/img/lit-camino.webp",
    imageAlt:
      "Pavimentadora extendiendo la capa de rodadura con el método S-SEIM de ECOHYBRIDPAVLE®",
    parent: { name: "ECOHYBRIDPAVLE®", slug: "ecohybridpavle" },
    spec: {
      label: "La nueva generación de estructuras portantes",
      title: "Litificación in situ para estructuras",
      reference: "ECOHYBRIDPAVLE® · ECOP AV LE S.A.S.",
      blocks: [
        {
          code: "01",
          title: "Método tradicional",
          paragraphs: [
            "El método convencional reemplaza el suelo existente con materiales de cantera transportados desde otras regiones, lo que aumenta los costos, el tráfico pesado y la huella ambiental de la obra.",
          ],
          image: "/img/lit-metodo-tradicional.webp",
          imageAlt: "Estructura construida con el método tradicional",
        },
        {
          code: "02",
          title: "Método S-SEIM ECOHYBRIDPAVLE®",
          paragraphs: [
            "El método S-SEIM aprovecha el suelo del propio terreno y los residuos de construcción y demolición, integrándolos mediante reacción fisicoquímica hasta conformar una geoestructura continua y durable.",
          ],
          image: "/img/lit-metodo-sseim.webp",
          imageAlt:
            "Estructura conformada con el método S-SEIM de ECOHYBRIDPAVLE®",
        },
        {
          code: "03",
          title: "¿Cómo funciona?",
          paragraphs: [
            "El sistema combina tres compuestos especializados: densificante, adhesivo y activador. Estos inducen una reacción físico–química controlada, la cual transforma el suelo tratado en una masa sólida, densa, impermeable y durable.",
          ],
          image: "/img/lit-reaccion.webp",
          imageAlt: "Reacción físico–química del suelo tratado",
        },
        {
          code: "04",
          title: "Encapsulamiento y protección estructural",
          paragraphs: [
            "El proceso genera una barrera de encapsulamiento integral que bloquea el paso de humedad en ambos sentidos, protegiendo la estructura contra:",
          ],
          items: [
            {
              label: "Infiltraciones",
              text: "Bloqueo del paso de agua en ambos sentidos.",
            },
            {
              label: "Secado prematuro",
              text: "Conservación de la humedad necesaria para el curado.",
            },
            {
              label: "Fisuramiento",
              text: "Control de la retracción y de la fisuración superficial.",
            },
            {
              label: "Erosión",
              text: "Protección de la superficie frente al desgaste.",
            },
          ],
          image: "/img/lit-encapsulamiento.webp",
          imageAlt: "Encapsulamiento y protección estructural de la geoestructura",
        },
        {
          code: "05",
          title: "Aplicaciones estructurales de alta exigencia",
          paragraphs: [
            "La geoestructura resultante presenta propiedades mecánicas avanzadas: alta resistencia a compresión y tracción, baja compresibilidad, alta cohesión interna y durabilidad.",
          ],
          image: "/img/lit-estructuras.webp",
          imageAlt: "Aplicación estructural de alta exigencia en obra",
        },
        {
          code: "06",
          title: "Usos",
          items: [
            {
              label: "Infraestructura vial",
              text: "Vías urbanas y rurales.",
            },
            { label: "Fundaciones de carga", text: "" },
            { label: "Plataformas industriales", text: "" },
            { label: "Terraplenes y muros de contención", text: "" },
            {
              label: "Tratamiento de pasivos y residuos ambientales",
              text: "",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "ladrillos-sostenibles",
    name: "Ladrillos sostenibles para construcción",
    eyebrow: "ECOHYBRIDPAVLE® · Sub-línea",
    title: "Ladrillos fabricados con el suelo del territorio",
    summary:
      "Un sistema que permite fabricar ladrillos con suelos locales y residuos, para vivienda rural y proyectos VIS/VIP.",
    description:
      "La construcción de viviendas en zonas rurales enfrenta grandes retos debido al déficit habitacional y la dificultad de acceso a materiales de construcción adecuados. Este sistema, desarrollado bajo la marca registrada ECOHYBRIDPAVLE®, genera un material con alta cohesión, baja compresibilidad, excelente ductilidad y resistencia a la compresión y tracción, además de control de humedad por capilaridad y elevada durabilidad. Todo esto lo convierte en una solución económicamente viable y ambientalmente responsable.",
    bullets: [
      "Autonomía rural: el campesino fabrica sus propios ladrillos",
      "Reducción de costos y del transporte de materiales",
      "Economía circular: aprovecha residuos y recursos locales",
      "Ladrillos térmicos y acústicos",
    ],
    image: "/img/lad-hero.webp",
    imageAlt: "Ladrillos fabricados con la tecnología ECOHYBRIDPAVLE®",
    parent: { name: "ECOHYBRIDPAVLE®", slug: "ecohybridpavle" },
    spec: {
      label: "Cómo funciona",
      title: "Materiales, proceso, beneficios y mercado",
      reference: "ECOHYBRIDPAVLE® · ECOP AV LE S.A.S.",
      blocks: [
        {
          code: "01",
          title: "Materiales y proceso de fabricación",
          paragraphs: [
            "La fabricación de ladrillos con la tecnología ECOHYBRIDPAVLE® se realiza utilizando suelos locales de cualquier tipo, así como diversos residuos: materiales contaminados de explotación minera, excedentes de la industria petrolera, basuras orgánicas e inorgánicas y residuos de construcción, a los cuales se incorporan los aditivos especiales de ECOHYBRIDPAVLE®: densificante, adhesivo y activador.",
            "El proceso inicia con la biorremediación del material si se hace necesario, asegurando su transformación a una condición inerte cuando presenta contaminantes no amigables con el medio ambiente. Posteriormente, el material homogenizado se mezcla con la tecnología ECOHYBRIDPAVLE®, se prensa mecánica o manualmente para dar forma a los ladrillos y, finalmente, se acopian listos para su uso. Todo el proceso se complementa con pruebas de laboratorio, como ensayos de flexión y resistencia, para garantizar la calidad y seguridad del producto final.",
          ],
          image: "/img/lad-fabricacion.webp",
          imageAlt: "Proceso de fabricación de ladrillos en sitio",
        },
        {
          code: "02",
          title: "Beneficios",
          items: [
            {
              label: "Autonomía rural",
              text: "Los campesinos pueden fabricar sus propios ladrillos con el suelo disponible.",
            },
            {
              label: "Reducción de costos y transporte",
              text: "Menos materiales traídos de otras regiones.",
            },
            {
              label: "Inclusión social",
              text: "Facilita el acceso a vivienda digna en zonas apartadas.",
            },
            {
              label: "Economía circular",
              text: "Aprovecha residuos y recursos locales.",
            },
            {
              label: "Desempeño mecánico",
              text: "Resistencia a la compresión, flexión y desgaste.",
            },
            {
              label: "Impermeabilidad y cohesión mejoradas",
              text: "",
            },
            {
              label: "Ladrillos térmicos y acústicos",
              text: "",
            },
          ],
          image: "/img/lad-producto.webp",
          imageAlt: "Ladrillo fabricado con ECOHYBRIDPAVLE®",
        },
        {
          code: "03",
          title: "Aplicaciones",
          items: [
            {
              label: "Muros interiores y exteriores",
              text: "Ladrillo estructural, ladrillo tolete y muro tapia pisada.",
            },
            {
              label: "Viviendas sociales y proyectos VIS/VIP",
              text: "",
            },
            { label: "Edificaciones sostenibles", text: "" },
          ],
        },
        {
          code: "04",
          title: "Mercado",
          items: [
            { label: "Proyectos del Ministerio de Vivienda", text: "" },
            { label: "Constructoras y desarrolladores urbanos", text: "" },
            { label: "Comunidades rurales y urbanas", text: "" },
          ],
        },
      ],
    },
  },
];
