import type { Course } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const miPrimerEmprendimiento: Course = {
  id: "mi-primer-emprendimiento",
  slug: "mi-primer-emprendimiento",
  title: "Mi primer emprendimiento",
  shortTitle: "Primer emprendimiento",
  subtitle: "De la idea a un plan que puedas empezar",
  description:
    "Un recorrido inicial para convertir una idea en una propuesta concreta, conocer a tus clientes y organizar los primeros pasos.",
  longDescription:
    "Este curso te ayuda a pasar de la intuición a una primera versión de tu proyecto. Vas a revisar qué problema resuelve tu propuesta, quién podría pagar por ella, qué recursos necesitás y cómo armar un plan simple que puedas revisar cada semana. No hace falta tener un negocio en marcha ni conocimientos administrativos previos.",
  durationMinutes: 95,
  level: "Inicial",
  accent: "azul",
  icon: "lightbulb",
  objectives: [
    "Distinguir una idea entusiasta de una oportunidad que responde a una necesidad concreta.",
    "Describir tu producto o servicio y su propuesta de valor con palabras claras.",
    "Identificar clientes, recursos y aliados para una primera etapa.",
    "Armar un plan de una página con objetivos, costos iniciales y próximos pasos.",
  ],
  audience: [
    "Personas que quieren iniciar un emprendimiento y no saben por dónde empezar.",
    "Comerciantes y trabajadores independientes que necesitan ordenar su propuesta.",
    "Estudiantes y egresados que desean explorar una idea de negocio.",
  ],
  modules: [
    {
      id: "modulo-idea",
      title: "Módulo 1 · La idea y su valor",
      description: "Cómo reconocer un problema real y convertir una idea en una propuesta comprensible.",
      lessons: [
        {
          id: "de-la-idea-al-emprendimiento",
          slug: "de-la-idea-al-emprendimiento",
          title: "De la idea al emprendimiento",
          summary:
            "Una idea se convierte en emprendimiento cuando responde a una necesidad, alguien está dispuesto a pagar y podés sostenerla en el tiempo.",
          estimatedMinutes: 24,
          objectives: [
            "Reconocer la diferencia entre una idea y una oportunidad de emprendimiento.",
            "Usar preguntas simples para validar una idea antes de invertir dinero.",
            "Identificar un primer paso pequeño y verificable.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Emprender no empieza con un local, una página web o un logo. Empieza cuando detectás una necesidad concreta y pensás una forma de resolverla. Esa forma puede ser un producto, un servicio, una mejora en algo que ya existe o una manera distinta de organizar el trabajo. **La idea es el punto de partida; el emprendimiento es el conjunto de decisiones que la ponen en marcha.**",
            },
            {
              type: "paragraph",
              text: "Muchas personas esperan tener una idea «original» para empezar. En la práctica, la mayoría de los emprendimientos pequeños crecen resolviendo problemas cotidianos: conseguir un repuesto, organizar una compra, preparar una comida que ahorre tiempo, reparar algo, acompañar a otra persona en una tarea. Lo importante no es que nadie haya pensado algo parecido, sino que tu propuesta resuelva bien una necesidad para un grupo de personas al que puedas llegar.",
            },
            {
              type: "callout",
              variant: "info",
              title: "Una idea no es todavía un negocio",
              text: "Para que una idea se sostenga necesita al menos tres elementos: una necesidad real, clientes dispuestos a pagar por la solución y una forma de cubrir los costos. Si falta alguno, todavía hay algo para investigar.",
            },
            {
              type: "heading",
              text: "Señales de que estás frente a una oportunidad",
              level: 2,
            },
            {
              type: "list",
              items: [
                "Las personas ya intentan resolver el problema con parches, adaptaciones o soluciones imperfectas.",
                "Pueden explicar con sus propias palabras qué les resulta incómodo o costoso.",
                "Existe una forma de ofrecer la solución a un precio que cubra lo que te cuesta hacerla.",
                "No dependés por completo de una sola persona o de un único cliente.",
                "Podés probar una versión pequeña sin comprometer todos tus ahorros.",
              ],
            },
            {
              type: "heading",
              text: "Antes de invertir, escuchá",
              level: 2,
            },
            {
              type: "paragraph",
              text: "El primer gasto recomendable no es un equipamiento ni una tanda de productos: es tiempo para conversar con posibles clientes. Hablar con cinco o diez personas puede evitar una inversión equivocada. En esas conversaciones no conviene preguntar «¿te gustaría comprar mi producto?», porque muchas personas responden que sí para no incomodar. Es mejor preguntar por experiencias y decisiones reales.",
            },
            {
              type: "table",
              caption: "Preguntas más útiles para validar una idea",
              headers: ["En lugar de preguntar", "Conviene preguntar"],
              rows: [
                ["¿Comprarías esto?", "¿Cómo resolvés hoy esta necesidad?"],
                ["¿Te gusta mi idea?", "¿Qué es lo que más te cuesta de esa tarea?"],
                ["¿Cuánto pagarías?", "¿La última vez cuánto pagaste y por qué elegiste esa opción?"],
                ["¿Crees que funcionaría?", "¿Qué tendría que pasar para que cambies lo que usás ahora?"],
              ],
            },
            {
              type: "example",
              title: "Ejemplo: mandioca lista para cocinar",
              text: "Marta vive en las afueras de Wanda. Observa que muchas familias compran mandioca, pero les resulta incómodo pelarla y fraccionarla después del trabajo. Antes de comprar una selladora industrial, prepara una tanda pequeña de mandioca pelada y refrigerada para diez vecinos a modo de prueba. Conversa sobre conservación, tamaño del paquete y precio. Con esas respuestas ajusta presentación y logística. La primera tanda no busca ganar dinero: busca aprender si el problema es real y si puede sostener el proceso.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Detectá un problema cercano",
              intro:
                "Elegí una necesidad que veas en tu barrio, tu trabajo o tu familia. No pienses todavía en el nombre del emprendimiento.",
              steps: [
                "Escribí el problema en una frase: «A [grupo de personas] les cuesta [tarea o situación] porque [causa]».",
                "Anotá cómo lo resuelven hoy y qué les disgusta de esa solución.",
                "Conversá con al menos tres personas que vivan esa situación. Escuchá sin defender tu idea.",
                "Señalá si encontraste una coincidencia repetida entre las respuestas.",
                "Elegí un experimento pequeño y de bajo costo que puedas realizar esta semana.",
              ],
              closing:
                "Guardá tus notas. En la siguiente lección vas a convertir ese problema en una propuesta de valor.",
            },
          ],
          keyIdeas: [
            "La oportunidad aparece cuando una necesidad se repite y alguien ya paga o dedica esfuerzo a resolverla.",
            "Escuchar antes de invertir reduce riesgos y evita construir algo que nadie necesita.",
            "Un primer experimento pequeño enseña más que un plan perfecto sin contacto con clientes.",
          ],
        },
        {
          id: "producto-servicio-propuesta",
          slug: "producto-servicio-propuesta",
          title: "Producto, servicio y propuesta de valor",
          summary:
            "Definí qué ofrecés, para quién y por qué elegirían tu propuesta antes que otras alternativas.",
          estimatedMinutes: 24,
          objectives: [
            "Diferenciar un producto de un servicio y reconocer propuestas mixtas.",
            "Convertir características en beneficios comprensibles para el cliente.",
            "Redactar una propuesta de valor inicial y revisable.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Un **producto** es algo físico o digital que se entrega: una torta, una remera, una plantilla, una conserva. Un **servicio** es una actividad o experiencia que se realiza para otra persona: arreglar una bicicleta, dictar una clase, gestionar redes, instalar un sistema. Muchos emprendimientos combinan ambos: un taller de costura vende una prenda y también ofrece ajustes.",
            },
            {
              type: "callout",
              variant: "tip",
              title: "Una prueba simple",
              text: "Si el resultado se puede guardar, transportar o volver a usar, probablemente haya un producto. Si se produce y se consume mientras se presta, es un servicio. La distinción ayuda a organizar costos, tiempos y promesas.",
            },
            {
              type: "heading",
              text: "Características y beneficios",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Las características describen lo que hace tu propuesta. Los beneficios explican qué cambia en la vida del cliente. Ambos son útiles, pero el beneficio es lo que la persona recuerda y compara. «Torta de 20 porciones» es una característica. «Rinde para una reunión familiar sin que tengas que encargar dos tortas» es un beneficio.",
            },
            {
              type: "table",
              headers: ["Característica", "Beneficio para el cliente"],
              rows: [
                ["Envío dentro de Wanda el mismo día", "Resolvés el regalo sin salir de casa."],
                ["Materiales resistentes al lavado", "La prenda dura más y requiere menos cuidado."],
                ["Atención por WhatsApp de 8 a 18", "Consultás cuando tenés un rato libre, sin llamar."],
                ["Paquetes de 500 g", "Comprás la cantidad justa para tu familia."],
              ],
            },
            {
              type: "heading",
              text: "La propuesta de valor",
              level: 2,
            },
            {
              type: "paragraph",
              text: "La propuesta de valor resume, en una o dos frases, a quién ayudás, con qué, qué resultado obtiene y en qué se diferencia de las alternativas. No es un eslogan publicitario: es una hipótesis que vas a probar con clientes. Una fórmula útil para empezar es:",
            },
            {
              type: "quote",
              text: "Ayudo a **[grupo de clientes]** a **[resultado concreto]** mediante **[producto o servicio]**, a diferencia de **[alternativa actual]**, porque **[razón creíble]**.",
              source: "Fórmula de trabajo para redactar una propuesta inicial",
            },
            {
              type: "paragraph",
              text: "No necesitás que suene espectacular. Necesitás que sea específica. «Ofrezco viandas saludables para personas que trabajan en el centro y tienen poco tiempo para cocinar» comunica más que «comida rica para todos». Cuanto más amplia es la promesa, más difícil es cumplirla y comunicarla.",
            },
            {
              type: "example",
              title: "Ejemplo: kits de aromáticas para balcones",
              text: "Una egresada de la modalidad TGA imagina un vivero. Al conversar con vecinos descubre que muchos quieren tener plantas aromáticas, pero no saben qué maceta usar ni cómo cuidarlas. En lugar de vender solo plantines, arma un kit con tres aromáticas, sustrato, macetas recicladas y una guía breve con cuidados. Su propuesta no es «vendo plantas», sino «te ayudamos a tener tu primer balcón aromático con todo lo necesario y acompañamiento por mensaje».",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Completá tu propuesta",
              intro:
                "Retomá el problema de la lección anterior y completá la fórmula de propuesta de valor en una hoja.",
              steps: [
                "Escribí el grupo específico de clientes al que querés servir primero.",
                "Describí el resultado o alivio que obtiene esa persona.",
                "Nombrá tu producto o servicio en una frase concreta.",
                "Compará con la alternativa actual del cliente, no con un competidor imaginario.",
                "Ensayá la frase en voz alta y pedile a una persona que te diga si se entiende.",
              ],
              closing:
                "Evitá usar palabras abstractas como «calidad», «excelencia» o «innovación» sin explicar qué significan para el cliente.",
            },
          ],
          keyIdeas: [
            "El cliente compra un resultado o una mejora, no solamente un conjunto de características.",
            "Una propuesta de valor clara nombra un grupo de clientes y un beneficio concreto.",
            "La propuesta se revisa con evidencia, no se defiende como una verdad definitiva.",
          ],
          resourceSlugs: ["plan-de-negocios-simple"],
        },
      ],
    },
    {
      id: "modulo-clientes",
      title: "Módulo 2 · Clientes y recursos",
      description: "Quiénes podrían comprar, cómo llegar a ellos y qué hace falta para sostener la propuesta.",
      lessons: [
        {
          id: "clientes-recursos",
          slug: "clientes-recursos",
          title: "Clientes, recursos y primeras decisiones",
          summary:
            "Definí tu cliente inicial, revisá qué recursos tenés y distinguí lo indispensable de lo deseable.",
          estimatedMinutes: 26,
          objectives: [
            "Reconocer distintos tipos de clientes y elegir un grupo inicial.",
            "Identificar recursos propios, necesarios y aliados posibles.",
            "Estimar una inversión inicial sin comprometer el funcionamiento del hogar.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "«Todos» no es un buen cliente inicial. Aunque muchas personas puedan usar tu producto, necesitás un grupo con características comunes para poder comunicar, entregar y aprender. Un grupo inicial puede ser geográfico (centro de Wanda, barrio, zona rural), de uso (personas que cocinan para llevar, comercios con pocos empleados) o de momento (familias con niños chicos, personas que estudian de noche).",
            },
            {
              type: "heading",
              text: "Conocer al cliente sin inventarlo",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Un perfil de cliente describe hábitos y decisiones, no datos íntimos. Evitá suponer que ya conocés sus gustos por pertenecer a la misma localidad. Algunas preguntas útiles son: ¿dónde compra hoy?, ¿qué le resulta caro o incómodo?, ¿cómo paga?, ¿qué hace si el producto falta?, ¿qué valora más: rapidez, precio, confianza o comodidad?",
            },
            {
              type: "callout",
              variant: "warning",
              title: "Cuidado con las suposiciones",
              text: "«A la gente le va a gustar» no es evidencia. Una conversación, una preventa o una prueba pequeña sí generan información. Validar no es preguntar si tu idea es buena: es observar decisiones y conocer el recorrido habitual del cliente.",
            },
            {
              type: "heading",
              text: "Recursos: empezar con lo necesario",
              level: 2,
            },
            {
              type: "table",
              caption: "Clasificá cada recurso antes de comprarlo",
              headers: ["Tipo", "Pregunta para decidir", "Ejemplo"],
              rows: [
                ["Indispensable hoy", "¿Sin esto no puedo entregar la primera versión?", "Materia prima para una tanda pequeña."],
                ["Deseable", "¿Puede esperar hasta tener ventas?", "Equipo más rápido, local propio, mobiliario."],
                ["Compartido o prestado", "¿Puedo usar lo que ya tengo o acordar con otra persona?", "Balanza, herramienta, espacio, transporte."],
                ["Aliado", "¿Quién ya realiza una parte del trabajo y podría complementar?", "Imprenta, cadete, cooperativa, proveedor local."],
              ],
            },
            {
              type: "paragraph",
              text: "Empezar pequeño no significa quedarse pequeño para siempre. Significa aprender con un riesgo que podés controlar. Si la primera versión funciona, irás incorporando recursos. Si no funciona, habrás gastado menos y conservarás capacidad para corregir.",
            },
            {
              type: "heading",
              text: "Capital de trabajo: el dinero que queda en movimiento",
              level: 2,
            },
            {
              type: "paragraph",
              text: "No todo el dinero inicial se convierte en producto terminado. Necesitás prever dinero para comprar insumos de la siguiente tanda, sostener entregas antes de cobrar y cubrir gastos fijos del mes. Eso es capital de trabajo. Contar con un pequeño colchón evita frenar la actividad por falta de insumos aunque el negocio esté vendiendo.",
            },
            {
              type: "example",
              title: "Ejemplo: taller de arreglos de ropa",
              text: "Una persona quiere ofrecer arreglos de ruedo y cambio de cierres. Cuenta con una máquina familiar, butaca y mesa. Necesita hilos, agujas, cierres y una lámpara. En lugar de alquilar un local, acuerda un espacio en la peluquería de su barrio a cambio de una parte del ingreso y recibe prendas dos veces por semana. Define un primer servicio acotado: ruedos simples con entrega en 72 horas.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Mapa de recursos",
              intro: "Hacé tres columnas: tengo, necesito, puedo conseguir con ayuda.",
              steps: [
                "Listá lo que ya tenés: herramientas, conocimientos, espacio, tiempo, contactos.",
                "Anotá solo lo que realmente necesitás para entregar una primera versión.",
                "Investigá el precio de los insumos indispensables y calculá cuánto dinero usarías.",
                "Definí un límite máximo de inversión que no afecte gastos básicos del hogar.",
                "Identificá un posible aliado y escribí qué le pedirías concretamente.",
              ],
              closing:
                "La actividad se completa cuando podés nombrar el primer gasto, el límite y el aliado. No necesitás tener todo resuelto.",
            },
          ],
          keyIdeas: [
            "Un cliente inicial concreto permite aprender y comunicar mejor.",
            "No todo recurso deseable debe comprarse antes de empezar.",
            "Separar inversión inicial y capital de trabajo evita quedarse sin insumos.",
          ],
          resourceSlugs: ["presupuesto-basico"],
          toolIds: ["diagnostico-emprendedor"],
        },
      ],
    },
    {
      id: "modulo-plan",
      title: "Módulo 3 · Un plan simple para avanzar",
      description: "Cómo convertir tus decisiones en objetivos y próximos pasos medibles.",
      lessons: [
        {
          id: "plan-de-una-pagina",
          slug: "plan-de-una-pagina",
          title: "Tu plan de una página",
          summary:
            "Un plan útil no es un documento extenso: es una guía breve que se revisa y se ajusta con la realidad.",
          estimatedMinutes: 21,
          objectives: [
            "Armar un plan de una página con los componentes esenciales.",
            "Definir un objetivo alcanzable y un indicador simple.",
            "Revisar el avance semanalmente y decidir el próximo paso.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Un plan de negocios puede ser muy extenso, pero en una primera etapa necesitás algo más práctico: una página que te permita ordenar decisiones y no olvidarlas. El plan no demuestra que tu emprendimiento vaya a funcionar; te ayuda a poner a prueba lo que suponés. Por eso debe ser corto, concreto y revisable.",
            },
            {
              type: "heading",
              text: "Los siete bloques del plan de una página",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Problema y oportunidad:** qué necesidad concreta detectaste y qué evidencia tenés.",
                "**Clientes iniciales:** a quiénes vas a servir primero y cómo llegarás a ellos.",
                "**Propuesta de valor:** qué ofrecés, qué resultado genera y por qué te elegirían.",
                "**Oferta y precio:** qué incluye tu primera versión y cuánto cuesta.",
                "**Recursos e inversión:** qué tenés, qué necesitás y cuál es tu límite de gasto.",
                "**Objetivo de 90 días:** un resultado medible, no una intención vaga.",
                "**Próximos tres pasos:** tareas pequeñas, con responsable y fecha.",
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Un objetivo medible",
              text: "«Quiero vender más» no se puede verificar. «Quiero vender 40 viandas en cuatro semanas y mantener al menos 15 clientes que repitan» sí. El objetivo puede ser modesto; lo importante es que te permita decidir si el camino funciona.",
            },
            {
              type: "heading",
              text: "Revisión semanal en quince minutos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Elegí un día y horario fijo para revisar tu plan. Mirá tres datos: qué vendiste, qué gastaste y qué aprendiste de clientes o proveedores. Luego respondé: ¿qué funcionó?, ¿qué no funcionó?, ¿qué cambio esta semana? No se trata de castigarte por los resultados, sino de tomar decisiones con información. Si una acción no genera aprendizaje ni ventas, es candidata a cambiar.",
            },
            {
              type: "table",
              caption: "Ejemplo de tablero semanal simple",
              headers: ["Indicador", "Cómo lo registro", "Para qué sirve"],
              rows: [
                ["Ventas", "Cantidad y monto total", "Saber si la propuesta se sostiene."],
                ["Clientes nuevos y repetidores", "Anoto nombre o número de pedido", "Distinguir interés inicial de fidelidad."],
                ["Gastos de la semana", "Guardo comprobantes en una carpeta", "Evitar que el dinero se mezcle."],
                ["Aprendizajes", "Dos líneas sobre una conversación", "Ajustar oferta o comunicación."],
                ["Próximo paso", "Una tarea concreta con fecha", "Evitar dispersión."],
              ],
            },
            {
              type: "example",
              title: "Ejemplo: plan de una página para viandas",
              text: "Problema: personas del centro tienen poco tiempo para cocinar al mediodía. Clientes iniciales: empleados de tres comercios cercanos. Propuesta: vianda casera de dos opciones, pedida antes de las 9 y entregada entre las 12 y las 13. Precio: un menú simple y uno especial. Inversión límite: el equivalente a dos jornadas de venta. Objetivo de 90 días: 35 viandas semanales y 60 % de pedidos repetidos. Próximos pasos: cocinar una prueba para cinco personas, definir envases, acordar el punto de entrega.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Tu plan de una página",
              intro:
                "Usá una hoja o el modelo descargable de la biblioteca. Escribí los siete bloques con frases breves.",
              steps: [
                "Redactá el problema y una evidencia que tengas.",
                "Definí el cliente inicial con el mayor nivel de detalle posible.",
                "Escribí tu propuesta, oferta y precio tentativo.",
                "Anotá recursos, inversión y un límite claro.",
                "Elegí un objetivo a 90 días y tres pasos para las próximas dos semanas.",
                "Agendá una revisión semanal de quince minutos.",
              ],
              closing:
                "Compartí el plan con una persona de confianza y pedile que señale la parte menos clara. Ese es tu próximo ajuste.",
            },
          ],
          keyIdeas: [
            "El plan es una herramienta para decidir, no un trámite para archivar.",
            "Un objetivo medible y tres pasos concretos valen más que una lista extensa.",
            "Revisar cada semana permite corregir antes de que un error cueste demasiado.",
          ],
          resourceSlugs: ["plan-de-negocios-simple", "presupuesto-basico"],
        },
      ],
    },
  ],
  finalQuiz: {
    title: "Autoevaluación final · Mi primer emprendimiento",
    description:
      "Seis preguntas para revisar las ideas centrales del curso. Podés repetir la evaluación y consultar la explicación de cada respuesta.",
    passingScore: 70,
    questions: [
      {
        id: "p1",
        prompt: "¿Cuál es una buena primera acción antes de invertir en una idea de emprendimiento?",
        options: [
          { text: "Comprar todo el equipamiento para mostrar compromiso." },
          { text: "Conversar con posibles clientes y probar una versión pequeña." },
          { text: "Registrar el nombre antes de saber si existe demanda." },
          { text: "Esperar a tener una idea que nadie haya tenido antes." },
        ],
        correctIndex: 1,
        explanation:
          "Validar con clientes y probar algo pequeño reduce el riesgo. Comprar equipamiento o registrar marcas antes de conocer la demanda puede generar gastos difíciles de recuperar.",
      },
      {
        id: "p2",
        prompt: "¿Qué debe comunicar una propuesta de valor?",
        options: [
          { text: "Que el producto es el más barato del mercado." },
          { text: "Una lista completa de todas las características técnicas." },
          { text: "Qué beneficio concreto obtiene un grupo de clientes y por qué elegir la propuesta." },
          { text: "El nombre y el logo del emprendimiento." },
        ],
        correctIndex: 2,
        explanation:
          "La propuesta de valor conecta una necesidad con un beneficio y una diferencia relevante para el cliente. Las características ayudan, pero por sí solas no explican el valor.",
      },
      {
        id: "p3",
        prompt: "Un cliente inicial bien definido se caracteriza por…",
        options: [
          { text: "Incluir a toda la población posible." },
          { text: "Compartir necesidades o hábitos que permiten comunicar y aprender." },
          { text: "Ser siempre una persona conocida del barrio." },
          { text: "No necesitar información porque el producto es universal." },
        ],
        correctIndex: 1,
        explanation:
          "Un grupo inicial con características comunes permite enfocar el mensaje, la entrega y el aprendizaje. «Todos» es demasiado amplio para una primera etapa.",
      },
      {
        id: "p4",
        prompt: "¿Qué recurso conviene comprar antes de empezar?",
        options: [
          { text: "Todos los recursos deseables, aunque no sean necesarios." },
          { text: "Solo lo indispensable para entregar una primera versión y cumplir una prueba." },
          { text: "Un local propio, para transmitir confianza." },
          { text: "El equipo de mayor tamaño disponible, para no quedarse corto." },
        ],
        correctIndex: 1,
        explanation:
          "La primera inversión debe ser la mínima necesaria para aprender. Los recursos deseables pueden incorporarse cuando hay ventas o evidencia de demanda.",
      },
      {
        id: "p5",
        prompt: "¿Qué es el capital de trabajo?",
        options: [
          { text: "El dinero que se destina únicamente a publicidad." },
          { text: "El dinero que queda en movimiento para insumos, entregas y gastos antes de cobrar." },
          { text: "El total de ventas del último año." },
          { text: "El préstamo que se solicita para comprar un local." },
        ],
        correctIndex: 1,
        explanation:
          "El capital de trabajo sostiene la operación: comprar insumos, producir, entregar y cubrir gastos mientras llegan los cobros. No equivale a la inversión inicial en equipamiento.",
      },
      {
        id: "p6",
        prompt: "¿Qué hace útil a un plan de una página?",
        options: [
          { text: "Que tenga la mayor cantidad de páginas y detalles posible." },
          { text: "Que incluya objetivos medibles, próximos pasos y una rutina de revisión." },
          { text: "Que no cambie nunca, para mantener el rumbo." },
          { text: "Que lo escriba otra persona para que sea objetivo." },
        ],
        correctIndex: 1,
        explanation:
          "El plan sirve cuando orienta decisiones y se revisa con datos. Un objetivo concreto, pasos acotados y revisión periódica permiten corregir el rumbo.",
      },
    ],
  },
  resourceSlugs: [
    "plan-de-negocios-simple",
    "presupuesto-basico",
    "guia-organizacion-administrativa",
  ],
  toolIds: ["diagnostico-emprendedor", "costoclaro"],
};
