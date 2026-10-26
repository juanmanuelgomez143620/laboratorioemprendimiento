import type { CourseModule } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const primerEmprendimientoAvanzado: CourseModule = {
  id: "modulo-validacion",
  title: "Aplicación y decisiones",
  description:
    "Cómo probar una idea con evidencia, estimar la economía de una venta y avanzar con un plan de 90 días que incluya decisiones de corte.",
  lessons: [
    {
      id: "validacion-evidencias",
      slug: "validacion-y-experimentos",
      title: "Validación real: de la opinión a la evidencia",
      summary:
        "Diseñar entrevistas y experimentos pequeños para comprobar si existe demanda antes de comprometer dinero y tiempo.",
      estimatedMinutes: 30,
      objectives: [
        "Distinguir una opinión entusiasta de una señal real de demanda.",
        "Diseñar entrevistas que indaguen en comportamientos y decisiones pasadas.",
        "Elegir un experimento con hipótesis, métrica, plazo, presupuesto y criterio de corte.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Una idea puede gustar mucho y, aun así, no venderse. La validación no consiste en buscar aplausos: consiste en reducir las dudas que podrían hacerte perder dinero. Cada conversación, prueba o preventa debería ayudarte a responder una pregunta concreta: **¿esta persona tiene un problema lo bastante importante como para cambiar lo que hace hoy y pagar por una solución?**",
        },
        {
          type: "heading",
          text: "La escalera de la evidencia",
          level: 2,
        },
        {
          type: "table",
          caption: "No todas las señales valen lo mismo",
          headers: ["Nivel", "Qué muestra", "Ejemplo", "Fuerza"],
          rows: [
            ["Opinión", "Un comentario amable, sin una decisión detrás.", "«Me parece una buena idea».", "Baja"],
            ["Intención", "Alguien dice que podría comprar en el futuro.", "«Creo que lo compraría».", "Baja o media"],
            ["Comportamiento", "La persona ya dedica tiempo o dinero a resolver el problema.", "Compra una alternativa, cocina de noche, pide ayuda.", "Media"],
            ["Compromiso", "Deja datos, reserva un turno o acepta participar de una prueba.", "Se anota en una lista para el primer lote.", "Alta"],
            ["Pago", "Entrega dinero, aunque sea una seña, por la solución.", "Preventa o primera compra concreta.", "Muy alta"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "La pregunta hipotética engaña",
          text: "«¿Comprarías esto?» obliga a imaginar una situación que todavía no existe y suele producir un sí por cortesía. Preguntá por la última vez que la persona tuvo el problema, qué hizo, cuánto gastó y qué la haría cambiar de proveedor.",
        },
        {
          type: "heading",
          text: "Una entrevista de 20 minutos",
          level: 2,
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Contexto:** contame cómo fue la última vez que tuviste este problema.",
            "**Alternativas:** ¿qué hiciste para resolverlo? ¿Qué otras opciones consideraste?",
            "**Costo real:** además del dinero, ¿qué tiempo, esfuerzo o incomodidad te llevó?",
            "**Fricción:** ¿qué fue lo que más te molestó de esa solución?",
            "**Cambio:** ¿qué tendría que pasar para que cambiaras lo que usás ahora?",
            "**Permiso:** ¿puedo mostrarte una propuesta y pedirte opinión en los próximos días?",
          ],
        },
        {
          type: "table",
          caption: "Cambiá preguntas que buscan aprobación por preguntas sobre hechos",
          headers: ["En lugar de…", "Preguntá por…"],
          rows: [
            ["¿Te gusta mi idea?", "¿Cómo resolviste esta necesidad la última vez?"],
            ["¿Comprarías algo así?", "¿Cuánto pagaste la última vez y por qué elegiste esa opción?"],
            ["¿Cuánto pagarías?", "¿Qué incluía el precio que pagaste? ¿Qué te pareció caro o barato?"],
            ["¿Conocés a alguien que lo necesite?", "¿Quién decide la compra en tu hogar o trabajo y cómo lo hace?"],
          ],
        },
        {
          type: "example",
          title: "Ejemplo: viandas para comercios cercanos",
          text: "Una cocinera ficticia quiere vender viandas a comercios del centro. Entrevista a ocho personas: cinco mencionan que almuerzan tarde y tres ya compran comida por encargo. En lugar de preguntar si comprarían, ofrece una prueba de dos semanas con diez viandas diarias y una seña simbólica. Seis personas aceptan. Durante la prueba registra puntualidad, cantidad y repetición. Al final, decide mantener el servicio solo si al menos cuatro de las seis vuelven a pedir en la segunda semana. La seña no es un ingreso para festejar: es una señal de compromiso y un límite para no producir de más.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "heading",
          text: "Experimentos pequeños, decisiones claras",
          level: 2,
        },
        {
          type: "table",
          caption: "Opciones de bajo costo para probar demanda",
          headers: ["Experimento", "Qué prueba", "Señal a observar", "Costo aproximado"],
          rows: [
            ["5 a 10 entrevistas", "Si el problema es importante y frecuente.", "Patrones repetidos, no opiniones aisladas.", "Tiempo"],
            ["Muestra o prueba corta", "Si el producto cumple la promesa básica.", "Repetición, quejas, ajustes necesarios.", "Insumos de una tanda"],
            ["Lista de espera o reserva", "Si el mensaje atrae al cliente correcto.", "Cantidad de personas que dejan datos reales.", "Bajo"],
            ["Preventa con seña", "Si está dispuesto a pagar antes de recibir.", "Porcentaje que paga sobre los consultados.", "Bajo"],
            ["Piloto de dos semanas", "Si podés sostener la operación y la entrega.", "Cumplimiento, repetición, margen por venta.", "Medio"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Un experimento sin criterio es una anécdota",
          text: "Antes de empezar, escribí qué vas a medir, durante cuánto tiempo, con qué presupuesto y qué resultado te haría avanzar, ajustar o detener. Si no definís el criterio de antemano, cualquier resultado puede parecer un éxito.",
        },
        {
          type: "quote",
          text: "Hipótesis: creo que [cliente] tiene [problema] y pagaría [precio] por [solución]. Lo voy a probar con [experimento] durante [plazo]. Consideraré que hay señal si [métrica] alcanza [umbral]. Si no, [decisión].",
          source: "Ficha breve para diseñar un experimento",
        },
        {
          type: "activity",
          title: "Actividad práctica · Diseñá tu próximo experimento",
          intro:
            "Elegí una sola duda crítica. No intentes validar todo el emprendimiento en una semana.",
          steps: [
            "Escribí una hipótesis con cliente, problema, solución y precio tentativo.",
            "Elegí el experimento más pequeño que pueda darte una señal real.",
            "Definí la métrica, el umbral de éxito, el plazo y el presupuesto máximo.",
            "Anotá de antemano qué harías si el resultado es positivo, dudoso o negativo.",
            "Realizalo con personas que no sean solo familiares o amigos cercanos.",
            "Registrá las respuestas y actualizá tu plan con lo aprendido.",
          ],
          closing:
            "El objetivo no es confirmar la idea: es reducir la incertidumbre con el menor costo posible.",
        },
      ],
      keyIdeas: [
        "El pago y el compromiso son señales más fuertes que la opinión o la intención declarada.",
        "Las entrevistas útiles indagan en hechos pasados, alternativas y costos reales.",
        "Un experimento necesita un criterio de decisión definido antes de empezar.",
      ],
      resourceSlugs: ["plan-de-negocios-simple", "presupuesto-basico"],
      toolIds: ["diagnostico-emprendedor"],
    },
    {
      id: "modelo-negocio-plan-90-dias",
      slug: "modelo-de-negocio-y-plan",
      title: "Modelo de negocio, riesgos y plan de 90 días",
      summary:
        "Integrar cliente, oferta, ingresos, costos y riesgos en un plan de 90 días con hitos y decisiones verificables.",
      estimatedMinutes: 32,
      objectives: [
        "Explicar cómo se genera, se cobra y se sostiene el ingreso del emprendimiento.",
        "Estimar la contribución de una venta y la caja necesaria para operar.",
        "Identificar riesgos críticos y definir puertas de decisión a 30, 60 y 90 días.",
        "Completar un expediente de validación y un plan de acción aplicable.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Un modelo de negocio no es un documento para presentar ante una entidad. Es la explicación de cómo tu emprendimiento crea valor, quién paga por ese valor y qué recursos necesita para sostenerlo. Si no podés contarlo en una servilleta, probablemente todavía tenga demasiadas piezas sin resolver.",
        },
        {
          type: "heading",
          text: "Siete preguntas para describir el modelo",
          level: 2,
        },
        {
          type: "table",
          caption: "La servilleta del modelo de negocio",
          headers: ["Pregunta", "Qué necesitás responder"],
          rows: [
            ["Cliente", "¿Quién paga o decide la compra? ¿Quién usa el producto?"],
            ["Problema", "¿Qué situación concreta intenta resolver y con qué urgencia?"],
            ["Oferta", "¿Qué incluye la primera versión y qué queda fuera?"],
            ["Ingreso", "¿Se cobra por unidad, por servicio, por suscripción o por comisión?"],
            ["Costos variables", "¿Qué gasto aparece con cada venta o cada hora de trabajo?"],
            ["Costos fijos", "¿Qué hay que sostener aunque las ventas bajen?"],
            ["Canal y aliados", "¿Cómo llega al cliente y quién ayuda a producir, entregar o cobrar?"],
          ],
        },
        {
          type: "heading",
          text: "La economía de una venta",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Antes de proyectar muchas ventas, entendé una sola. El **margen de contribución** es lo que queda de cada venta después de pagar los costos variables. Ese dinero aporta primero a cubrir los costos fijos y, cuando los supera, genera resultado. También podés medirlo por hora de trabajo para comparar propuestas que consumen capacidades distintas.",
        },
        {
          type: "quote",
          text: "Margen de contribución = precio de venta − costos variables de esa venta. Contribución por hora = margen de contribución ÷ horas de trabajo o capacidad utilizadas.",
        },
        {
          type: "example",
          title: "Ejemplo: viandas del mediodía",
          text: "Un emprendimiento ficticio vende una vianda a $3.500. Los insumos, el envase y la comisión de cobro suman $2.100, por lo que la contribución es $1.400. Los costos fijos mensuales —alquiler del espacio, servicios y suscripciones— son $140.000. El punto de equilibrio es 100 viandas al mes. Si vende 220, la contribución total es $308.000 y el resultado antes de impuestos y del retiro del emprendedor es $168.000. Antes de festejar, debe revisar si ese resultado alcanza para pagar su trabajo, reponer equipamiento y sostener los meses de menos ventas.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "callout",
          variant: "warning",
          title: "Vender mucho y quedarte sin caja",
          text: "Una venta a 30 días puede ser rentable en el papel y, al mismo tiempo, dejarte sin dinero para comprar la próxima tanda. El modelo debe incluir cuándo entra y cuándo sale el dinero, no solo cuánto ganás por unidad.",
        },
        {
          type: "heading",
          text: "Riesgos que pueden frenar el plan",
          level: 2,
        },
        {
          type: "table",
          caption: "Riesgos frecuentes y una respuesta posible",
          headers: ["Riesgo", "Señal temprana", "Mitigación"],
          rows: [
            ["Demanda insuficiente", "Muchas consultas y pocas compras; clientes que no repiten.", "Entrevistas, preventa y ajuste de oferta o precio."],
            ["Capacidad insuficiente", "Entregas tarde, errores, horas extra todos los días.", "Reducir variedad, reservar cupos o sumar un aliado."],
            ["Caja ajustada", "Saldo bajo antes de cobrar; uso del dinero de insumos.", "Señas, plazos más cortos y una reserva mínima."],
            ["Dependencia de un cliente o proveedor", "Más de la mitad de las ventas o compras en una sola relación.", "Diversificar de a poco y documentar acuerdos."],
            ["Calidad inconsistente", "Reclamos repetidos o devoluciones.", "Ficha de proceso, control antes de entregar y límites claros."],
            ["Cambio normativo o fiscal", "Nuevas exigencias o dudas sobre la actividad.", "Consultar a un profesional y revisar el encuadre."],
          ],
        },
        {
          type: "heading",
          text: "Plan de 90 días con puertas de decisión",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Un plan de 90 días no es una lista de deseos. Es una secuencia de pruebas con fechas y decisiones. Las **puertas de decisión** te obligan a mirar la evidencia antes de seguir invirtiendo. Al final de cada etapa podés continuar, ajustar o detener una línea de acción.",
        },
        {
          type: "table",
          caption: "Un recorrido posible",
          headers: ["Etapa", "Objetivo", "Evidencia a reunir", "Decisión"],
          rows: [
            ["Días 1 a 30", "Confirmar el problema y el cliente inicial.", "Entrevistas, observación, primeras muestras.", "Seguir con el mismo cliente o ajustar el segmento."],
            ["Días 31 a 60", "Probar la oferta y el precio.", "Preventas, pilotos, margen por venta, quejas.", "Mantener, cambiar alcance o revisar el precio."],
            ["Días 61 a 90", "Comprobar repetición y operación.", "Clientes que vuelven, tiempos de entrega, caja.", "Escalar de a poco, corregir el proceso o detener."],
          ],
        },
        {
          type: "heading",
          text: "El tablero mínimo",
          level: 2,
        },
        {
          type: "table",
          headers: ["Indicador", "Cómo lo mirás", "Para qué sirve"],
          rows: [
            ["Ventas y pedidos", "Cantidad y monto por semana.", "Saber si la oferta se mueve."],
            ["Contribución", "Precio menos costos variables.", "Distinguir volumen de rentabilidad."],
            ["Caja disponible", "Dinero real disponible para operar.", "Anticipar faltantes."],
            ["Clientes que repiten", "Pedidos de personas que ya compraron.", "Medir si la experiencia sostiene la demanda."],
            ["Reclamos o errores", "Cantidad y motivo.", "Detectar problemas de calidad o promesa."],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Una revisión semanal de 30 minutos",
          text: "Elegí un día fijo. Mirá ventas, contribución, caja, repetición y reclamos. Escribí una decisión para la semana siguiente. No cambies todo el plan cada lunes: cambiá una cosa por vez y observá el efecto.",
        },
        {
          type: "activity",
          title: "Entregable · Expediente de validación y plan de 90 días",
          intro:
            "Completá este expediente con datos propios. Si un dato no existe, escribí cómo lo vas a obtener. No inventes cifras.",
          steps: [
            "Describí el problema, el cliente inicial y la evidencia que ya reuniste.",
            "Resumí la oferta, el precio tentativo y lo que no incluye.",
            "Calculá el costo variable y la contribución de una venta.",
            "Enumerá los tres supuestos que más podrían cambiar el rumbo.",
            "Diseñá un experimento para cada supuesto crítico.",
            "Definí qué evidencia te haría continuar, ajustar o detener.",
            "Armá el calendario de 90 días con hitos y fechas de revisión.",
          ],
          closing:
            "Guardá el expediente y revisalo cada semana. Al terminar el curso, ese documento es tu punto de partida, no una promesa de resultado.",
        },
        {
          type: "fields",
          title: "Expediente de validación",
          items: [
            { label: "Problema y evidencia disponible", lines: 3 },
            { label: "Cliente inicial y cómo llegar a él", lines: 3 },
            { label: "Oferta, precio y límites", lines: 3 },
            { label: "Costo variable y contribución por venta", lines: 2 },
            { label: "Supuestos críticos y experimentos", lines: 4 },
            { label: "Riesgos principales y mitigación", lines: 3 },
            { label: "Hitos, fechas y puertas de decisión", lines: 4 },
            { label: "Revisión semanal: día y horario", lines: 1 },
          ],
        },
        {
          type: "checklist",
          title: "Antes de empezar los 90 días",
          items: [
            "Puedo explicar quién paga y por qué lo haría.",
            "Sé cuál es el costo variable de una venta.",
            "Tengo un límite de inversión que no compromete gastos básicos.",
            "Definí al menos una señal de compra real, no solo de interés.",
            "Anoté qué haría si el experimento falla.",
            "Reservé un momento semanal para revisar los números.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Alcance del plan",
          text: "Este plan es una herramienta educativa de gestión. No garantiza resultados ni reemplaza asesoramiento contable, legal o financiero. Las obligaciones impositivas y los requisitos de cada actividad deben consultarse según la situación del emprendimiento.",
        },
      ],
      keyIdeas: [
        "El modelo de negocio explica quién paga, por qué, con qué costos y a través de qué canal.",
        "La contribución por venta y la caja permiten decidir mejor que el volumen total de ventas.",
        "Un plan de 90 días incluye evidencia, hitos y decisiones de continuar, ajustar o detener.",
      ],
      resourceSlugs: ["plan-de-negocios-simple", "presupuesto-basico"],
      toolIds: ["diagnostico-emprendedor", "costoclaro"],
    },
  ],
};
