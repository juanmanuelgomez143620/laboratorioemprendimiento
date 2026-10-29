export interface GlossaryCategory {
  id: string;
  title: string;
  description: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  definition: string;
  example?: string;
  relatedCourseSlugs?: string[];
}

export const glossaryCategories: GlossaryCategory[] = [
  {
    id: "costos-precios",
    title: "Costos y precios",
    description:
      "Palabras para calcular cuánto cuesta producir, cuánto conviene cobrar y dónde está el equilibrio.",
  },
  {
    id: "caja-administracion",
    title: "Caja y administración",
    description:
      "Conceptos para ordenar el dinero que entra y sale, anticipar faltantes y registrar la operación.",
  },
  {
    id: "clientes-marca",
    title: "Clientes y marca",
    description:
      "Ideas para entender a quién le vendés, qué valor ofrecés y cómo te diferencias de otras propuestas.",
  },
  {
    id: "operacion-digital",
    title: "Operación y herramientas digitales",
    description:
      "Términos para organizar canales, medir resultados y usar tecnología con criterios claros.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "costo-fijo",
    term: "Costo fijo",
    category: "costos-precios",
    definition:
      "Gasto que se mantiene estable en un período, aunque cambie la cantidad de productos o servicios vendidos.",
    example:
      "Ejemplo ilustrativo: el alquiler del local o la cuota de internet se pagan aunque ese mes se venda poco.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "costo-variable",
    term: "Costo variable",
    category: "costos-precios",
    definition:
      "Gasto que cambia según la cantidad producida o vendida. Suele aumentar con cada unidad.",
    example:
      "Ejemplo ilustrativo: la harina y el packaging de una panadería aumentan cuando se produce más pan.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "costo-total",
    term: "Costo total",
    category: "costos-precios",
    definition:
      "Suma de todos los costos fijos y variables necesarios para producir o vender en un período.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "margen-de-contribucion",
    term: "Margen de contribución",
    category: "costos-precios",
    definition:
      "Diferencia entre el precio de venta y el costo variable de una unidad. Ese monto aporta a cubrir los costos fijos y, luego, a generar ganancia.",
    example:
      "Ejemplo ilustrativo: si un producto se vende a $10.000 y su costo variable es $6.000, el margen de contribución es $4.000.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "punto-de-equilibrio",
    term: "Punto de equilibrio",
    category: "costos-precios",
    definition:
      "Cantidad de ventas necesaria para cubrir todos los costos, sin ganar ni perder. Se calcula dividiendo los costos fijos por el margen de contribución unitario.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "precio-de-venta",
    term: "Precio de venta",
    category: "costos-precios",
    definition:
      "Monto que paga el cliente por un producto o servicio. Debe considerar costos, margen buscado, impuestos, comisiones y el valor percibido.",
    relatedCourseSlugs: ["costos-y-precios", "mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "ticket-promedio",
    term: "Ticket promedio",
    category: "costos-precios",
    definition:
      "Valor medio de cada venta. Se calcula dividiendo la facturación de un período por la cantidad de ventas realizadas.",
    example:
      "Ejemplo ilustrativo: si en un mes se facturaron $200.000 en 40 ventas, el ticket promedio fue de $5.000.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "rentabilidad",
    term: "Rentabilidad",
    category: "costos-precios",
    definition:
      "Relación entre la ganancia obtenida y los recursos invertidos. No es lo mismo que facturar mucho: importa cuánto queda después de cubrir los costos.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "flujo-de-caja",
    term: "Flujo de caja",
    category: "caja-administracion",
    definition:
      "Registro de las entradas y salidas reales de dinero en un período. Muestra cuándo se cobra y cuándo se paga, no solo cuándo se factura.",
    example:
      "Ejemplo ilustrativo: una venta cobrada en 30 días no mejora la caja de hoy, aunque ya esté facturada.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "capital-de-trabajo",
    term: "Capital de trabajo",
    category: "caja-administracion",
    definition:
      "Dinero disponible para sostener la operación diaria —insumos, sueldos, alquiler, traslados— antes de cobrar las ventas.",
    relatedCourseSlugs: ["costos-y-precios", "mi-primer-emprendimiento"],
  },
  {
    id: "presupuesto",
    term: "Presupuesto",
    category: "caja-administracion",
    definition:
      "Plan de ingresos y gastos para un período. Sirve para anticipar decisiones y comparar lo previsto con lo que realmente ocurrió.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "sena",
    term: "Seña",
    category: "caja-administracion",
    definition:
      "Pago parcial anticipado que reserva un producto o servicio. Se descuenta del total acordado y debe quedar registrado con sus condiciones.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "plazo-de-pago",
    term: "Plazo de pago",
    category: "caja-administracion",
    definition:
      "Tiempo acordado para pagar a proveedores o para que los clientes paguen una venta. Afecta directamente la caja.",
    relatedCourseSlugs: ["costos-y-precios"],
  },
  {
    id: "conciliacion",
    term: "Conciliación",
    category: "caja-administracion",
    definition:
      "Comparación entre los registros propios y los movimientos informados por el banco o el medio de pago, para detectar diferencias.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "inventario",
    term: "Inventario",
    category: "caja-administracion",
    definition:
      "Conjunto de productos disponibles para vender, en depósito o en proceso. Tener inventario inmoviliza dinero y requiere control.",
    relatedCourseSlugs: ["costos-y-precios", "herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "cliente",
    term: "Cliente",
    category: "clientes-marca",
    definition:
      "Persona u organización que compra o usa un producto o servicio. Conocer sus necesidades permite tomar mejores decisiones.",
    relatedCourseSlugs: ["mi-primer-emprendimiento", "mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "segmento",
    term: "Segmento de clientes",
    category: "clientes-marca",
    definition:
      "Grupo de clientes con características, necesidades o comportamientos similares. Permite enfocar la propuesta en lugar de intentar llegar a todos.",
    relatedCourseSlugs: ["mi-primer-emprendimiento"],
  },
  {
    id: "propuesta-de-valor",
    term: "Propuesta de valor",
    category: "clientes-marca",
    definition:
      "Beneficio concreto que ofrece un emprendimiento para resolver un problema o mejorar una situación. Explica por qué un cliente elegiría esa opción.",
    relatedCourseSlugs: ["mi-primer-emprendimiento", "mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "posicionamiento",
    term: "Posicionamiento",
    category: "clientes-marca",
    definition:
      "Lugar que ocupa una marca en la mente del cliente frente a otras alternativas. Se construye con decisiones coherentes de producto, precio y comunicación.",
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "marca",
    term: "Marca",
    category: "clientes-marca",
    definition:
      "Conjunto de nombre, símbolos, voz y experiencias que identifican y diferencian una propuesta. No es solo el logo.",
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "identidad-visual",
    term: "Identidad visual",
    category: "clientes-marca",
    definition:
      "Sistema de logo, colores, tipografías, fotos y recursos gráficos que se usan de forma coherente en todos los puntos de contacto.",
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "catalogo",
    term: "Catálogo",
    category: "clientes-marca",
    definition:
      "Presentación ordenada de productos o servicios con nombres, fotos, precios y condiciones. Ayuda a que el cliente entienda y elija.",
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "reputacion",
    term: "Reputación",
    category: "clientes-marca",
    definition:
      "Percepción que se construye con las experiencias de los clientes, las opiniones y la comunicación. Se cuida con consistencia y respuestas claras.",
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"],
  },
  {
    id: "canal-de-venta",
    term: "Canal de venta",
    category: "operacion-digital",
    definition:
      "Medio por el que el cliente descubre, consulta y compra: atención presencial, WhatsApp, redes sociales, una tienda web o una feria.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "conversion",
    term: "Conversión",
    category: "operacion-digital",
    definition:
      "Proporción de personas que avanzan de una etapa a otra, por ejemplo de una consulta a una venta o de una visita a una compra.",
    example:
      "Ejemplo ilustrativo: si 20 personas consultan y 5 compran, la conversión de consulta a venta es del 25 %.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "tablero",
    term: "Tablero de control",
    category: "operacion-digital",
    definition:
      "Panel con pocos indicadores clave para tomar decisiones. No es un listado de todos los datos disponibles.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "automatizacion",
    term: "Automatización",
    category: "operacion-digital",
    definition:
      "Uso de reglas o herramientas para que tareas repetitivas se ejecuten con menos intervención manual, manteniendo control y revisión humana.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "ia-responsable",
    term: "IA responsable",
    category: "operacion-digital",
    definition:
      "Uso de herramientas de inteligencia artificial con verificación humana, datos mínimos y transparencia. No se delegan decisiones sensibles sin revisión.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "copia-de-seguridad",
    term: "Copia de seguridad",
    category: "operacion-digital",
    definition:
      "Archivo adicional de datos o documentos que permite recuperar la información si se pierde el dispositivo o se borra por error.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "privacidad-por-diseno",
    term: "Privacidad por diseño",
    category: "operacion-digital",
    definition:
      "Criterio de trabajo que consiste en pedir solo los datos necesarios, protegerlos y permitir que la persona los elimine cuando quiera.",
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio"],
  },
];

export function getGlossaryTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.id === id);
}
