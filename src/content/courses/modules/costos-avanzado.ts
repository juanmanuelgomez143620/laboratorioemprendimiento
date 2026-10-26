import type { CourseModule } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const costosAvanzado: CourseModule = {
  id: "modulo-caja-decisiones",
  title: "Caja y decisiones de rentabilidad",
  description:
    "Cómo anticipar los momentos en que falta dinero y elegir precios, productos y canales con criterios de contribución y capacidad.",
  lessons: [
    {
      id: "flujo-de-caja",
      slug: "flujo-de-caja-y-capital-de-trabajo",
      title: "Flujo de caja y capital de trabajo",
      summary:
        "Una venta rentable puede dejar la caja vacía si el dinero se cobra tarde. Aprendé a anticipar ese desfase.",
      estimatedMinutes: 30,
      objectives: [
        "Distinguir ganancia contable de dinero disponible.",
        "Armar un flujo de caja semanal con cobros, pagos y saldo mínimo.",
        "Identificar una brecha de capital de trabajo y elegir cómo cubrirla.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "**Ganar dinero y tener dinero no son lo mismo.** Una venta puede ser rentable y, al mismo tiempo, dejar la cuenta vacía porque el cliente paga a 30 días mientras vos ya compraste los insumos. La caja registra cuándo entra y sale el dinero; la rentabilidad compara ingresos y costos de un período. Para decidir necesitás mirar las dos cosas.",
        },
        {
          type: "table",
          caption: "Situaciones que confunden ganancia con caja",
          headers: ["Situación", "¿Hay ganancia?", "¿Hay dinero disponible?", "Qué mirar"],
          rows: [
            ["Venta con pago a 30 días", "Sí, si el precio supera los costos.", "Todavía no.", "El plazo de cobro y la fecha de los pagos."],
            ["Seña de un cliente", "Todavía no es ingreso devengado.", "Sí, entró dinero.", "La obligación de entregar o devolver."],
            ["Compra de insumos para el próximo mes", "No es un gasto del mes todavía.", "Salió dinero.", "El inventario y el consumo real."],
            ["Compra de una máquina", "Es una inversión, no un costo del mes.", "Salió dinero.", "El uso, la depreciación y la recuperación."],
            ["Préstamo recibido", "No es ingreso del negocio.", "Sí, entró dinero.", "La devolución y el costo financiero."],
          ],
        },
        {
          type: "quote",
          text: "Caja final = caja inicial + cobros del período − pagos del período",
        },
        {
          type: "heading",
          text: "El ciclo de caja",
          level: 2,
        },
        {
          type: "paragraph",
          text: "El **ciclo de caja** es el tiempo que pasa desde que pagás los insumos hasta que cobrás la venta. Si comprás materia prima hoy, producís durante una semana, vendes y cobras a 30 días, tu dinero queda inmovilizado más de un mes. Cuanto más largo es el ciclo, más capital de trabajo necesitás para sostener la operación. El capital de trabajo no es un premio por vender: es el colchón que permite seguir comprando mientras llegan los cobros.",
        },
        {
          type: "table",
          caption: "Un flujo de caja de cuatro semanas",
          headers: ["Concepto", "Semana 1", "Semana 2", "Semana 3", "Semana 4"],
          rows: [
            ["Caja inicial", "$350.000", "$10.000", "−$15.000", "−$40.000"],
            ["Cobros", "$0", "$0", "$0", "$0"],
            ["Pagos de insumos y gastos", "$340.000", "$25.000", "$25.000", "$25.000"],
            ["Caja final", "$10.000", "−$15.000", "−$40.000", "−$65.000"],
          ],
        },
        {
          type: "paragraph",
          text: "El ejemplo es ficticio y muestra un pedido grande que se cobra recién en la semana 5. Aunque el precio sea rentable, la caja queda en negativo antes de cobrar. La planilla debe incluir el saldo mínimo que necesitás para operar y una fila de **brecha** cuando el saldo proyectado cae por debajo de ese mínimo.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "No financiar la operación con dinero que no es tuyo",
          text: "El dinero de impuestos, aportes, sueldos o seña de un cliente no es capital de trabajo libre. Usarlo para comprar insumos puede resolver una semana y generar un problema mayor cuando vence la obligación. Separá una reserva para esas salidas.",
        },
        {
          type: "heading",
          text: "Cómo reducir una brecha de caja",
          level: 2,
        },
        {
          type: "table",
          caption: "Palancas y efecto esperado",
          headers: ["Palanca", "Qué cambia", "Cuidado"],
          rows: [
            ["Cobrar una seña", "Adelanta parte del ingreso.", "Debe quedar claro qué cubre y qué pasa si se cancela."],
            ["Acortar el plazo de cobro", "Reduce el tiempo de inmovilización.", "Puede afectar la relación con clientes grandes; acordalo por escrito."],
            ["Negociar plazo con proveedores", "Atrasa pagos sin dejar de operar.", "No prometas fechas que dependen de cobros inciertos."],
            ["Reducir variedad o lote", "Baja el inventario y el gasto inicial.", "Puede afectar la oferta; priorizá lo que más rota."],
            ["Usar medios de pago con acreditación rápida", "Reduce días de espera.", "Revisá comisiones y disponibilidad."],
            ["Reservar un mínimo de caja", "Evita usar dinero de obligaciones.", "Definí el monto por escrito y no lo toques para gastos personales."],
          ],
        },
        {
          type: "example",
          title: "Ejemplo: taller de muebles y un pedido grande",
          text: "Un taller ficticio recibe un pedido de diez mesas por $600.000. Los materiales cuestan $300.000 y debe pagarlos al inicio; la entrega y el cobro se pactan a 30 días. El taller tiene $350.000 de caja. Si acepta el pedido sin seña, pagará materiales y gastos fijos y quedará en negativo durante varias semanas. Antes de aceptar, negocia un anticipo del 40 % ($240.000), compra materiales en dos partidas y acuerda el saldo a 15 días de la entrega. Así reduce la brecha sin rechazar la oportunidad. También calcula si el margen del pedido compensa las horas que dejará de dedicar a reparaciones más pequeñas.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "activity",
          title: "Actividad práctica · Tu flujo de caja de 13 semanas",
          intro:
            "Armá una planilla con una columna por semana. Trece semanas alcanzan para ver un trimestre completo.",
          steps: [
            "Anotá la caja inicial real, no la que te gustaría tener.",
            "Proyectá los cobros por fecha probable, no por fecha de venta.",
            "Proyectá los pagos de insumos, servicios, deudas y gastos personales del emprendimiento.",
            "Calculá el saldo final de cada semana.",
            "Marcá las semanas en las que el saldo cae por debajo de tu mínimo.",
            "Elegí tres acciones para cubrir la brecha: seña, plazo, lote o reserva.",
            "Actualizá el flujo cada semana con los movimientos reales.",
          ],
          closing:
            "Si el flujo muestra una brecha, no la tapes con ventas futuras sin evidencia. Ajustá cobros, pagos o el tamaño de la operación.",
        },
        {
          type: "checklist",
          title: "Revisión de caja antes de comprometer una compra",
          items: [
            "Sé cuándo voy a cobrar esta venta y cuándo debo pagar los insumos.",
            "El saldo proyectado se mantiene por encima de mi mínimo.",
            "Separé el dinero de obligaciones y la reserva para imprevistos.",
            "No estoy usando el dinero de un cliente para financiar otro pedido.",
            "Tengo un plan si el cliente paga tarde.",
            "La compra no depende de vender todo el lote en el mismo mes.",
          ],
        },
      ],
      keyIdeas: [
        "La caja mide el dinero disponible; la rentabilidad compara ingresos y costos.",
        "El capital de trabajo cubre el desfase entre pagar la producción y cobrar la venta.",
        "Un flujo de caja semanal permite anticipar brechas y negociar antes de quedar sin dinero.",
      ],
      resourceSlugs: ["presupuesto-basico", "ficha-de-costos", "flujo-de-caja-13-semanas"],
      toolIds: ["costoclaro", "diagnostico-emprendedor"],
    },
    {
      id: "decisiones-rentabilidad",
      slug: "decisiones-de-precio-y-mezcla",
      title: "Decisiones de precio, mezcla y rentabilidad",
      summary:
        "Comparar productos, canales y descuentos por contribución y capacidad evita trabajar más para ganar menos.",
      estimatedMinutes: 32,
      objectives: [
        "Calcular la contribución por unidad y por hora de capacidad.",
        "Evaluar el volumen adicional que exige un descuento.",
        "Comparar canales por ingreso neto y costo de servir.",
        "Armar un tablero de rentabilidad y caja para decidir.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Cuando un emprendimiento vende varios productos, el más vendido no siempre es el que más deja. Para decidir qué impulsar, qué precio revisar y qué pedido aceptar, necesitás comparar **contribución** (precio menos costos variables) y **capacidad** (horas, espacio, insumos críticos o atención). Un producto con menor precio puede dejar más por hora si se produce rápido; otro con mayor ticket puede consumir toda la capacidad y dejar poco.",
        },
        {
          type: "heading",
          text: "Contribución por unidad y por hora",
          level: 2,
        },
        {
          type: "table",
          caption: "Ejemplo ficticio de una semana de producción",
          headers: ["Producto", "Precio", "Costo variable", "Contribución", "Unidades", "Contribución total", "Horas", "Contribución por hora"],
          rows: [
            ["Producto A", "$2.000", "$1.200", "$800", "100", "$80.000", "50", "$1.600"],
            ["Producto B", "$5.000", "$3.800", "$1.200", "40", "$48.000", "10", "$4.800"],
            ["Producto C", "$1.500", "$1.000", "$500", "120", "$60.000", "30", "$1.000"],
          ],
        },
        {
          type: "paragraph",
          text: "El producto A aporta más contribución total, pero el B deja mucha más contribución por hora. Si la capacidad está llena, conviene preguntarse si se puede vender más B o aumentar el precio de A. Si sobra capacidad y la demanda de B es limitada, A sigue siendo una buena opción para cubrir costos fijos. La decisión no se toma mirando una sola columna.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "La pregunta correcta",
          text: "No preguntes solo «¿qué se vende más?». Preguntá: «¿qué deja más después de cubrir los costos variables y cuánto de mi capacidad limitada consume?». La respuesta puede cambiar según el mes y la demanda.",
        },
        {
          type: "heading",
          text: "Descuentos: el volumen que hace falta",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Un descuento reduce directamente la contribución. Para mantener el mismo resultado, necesitás vender más unidades. La fórmula es:",
        },
        {
          type: "quote",
          text: "Aumento de volumen necesario = (contribución original ÷ contribución con descuento) − 1",
        },
        {
          type: "table",
          caption: "Ejemplo con precio $1.000 y costo variable $600",
          headers: ["Descuento", "Nuevo precio", "Nueva contribución", "Volumen adicional necesario"],
          rows: [
            ["5 %", "$950", "$350", "14,3 %"],
            ["10 %", "$900", "$300", "33,3 %"],
            ["15 %", "$850", "$250", "60 %"],
            ["20 %", "$800", "$200", "100 %"],
          ],
        },
        {
          type: "paragraph",
          text: "Si hoy vendés 100 unidades y aplicás un 10 % de descuento, necesitás vender al menos 134 para obtener la misma contribución total. Si el descuento no genera ese volumen adicional, la promoción puede aumentar las ventas y reducir la ganancia. Antes de aprobar un descuento, revisá también si atrae clientes nuevos o solo adelanta compras de clientes habituales.",
        },
        {
          type: "heading",
          text: "Canales: precio de lista no es ingreso neto",
          level: 2,
        },
        {
          type: "table",
          caption: "Comparación ficticia de un mismo producto",
          headers: ["Concepto", "Venta directa", "Plataforma", "Aplicación de entrega"],
          rows: [
            ["Precio cobrado al cliente", "$5.000", "$5.000", "$5.000"],
            ["Costo variable del producto", "$2.000", "$2.000", "$2.000"],
            ["Comisión del canal", "$0", "$750", "$1.250"],
            ["Envío absorbido por el negocio", "$300", "$300", "$0"],
            ["Envase y embalaje", "$200", "$200", "$200"],
            ["Contribución por venta", "$2.500", "$1.750", "$1.550"],
          ],
        },
        {
          type: "paragraph",
          text: "La plataforma puede traer clientes que no llegarían por otro medio. Ese beneficio no aparece en la tabla, pero tampoco desaparece el costo de la comisión. Medí el ingreso neto y el costo de conseguir al cliente, no solo el precio que ve el comprador. Si un canal deja una contribución demasiado baja, subí el precio en ese canal, cambiá el producto o reducí la dependencia.",
        },
        {
          type: "example",
          title: "Ejemplo: un pedido corporativo en una panadería",
          text: "Una panadería ficticia vende cajas de facturas a $5.000, con $3.000 de costo variable y $2.000 de contribución. Un cliente corporativo pide 80 cajas con 10 % de descuento: el precio baja a $4.500 y la contribución a $1.500 por caja. La contribución total del pedido es $120.000 y ocupa 16 horas de horno. En esas horas, la panadería podría producir 60 cajas para venta minorista a precio completo, también con $120.000 de contribución, pero sin garantía de venderlas. La decisión depende de la capacidad ociosa, del plazo de pago y del riesgo de desplazar ventas minoristas. Una opción es aceptar con 50 % de anticipo, entregar en dos partidas y no sumar más descuentos.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "heading",
          text: "El tablero de rentabilidad y caja",
          level: 2,
        },
        {
          type: "table",
          caption: "Indicadores para revisar cada semana o cada mes",
          headers: ["Indicador", "Fórmula o fuente", "Frecuencia", "Decisión que habilita"],
          rows: [
            ["Contribución por producto", "Precio − costos variables", "Semanal o mensual", "Qué impulsar o revisar."],
            ["Contribución por hora", "Contribución ÷ horas de capacidad", "Mensual", "Cómo asignar tiempo y equipo."],
            ["Punto de equilibrio", "Costos fijos ÷ contribución unitaria", "Mensual", "Cuánto falta vender para cubrir fijos."],
            ["Caja mínima", "Saldo disponible − compromisos próximos", "Semanal", "Cuándo frenar compras o cobrar antes."],
            ["Margen de seguridad", "(Ventas actuales − ventas de equilibrio) ÷ ventas actuales", "Mensual", "Cuánto puede caer la venta antes de perder."],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "No decidas solo por el ticket total",
          text: "Un pedido grande puede impresionar y, al mismo tiempo, consumir toda tu capacidad, pagar tarde y dejar menos que varias ventas pequeñas. Mirá contribución, caja y horas comprometidas antes de decir que sí.",
        },
        {
          type: "activity",
          title: "Entregable · Tablero de rentabilidad y caja",
          intro:
            "Usá tus propios datos. Si todavía no tenés ventas, usá escenarios marcados como estimaciones y revisalos con la primera semana real.",
          steps: [
            "Elegí hasta tres productos o servicios y calculá su contribución unitaria.",
            "Estimá las horas o la capacidad que consume cada uno.",
            "Compará la contribución por hora y definí qué conviene impulsar.",
            "Calculá el punto de equilibrio y el margen de seguridad.",
            "Evaluá un descuento con la fórmula de volumen adicional.",
            "Armá un flujo de caja de 13 semanas y marcá la caja mínima.",
            "Escribí tres reglas de decisión para el próximo mes.",
          ],
          closing:
            "El entregable se completa cuando podés explicar qué producto o canal priorizar, qué descuento no aceptar y cuánto dinero necesitás tener disponible.",
        },
        {
          type: "fields",
          title: "Tablero de rentabilidad y caja",
          items: [
            { label: "Producto o servicio con mayor contribución por hora", lines: 2 },
            { label: "Producto que consume capacidad y deja poca contribución", lines: 2 },
            { label: "Punto de equilibrio y margen de seguridad", lines: 2 },
            { label: "Descuento evaluado y volumen adicional necesario", lines: 3 },
            { label: "Canal con mejor ingreso neto y canal más costoso", lines: 2 },
            { label: "Brecha de caja prevista y acción para cubrirla", lines: 3 },
            { label: "Tres reglas de decisión para el próximo mes", lines: 4 },
          ],
        },
        {
          type: "checklist",
          title: "Antes de aprobar un precio o descuento",
          items: [
            "Calculé la contribución después de comisiones, envío y packaging.",
            "Sé cuánto volumen adicional necesito para no perder contribución.",
            "Revisé si el descuento canibaliza ventas a precio completo.",
            "Consideré la capacidad y las horas que consume el pedido.",
            "Verifiqué el plazo de pago y el impacto en la caja.",
            "Dejé registrados los supuestos y la fecha de revisión.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Alcance de las decisiones",
          text: "Estas herramientas son educativas y no reemplazan asesoramiento contable, impositivo o financiero. Los impuestos, las comisiones y las obligaciones dependen de cada actividad y jurisdicción. Revisá los números con un profesional cuando la decisión sea significativa.",
        },
      ],
      keyIdeas: [
        "La contribución por unidad y por hora ayuda a comparar productos que consumen capacidades distintas.",
        "Un descuento exige un aumento de volumen que muchas veces es mayor de lo que parece.",
        "El canal se evalúa por ingreso neto y costo de servir, no solo por el precio de lista.",
        "El tablero combina rentabilidad y caja para decidir con una visión completa.",
      ],
      resourceSlugs: [
        "ficha-de-costos",
        "presupuesto-basico",
        "flujo-de-caja-13-semanas",
      ],
      toolIds: ["costoclaro", "diagnostico-emprendedor"],
    },
  ],
};
