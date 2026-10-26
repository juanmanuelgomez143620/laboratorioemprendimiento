import type { Course } from "@/types/course";
import { primerEmprendimientoAvanzado } from "./modules/primer-emprendimiento-avanzado";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const miPrimerEmprendimiento: Course = {
  id: "mi-primer-emprendimiento",
  slug: "mi-primer-emprendimiento",
  title: "Mi primer emprendimiento",
  shortTitle: "Primer emprendimiento",
  subtitle: "De la idea validada a un plan de 90 días",
  description:
    "Un recorrido aplicado para convertir una idea en una propuesta concreta, probar la demanda y organizar los primeros 90 días con decisiones basadas en evidencia.",
  longDescription:
    "Este curso te ayuda a pasar de la intuición a un proyecto con criterios de decisión. Vas a revisar qué problema resuelve tu propuesta, quién podría pagar por ella, cómo probar la demanda antes de invertir y cómo estimar la economía de una venta. Al final vas a completar un expediente de validación y un plan de 90 días con hitos, riesgos y puertas de decisión. No hace falta tener un negocio en marcha ni conocimientos administrativos previos.",
  durationMinutes: 157,
  level: "Inicial",
  accent: "azul",
  icon: "lightbulb",
  objectives: [
    "Distinguir una idea entusiasta de una oportunidad con evidencia de demanda.",
    "Diseñar una oferta mínima y una propuesta de valor comprobable.",
    "Elegir un cliente inicial, revisar recursos y estimar la contribución de una venta.",
    "Validar supuestos con entrevistas, preventas y experimentos de bajo costo.",
    "Armar un plan de 90 días con indicadores, riesgos y decisiones de continuar, ajustar o detener.",
  ],
  audience: [
    "Personas que quieren iniciar un emprendimiento y necesitan un método para probar la idea.",
    "Comerciantes y trabajadores independientes que quieren ordenar su propuesta y sus números.",
    "Estudiantes y egresados que desean explorar una idea antes de invertir.",
  ],
  project: {
    title: "Expediente de validación y plan de 90 días",
    description:
      "Un documento de trabajo con el problema, la evidencia reunida, el cliente inicial, la oferta, la economía de una venta, los riesgos y los próximos experimentos.",
    deliverables: [
      "Problema y evidencia disponible.",
      "Cliente inicial y propuesta de valor.",
      "Costo variable y contribución estimada por venta.",
      "Tres experimentos con criterios de éxito y corte.",
      "Plan de 90 días con hitos y puertas de decisión.",
    ],
  },
  modules: [
    {
      id: "modulo-idea",
      title: "La idea y su valor",
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
              text: "Muchas personas esperan tener una idea «original» para empezar. En la práctica, muchos emprendimientos pequeños crecen resolviendo problemas cotidianos: conseguir un repuesto, organizar una compra, preparar una comida que ahorre tiempo, reparar algo, acompañar a otra persona en una tarea. Lo importante no es que nadie haya pensado algo parecido, sino que tu propuesta resuelva bien una necesidad para un grupo de personas al que puedas llegar.",
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
            {
              type: "heading",
              text: "Nivel aplicado · Mapa de supuestos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Toda idea descansa en supuestos. Algunos se refieren a lo que el cliente quiere; otros, a lo que vos podés producir, cobrar o sostener. Antes de invertir, separalos para saber qué estás comprando con cada prueba.",
            },
            {
              type: "table",
              caption: "Cuatro grupos de supuestos que conviene revisar",
              headers: ["Tipo", "Pregunta clave", "Evidencia posible"],
              rows: [
                ["Deseabilidad", "¿El cliente tiene el problema y le importa lo suficiente?", "Entrevistas, observación, preventas."],
                ["Factibilidad", "¿Podés entregar la solución con la calidad prometida?", "Prueba piloto, ficha de proceso, control de calidad."],
                ["Viabilidad", "¿El precio cubre los costos y deja margen?", "Costo unitario, contribución, punto de equilibrio."],
                ["Capacidad", "¿Tenés tiempo, espacio y energía para sostenerlo?", "Agenda real, lista de tareas, prueba de una semana."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Identificá el supuesto que podría romper todo",
              text: "Si un supuesto es falso, ¿el proyecto deja de tener sentido? Ese es tu riesgo fatal. Probablemente sea la primera prueba que debas hacer, aunque no sea la más cómoda.",
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
            {
              type: "heading",
              text: "Nivel aplicado · El alcance también es parte de la propuesta",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Una propuesta clara no solo dice qué incluye: también dice qué no incluye y bajo qué condiciones se entrega. Los límites evitan promesas imposibles y reclamos por expectativas distintas. Completá este cuadro antes de publicar una oferta.",
            },
            {
              type: "table",
              caption: "Definición de una primera versión de la oferta",
              headers: ["Elemento", "Pregunta para completar", "Ejemplo"],
              rows: [
                ["Incluye", "¿Qué recibe exactamente el cliente?", "Vianda, guarnición, cubiertos y entrega en el centro."],
                ["No incluye", "¿Qué debe resolver el cliente por su cuenta?", "Bebida, postre y entrega fuera de la zona."],
                ["Condición", "¿Qué tiene que pasar para cumplir la promesa?", "Pedido confirmado antes de las 9."],
                ["Límite", "¿Cuándo no podés cumplir?", "Feriados, pedidos fuera de horario o más de 20 unidades."],
                ["Prueba", "¿Cómo sabe el cliente que recibirá eso?", "Foto de la vianda, descripción y confirmación escrita."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Una buena oferta se puede explicar en un mensaje",
              text: "Si necesitás tres audios para aclarar qué incluye, probablemente la oferta tenga demasiadas variantes. Reducila para la primera etapa y agregá opciones cuando la operación esté estable.",
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
      title: "Clientes y recursos",
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
            {
              type: "heading",
              text: "Nivel aplicado · Priorizar clientes sin inventar datos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Cuando aparecen varios grupos posibles, no elijas solo por simpatía. Comparalos con criterios que puedas observar o preguntar. Una matriz simple ayuda a ver trade-offs: el grupo más numeroso no siempre es el más accesible ni el que mejor paga.",
            },
            {
              type: "table",
              caption: "Criterios para elegir un cliente inicial",
              headers: ["Criterio", "Pregunta", "Cómo obtener evidencia"],
              rows: [
                ["Dolor", "¿El problema es frecuente, urgente o costoso?", "Relatos de la última vez que ocurrió."],
                ["Acceso", "¿Podés llegar a ese grupo con tus canales actuales?", "Prueba de mensaje, lista de contactos, referidos."],
                ["Pago", "¿Ya gasta en una alternativa o tiene presupuesto?", "Precios de alternativas, compras previas."],
                ["Capacidad", "¿Podés atenderlo con tu tiempo y recursos?", "Agenda, producción máxima, logística."],
                ["Aprendizaje", "¿Te permite aprender algo útil para crecer?", "Variedad de casos y retroalimentación."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "No sumes puntos que no podés sostener",
              text: "Una matriz no reemplaza la conversación con clientes. Usala para ordenar la decisión y anotá de dónde salió cada puntaje. Si un dato es una suposición, marcalo como tal.",
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
      title: "Un plan simple para avanzar",
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
            {
              type: "heading",
              text: "Nivel aplicado · Presupuesto de aprendizaje y agenda",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Validar también cuesta tiempo y dinero. Definí un **presupuesto de aprendizaje** separado de la inversión productiva: una suma máxima que estás dispuesto a gastar en pruebas que pueden fallar. Si el experimento no funciona, no habrás comprometido la operación ni los gastos esenciales.",
            },
            {
              type: "table",
              caption: "Ejemplo de presupuesto para cuatro semanas",
              headers: ["Concepto", "Límite", "Qué se aprende"],
              rows: [
                ["Entrevistas y visitas", "Tiempo, sin gasto directo.", "Problema, alternativas y prioridad."],
                ["Muestra o prototipo", "Costo de una tanda pequeña.", "Calidad, presentación y aceptación."],
                ["Difusión para prueba", "Monto acotado y medible.", "Mensaje, canal y consultas."],
                ["Reserva", "10 a 20 % del presupuesto.", "Imprevistos y ajustes."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Una hora fija vale más que una intención",
              text: "Agendá la revisión semanal como si fuera una reunión con un cliente. Si no tiene día y horario, el plan queda en una hoja y la urgencia ocupa todo el tiempo.",
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
    primerEmprendimientoAvanzado,
  ],
  finalQuiz: {
    title: "Autoevaluación final · Mi primer emprendimiento",
    description:
      "Diez preguntas aplicadas sobre validación, priorización de clientes, economía de una venta y planificación. La aprobación requiere al menos 70 % de respuestas correctas.",
    passingScore: 70,
    questions: [
      {
        id: "p1",
        prompt:
          "¿Cuál de estas señales es la más fuerte para concluir que existe demanda por una vianda?",
        options: [
          { text: "Diez personas dicen que la idea les parece excelente." },
          { text: "Cinco personas dejan una seña para recibir la primera tanda." },
          { text: "Un familiar asegura que compraría todas las semanas." },
          { text: "La publicación tuvo muchas visualizaciones." },
        ],
        correctIndex: 1,
        explanation:
          "La seña es una señal de pago y compromiso. Las opiniones, la intención declarada y las visualizaciones pueden indicar interés, pero no prueban que la persona vaya a pagar.",
      },
      {
        id: "p2",
        prompt: "Antes de lanzar un experimento, ¿qué conviene definir?",
        options: [
          { text: "Solo el presupuesto disponible." },
          { text: "La métrica, el umbral de éxito, el plazo y la decisión que se tomará." },
          { text: "La mayor cantidad posible de preguntas para no olvidar nada." },
          { text: "El resultado que se quiere obtener, para comunicarlo como un hecho." },
        ],
        correctIndex: 1,
        explanation:
          "Un experimento se interpreta con criterios definidos de antemano. Sin métrica, umbral, plazo y decisión, cualquier resultado puede parecer un éxito o una anécdota.",
      },
      {
        id: "p3",
        prompt: "¿Cuál es la mejor pregunta para una entrevista de validación?",
        options: [
          { text: "¿Comprarías mi producto si estuviera disponible?" },
          { text: "¿Te gusta la idea que te estoy mostrando?" },
          { text: "Contame cómo resolviste esta necesidad la última vez." },
          { text: "¿Cuánto creés que debería cobrar?" },
        ],
        correctIndex: 2,
        explanation:
          "Preguntar por un hecho pasado reduce la cortesía y la imaginación. Permite conocer alternativas, costos, esfuerzos y decisiones reales del cliente.",
      },
      {
        id: "p4",
        prompt:
          "Un emprendimiento recibe muchas consultas, pero entrega tarde y acumula reclamos. ¿Cuál es la primera decisión más razonable?",
        options: [
          { text: "Aumentar la publicidad para compensar los reclamos." },
          { text: "Reducir variedad o cupos y ordenar la capacidad antes de promocionar más." },
          { text: "Bajar el precio para que los clientes toleren la demora." },
          { text: "Contratar un local más grande sin revisar el proceso." },
        ],
        correctIndex: 1,
        explanation:
          "Más demanda sobre un proceso que ya falla aumenta el problema. Primero hay que ajustar capacidad, promesa y operación; después se puede volver a crecer.",
      },
      {
        id: "p5",
        prompt:
          "Una vianda se vende a $3.500 y sus costos variables son $2.100. ¿Cuál es su margen de contribución?",
        options: [
          { text: "$1.400" },
          { text: "$2.100" },
          { text: "$3.500" },
          { text: "$5.600" },
        ],
        correctIndex: 0,
        explanation:
          "El margen de contribución es precio menos costos variables: $3.500 − $2.100 = $1.400. Ese monto aporta primero a cubrir los costos fijos.",
      },
      {
        id: "p6",
        prompt:
          "Si los costos fijos son $140.000 y la contribución por vianda es $1.400, ¿cuántas viandas se necesitan para cubrir los costos fijos?",
        options: [
          { text: "70 viandas" },
          { text: "100 viandas" },
          { text: "140 viandas" },
          { text: "196 viandas" },
        ],
        correctIndex: 1,
        explanation:
          "El punto de equilibrio es $140.000 ÷ $1.400 = 100 viandas. Vender menos implica que la contribución no alcanza a cubrir todos los costos fijos.",
      },
      {
        id: "p7",
        prompt:
          "Una venta es rentable, pero el cliente paga a 30 días y los insumos se compran al contado. ¿Qué riesgo aparece?",
        options: [
          { text: "Ninguno, porque la venta ya está confirmada." },
          { text: "Una brecha de caja: hay que financiar la producción mientras llega el cobro." },
          { text: "Un aumento automático del margen de contribución." },
          { text: "Una reducción del costo fijo mensual." },
        ],
        correctIndex: 1,
        explanation:
          "La rentabilidad no garantiza liquidez. Si los pagos salen antes que los cobros, el emprendimiento necesita capital de trabajo o mejores condiciones de cobro.",
      },
      {
        id: "p8",
        prompt: "¿Qué es una puerta de decisión en un plan de 90 días?",
        options: [
          { text: "Una reunión para celebrar los resultados." },
          { text: "Un momento definido con evidencia para decidir si continuar, ajustar o detener." },
          { text: "Una lista de tareas sin fecha." },
          { text: "Un objetivo que se cambia todas las semanas." },
        ],
        correctIndex: 1,
        explanation:
          "La puerta de decisión evita seguir invirtiendo por inercia. Se define antes con qué evidencia se evaluará y qué se hará según el resultado.",
      },
      {
        id: "p9",
        prompt: "¿Para qué sirve hacer un pre-mortem antes de empezar?",
        options: [
          { text: "Para imaginar que el proyecto fracasa y detectar causas que se pueden prevenir." },
          { text: "Para demostrar que el proyecto no puede fallar." },
          { text: "Para reemplazar las conversaciones con clientes." },
          { text: "Para fijar un precio más alto sin revisar costos." },
        ],
        correctIndex: 0,
        explanation:
          "El pre-mortem supone que el proyecto ya falló y ayuda a identificar riesgos, dependencias y señales tempranas. Permite diseñar mitigaciones antes de que el problema ocurra.",
      },
      {
        id: "p10",
        prompt: "¿Cuál es una señal de validación débil o engañosa?",
        options: [
          { text: "Clientes que pagan una seña y reciben la primera versión." },
          { text: "Personas que ya gastan en una alternativa para resolver el problema." },
          { text: "Solo familiares y amigos dicen que comprarían, sin compromiso ni pago." },
          { text: "Una prueba piloto con clientes que no conocen al emprendedor." },
        ],
        correctIndex: 2,
        explanation:
          "El apoyo de personas cercanas puede ser valioso, pero no equivale a demanda. La validación gana fuerza con clientes del segmento, comportamiento real y compromiso o pago.",
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
