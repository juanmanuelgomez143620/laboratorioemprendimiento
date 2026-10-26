import type { Course } from "@/types/course";
import { costosAvanzado } from "./modules/costos-avanzado";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const costosYPrecios: Course = {
  id: "costos-y-precios",
  slug: "costos-y-precios",
  title: "Costos y precios para emprender",
  shortTitle: "Costos y precios",
  subtitle: "Sabé cuánto te cuesta, cuánto necesitás cobrar y cuándo te falta caja",
  description:
    "Aprendé a ordenar costos, calcular el costo unitario, definir precios con margen, analizar descuentos y anticipar el flujo de caja antes de vender.",
  longDescription:
    "Vender mucho no siempre significa ganar dinero, y ganar en el papel no siempre significa tener caja para seguir operando. Este curso propone un método aplicado para conocer la estructura de costos, calcular el costo unitario, construir precios con margen, evaluar descuentos y canales, y proyectar un flujo de caja de 13 semanas. Incluye ejercicios con números, casos de decisión y una invitación a usar CostoClaro para practicar.",
  durationMinutes: 167,
  level: "Inicial",
  accent: "verde",
  icon: "calculator",
  objectives: [
    "Identificar costos directos, indirectos, fijos, variables y ocultos.",
    "Calcular el costo unitario real y el costo de una hora de trabajo.",
    "Definir precios con margen, punto de equilibrio y margen de seguridad.",
    "Evaluar descuentos, canales y mezcla de productos por contribución y capacidad.",
    "Anticipar brechas de caja con un flujo semanal y decisiones de capital de trabajo.",
    "Armar un tablero de rentabilidad y caja para revisar el rumbo.",
  ],
  audience: [
    "Emprendedores que venden productos o servicios y quieren ordenar sus números.",
    "Personas que fijan precios por intuición o copiando a la competencia.",
    "Comercios pequeños que necesitan revisar la rentabilidad y la caja de lo que venden.",
    "Quienes reciben pedidos grandes o descuentos y necesitan decidir con criterio.",
  ],
  project: {
    title: "Tablero de rentabilidad y caja",
    description:
      "Una herramienta de trabajo con costos, precios, punto de equilibrio, flujo de caja y reglas para decidir qué vender, a qué precio y en qué canal.",
    deliverables: [
      "Ficha de costo unitario y contribución por producto.",
      "Precio con margen y punto de equilibrio.",
      "Flujo de caja de 13 semanas con caja mínima.",
      "Comparación de productos y canales por contribución.",
      "Tres reglas de decisión para descuentos, pedidos y compras.",
    ],
  },
  modules: [
    {
      id: "modulo-costos",
      title: "Entender los costos",
      description: "Qué es un costo, cuáles son sus componentes y por qué conviene registrarlos.",
      lessons: [
        {
          id: "que-es-un-costo",
          slug: "que-es-un-costo",
          title: "Qué es un costo y por qué ordenarlo",
          summary:
            "Un costo es el valor de los recursos que usás para producir y entregar. Conocerlo es la base de cualquier precio sostenible.",
          estimatedMinutes: 25,
          objectives: [
            "Definir costo y diferenciarlo de un gasto personal.",
            "Reconocer los componentes que suelen olvidarse al calcular.",
            "Organizar un registro simple de comprobantes y consumos.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Un **costo** es el valor de los recursos que destinás a producir un bien o prestar un servicio: materias primas, energía, mano de obra, envases, transporte, alquiler, comisiones. Calcular costos no es una tarea contable reservada a especialistas. Es una práctica cotidiana para saber si lo que cobrás alcanza a cubrir lo que usás y si queda algo para sostener y hacer crecer la actividad.",
            },
            {
              type: "paragraph",
              text: "Un error frecuente es confundir el dinero que entra con ganancia. Si un día cobrás $20.000 por una torta y no registraste los $7.000 de ingredientes, los $2.000 de envase, el gas ni tu tiempo, esos $20.000 no son ganancia: son ingresos. La ganancia aparece cuando a los ingresos les restás todos los costos.",
            },
            {
              type: "callout",
              variant: "info",
              title: "Costo, gasto e inversión",
              text: "El costo se asocia a producir o entregar. Un gasto personal es una salida que no pertenece al emprendimiento. Una inversión es una compra que se usará durante varios períodos, como una heladera o una máquina. Mezclar estas tres categorías impide saber si el negocio gana o pierde.",
            },
            {
              type: "heading",
              text: "Componentes que no conviene olvidar",
              level: 2,
            },
            {
              type: "list",
              items: [
                "**Materias primas e insumos:** lo que forma parte del producto o se consume al prestar el servicio.",
                "**Envases y embalaje:** bolsas, cajas, etiquetas, film, etiquetas de envío.",
                "**Mano de obra:** incluso si el trabajo lo hacés vos, tiene un valor que debe estar previsto.",
                "**Servicios del proceso:** gas, electricidad, agua, internet, alquiler del espacio, mantenimiento.",
                "**Comercialización y entrega:** comisiones de plataformas, transporte, publicidad, impresiones.",
                "**Mermas y reprocesos:** producto que se rompe, vence, se contamina o no se puede vender.",
                "**Cargas e impuestos:** según la situación fiscal de cada emprendimiento; conviene consultar y no improvisar.",
              ],
            },
            {
              type: "paragraph",
              text: "El registro no necesita ser complejo. Una planilla con fecha, concepto, monto y comprobante permite reconstruir el mes. Guardar las facturas o tickets en una carpeta física o digital facilita el control de precios de proveedores y la revisión de costos. Si usás una cuenta bancaria o billetera digital para el emprendimiento, separala de tus gastos personales en la medida de lo posible.",
            },
            {
              type: "example",
              title: "Ejemplo: lote de alfajores",
              text: "Un emprendimiento ficticio produce 24 alfajores. Compra harina, azúcar, cacao, dulce y envoltorios por $9.600. Usa el horno de su casa y calcula $1.200 de gas y electricidad. Dedica cuatro horas de trabajo y valoriza su hora en $1.500, por lo que asigna $6.000 de mano de obra. Además, entrega cuatro pedidos en moto y estima $1.200 de combustible. Costo total del lote: $18.000. Si vende los 24 alfajores a $900, obtiene $21.600, pero todavía debe revisar si ese precio cubre otras estructuras y deja margen.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Lista de costos real",
              intro:
                "Elegí un producto o servicio que quieras vender o que ya vendas. No estimes todavía el precio.",
              steps: [
                "Anotá todos los insumos o materiales de una tanda, con precio actual.",
                "Sumá envases, servicios, transporte y comisiones que se usan para esa venta.",
                "Asigná un valor a tu tiempo y a las horas dedicadas.",
                "Identificá los costos que suelen pasar desapercibidos en tu caso.",
                "Guardá los comprobantes de las próximas compras en una carpeta identificada.",
              ],
              closing:
                "Si te falta un dato, escribí una pregunta concreta para resolverlo antes de fijar el precio. No completes con números inventados.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Costo de reposición y costos ocultos",
              level: 2,
            },
            {
              type: "paragraph",
              text: "En un contexto de precios cambiantes, el costo histórico puede quedar viejo rápido. Para decidir el precio de la próxima venta, usá el **costo de reposición**: cuánto te costaría hoy reponer el insumo que consumiste. Si vendés con el precio de compra de hace tres meses, la ganancia puede desaparecer antes de que puedas volver a comprar.",
            },
            {
              type: "table",
              caption: "Costos que suelen quedar fuera de la primera lista",
              headers: ["Costo oculto", "Cómo estimarlo", "Dónde aparece"],
              rows: [
                ["Tiempo propio", "Horas dedicadas × valor de tu hora.", "Producción, atención, administración y entregas."],
                ["Comisiones y medios de pago", "Porcentaje sobre el monto cobrado.", "Cada venta con tarjeta, plataforma o billetera."],
                ["Mermas y rechazos", "Unidades no vendibles, dañadas o devueltas.", "Producción, stock y devoluciones."],
                ["Garantías y reposiciones", "Promedio de casos sobre ventas.", "Posventa y calidad."],
                ["Uso de vehículo o herramientas", "Kilómetros, combustible, mantenimiento o desgaste.", "Entregas y producción."],
                ["Financiamiento", "Intereses, comisiones o descuentos por cobrar tarde.", "Caja y crédito."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Actualizá con una fecha visible",
              text: "Anotá la fecha de cada costo y la fuente del dato. Un costo sin fecha puede parecer actual y estar muy lejos de lo que pagarías hoy. Revisá los insumos críticos antes de cada nueva lista de precios.",
            },
          ],
          keyIdeas: [
            "Los ingresos no son ganancia: la ganancia aparece al restar todos los costos.",
            "El trabajo propio, el packaging, la entrega y las mermas forman parte del costo.",
            "Un registro simple y constante permite revisar decisiones con datos.",
          ],
          resourceSlugs: ["ficha-de-costos"],
        },
        {
          id: "costos-fijos-variables",
          slug: "costos-fijos-variables",
          title: "Costos fijos y variables",
          summary:
            "Distinguir qué costos cambian con las ventas te permite planificar mejor y calcular tu punto de equilibrio.",
          estimatedMinutes: 24,
          objectives: [
            "Clasificar costos fijos y variables según el comportamiento del emprendimiento.",
            "Reconocer costos semivariables o mixtos.",
            "Entender qué ocurre con el costo fijo por unidad cuando cambia la cantidad producida.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Los costos no se comportan todos igual. **Los costos fijos** se mantienen en un rango aunque cambie la cantidad de ventas: el alquiler del espacio, una suscripción mensual, parte del internet, el seguro. **Los costos variables** cambian de manera proporcional con la actividad: materia prima, envases, comisiones por venta y, a veces, horas extras o fletes.",
            },
            {
              type: "table",
              caption: "Cómo clasificar ejemplos frecuentes",
              headers: ["Costo", "Tipo habitual", "Por qué"],
              rows: [
                ["Alquiler del puesto", "Fijo", "Se paga aunque se venda poco o nada."],
                ["Harina para una torta", "Variable", "Se consume según la cantidad producida."],
                ["Internet del local", "Fijo o semivariable", "Tiene una base mensual y puede aumentar con el uso."],
                ["Comisión de una plataforma de pago", "Variable", "Depende del monto de cada venta."],
                ["Electricidad del horno", "Semivariable", "Tiene un cargo fijo y un consumo asociado a la producción."],
                ["Sueldo de un ayudante por hora", "Variable", "Cambia según las horas trabajadas."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "La clasificación depende del contexto",
              text: "Un costo puede ser fijo en un período corto y variable en otro. Lo importante es que la clasificación ayude a tomar decisiones. Si no estás seguro, preguntate: ¿qué ocurre con este costo si este mes vendo la mitad?",
            },
            {
              type: "heading",
              text: "El costo fijo por unidad",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Supongamos que el alquiler mensual de un puesto es $120.000. Si vendo 100 productos, cada uno debe cubrir $1.200 de alquiler. Si vendo 300, cada uno cubre $400. El alquiler total no cambió, pero **el costo fijo por unidad baja cuando aumenta la cantidad**. Esto explica por qué un taller con capacidad ociosa puede repartir mejor sus costos al producir más, siempre que exista demanda.",
            },
            {
              type: "paragraph",
              text: "Los costos variables por unidad, en cambio, suelen mantenerse parecidos. Si cada alfajor lleva $350 de ingredientes, esa cifra no se reduce automáticamente por producir más. Puede mejorar si comprás insumos al por mayor o reducís mermas, pero ese cambio proviene de una mejora en la compra o el proceso, no de la cantidad por sí sola.",
            },
            {
              type: "example",
              title: "Ejemplo: clases de apoyo",
              text: "Una profesora ficticia alquila una sala por $40.000 al mes para dar clases de apoyo. Imprime guías por $800 por estudiante y paga $2.000 por hora a una ayudante. El alquiler es fijo; las guías y las horas de la ayudante son variables. Con 10 estudiantes, el alquiler representa $4.000 por alumno; con 40 estudiantes, baja a $1.000 por alumno. Si las inscripciones fueran pocas, el alquiler podría hacer inviable el servicio aunque el precio por clase parezca razonable.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Separar con dos colores",
              intro:
                "Tomá la lista de costos de la lección anterior y usá dos colores: uno para fijos y otro para variables.",
              steps: [
                "Marcá los costos que se repiten todos los meses aunque no vendas.",
                "Marcá los que aumentan o disminuyen con cada venta.",
                "Señalá los que son mixtos y explicá qué parte parece fija y qué parte variable.",
                "Calculá el total fijo mensual de tu emprendimiento.",
                "Estimá el costo variable de una unidad promedio.",
              ],
              closing:
                "Los dos totales serán la base para estimar el punto de equilibrio en la última lección.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Rango relevante y costos escalonados",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Decir que un costo es fijo no significa que sea fijo para siempre. El alquiler puede mantenerse hasta cierto nivel de producción y después exigir un espacio más grande. A ese salto se lo llama **costo escalonado**. El **rango relevante** es el intervalo de actividad en el que tus supuestos siguen siendo válidos. Si proyectás vender el triple sin ampliar capacidad, es probable que el cálculo deje de ser realista.",
            },
            {
              type: "table",
              caption: "Ejemplos de saltos de capacidad",
              headers: ["Situación", "Costo que cambia", "Qué revisar antes de crecer"],
              rows: [
                ["Más pedidos que capacidad de horno", "Segundo turno, energía o equipo.", "Demanda sostenida y margen adicional."],
                ["Más entregas en el mismo horario", "Movilidad, ayudante o tercerización.", "Costo por entrega y tiempo real."],
                ["Más alumnos en un taller", "Sala más grande, sillas o segundo grupo.", "Precio, calidad y atención por persona."],
                ["Más variedad de productos", "Stock inmovilizado y tiempo de gestión.", "Rotación y contribución de cada línea."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Calculá por escenarios, no por un solo número",
              text: "Armá tres escenarios: bajo, esperado y alto. En cada uno, revisá si los costos fijos siguen siendo los mismos. Un punto de equilibrio calculado con una capacidad que no tenés puede dar una falsa sensación de seguridad.",
            },
          ],
          keyIdeas: [
            "Los costos fijos se sostienen aunque las ventas bajen; los variables acompañan la actividad.",
            "El costo fijo por unidad disminuye cuando se produce más, siempre que el costo total fijo no cambie.",
            "Algunos costos son mixtos y requieren revisar la factura o el consumo real.",
          ],
        },
      ],
    },
    {
      id: "modulo-precio",
      title: "Costo unitario y precio",
      description: "Del costo de una tanda al precio de venta y la rentabilidad del emprendimiento.",
      lessons: [
        {
          id: "costo-unitario",
          slug: "costo-unitario",
          title: "Costo unitario",
          summary:
            "Calcular cuánto cuesta cada unidad producida es el paso que conecta tus gastos con el precio.",
          estimatedMinutes: 27,
          objectives: [
            "Calcular el costo unitario de un producto o servicio.",
            "Incluir mermas y unidades que no se pueden vender.",
            "Distinguir costo del producto de la inversión en equipamiento.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "El **costo unitario** es el costo total de una producción dividido por la cantidad de unidades obtenidas. La fórmula básica es:",
            },
            {
              type: "quote",
              text: "Costo unitario = (materias primas + mano de obra + costos indirectos del proceso) ÷ unidades vendibles obtenidas",
            },
            {
              type: "paragraph",
              text: "La palabra clave es **vendibles**. Si de una tanda de 24 alfajores se rompen 2 y solo se pueden vender 22, el costo total debe repartirse entre 22, no entre 24. Ignorar la merma hace que cada unidad parezca más barata de lo que realmente es y que el precio quede por debajo de lo necesario.",
            },
            {
              type: "heading",
              text: "Del total del lote a una unidad",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Ejemplo: un lote tiene $8.000 de materia prima, $4.000 de mano de obra directa y $2.000 de costos indirectos del proceso (gas, envases pequeños, desgaste de utensilios). El costo total es $14.000. Si se obtienen 20 unidades vendibles, el costo unitario es $700. Si el rendimiento baja a 16 unidades por una merma mayor, el costo unitario sube a $875. El precio no puede ignorar esa diferencia.",
            },
            {
              type: "table",
              caption: "Costos indirectos: ejemplos y criterio de reparto",
              headers: ["Costo indirecto", "Cómo asignarlo de forma simple"],
              rows: [
                ["Gas o electricidad de producción", "Según horas de uso del equipo o proporción estimada."],
                ["Alquiler del espacio", "Solo la parte proporcional al uso del emprendimiento."],
                ["Internet o teléfono", "Porcentaje estimado de uso comercial, documentado."],
                ["Depreciación de una máquina", "Valor de uso periódico, estimado con criterio y revisado."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Tu trabajo no es gratis",
              text: "Si no asignás valor a tu tiempo, el precio puede cubrir los materiales y dejar sin ingreso a la persona que produce. Registrar tu hora no significa que debas pagártela de inmediato: significa saber cuánto margen real hay disponible.",
            },
            {
              type: "paragraph",
              text: "La compra de una máquina es una **inversión**, no un costo del lote por sí misma. Su desgaste sí puede estimarse como un costo de uso o depreciación, repartido entre las unidades producidas durante un período. Para una primera aproximación, preguntá a un docente o profesional cómo calcularlo en tu caso y evitá duplicar el costo de la máquina en cada venta.",
            },
            {
              type: "example",
              title: "Ejemplo: servicio de diseño de catálogos",
              text: "Una persona ofrece un catálogo digital de hasta diez productos. Estima que dedicará 8 horas, valora su hora en $2.500 y usará una suscripción mensual de diseño de $6.000, de la cual asigna el 25 % a ese trabajo ($1.500). Costo total del servicio: $21.500. Si suma una revisión adicional de 2 horas, debe presupuestarla o aclarar cuántas revisiones incluye. El costo unitario de un servicio incluye tiempo, herramientas y cualquier insumo necesario.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Costo por unidad",
              intro:
                "Calculá el costo unitario de tu producto o servicio con datos que puedas respaldar.",
              steps: [
                "Sumá todos los costos del lote o del servicio.",
                "Restá las unidades que no podrás vender por merma o error.",
                "Dividí el costo total por las unidades vendibles.",
                "Repetí el cálculo con una tanda más grande para observar qué costos cambian y cuáles no.",
                "Anotá el resultado y la fecha en tu ficha de costos.",
              ],
              closing:
                "Usá CostoClaro al finalizar para comparar el resultado con la herramienta y revisar diferencias.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Costo por hora y utilización",
              level: 2,
            },
            {
              type: "paragraph",
              text: "En los servicios, el costo unitario muchas veces se mide por hora. Pero no todas las horas disponibles se pueden cobrar: hay tiempo de preparación, traslado, administración y espera. Si dividís todos tus costos por las horas que efectivamente facturás, obtenés un costo por hora más realista.",
            },
            {
              type: "quote",
              text: "Costo por hora facturable = costos totales del período ÷ horas efectivamente facturables",
            },
            {
              type: "example",
              title: "Ejemplo: servicio de mantenimiento",
              text: "Un servicio ficticio tiene costos mensuales de $240.000 entre herramientas, traslados, seguro y administración. La persona dispone de 120 horas al mes, pero solo 60 son facturables; el resto se usa en viajes, presupuestos y tareas administrativas. El costo por hora facturable no es $240.000 ÷ 120 = $2.000, sino $240.000 ÷ 60 = $4.000. Si cobra $3.500 por hora, puede estar trabajando a pérdida aunque parezca que tiene una tarifa alta.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "callout",
              variant: "warning",
              title: "La capacidad no es solo horas",
              text: "También hay capacidad de producción, de atención y de entrega. Si el cuello de botella es el horno, el vehículo o una sola persona, el costo por hora puede ocultar que ese recurso está saturado. Medí el recurso que limita el crecimiento.",
            },
          ],
          keyIdeas: [
            "El costo unitario se calcula sobre unidades vendibles, no sobre unidades ideales.",
            "Incluir tu tiempo y los costos indirectos evita precios engañosos.",
            "La inversión en equipos no se duplica en cada unidad: su uso sí puede estimarse.",
          ],
          resourceSlugs: ["ficha-de-costos", "presupuesto-basico"],
          toolIds: ["costoclaro"],
        },
        {
          id: "precio-rentabilidad",
          slug: "precio-rentabilidad",
          title: "Precio de venta, rentabilidad y errores frecuentes",
          summary:
            "El precio debe cubrir costos, sostener el margen y ser aceptable para el cliente. No existe una fórmula única.",
          estimatedMinutes: 29,
          objectives: [
            "Aplicar un margen sobre el costo y estimar el punto de equilibrio.",
            "Distinguir margen sobre el costo y margen sobre el precio.",
            "Detectar errores comunes al fijar precios y revisarlos.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "El precio de venta no se obtiene solo con una suma. Intervienen tres perspectivas: **el costo** (piso que necesitás cubrir), **el valor percibido por el cliente** (cuánto resuelve su problema) y **el mercado** (qué alternativas tiene y cuánto paga). Un precio demasiado bajo puede atraer ventas que no dejan margen; uno demasiado alto puede alejar clientes si no se explica el valor.",
            },
            {
              type: "heading",
              text: "Margen sobre el costo: una fórmula para empezar",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Una forma sencilla es aplicar un porcentaje al costo unitario. Por ejemplo, si el costo unitario es $800 y querés un margen del 35 % sobre el costo: $800 × 1,35 = $1.080. Esa diferencia de $280 es margen bruto antes de otros gastos e impuestos. Si además pagás una comisión del 5 % sobre la venta, tenés que incorporarla o revisar si el margen sigue siendo suficiente.",
            },
            {
              type: "callout",
              variant: "warning",
              title: "Margen sobre el costo no es lo mismo que margen sobre la venta",
              text: "Un margen del 30 % sobre el precio se calcula como costo ÷ 0,70. Un recargo del 30 % sobre el costo se calcula como costo × 1,30. No son equivalentes. Elegí un método, documentalo y usá siempre el mismo para comparar.",
            },
            {
              type: "heading",
              text: "Punto de equilibrio",
              level: 2,
            },
            {
              type: "paragraph",
              text: "El punto de equilibrio indica cuántas unidades necesitás vender para cubrir los costos fijos, sin ganar ni perder. La fórmula es:",
            },
            {
              type: "quote",
              text: "Punto de equilibrio = costos fijos ÷ (precio de venta unitario − costo variable unitario)",
            },
            {
              type: "paragraph",
              text: "La resta entre precio y costo variable se llama **margen de contribución**. Si los costos fijos son $120.000, el precio es $1.500 y el costo variable unitario es $900, el margen de contribución es $600. El punto de equilibrio es 120.000 ÷ 600 = 200 unidades al mes. Vender menos implica pérdida, salvo que existan otros ingresos o se ajusten los costos.",
            },
            {
              type: "table",
              caption: "Errores frecuentes y cómo corregirlos",
              headers: ["Error", "Consecuencia", "Corrección"],
              rows: [
                ["Copiar el precio del competidor sin comparar costos", "Se puede vender a pérdida.", "Calcular el costo propio antes de comparar."],
                ["Olvidar packaging, envío o comisión", "El margen desaparece en la entrega.", "Incluir todos los costos de comercialización."],
                ["No actualizar precios cuando suben los insumos", "La ganancia se reduce silenciosamente.", "Revisar costos cada vez que cambian insumos clave."],
                ["Mezclar la caja del negocio con gastos personales", "No se distingue resultado real.", "Separar registros y fondos."],
                ["Hacer descuentos sin revisar el margen", "Se puede trabajar más y ganar menos.", "Calcular el impacto antes de ofrecer."],
              ],
            },
            {
              type: "paragraph",
              text: "La **rentabilidad** relaciona la ganancia con los ingresos o la inversión. A nivel simple, la ganancia del período es ingresos totales menos costos totales. No alcanza con decir «me quedó dinero en el bolsillo»: pueden existir compras de reposición, deudas o gastos próximos. Revisá la rentabilidad junto con el flujo de caja, es decir, el momento en que entra y sale el dinero.",
            },
            {
              type: "example",
              title: "Ejemplo: precio de una vianda",
              text: "Una cocina ficticia calcula un costo variable de $1.800 por vianda y costos fijos mensuales de $90.000. Quiere un margen del 30 % sobre el costo, por lo que fija un precio tentativo de $2.340. Su margen de contribución es $540. El punto de equilibrio es 90.000 ÷ 540 = 167 viandas al mes. Si vende 220, habrá cubierto los fijos y obtenido un excedente; si vende 120, necesitará ajustar costos, precio o volumen.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Del costo al precio",
              intro:
                "Usá tus números para construir un precio defendible y calcular tu punto de equilibrio.",
              steps: [
                "Partí del costo unitario calculado en la lección anterior.",
                "Definí un margen objetivo y aplicá una de las dos fórmulas, dejando registrado cuál usaste.",
                "Sumá comisiones, envío y costos de venta que correspondan.",
                "Compará el resultado con dos alternativas del mercado y con el valor que ofrece tu propuesta.",
                "Calculá tu punto de equilibrio y escribí un precio final de prueba.",
                "Revisá el resultado con CostoClaro y anotá los supuestos usados.",
              ],
              closing:
                "Un precio no es definitivo. Revisalo cuando cambien los costos, el volumen o la forma de venta.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Margen objetivo y margen de seguridad",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Si querés un margen expresado sobre el precio de venta, no multipliques el costo por el porcentaje: dividí por lo que queda después de ese margen. La fórmula es:",
            },
            {
              type: "quote",
              text: "Precio = costo unitario ÷ (1 − margen objetivo sobre la venta)",
            },
            {
              type: "example",
              title: "Ejemplo: precio con margen del 30 % sobre la venta",
              text: "Un costo unitario de $1.000 con un margen objetivo del 30 % sobre la venta se calcula como $1.000 ÷ 0,70 = $1.428,57. Si en cambio aplicás un recargo del 30 % sobre el costo, el precio es $1.300. No son equivalentes: en el primer caso el margen representa el 30 % del precio; en el segundo, aproximadamente el 23 %. Elegí un método, escribilo y usalo siempre para comparar.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "table",
              caption: "Margen de seguridad: cuánto puede caer la venta",
              headers: ["Ventas actuales", "Ventas de equilibrio", "Margen de seguridad"],
              rows: [
                ["200 unidades", "150 unidades", "25 %"],
                ["200 unidades", "180 unidades", "10 %"],
                ["200 unidades", "200 unidades", "0 %"],
                ["200 unidades", "220 unidades", "Negativo: aún no cubre los fijos"],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "El precio no reemplaza la caja",
              text: "Un margen saludable puede convivir con una caja ajustada si cobrás tarde o financiás a tus clientes. Revisá el flujo de caja antes de comprometer descuentos, plazos o compras grandes.",
            },
          ],
          keyIdeas: [
            "El costo marca un piso; el valor para el cliente y el mercado ayudan a definir el precio.",
            "El punto de equilibrio muestra cuánto necesitás vender para cubrir los costos fijos.",
            "Actualizar costos, incluir la entrega y separar las finanzas evita pérdidas invisibles.",
          ],
          resourceSlugs: ["ficha-de-costos", "presupuesto-basico"],
          toolIds: ["costoclaro", "diagnostico-emprendedor"],
        },
      ],
    },
    costosAvanzado,
  ],
  finalQuiz: {
    title: "Autoevaluación final · Costos y precios",
    description:
      "Diez preguntas con cálculos y decisiones sobre costos, precios, descuentos, mezcla y caja. La aprobación requiere al menos 70 % de respuestas correctas.",
    passingScore: 70,
    questions: [
      {
        id: "p1",
        prompt: "¿Cuál de estos costos es fijo para un pequeño taller que alquila un espacio?",
        options: [
          { text: "La materia prima de cada producto." },
          { text: "El alquiler mensual del espacio." },
          { text: "La comisión por cada venta con tarjeta." },
          { text: "Los envases utilizados por unidad." },
        ],
        correctIndex: 1,
        explanation:
          "El alquiler se paga aunque las ventas bajen, por eso es fijo dentro del rango de capacidad acordado. La materia prima, los envases y las comisiones dependen de la actividad o de cada venta.",
      },
      {
        id: "p2",
        prompt:
          "Una tanda tiene $21.000 de costo total y se obtienen 15 unidades vendibles. ¿Cuál es el costo unitario?",
        options: [
          { text: "$1.050" },
          { text: "$1.400" },
          { text: "$1.500" },
          { text: "$2.100" },
        ],
        correctIndex: 1,
        explanation:
          "El costo unitario es $21.000 ÷ 15 = $1.400. El divisor son las unidades vendibles, no las producidas: las mermas también deben cubrirse con el precio.",
      },
      {
        id: "p3",
        prompt:
          "El costo unitario es $1.000 y querés un margen del 30 % sobre el precio de venta. ¿Qué precio corresponde?",
        options: [
          { text: "$1.300" },
          { text: "$1.428,57" },
          { text: "$1.700" },
          { text: "$700" },
        ],
        correctIndex: 1,
        explanation:
          "Para un margen sobre la venta se divide por 0,70: $1.000 ÷ 0,70 = $1.428,57. Aplicar $1.000 × 1,30 es un recargo del 30 % sobre el costo y deja un margen menor sobre la venta.",
      },
      {
        id: "p4",
        prompt:
          "Los costos fijos son $180.000, el precio es $3.000 y el costo variable unitario es $1.800. ¿Cuántas unidades cubren los costos fijos?",
        options: [
          { text: "60 unidades" },
          { text: "100 unidades" },
          { text: "150 unidades" },
          { text: "180 unidades" },
        ],
        correctIndex: 2,
        explanation:
          "La contribución unitaria es $3.000 − $1.800 = $1.200. El punto de equilibrio es $180.000 ÷ $1.200 = 150 unidades.",
      },
      {
        id: "p5",
        prompt:
          "Con los mismos datos, ¿cuántas unidades se necesitan para cubrir $180.000 de costos fijos y obtener $60.000 de resultado antes de impuestos?",
        options: [
          { text: "150 unidades" },
          { text: "180 unidades" },
          { text: "200 unidades" },
          { text: "240 unidades" },
        ],
        correctIndex: 2,
        explanation:
          "Hay que cubrir fijos más el resultado objetivo: ($180.000 + $60.000) ÷ $1.200 = 200 unidades. El punto de equilibrio solo cubre los fijos; no incluye la ganancia buscada.",
      },
      {
        id: "p6",
        prompt:
          "Un producto tiene precio $1.000, costo variable $600 y por lo tanto una contribución de $400. Si aplicás un descuento del 10 %, ¿cuánto volumen adicional necesitás para mantener la misma contribución total?",
        options: [
          { text: "10 % más" },
          { text: "20 % más" },
          { text: "33,3 % más" },
          { text: "50 % más" },
        ],
        correctIndex: 2,
        explanation:
          "Con el descuento, el precio baja a $900 y la contribución a $300. Para mantener la misma contribución: $400 ÷ $300 − 1 = 33,3 % de volumen adicional. Un descuento del 10 % no se compensa vendiendo solo 10 % más.",
      },
      {
        id: "p7",
        prompt:
          "Una venta es rentable, pero los insumos se pagan al contado y el cliente paga a 30 días. ¿Qué problema puede aparecer aunque el margen sea positivo?",
        options: [
          { text: "Una brecha de caja para financiar la producción." },
          { text: "Una reducción automática de los costos fijos." },
          { text: "Un aumento del margen por vender más." },
          { text: "Ninguno: si hay margen, siempre hay dinero disponible." },
        ],
        correctIndex: 0,
        explanation:
          "La rentabilidad y la liquidez son distintas. Si los pagos salen antes que los cobros, necesitás capital de trabajo, señas o plazos más cortos para no quedar sin caja.",
      },
      {
        id: "p8",
        prompt:
          "Un producto deja $1.200 de contribución y consume 2 horas; otro deja $800 y consume 30 minutos. Si la capacidad está llena y la demanda de ambos existe, ¿qué conviene priorizar?",
        options: [
          { text: "El de $800, porque se produce más rápido sin mirar la contribución." },
          { text: "El de $1.200, porque tiene mayor contribución por unidad aunque consuma más horas." },
          { text: "El segundo, porque deja $1.600 de contribución por hora." },
          { text: "Ninguno: la contribución por hora no sirve para decidir." },
        ],
        correctIndex: 2,
        explanation:
          "El primer producto deja $600 por hora ($1.200 ÷ 2) y el segundo $1.600 por hora ($800 ÷ 0,5). Con capacidad limitada, la contribución por hora es el criterio relevante, siempre que la demanda permita venderlo.",
      },
      {
        id: "p9",
        prompt:
          "Vendés un producto a $5.000 con $2.000 de costo variable. En una plataforma pagás 15 % de comisión y $300 de envío. ¿Cuál es la contribución aproximada por venta?",
        options: [
          { text: "$2.700" },
          { text: "$1.950" },
          { text: "$1.750" },
          { text: "$5.000" },
        ],
        correctIndex: 1,
        explanation:
          "La comisión es $750 y el envío $300. Contribución = $5.000 − $2.000 − $750 − $300 = $1.950. El precio de lista no es el ingreso neto del canal.",
      },
      {
        id: "p10",
        prompt:
          "¿Cuál de estas acciones mejora la caja sin necesidad de vender más unidades este mes?",
        options: [
          { text: "Cobrar una seña al confirmar el pedido y acortar el plazo de cobro." },
          { text: "Comprar más inventario para aprovechar un descuento." },
          { text: "Aumentar el plazo de pago a los clientes." },
          { text: "Usar el dinero de los impuestos para comprar insumos." },
        ],
        correctIndex: 0,
        explanation:
          "La seña y el plazo más corto adelantan el ingreso y reducen el capital de trabajo necesario. Comprar inventario de más, dar plazos largos o usar dinero de obligaciones aumenta el riesgo de caja.",
      },
    ],
  },
  resourceSlugs: [
    "ficha-de-costos",
    "presupuesto-basico",
    "flujo-de-caja-13-semanas",
  ],
  toolIds: ["costoclaro", "diagnostico-emprendedor"],
};
