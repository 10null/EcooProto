export interface InnovationSpecBlock {
  code: string;
  title: string;
  paragraphs?: string[];
  items?: { label: string; text: string }[];
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
      "/img/innovacion-ecohybrid.webp",
    imageAlt:
      "Superficie de geoestructura de pavimento con muestra de núcleo y equipo de medida",
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
    eyebrow: "Bioingeniería",
    title: "Estabilidad con vegetación integrada",
    summary:
      "Mecanismos y sistemas que permiten estabilidad en taludes, laderas y bordes de vía, integrando vegetación y materiales del territorio.",
    description:
      "BIOMORF reúne nuestros mecanismos y sistemas que permiten estabilidad en taludes, laderas y bordes de vía, integrando vegetación y materiales del territorio. La estructura resuelve la estabilidad y, al mismo tiempo, regenera el ecosistema intervenido.",
    bullets: [
      "Muros de contención con vegetación integrada",
      "Estabilidad de taludes, laderas y bordes de vía",
      "Control de erosión con materiales del territorio",
      "Regeneración del ecosistema intervenido",
    ],
    image:
      "/img/innovacion-biomorf.webp",
    imageAlt:
      "Muro de contención con vegetación integrada estabilizando un talud junto a la vía",
  },
];
