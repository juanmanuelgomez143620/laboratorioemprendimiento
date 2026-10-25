import type { DiagnosticArea, DiagnosticQuestion } from "@/types/diagnostic";

export const diagnosticIntro = {
  title: "Diagnóstico inicial de mi emprendimiento",
  description:
    "Diez preguntas para identificar cómo está tu emprendimiento en organización, costos, promoción y herramientas digitales. Al final recibirás un resultado orientativo y recomendaciones concretas del campus.",
};

export const diagnosticAreas: DiagnosticArea[] = [
  {
    id: "organizacion",
    label: "Organización",
    description: "Registros, comprobantes, separación de fondos y seguimiento de la actividad.",
    maxPoints: 0,
  },
  {
    id: "costos",
    label: "Costos y precios",
    description: "Conocimiento del costo unitario, criterio de precios y revisión de la rentabilidad.",
    maxPoints: 0,
  },
  {
    id: "promocion",
    label: "Promoción e identidad",
    description: "Claridad de la propuesta, presentación visual y atención de consultas.",
    maxPoints: 0,
  },
  {
    id: "digital",
    label: "Herramientas digitales",
    description: "Orden de archivos, uso de canales digitales y criterios de seguridad.",
    maxPoints: 0,
  },
];

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "org-registro",
    area: "organizacion",
    prompt: "¿Cómo registrás las ventas y los gastos de tu emprendimiento?",
    help: "Pensá en los últimos dos meses, no en lo que te gustaría hacer.",
    options: [
      { label: "No los registro de forma regular.", points: 0 },
      { label: "Tomo notas sueltas o recuerdo los montos.", points: 1 },
      { label: "Anoto la mayoría en un cuaderno o planilla.", points: 2 },
      { label: "Mantengo un registro ordenado y lo reviso cada semana.", points: 3 },
    ],
  },
  {
    id: "org-fondos",
    area: "organizacion",
    prompt: "¿Cómo manejás el dinero del emprendimiento respecto del dinero personal?",
    options: [
      { label: "Está todo mezclado; uso el mismo dinero para todo.", points: 0 },
      { label: "Intento separar, pero termino usando los fondos sin distinguir.", points: 1 },
      { label: "Tengo una cuenta o caja separada y anoto los movimientos principales.", points: 2 },
      { label: "Tengo fondos separados, registro los movimientos y reviso diferencias.", points: 3 },
    ],
  },
  {
    id: "org-comprobantes",
    area: "organizacion",
    prompt: "¿Qué hacés con los comprobantes de compra y los documentos importantes?",
    options: [
      { label: "Los pierdo o no los guardo.", points: 0 },
      { label: "Los junto en un lugar, pero me cuesta encontrarlos.", points: 1 },
      { label: "Los archivo por fecha o proveedor y puedo encontrarlos.", points: 2 },
      { label: "Los archivo, los respaldo y reviso vencimientos o pendientes.", points: 3 },
    ],
  },
  {
    id: "costos-unitario",
    area: "costos",
    prompt: "¿Sabés cuánto te cuesta producir una unidad o brindar una prestación?",
    options: [
      { label: "No lo calculé.", points: 0 },
      { label: "Tengo una estimación aproximada que no revisé.", points: 1 },
      { label: "Conozco el costo de los insumos principales y lo actualizo a veces.", points: 2 },
      { label: "Calculo el costo unitario completo, incluyendo trabajo, indirectos y mermas.", points: 3 },
    ],
  },
  {
    id: "costos-precio",
    area: "costos",
    prompt: "¿Cómo definís el precio de venta?",
    options: [
      { label: "Lo elijo por intuición o copio el precio de otro negocio.", points: 0 },
      { label: "Sumo un porcentaje fijo sin revisar todos los costos.", points: 1 },
      { label: "Parto del costo y comparo con el mercado.", points: 2 },
      { label: "Combino costo, margen objetivo, comisiones, valor y mercado; documento el criterio.", points: 3 },
    ],
  },
  {
    id: "costos-revision",
    area: "costos",
    prompt: "¿Revisás la rentabilidad y sabés cuánto necesitás vender para cubrir los costos fijos?",
    options: [
      { label: "No conozco la ganancia real ni el punto de equilibrio.", points: 0 },
      { label: "Sé si me queda dinero, pero no calculo la rentabilidad.", points: 1 },
      { label: "Reviso ganancias aproximadas y algunos costos fijos.", points: 2 },
      { label: "Calculo punto de equilibrio, margen y rentabilidad con datos actualizados.", points: 3 },
    ],
  },
  {
    id: "promo-identidad",
    area: "promocion",
    prompt: "¿Tu emprendimiento tiene una identidad y una presentación consistentes?",
    options: [
      { label: "No tengo nombre definido o cada publicación se ve distinta.", points: 0 },
      { label: "Tengo un nombre, pero las piezas y los mensajes cambian mucho.", points: 1 },
      { label: "Tengo nombre, colores o logo y un estilo bastante estable.", points: 2 },
      { label: "Tengo identidad documentada, fotos cuidadas y mensajes coherentes con la promesa.", points: 3 },
    ],
  },
  {
    id: "promo-atencion",
    area: "promocion",
    prompt: "¿Cómo presentás lo que ofrecés y atendés las consultas de clientes?",
    options: [
      { label: "Respondo cuando puedo, sin información de precios o condiciones.", points: 0 },
      { label: "Doy respuestas básicas, pero muchas consultas quedan sin responder.", points: 1 },
      { label: "Tengo un catálogo o una lista de precios y respondo en horarios claros.", points: 2 },
      { label: "Tengo información vigente, condiciones claras, respuestas preparadas y seguimiento de pedidos.", points: 3 },
    ],
  },
  {
    id: "digital-archivos",
    area: "digital",
    prompt: "¿Cómo organizás los archivos y la información digital del emprendimiento?",
    options: [
      { label: "Todo está disperso y no hago copias de seguridad.", points: 0 },
      { label: "Guardo archivos en el celular o en mensajes, sin una estructura clara.", points: 1 },
      { label: "Uso carpetas identificables y tengo alguna copia de lo importante.", points: 2 },
      { label: "Tengo una estructura de carpetas, nombres claros y copias de seguridad periódicas.", points: 3 },
    ],
  },
  {
    id: "digital-herramientas",
    area: "digital",
    prompt: "¿Cómo usás herramientas digitales para vender, comunicar y asistirte en tareas?",
    options: [
      { label: "Casi no las uso o no sé cómo aplicarlas a mi emprendimiento.", points: 0 },
      { label: "Uso mensajería y redes, pero de forma desordenada.", points: 1 },
      { label: "Uso planillas o canales comerciales y algún QR o catálogo digital.", points: 2 },
      { label: "Integro canales y registros, pruebo enlaces, cuido datos y verifico lo que produce la IA.", points: 3 },
    ],
  },
];

export const diagnosticDisclaimer =
  "Este diagnóstico es una herramienta educativa y orientativa. No es una evaluación profesional, no mide solvencia y no constituye un criterio para acceder a créditos, subsidios o beneficios de ningún organismo.";
