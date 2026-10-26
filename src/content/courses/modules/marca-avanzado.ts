import type { CourseModule } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const marcaAvanzado: CourseModule = {
  id: "modulo-posicionamiento-reputacion",
  title: "Posicionamiento y reputación",
  description:
    "Cómo elegir un lugar claro frente a las alternativas, sostener la promesa en cada contacto y comunicar con contenido útil y medible.",
  lessons: [
    {
      id: "posicionamiento-marca",
      slug: "posicionamiento-y-promesa",
      title: "Posicionamiento: el lugar que querés ocupar",
      summary:
        "Definir para quién es tu marca, qué promete y por qué deberían elegirla frente a otras opciones reales.",
      estimatedMinutes: 30,
      objectives: [
        "Reconocer la categoría y las alternativas con las que compite tu propuesta.",
        "Redactar una declaración de posicionamiento y una promesa comprobable.",
        "Construir una jerarquía de mensajes con beneficios y pruebas.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Posicionar no es inventar un eslogan ingenioso. Es ocupar un lugar claro en la cabeza de una persona cuando necesita resolver algo. Ese lugar se define por contraste: frente a qué otras opciones te compara, qué beneficio recordás y por qué te cree. Si intentás ser la mejor opción para todos, es probable que nadie recuerde para qué elegirte.",
        },
        {
          type: "heading",
          text: "La categoría y las alternativas reales",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Tu competencia no es solo otra marca parecida. La alternativa del cliente puede ser hacerlo por su cuenta, comprar en el supermercado, pedirle a un familiar, postergar la compra o no hacer nada. Antes de escribir un mensaje, identificá con qué te compara realmente y qué sacrifica la persona al elegirte.",
        },
        {
          type: "table",
          caption: "Preguntas para ubicar la propuesta",
          headers: ["Pregunta", "Qué buscás definir", "Ejemplo"],
          rows: [
            ["¿Para quién es?", "Un grupo con una situación y un momento reconocibles.", "Personas que necesitan un regalo con intención y poco tiempo."],
            ["¿En qué categoría compite?", "El conjunto de opciones que el cliente considera.", "Cerámica utilitaria, regalos personalizados, decoración."],
            ["¿Contra qué alternativa?", "La opción que la persona usaría si no te elige.", "Comprar un objeto genérico en un local o por internet."],
            ["¿Qué beneficio ofrece?", "El cambio concreto que percibe el cliente.", "Un regalo listo para entregar, con historia y presentación."],
            ["¿Por qué creer?", "La prueba que sostiene la promesa.", "Fotos del proceso, materiales, envoltorio, guía de cuidado."],
            ["¿Qué sacrifica?", "El costo o la limitación que acepta el cliente.", "Precio mayor y espera de producción."],
          ],
        },
        {
          type: "heading",
          text: "Una declaración de posicionamiento",
          level: 2,
        },
        {
          type: "quote",
          text: "Para [cliente] que [situación], [marca] es la opción de [categoría] que [beneficio principal], porque [prueba o razón para creer]. A diferencia de [alternativa], [diferencia relevante].",
          source: "Plantilla de trabajo, no un texto para publicar tal cual",
        },
        {
          type: "paragraph",
          text: "La declaración es interna: te ayuda a tomar decisiones de producto, precio, fotos y mensajes. No necesita sonar comercial. Si no podés completar la parte de la prueba, todavía tenés una promesa sin respaldo. Si la diferencia no le importa al cliente, es una diferencia para vos, no para el mercado.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Una promesa no puede depender del mejor día",
          text: "Si prometés entrega en el día, tiene que funcionar también cuando hay pedidos, enfermedad o un proveedor que falla. La promesa debe incluir un límite claro: qué pasa si el pedido llega tarde, qué zona cubre y qué no incluye. La confianza se construye con límites honestos, no con frases absolutas.",
        },
        {
          type: "heading",
          text: "Promesa, prueba y evidencia",
          level: 2,
        },
        {
          type: "table",
          caption: "Cada promesa necesita una prueba visible",
          headers: ["Promesa", "Prueba", "Dónde se muestra"],
          rows: [
            ["Hecho en tandas pequeñas", "Fotos del proceso y fecha de elaboración.", "Catálogo, etiqueta y redes."],
            ["Listo para regalar", "Envoltorio, tarjeta y opción de mensaje.", "Foto del producto terminado y ficha de compra."],
            ["Atención cercana", "Horario real, respuestas claras y seguimiento.", "WhatsApp, confirmación y posventa."],
            ["Materiales duraderos", "Composición, cuidado y garantía explicada.", "Ficha técnica y preguntas frecuentes."],
          ],
        },
        {
          type: "heading",
          text: "La jerarquía de mensajes",
          level: 2,
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Idea central:** una frase que resume el lugar que querés ocupar.",
            "**Tres beneficios:** qué cambia para el cliente en su vida cotidiana.",
            "**Pruebas:** procesos, materiales, personas, garantías o demostraciones.",
            "**Objeciones:** precio, tiempo, envío, desconfianza o falta de información.",
            "**Llamado a la acción:** el siguiente paso concreto, sin ambigüedad.",
          ],
        },
        {
          type: "paragraph",
          text: "El tono también comunica. Una marca cercana no necesita exclamaciones en cada frase; una marca sobria no necesita sonar distante. Definí tres o cuatro rasgos de voz y dos límites: qué palabras no usarías y qué promesas no harías. Por ejemplo: «clara, cálida y precisa; no exageramos ni usamos urgencia falsa».",
        },
        {
          type: "example",
          title: "Ejemplo: cerámica utilitaria para regalos",
          text: "Un taller ficticio de cerámica empieza diciendo «piezas artesanales para todos». Al revisar sus alternativas descubre que compite con regalos genéricos de tienda y con opciones personalizadas por internet. Define un posicionamiento más acotado: «Para personas que necesitan un regalo con intención y poco tiempo, ofrecemos piezas de cerámica hechas en tandas pequeñas, listas para entregar con envoltorio y tarjeta». Su prueba son las fotos del proceso, la guía de cuidado y la posibilidad de elegir un mensaje. El precio es más alto que el de un objeto genérico; lo asume porque el cliente busca una historia y una presentación cuidada. El taller aclara que la producción tarda entre siete y diez días y que no todas las piezas son idénticas.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "activity",
          title: "Actividad práctica · Tu declaración y prueba de mensaje",
          intro:
            "Completá la declaración de posicionamiento y probala con cinco personas que no conozcan tu idea en detalle.",
          steps: [
            "Escribí la categoría y la alternativa principal de tu cliente.",
            "Completá la declaración con cliente, situación, beneficio, prueba y diferencia.",
            "Redactá la idea central en menos de quince palabras.",
            "Elegí tres beneficios y una prueba visible para cada uno.",
            "Mostrá la propuesta a cinco personas y preguntá: ¿para quién es?, ¿qué la hace distinta?, ¿qué no te resulta creíble?",
            "Ajustá una sola cosa por vez y volvé a probar.",
          ],
          closing:
            "Una declaración es útil cuando te ayuda a decir que no a un mensaje, un producto o un cliente que te aleja del lugar elegido.",
        },
      ],
      keyIdeas: [
        "El posicionamiento se define frente a alternativas reales, no en abstracto.",
        "Una promesa necesita una prueba visible y un límite honesto.",
        "La jerarquía de mensajes ordena idea central, beneficios, pruebas, objeciones y acción.",
      ],
      resourceSlugs: ["lista-verificacion-identidad-comercial", "plan-de-negocios-simple"],
      toolIds: ["diagnostico-emprendedor"],
    },
    {
      id: "reputacion-contenido-lanzamiento",
      slug: "reputacion-contenido-y-lanzamiento",
      title: "Reputación, contenido y lanzamiento",
      summary:
        "Convertir la promesa en una experiencia coherente y comunicarla con contenido útil, pruebas reales y métricas de confianza.",
      estimatedMinutes: 32,
      objectives: [
        "Diseñar la experiencia de marca en cada punto de contacto.",
        "Planificar contenido con pilares, formatos y llamados a la acción.",
        "Medir señales de confianza y ajustar el plan de comunicación.",
        "Completar un manual de marca mínimo y un calendario de 30 días.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "La reputación no se construye con una publicación aislada. Se construye en la suma de pequeñas experiencias: la claridad del catálogo, la respuesta a una consulta, el cuidado del envoltorio, el cumplimiento de la fecha y la forma de resolver un error. La comunicación puede atraer a alguien, pero la experiencia decide si vuelve y si recomienda.",
        },
        {
          type: "heading",
          text: "La experiencia como promesa",
          level: 2,
        },
        {
          type: "table",
          caption: "Puntos de contacto donde se prueba la marca",
          headers: ["Momento", "Promesa que se juega", "Evidencia o acción"],
          rows: [
            ["Primer contacto", "Claridad y relevancia.", "Perfil, catálogo o vidriera con propuesta comprensible."],
            ["Consulta", "Cercanía y tiempo de respuesta.", "Horario real, respuestas preparadas y seguimiento."],
            ["Pedido", "Precisión y confianza.", "Confirmación con producto, precio, entrega y datos necesarios."],
            ["Pago", "Transparencia.", "Instrucciones claras, comprobante y condiciones."],
            ["Entrega", "Cumplimiento y cuidado.", "Presentación, puntualidad y verificación del pedido."],
            ["Posventa", "Responsabilidad.", "Instrucciones de uso, agradecimiento y canal de consulta."],
            ["Reclamo", "Respeto y solución.", "Escucha, plazo de respuesta y opción concreta."],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "El momento de la verdad",
          text: "Elegí un momento crítico de tu experiencia y diseñalo en detalle. Puede ser la confirmación del pedido, la entrega o la respuesta a un problema. Un pequeño gesto bien resuelto se recuerda más que diez publicaciones.",
        },
        {
          type: "heading",
          text: "Prueba social sin inventar nada",
          level: 2,
        },
        {
          type: "list",
          items: [
            "Pedí permiso antes de publicar un testimonio, una foto o una conversación.",
            "Mostrá el proceso real: materiales, preparación, control y entrega.",
            "Incluí garantías y condiciones comprensibles, no letra chica.",
            "Usá reseñas verificables y no inventes clientes, cifras ni resultados.",
            "Si un producto tiene límites, explicalos antes de la compra.",
            "Documentá un antes y después solo si representa un resultado real y autorizado.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "La urgencia falsa destruye confianza",
          text: "No uses «últimos lugares» si siempre hay lugares, ni descuentos que vuelven cada semana, ni testimonios inventados. La presión artificial puede conseguir una venta y costar la reputación completa.",
        },
        {
          type: "heading",
          text: "Contenido con propósito",
          level: 2,
        },
        {
          type: "table",
          caption: "Cinco pilares para planificar sin improvisar",
          headers: ["Pilar", "Pregunta que responde", "Formato posible", "Llamado a la acción"],
          rows: [
            ["Confianza", "¿Quiénes son y cómo trabajan?", "Proceso, presentación del taller, equipo.", "Conocer la marca."],
            ["Utilidad", "¿Qué problema cotidiano resuelve?", "Consejos de uso, comparativas, cuidados.", "Guardar o consultar."],
            ["Deseo", "¿Cómo se ve o se siente el resultado?", "Fotos, videos cortos, ambientación real.", "Ver productos."],
            ["Prueba", "¿Por qué deberían creer?", "Testimonios autorizados, garantías, detalles.", "Resolver una duda."],
            ["Oferta", "¿Qué pueden comprar y cómo?", "Catálogo, combinaciones, condiciones.", "Hacer un pedido."],
          ],
        },
        {
          type: "paragraph",
          text: "No necesitás publicar todos los días. Es mejor sostener dos o tres piezas semanales con intención que desaparecer después de una semana intensa. Agrupá la producción: una sesión de fotos, un bloque de redacción y una revisión. Reutilizá el contenido en distintos formatos, pero no repitas el mismo mensaje sin aportar algo nuevo.",
        },
        {
          type: "heading",
          text: "Lanzamiento en tres etapas",
          level: 2,
        },
        {
          type: "table",
          caption: "Un lanzamiento pequeño también necesita preparación",
          headers: ["Etapa", "Acciones", "Señales para observar"],
          rows: [
            ["Antes", "Preparar catálogo, fotos, preguntas frecuentes, stock y respuestas.", "Consultas claras, dudas repetidas, interés de personas cercanas al perfil."],
            ["Durante", "Publicar con constancia, responder rápido y registrar el origen de cada consulta.", "Consultas calificadas, pedidos, tiempos de respuesta."],
            ["Después", "Entregar, pedir devolución, resolver reclamos y documentar aprendizajes.", "Repetición, recomendaciones, reseñas autorizadas, motivos de insatisfacción."],
          ],
        },
        {
          type: "heading",
          text: "Métricas que importan",
          level: 2,
        },
        {
          type: "table",
          caption: "Más allá del alcance",
          headers: ["Métrica", "Qué te dice", "Qué no alcanza a decir"],
          rows: [
            ["Alcance", "Cuántas personas vieron el contenido.", "Si les importó o si comprarían."],
            ["Guardados y compartidos", "Interés o utilidad percibida.", "Si la intención se convierte en consulta."],
            ["Consultas", "Personas que dieron un paso.", "Si están calificadas o solo curiosas."],
            ["Conversión a pedido", "Relación entre consultas y ventas.", "La calidad de la experiencia posterior."],
            ["Repetición", "Clientes que vuelven a comprar.", "El motivo de la repetición."],
            ["Reclamos y devoluciones", "Problemas de promesa o calidad.", "La causa si no se registra el motivo."],
          ],
        },
        {
          type: "example",
          title: "Ejemplo: lanzamiento de un taller de cerámica",
          text: "Un taller ficticio prepara diez piezas para un lanzamiento de dos semanas. Antes publica fotos del proceso, una guía de cuidados y las condiciones de entrega. Abre una lista de reservas con fecha límite y pide una seña para confirmar. Durante el lanzamiento responde consultas con tres mensajes preparados y registra cuántas personas preguntan por precio, plazo y envío. Después de entregar, pide permiso para compartir fotos de las piezas en uso y anota los motivos de consulta. No inventa testimonios ni promete stock inmediato. Al revisar, descubre que la duda más frecuente es el plazo de producción; en el siguiente lanzamiento lo pone en la primera imagen del catálogo.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "activity",
          title: "Entregable · Manual de marca mínimo y plan de 30 días",
          intro:
            "Reuní las decisiones de identidad, posicionamiento, presentación y comunicación en un documento que puedas aplicar sin improvisar.",
          steps: [
            "Escribí la declaración de posicionamiento y la idea central.",
            "Definí tres rasgos de voz y dos límites de comunicación.",
            "Reuní logotipo, colores, tipografías y versiones en una página.",
            "Seleccioná las fotos mínimas: general, detalle, escala o uso y proceso.",
            "Armá la estructura del catálogo con oferta, precios, condiciones y pedido.",
            "Elegí tres pilares de contenido y planificá cuatro semanas.",
            "Definí las métricas que vas a revisar y la fecha de revisión.",
          ],
          closing:
            "El manual no necesita ser extenso. Necesita ser usable: cualquier persona que ayude en el emprendimiento debería entender cómo se comunica la marca.",
        },
        {
          type: "fields",
          title: "Manual de marca mínimo",
          items: [
            { label: "Para quién es la marca y qué situación atiende", lines: 2 },
            { label: "Idea central y promesa comprobable", lines: 3 },
            { label: "Tres diferencias frente a las alternativas", lines: 3 },
            { label: "Rasgos de voz y palabras que evitamos", lines: 3 },
            { label: "Colores, tipografías y versiones del logotipo", lines: 2 },
            { label: "Fotos y piezas mínimas para el catálogo", lines: 3 },
            { label: "Pilares de contenido y frecuencia sostenible", lines: 3 },
            { label: "Métricas y fecha de revisión", lines: 2 },
          ],
        },
        {
          type: "checklist",
          title: "Antes de publicar una campaña o lanzamiento",
          items: [
            "La promesa se entiende en menos de una frase.",
            "La prueba existe y no fue inventada.",
            "El catálogo tiene precios, stock, plazos y condiciones vigentes.",
            "El canal de consultas está activo y tiene un horario real.",
            "Las fotos representan el producto y cuento con autorización si aparece una persona.",
            "No uso urgencia, escasez ni testimonios falsos.",
            "Sé qué métrica voy a mirar y cuándo voy a revisar el resultado.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Alcance de la comunicación",
          text: "Las normas sobre publicidad, protección de datos, derechos de imagen y uso comercial de herramientas cambian según el caso. Esta lección ofrece criterios educativos y no reemplaza asesoramiento legal ni las condiciones de cada plataforma.",
        },
      ],
      keyIdeas: [
        "La reputación se sostiene en cada punto de contacto, no solo en el contenido.",
        "La prueba social debe ser real, autorizada y verificable.",
        "Un plan de contenido sostenible prioriza utilidad, confianza y acción antes que volumen.",
        "Un lanzamiento se mide por consultas calificadas, conversión y repetición, no solo por alcance.",
      ],
      resourceSlugs: [
        "lista-verificacion-identidad-comercial",
        "guia-fotografia-celular",
        "calendario-contenidos-30-dias",
      ],
      toolIds: ["diagnostico-emprendedor"],
    },
  ],
};
