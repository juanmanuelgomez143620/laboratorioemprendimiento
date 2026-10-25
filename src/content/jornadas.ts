import type { JornadaEvent, JornadaGalleryItem, JornadaModel } from "@/types/jornada";

export const jornadaOverview = {
  description:
    "Las jornadas de formación son encuentros presenciales pensados para complementar el recorrido digital del campus. Combinan una explicación breve, una actividad práctica con acompañamiento y recursos para continuar después.",
  modality:
    "Modalidad taller: grupos pequeños, trabajo con ejemplos reales y acompañamiento de docentes y estudiantes de la modalidad TGA. La sede prevista es el Aula-Taller de Simulación Empresarial N.º 17 de la Escuela Normal Superior N.º 9.",
  audience:
    "Emprendedores, comerciantes, personas que buscan iniciar una actividad y público interesado en herramientas de gestión.",
  note:
    "La jornada que se muestra en esta sección es un modelo de demostración. No tiene fecha, inscripción, disertantes ni certificación oficial. Cuando existan acuerdos formalizados, este espacio permitirá publicar jornadas reales con información verificada.",
};

export const modelJornada: JornadaModel = {
  title: "Introducción a herramientas digitales para emprendedores",
  status: "demostración",
  description:
    "Jornada modelo para mostrar cómo se combina una explicación introductoria, una práctica guiada en el Aula-Taller y un conjunto de recursos del campus. Es una demostración de formato, no una actividad agendada.",
  objective:
    "Que cada participante termine el encuentro con una carpeta digital ordenada, un registro básico de ventas en planilla y un enlace o código QR probado para compartir su propuesta.",
  modality: "Taller presencial de demostración, con computadoras del Aula-Taller y teléfonos personales.",
  duration: "Encuentro modelo de 2 horas",
  audience: [
    "Personas con conocimientos digitales básicos.",
    "Emprendedores que registran sus ventas en papeles o mensajes.",
    "Comercios que quieren ordenar información y canales de atención.",
  ],
  before: [
    "Completar el Diagnóstico inicial de mi emprendimiento en el campus.",
    "Traer una lista de tres productos o servicios con sus precios actuales, si ya está en venta.",
    "Traer un teléfono con cámara y, si es posible, la cuenta de correo con la que se accede a sus herramientas.",
    "No traer documentos de identidad, datos bancarios ni información sensible: no son necesarios para la actividad.",
  ],
  agenda: [
    {
      moment: "Bienvenida · 15 minutos",
      title: "Qué vamos a resolver hoy",
      description:
        "Presentación del campus, del Aula-Taller y del objetivo práctico. Cada participante elige una tarea para completar al finalizar.",
    },
    {
      moment: "Actividad 1 · 25 minutos",
      title: "Ordenar la información",
      description:
        "Creación de una estructura mínima de carpetas y definición de nombres claros para comprobantes, fotos y presupuestos.",
    },
    {
      moment: "Actividad 2 · 30 minutos",
      title: "Registrar ventas en una planilla",
      description:
        "Armado de una planilla con fecha, producto, cantidad, precio y total. Uso de una fórmula simple y revisión de errores.",
    },
    {
      moment: "Actividad 3 · 30 minutos",
      title: "Un enlace o QR que funcione",
      description:
        "Preparación de una ficha de producto o catálogo breve y prueba de un enlace o código QR en distintos teléfonos.",
    },
    {
      moment: "Cierre · 20 minutos",
      title: "Próximo paso y recursos",
      description:
        "Cada participante anota una acción para la semana, identifica un recurso del campus para continuar y completa la evaluación de satisfacción modelo.",
    },
  ],
  resources: [
    {
      label: "Guía de organización administrativa básica",
      href: "/biblioteca/guia-organizacion-administrativa",
      description: "Para continuar el orden de carpetas y registros.",
    },
    {
      label: "Plantilla básica de presupuesto",
      href: "/biblioteca/presupuesto-basico",
      description: "Para trasladar las ventas a una planilla mensual.",
    },
    {
      label: "Curso: Herramientas digitales para mi negocio",
      href: "/cursos/herramientas-digitales-para-mi-negocio",
      description: "Para profundizar en planillas, QR, WhatsApp Business e IA responsable.",
    },
    {
      label: "Diagnóstico inicial",
      href: "/herramientas/diagnostico",
      description: "Para identificar las áreas que conviene reforzar antes o después del encuentro.",
    },
  ],
  after: [
    "Completar la lección de planillas del curso de herramientas digitales.",
    "Registrar las ventas de la semana siguiente usando la planilla iniciada.",
    "Probar el enlace o QR con tres personas y anotar qué información faltó.",
    "Revisar el diagnóstico y elegir un recurso de la biblioteca para aplicar.",
  ],
  satisfactionQuestions: [
    "¿Los objetivos de la jornada fueron claros desde el inicio?",
    "¿Las actividades fueron comprensibles y adecuadas a mi nivel de conocimientos?",
    "¿El acompañamiento permitió resolver mis dudas principales?",
    "¿Los recursos entregados son útiles para continuar después del encuentro?",
    "¿Qué cambiarías para una próxima jornada?",
    "¿Qué acción concreta vas a aplicar esta semana?",
  ],
};

/** Se completarán únicamente cuando exista una jornada real, autorizada y con datos verificados. */
export const scheduledJornadas: JornadaEvent[] = [];

/** La galería no publica imágenes sin autorización institucional y de las personas retratadas. */
export const jornadaGallery: JornadaGalleryItem[] = [];

export const possibleTopics = [
  "Costos y precios para pequeños comercios",
  "Identidad visual y catálogo con recursos accesibles",
  "WhatsApp Business y atención de consultas",
  "Organización administrativa y registros básicos",
  "Fotografía de productos con celular",
];
