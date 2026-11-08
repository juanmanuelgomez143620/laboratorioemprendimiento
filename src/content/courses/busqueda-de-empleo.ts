import type { Course } from "@/types/course";

export const busquedaDeEmpleo: Course = {
  id: "busqueda-de-empleo-y-cv",
  slug: "busqueda-de-empleo-y-cv",
  title: "Búsqueda de empleo y preparación de CV",
  shortTitle: "Búsqueda de empleo",
  subtitle: "De tu perfil a una postulación clara",
  description:
    "Un recorrido aplicado para ordenar tu perfil, armar un CV honesto, postularte con criterio y preparar una entrevista laboral.",
  longDescription:
    "Este curso te ayuda a transitar una búsqueda de empleo con método. Vas a revisar tu perfil, identificar tus habilidades y experiencias, armar un CV claro, preparar una carta de presentación, postularte con criterio y afrontar una entrevista. También vas a conocer derechos laborales básicos y cómo hacer seguimiento de tus postulaciones. No garantiza un empleo, pero te da herramientas para presentarte mejor y tomar decisiones informadas.",
  durationMinutes: 135,
  level: "Inicial",
  accent: "azul",
  icon: "briefcase",
  objectives: [
    "Identificar tus habilidades, experiencias y fortalezas para el mercado laboral.",
    "Armar un CV claro, honesto y adaptado a cada postulación.",
    "Preparar una carta de presentación y una postulación con criterio.",
    "Afrontar una entrevista laboral con preparación y calma.",
    "Conocer derechos laborales básicos y organizar el seguimiento de postulaciones.",
  ],
  audience: [
    "Personas que buscan su primer empleo formal.",
    "Personas que quieren cambiar de trabajo o reingresar al mercado laboral.",
    "Estudiantes y egresados que necesitan ordenar su perfil profesional.",
  ],
  project: {
    title: "Carpeta de búsqueda laboral",
    description:
      "Un conjunto de documentos de trabajo: CV maestro, versión adaptada, carta de presentación, registro de postulaciones y plan de preparación para entrevistas.",
    deliverables: [
      "CV maestro y una versión adaptada a un puesto real.",
      "Carta de presentación breve y específica.",
      "Registro de postulaciones con fecha y estado.",
      "Lista de preguntas y ejemplos para entrevistas.",
      "Checklist de documentación para ingreso.",
    ],
  },
  modules: [
    {
      id: "modulo-perfil",
      title: "Tu perfil y el mercado laboral",
      description: "Cómo reconocer tus habilidades, experiencias y el tipo de puesto que te conviene.",
      lessons: [
        {
          id: "mercado-laboral-perfil",
          slug: "mercado-laboral-perfil",
          title: "El mercado laboral y tu perfil",
          summary:
            "Antes de postularte, conviene entender qué ofrece el mercado y qué aportás vos, sin subestimarte ni exagerar.",
          estimatedMinutes: 24,
          objectives: [
            "Reconocer las habilidades y experiencias que ya tenés.",
            "Identificar el tipo de puesto y sector que te conviene.",
            "Entender cómo se lee un aviso laboral.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Buscar empleo no es enviar el mismo CV a todos los avisos. Es un proceso de emparejamiento: por un lado está lo que una organización necesita; por el otro, lo que vos sabés hacer, querés hacer y podés sostener. Cuanto más claro tengas tu perfil, más fácil será elegir postulaciones con sentido.",
            },
            {
              type: "heading",
              text: "Habilidades, no solo títulos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Las habilidades incluyen lo que aprendiste en trabajos formales, pero también en tareas domésticas, voluntariado, deportes, cuidado de personas, ventas informales o estudios. Organizarlas te ayuda a no subestimar tu experiencia.",
            },
            {
              type: "table",
              caption: "Tipos de habilidades",
              headers: ["Tipo", "Ejemplos", "Cómo demostrarlas"],
              rows: [
                ["Técnicas", "Manejo de caja, soldadura, diseño, cocina.", "Experiencia, cursos, certificados."],
                ["Digitales", "Planillas, correo, redes, ofimática.", "Prueba práctica o ejemplos."],
                ["Blandas", "Comunicación, trabajo en equipo, puntualidad.", "Referencias y ejemplos concretos."],
                ["De gestión", "Organización, planificación, resolución de problemas.", "Casos de tu experiencia."],
              ],
            },
            {
              type: "activity",
              title: "Actividad práctica · Inventario de habilidades",
              intro: "Hacé una lista sin juzgar si una habilidad es «importante».",
              steps: [
                "Anotá todo lo que sabés hacer, aunque parezca obvio.",
                "Clasificá cada habilidad en técnica, digital, blanda o de gestión.",
                "Marcá cuáles podés demostrar con evidencia (trabajo, curso, referencia).",
                "Elegí las cinco más relevantes para el puesto que buscás.",
              ],
              closing: "Guardá la lista: será la base de tu CV y de tus respuestas en entrevistas.",
            },
            {
              type: "callout",
              variant: "tip",
              title: "Leer un aviso con criterio",
              text: "Separá los requisitos en obligatorios y deseables. No te autoexcluyas por no cumplir un «deseable». Postulate si cumplís los obligatorios y podés demostrar capacidad de aprender el resto.",
            },
          ],
          keyIdeas: [
            "Tu perfil es más amplio que tu último puesto.",
            "Las habilidades se demuestran con ejemplos y evidencia.",
            "Leer bien el aviso evita postulaciones sin sentido.",
          ],
          resourceSlugs: ["guia-cv-laboral"],
        },
        {
          id: "cv-claro",
          slug: "cv-claro",
          title: "Cómo armar un CV claro",
          summary:
            "Un CV claro prioriza la información que ayuda a decidir, con formato simple y datos verificables.",
          estimatedMinutes: 26,
          objectives: [
            "Estructurar un CV con los bloques esenciales.",
            "Escribir experiencias con verbos de acción y resultados.",
            "Adaptar el CV a cada postulación.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "El CV no es una lista de todo lo que hiciste: es una selección ordenada. Quien lo lee busca responder tres preguntas: ¿quién es esta persona?, ¿qué hizo?, ¿sirve para este puesto? Si el CV responde rápido, tiene más chances.",
            },
            {
              type: "heading",
              text: "Escribir experiencias con resultados",
              level: 2,
            },
            {
              type: "paragraph",
              text: "En lugar de listar tareas, describí qué hiciste y qué resultado tuvo. Usá verbos de acción y, cuando puedas, números: cantidades, tiempos, mejoras.",
            },
            {
              type: "table",
              caption: "De tarea a resultado",
              headers: ["Tarea genérica", "Versión con resultado"],
              rows: [
                ["Atención al cliente", "Atendí 40 consultas diarias y resolví reclamos en menos de 24 h."],
                ["Caja", "Manejé caja con arqueo diario sin diferencias durante 6 meses."],
                ["Limpieza", "Mantuve el área de trabajo según checklist de higiene."],
                ["Ventas", "Logré 15 clientes nuevos por mes mediante recomendaciones."],
              ],
            },
            {
              type: "checklist",
              title: "Revisión de calidad",
              items: [
                "Sin errores de ortografía ni datos contradictorios.",
                "Fechas en el mismo formato.",
                "Una o dos páginas como máximo.",
                "Correo profesional y teléfono activo.",
                "Adaptado al puesto al que te postulás.",
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Honestidad",
              text: "No inventes títulos, fechas ni responsabilidades. Muchas organizaciones verifican la información. Un CV honesto vale más que uno inflado que no se sostiene en la entrevista.",
            },
          ],
          keyIdeas: [
            "El CV es una selección, no una autobiografía.",
            "Los resultados concretos pesan más que las tareas genéricas.",
            "Adaptar el CV a cada postulación aumenta las chances.",
          ],
          resourceSlugs: ["plantilla-cv-simple", "guia-cv-laboral"],
        },
      ],
    },
    {
      id: "modulo-postulacion",
      title: "Postulación y entrevista",
      description: "Cómo presentarte, comunicarte y prepararte para una entrevista.",
      lessons: [
        {
          id: "carta-postulacion",
          slug: "carta-postulacion",
          title: "Carta de presentación y postulación",
          summary:
            "Una carta breve y específica complementa el CV y explica por qué te interesa el puesto.",
          estimatedMinutes: 22,
          objectives: [
            "Redactar una carta de presentación clara y breve.",
            "Adaptar el mensaje al puesto y la organización.",
            "Organizar el envío de postulaciones.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "La carta de presentación no repite el CV: lo complementa. En pocas líneas explicás por qué te interesa el puesto, qué aportás y cómo contactarte. Si la oferta no la pide, podés incluirla como texto en el correo o mensaje.",
            },
            {
              type: "heading",
              text: "Estructura de una carta breve",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Saludo formal y mención del puesto.",
                "Una o dos frases sobre tu perfil y por qué te interesa.",
                "Un ejemplo concreto de experiencia relevante.",
                "Cierre con disponibilidad y agradecimiento.",
              ],
            },
            {
              type: "table",
              caption: "Plantilla de carta",
              headers: ["Parte", "Contenido sugerido"],
              rows: [
                ["Apertura", "Estimado/a [nombre o equipo], me postulo al puesto de [puesto]."],
                ["Perfil", "Soy [perfil] con experiencia en [área] y me interesa porque [motivo]."],
                ["Evidencia", "En [experiencia] logré [resultado concreto]."],
                ["Cierre", "Quedo a disposición para una entrevista. Saludos cordiales, [nombre]."],
              ],
            },
            {
              type: "activity",
              title: "Actividad práctica · Tu carta",
              intro: "Escribí una carta para un puesto real o ficticio.",
              steps: [
                "Elegí un puesto y anotá sus requisitos principales.",
                "Redactá la apertura y el perfil en dos frases.",
                "Incluí un ejemplo concreto de experiencia.",
                "Cerrá con disponibilidad y datos de contacto.",
                "Leé la carta en voz alta y acortá lo que suene largo.",
              ],
              closing: "Guardá la carta como plantilla y ajustala para cada postulación.",
            },
            {
              type: "callout",
              variant: "warning",
              title: "Cuidado con copiar y pegar",
              text: "Una carta genérica se nota. Adaptá el nombre de la organización, el puesto y el motivo. Un mensaje personalizado vale más que un texto largo.",
            },
          ],
          keyIdeas: [
            "La carta complementa el CV, no lo repite.",
            "Ser breve y específico es más efectivo que ser extenso.",
            "Adaptar el mensaje a cada postulación marca la diferencia.",
          ],
          resourceSlugs: ["guia-entrevista-laboral"],
        },
        {
          id: "entrevista-laboral",
          slug: "entrevista-laboral",
          title: "Entrevista laboral",
          summary:
            "Prepararte te permite responder con claridad, escuchar y transmitir tu perfil con confianza.",
          estimatedMinutes: 26,
          objectives: [
            "Preparar respuestas y ejemplos concretos.",
            "Manejar preguntas difíciles con honestidad.",
            "Cerrar la entrevista y hacer seguimiento.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Una entrevista es una conversación para verificar el encaje entre tu perfil y el puesto. La preparación reduce la ansiedad y mejora la claridad. No se trata de memorizar respuestas, sino de tener ejemplos y saber qué querés transmitir.",
            },
            {
              type: "heading",
              text: "Método STAR para ejemplos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Para responder preguntas sobre tu experiencia, usá STAR: Situación, Tarea, Acción, Resultado. Así tu respuesta es concreta y fácil de seguir.",
            },
            {
              type: "table",
              caption: "Ejemplo con STAR",
              headers: ["Elemento", "Ejemplo"],
              rows: [
                ["Situación", "En mi anterior trabajo había demoras en la entrega de pedidos."],
                ["Tarea", "Me pidieron ordenar el proceso de preparación."],
                ["Acción", "Hice un checklist y reordené el espacio de trabajo."],
                ["Resultado", "Las entregas pasaron de 2 días a 1 día y bajaron los reclamos."],
              ],
            },
            {
              type: "checklist",
              title: "Antes de la entrevista",
              items: [
                "Investigué la organización y el puesto.",
                "Preparé dos o tres ejemplos con STAR.",
                "Definí qué quiero saber yo (horario, tareas, equipo).",
                "Confirmé fecha, hora y cómo llegar o conectarme.",
                "Tengo copia del CV y los datos de la oferta.",
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Después de la entrevista",
              text: "Anotá las preguntas y tus respuestas. Si no te seleccionan, pedí una devolución con respeto: muchas organizaciones la dan y te ayuda a mejorar.",
            },
          ],
          keyIdeas: [
            "La preparación reduce la ansiedad y mejora la claridad.",
            "Los ejemplos concretos pesan más que las afirmaciones genéricas.",
            "Cerrar la entrevista con preguntas muestra interés y profesionalismo.",
          ],
          resourceSlugs: ["guia-entrevista-laboral"],
        },
      ],
    },
    {
      id: "modulo-derechos-seguimiento",
      title: "Derechos y seguimiento",
      description: "Derechos laborales básicos y organización de la búsqueda.",
      lessons: [
        {
          id: "derechos-seguimiento",
          slug: "derechos-seguimiento",
          title: "Derechos laborales básicos y seguimiento",
          summary:
            "Conocer tus derechos y organizar la búsqueda te ayuda a tomar decisiones informadas y evitar abusos.",
          estimatedMinutes: 22,
          objectives: [
            "Reconocer derechos laborales básicos.",
            "Organizar un registro de postulaciones.",
            "Identificar señales de alerta en ofertas.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Los derechos laborales dependen del país, la provincia y el tipo de relación laboral. Esta lección ofrece una orientación general y no reemplaza asesoramiento legal. Ante dudas específicas, consultá a la oficina de empleo o a un profesional.",
            },
            {
              type: "heading",
              text: "Derechos básicos frecuentes",
              level: 2,
            },
            {
              type: "list",
              items: [
                "Recibir una remuneración acordada y en tiempo.",
                "Jornada laboral definida y descansos.",
                "Condiciones seguras de trabajo.",
                "Registro formal de la relación laboral.",
                "Aportes a la seguridad social cuando corresponda.",
              ],
            },
            {
              type: "heading",
              text: "Señales de alerta",
              level: 2,
            },
            {
              type: "list",
              items: [
                "Te piden dinero para conseguir el empleo.",
                "No te dan información clara sobre tareas y horario.",
                "Te piden trabajar sin registro ni acuerdo escrito.",
                "Te piden datos sensibles por canales no oficiales.",
              ],
            },
            {
              type: "heading",
              text: "Registro de postulaciones",
              level: 2,
            },
            {
              type: "table",
              caption: "Tablero simple de seguimiento",
              headers: ["Empresa", "Puesto", "Fecha", "Estado", "Próximo paso"],
              rows: [
                ["", "", "", "Enviada", "Esperar respuesta"],
                ["", "", "", "Entrevista", "Preparar ejemplos"],
                ["", "", "", "Cerrada", "Pedir devolución"],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Constancia y paciencia",
              text: "Buscar empleo lleva tiempo. Organizar el proceso te ayuda a no perder oportunidades y a mantener la motivación. Revisá tu estrategia cada dos semanas y ajustá lo que no funcione.",
            },
          ],
          keyIdeas: [
            "Conocer derechos básicos te protege de abusos.",
            "Organizar la búsqueda reduce el estrés y las pérdidas.",
            "Las señales de alerta ayudan a evitar estafas y malas condiciones.",
          ],
          resourceSlugs: ["checklist-documentacion-empleo"],
        },
      ],
    },
  ],
  finalQuiz: {
    title: "Autoevaluación final · Búsqueda de empleo y CV",
    description:
      "Diez preguntas aplicadas sobre perfil, CV, postulación, entrevista y derechos laborales. La aprobación requiere al menos 70 % de respuestas correctas.",
    passingScore: 70,
    questions: [
      {
        id: "e1",
        prompt: "¿Cuál es el objetivo principal de un CV?",
        options: [
          { text: "Contar toda tu vida laboral y personal." },
          { text: "Ayudar a decidir si vale la pena entrevistarte." },
          { text: "Demostrar que sos el mejor candidato sin evidencia." },
          { text: "Reemplazar la entrevista." },
        ],
        correctIndex: 1,
        explanation:
          "El CV es una selección ordenada de información para facilitar la decisión de entrevistar. No es una autobiografía ni reemplaza la entrevista.",
      },
      {
        id: "e2",
        prompt: "¿Qué conviene hacer antes de postularte a un aviso?",
        options: [
          { text: "Enviar el mismo CV a todos los avisos." },
          { text: "Leer el aviso y separar requisitos obligatorios y deseables." },
          { text: "Inventar experiencia para cumplir los requisitos." },
          { text: "Esperar a que te contacten." },
        ],
        correctIndex: 1,
        explanation:
          "Leer el aviso permite decidir si tu perfil encaja y adaptar el CV. No conviene enviar el mismo CV a todos ni inventar datos.",
      },
      {
        id: "e3",
        prompt: "¿Cómo es mejor describir una experiencia laboral?",
        options: [
          { text: "Listar todas las tareas sin orden." },
          { text: "Describir tareas y resultados concretos." },
          { text: "Usar solo adjetivos positivos." },
          { text: "Omitir las experiencias breves." },
        ],
        correctIndex: 1,
        explanation:
          "Describir tareas y resultados concretos ayuda a entender qué hiciste y qué aportaste. Las listas genéricas o los adjetivos no aportan evidencia.",
      },
      {
        id: "e4",
        prompt: "¿Qué es una carta de presentación?",
        options: [
          { text: "Una copia del CV con otro formato." },
          { text: "Un texto breve que explica por qué te interesa el puesto y qué aportás." },
          { text: "Un contrato de trabajo." },
          { text: "Una lista de referencias." },
        ],
        correctIndex: 1,
        explanation:
          "La carta complementa el CV explicando motivación y aporte. No repite el CV ni es un contrato.",
      },
      {
        id: "e5",
        prompt: "¿Qué método ayuda a responder preguntas de entrevista con ejemplos?",
        options: [
          { text: "STAR: Situación, Tarea, Acción, Resultado." },
          { text: "Leer el CV en voz alta." },
          { text: "Responder con una sola palabra." },
          { text: "Improvisar sin preparación." },
        ],
        correctIndex: 0,
        explanation:
          "STAR ordena la respuesta en situación, tarea, acción y resultado, haciéndola concreta y fácil de seguir.",
      },
      {
        id: "e6",
        prompt: "¿Qué deberías hacer después de una entrevista?",
        options: [
          { text: "Olvidarla y esperar sin más." },
          { text: "Anotar preguntas y respuestas, y pedir devolución si no te seleccionan." },
          { text: "Enviar mensajes repetidos pidiendo respuesta." },
          { text: "Cambiar todos tus datos personales." },
        ],
        correctIndex: 1,
        explanation:
          "Anotar ayuda a mejorar. Pedir devolución con respeto es válido y útil. Evitá presionar o cambiar datos sin motivo.",
      },
      {
        id: "e7",
        prompt: "¿Cuál es una señal de alerta en una oferta de empleo?",
        options: [
          { text: "Te piden dinero para conseguir el trabajo." },
          { text: "Te explican tareas y horario con claridad." },
          { text: "Te piden el CV en PDF." },
          { text: "Te ofrecen una entrevista." },
        ],
        correctIndex: 0,
        explanation:
          "Pedir dinero para conseguir empleo es una señal de alerta. Las demás opciones son prácticas habituales.",
      },
      {
        id: "e8",
        prompt: "¿Qué conviene incluir en un registro de postulaciones?",
        options: [
          { text: "Solo el nombre de la empresa." },
          { text: "Empresa, puesto, fecha, estado y próximo paso." },
          { text: "Contraseñas de tus cuentas." },
          { text: "Datos bancarios." },
        ],
        correctIndex: 1,
        explanation:
          "Un registro útil incluye empresa, puesto, fecha, estado y próximo paso. No incluyas datos sensibles.",
      },
      {
        id: "e9",
        prompt: "¿Qué es una habilidad blanda?",
        options: [
          { text: "Un software o herramienta digital." },
          { text: "Una competencia como comunicación, trabajo en equipo o puntualidad." },
          { text: "Un título universitario." },
          { text: "Un idioma extranjero." },
        ],
        correctIndex: 1,
        explanation:
          "Las habilidades blandas son competencias interpersonales y de comportamiento, como comunicación y trabajo en equipo.",
      },
      {
        id: "e10",
        prompt: "¿Qué debés hacer si no cumplís un requisito «deseable» de un aviso?",
        options: [
          { text: "No postularte nunca." },
          { text: "Postularte si cumplís los obligatorios y podés demostrar capacidad de aprender." },
          { text: "Inventar experiencia en ese requisito." },
          { text: "Pedir que cambien el aviso." },
        ],
        correctIndex: 1,
        explanation:
          "Los requisitos deseables no son excluyentes. Si cumplís los obligatorios y podés aprender, vale la pena postularse.",
      },
    ],
  },
  resourceSlugs: [
    "guia-cv-laboral",
    "plantilla-cv-simple",
    "guia-entrevista-laboral",
    "checklist-documentacion-empleo",
  ],
  toolIds: ["diagnostico-emprendedor"],
};