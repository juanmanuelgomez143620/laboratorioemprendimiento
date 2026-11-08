/**
 * Rutas formativas diseñadas según los lineamientos y prestaciones de la
 * Dirección de Oficina de Empleo y Proyectos de Wanda. Sirven a la oficina si
 * adhiere a la propuesta y, en cualquier caso, a la escuela y a la comunidad.
 *
 * Son propuestas pedagógicas: no reemplazan requisitos, formularios ni
 * capacitaciones obligatorias de los programas nacionales. Cada referencia
 * (curso, lección, recurso o herramienta) se valida en content.test.ts.
 */

export type RouteStep =
  | { kind: "course"; courseSlug: string; note: string }
  | { kind: "lesson"; courseSlug: string; lessonSlug: string; note: string }
  | { kind: "resource"; resourceSlug: string; note: string }
  | { kind: "tool"; toolId: string; note: string };

export interface EmploymentRoute {
  id: string;
  title: string;
  /** Prestaciones o programas de la oficina con los que se relaciona la ruta. */
  programs: string[];
  audience: string;
  goal: string;
  estimatedHours: string;
  steps: RouteStep[];
  deliverable: string;
  /** Cómo se usa la ruta al acompañar a una persona: en la oficina, en la escuela o por cuenta propia. */
  accompaniment: string;
}

export const employmentRoutes: EmploymentRoute[] = [
  {
    id: "busqueda-de-empleo",
    title: "Ruta 1 · Preparar una búsqueda de empleo",
    programs: [
      "Programa de Inserción Laboral",
      "Puente al empleo",
      "Programa Fomentar Empleo",
      "Seguro por Desempleo",
    ],
    audience:
      "Personas que buscan su primer empleo formal, que quedaron sin trabajo o que quieren reinsertarse.",
    goal: "Llegar a la entrevista con la oficina o con un empleador con un CV claro, una carta breve y la documentación en orden.",
    estimatedHours: "3 a 4 horas, en 2 o 3 encuentros",
    steps: [
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "mercado-laboral-perfil",
        note: "Inventario de habilidades y lectura crítica de avisos.",
      },
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "cv-claro",
        note: "CV maestro honesto y una versión adaptada.",
      },
      {
        kind: "resource",
        resourceSlug: "plantilla-cv-simple",
        note: "Plantilla imprimible para completar a mano o en computadora.",
      },
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "carta-postulacion",
        note: "Carta de presentación breve y específica.",
      },
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "entrevista-laboral",
        note: "Preparación, práctica y seguimiento de entrevistas.",
      },
      {
        kind: "resource",
        resourceSlug: "checklist-documentacion-empleo",
        note: "Documentación habitual para un ingreso laboral.",
      },
    ],
    deliverable: "Carpeta de búsqueda laboral: CV maestro, CV adaptado, carta y registro de postulaciones.",
    accompaniment:
      "En una entrevista de orientación o en un taller escolar, la persona termina con su CV impreso y su registro de postulaciones. Así llega a la Oficina de Empleo o a un empleador con la documentación lista.",
  },
  {
    id: "entrenamiento-para-el-trabajo",
    title: "Ruta 2 · Competencias digitales y laborales básicas",
    programs: ["Acciones de Entrenamiento para el Trabajo", "Plan de Formación Profesional y Continua"],
    audience:
      "Participantes de prácticas o entrenamientos en comercios, oficinas y unidades productivas de la zona.",
    goal: "Fortalecer competencias transversales que piden los puestos administrativos y de atención: orden de la información, planillas y comunicación responsable.",
    estimatedHours: "4 a 5 horas",
    steps: [
      {
        kind: "lesson",
        courseSlug: "herramientas-digitales-para-mi-negocio",
        lessonSlug: "organizacion-digital",
        note: "Carpetas, nombres de archivo y copias de seguridad.",
      },
      {
        kind: "lesson",
        courseSlug: "herramientas-digitales-para-mi-negocio",
        lessonSlug: "planillas-y-aplicaciones",
        note: "Primera planilla con fórmulas simples.",
      },
      {
        kind: "resource",
        resourceSlug: "guia-organizacion-administrativa",
        note: "Rutina administrativa semanal aplicable a cualquier puesto.",
      },
      {
        kind: "lesson",
        courseSlug: "herramientas-digitales-para-mi-negocio",
        lessonSlug: "uso-responsable-de-ia",
        note: "Uso responsable de herramientas digitales e inteligencia artificial.",
      },
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "derechos-seguimiento",
        note: "Derechos laborales básicos: recibo de sueldo, registración y jornada.",
      },
    ],
    deliverable: "Planilla de registro funcionando y carpeta digital ordenada con copia de seguridad.",
    accompaniment:
      "Puede usarse como módulo introductorio antes o durante un entrenamiento laboral, o como taller del Aula-Taller para estudiantes y egresados. La constancia del curso registra la actividad realizada.",
  },
  {
    id: "empleo-independiente",
    title: "Ruta 3 · Del oficio al emprendimiento propio",
    programs: ["Programa de Empleo Independiente", "Programa Fomentar Empleo"],
    audience:
      "Personas que quieren iniciar o formalizar una actividad por cuenta propia y necesitan ordenar su idea antes de presentar un proyecto.",
    goal: "Pasar de una idea a un plan de una página con costos, precio y caja estimados, como insumo para la formulación del proyecto con la oficina.",
    estimatedHours: "8 a 10 horas, en 4 encuentros",
    steps: [
      {
        kind: "tool",
        toolId: "diagnostico-emprendedor",
        note: "Diagnóstico inicial de 10 preguntas para identificar prioridades.",
      },
      {
        kind: "course",
        courseSlug: "mi-primer-emprendimiento",
        note: "Idea, clientes, recursos y plan de 90 días.",
      },
      {
        kind: "course",
        courseSlug: "costos-y-precios",
        note: "Costos fijos y variables, costo unitario, precio y caja.",
      },
      {
        kind: "resource",
        resourceSlug: "ficha-de-costos",
        note: "Ficha descargable para calcular el costo de un producto o servicio.",
      },
      {
        kind: "resource",
        resourceSlug: "flujo-de-caja-13-semanas",
        note: "Proyección simple de ingresos y egresos.",
      },
      {
        kind: "resource",
        resourceSlug: "plan-de-negocios-simple",
        note: "Modelo imprimible para presentar la idea de forma ordenada.",
      },
    ],
    deliverable: "Plan de una página, ficha de costos y flujo de caja de 13 semanas.",
    accompaniment:
      "La persona llega a la formulación de su proyecto, ante la oficina o en un espacio de tutoría escolar, con números propios y una idea revisada. No reemplaza los formularios ni la evaluación de ningún programa.",
  },
  {
    id: "unidades-productivas",
    title: "Ruta 4 · Gestión y venta para unidades productivas",
    programs: ["Programa Trabajo Autogestionado", "Entramados Productivos Locales"],
    audience:
      "Cooperativas, grupos asociativos y emprendimientos en marcha que necesitan ordenar costos, presentación comercial y canales de venta.",
    goal: "Mejorar la gestión cotidiana y la presentación comercial del grupo con herramientas simples y compartibles.",
    estimatedHours: "6 a 8 horas, en talleres grupales",
    steps: [
      {
        kind: "lesson",
        courseSlug: "costos-y-precios",
        lessonSlug: "costos-fijos-variables",
        note: "Separar costos del grupo y de cada producto.",
      },
      {
        kind: "lesson",
        courseSlug: "costos-y-precios",
        lessonSlug: "precio-rentabilidad",
        note: "Precio de venta, margen y errores frecuentes.",
      },
      {
        kind: "resource",
        resourceSlug: "presupuesto-basico",
        note: "Plantilla de presupuesto para clientes y compradores.",
      },
      {
        kind: "course",
        courseSlug: "mi-marca-y-mi-identidad-comercial",
        note: "Nombre, identidad visual, fotografía y catálogo.",
      },
      {
        kind: "resource",
        resourceSlug: "guia-canales-digitales",
        note: "Elegir y sostener canales de venta digitales.",
      },
      {
        kind: "lesson",
        courseSlug: "herramientas-digitales-para-mi-negocio",
        lessonSlug: "catalogos-qr-whatsapp",
        note: "Catálogo digital, códigos QR y WhatsApp Business.",
      },
    ],
    deliverable: "Catálogo comercial del grupo y planilla de costos por producto.",
    accompaniment:
      "Ofrece contenidos para talleres con cooperativas y grupos asociativos, organizados por la oficina o por la escuela junto con docentes y estudiantes de la modalidad TGA.",
  },
  {
    id: "intercosecha",
    title: "Ruta 5 · Formación en el período de intercosecha",
    programs: ["Intercosecha"],
    audience:
      "Trabajadoras y trabajadores rurales temporarios que quieren aprovechar el receso para formarse o generar un ingreso complementario.",
    goal: "Proponer un recorrido breve, posible desde el celular y sin conexión permanente, que combine herramientas digitales, empleo y emprendimiento.",
    estimatedHours: "4 a 6 horas, a ritmo propio",
    steps: [
      {
        kind: "lesson",
        courseSlug: "herramientas-digitales-para-mi-negocio",
        lessonSlug: "catalogos-qr-whatsapp",
        note: "Uso del celular para ofrecer y organizar trabajos o productos.",
      },
      {
        kind: "lesson",
        courseSlug: "busqueda-de-empleo-y-cv",
        lessonSlug: "cv-claro",
        note: "CV que valore la experiencia rural y los oficios.",
      },
      {
        kind: "lesson",
        courseSlug: "mi-primer-emprendimiento",
        lessonSlug: "de-la-idea-al-emprendimiento",
        note: "Evaluar una idea para un ingreso complementario.",
      },
      {
        kind: "lesson",
        courseSlug: "costos-y-precios",
        lessonSlug: "que-es-un-costo",
        note: "Primeros números para no trabajar a pérdida.",
      },
    ],
    deliverable: "CV actualizado y una idea de ingreso complementario con sus costos básicos.",
    accompaniment:
      "Se puede recorrer en forma autónoma desde el celular, con páginas guardadas para leer sin conexión. Es útil para participantes de zonas rurales, con o sin un encuentro presencial de cierre.",
  },
  {
    id: "formacion-en-oficios",
    title: "Ruta 6 · Complemento para cursos de oficios",
    programs: ["Plan de Formación Profesional y Continua"],
    audience:
      "Personas que realizan o terminaron cursos de oficios (por ejemplo, en la sede local de la Universidad Popular de Misiones) y quieren ofrecer sus servicios.",
    goal: "Sumar a la formación técnica las herramientas para presupuestar, cobrar y darse a conocer.",
    estimatedHours: "4 a 5 horas",
    steps: [
      {
        kind: "lesson",
        courseSlug: "costos-y-precios",
        lessonSlug: "costo-unitario",
        note: "Calcular el costo de un trabajo, incluido el valor de la propia hora.",
      },
      {
        kind: "resource",
        resourceSlug: "presupuesto-basico",
        note: "Presupuesto claro para entregar a cada cliente.",
      },
      {
        kind: "tool",
        toolId: "costoclaro",
        note: "Calculadora externa de costos y rentabilidad.",
      },
      {
        kind: "lesson",
        courseSlug: "mi-marca-y-mi-identidad-comercial",
        lessonSlug: "presentacion-y-fotografia",
        note: "Mostrar trabajos realizados con fotos simples y claras.",
      },
      {
        kind: "resource",
        resourceSlug: "guia-fotografia-celular",
        note: "Guía práctica de fotografía con el celular.",
      },
    ],
    deliverable: "Presupuesto modelo y portfolio básico de trabajos.",
    accompaniment:
      "Complementa los cursos de oficios con contenidos de gestión que la formación técnica no siempre incluye. Puede ofrecerse como cierre de un curso o como jornada abierta en la escuela.",
  },
];
