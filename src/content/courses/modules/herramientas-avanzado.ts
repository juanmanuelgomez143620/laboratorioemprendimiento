import type { CourseModule } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const herramientasAvanzado: CourseModule = {
  id: "modulo-operacion-control",
  title: "Operación digital y control",
  description:
    "Cómo convertir canales sueltos en un recorrido de pedido confiable y cómo medir, automatizar y proteger la información sin agregar complejidad innecesaria.",
  lessons: [
    {
      id: "operacion-digital-pedidos",
      slug: "del-pedido-al-cobro",
      title: "Del pedido al cobro: operación digital",
      summary:
        "Diseñar un recorrido claro desde la consulta hasta la entrega y la posventa, con responsables, herramientas y métricas.",
      estimatedMinutes: 30,
      objectives: [
        "Mapear el recorrido del cliente y detectar puntos de fricción.",
        "Definir herramientas, responsables y tiempos para cada paso del pedido.",
        "Registrar pedidos con los datos mínimos y proteger la privacidad.",
        "Medir respuesta, conversión, cumplimiento y repetición.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Tener WhatsApp Business no es tener una operación digital. La operación es el recorrido completo: cómo alguien descubre el producto, pregunta, recibe una respuesta, confirma un pedido, paga, recibe y vuelve a comprar. Cuando cada paso vive en un lugar distinto y depende de la memoria, se pierden ventas y se acumulan errores.",
        },
        {
          type: "heading",
          text: "Mapa del recorrido",
          level: 2,
        },
        {
          type: "table",
          caption: "Un recorrido simple, con responsables y tiempos",
          headers: ["Etapa", "Qué hace el cliente", "Qué hace el negocio", "Herramienta posible", "Tiempo objetivo"],
          rows: [
            ["Descubrimiento", "Ve el producto o la marca.", "Publica información clara y vigente.", "Redes, catálogo, QR.", "Permanente"],
            ["Consulta", "Pregunta precio, stock o entrega.", "Responde con información completa.", "WhatsApp, redes, teléfono.", "Mismo día hábil"],
            ["Cotización o elección", "Compara opciones y decide.", "Confirma alcance, precio y condiciones.", "Mensaje plantilla o formulario.", "Menos de 24 horas"],
            ["Pedido", "Confirma producto y datos de entrega.", "Registra número, detalle, pago y estado.", "Planilla o cuaderno de pedidos.", "Al confirmar"],
            ["Pago", "Paga según las opciones.", "Verifica y emite comprobante.", "Transferencia, billetera, efectivo.", "Antes de preparar"],
            ["Preparación", "Espera novedades.", "Produce, controla y avisa demoras.", "Calendario y lista de tareas.", "Según lo prometido"],
            ["Entrega", "Recibe o retira.", "Cumple horario y confirma recepción.", "Logística propia o aliada.", "Ventana acordada"],
            ["Posventa", "Usa el producto o consulta.", "Agradece, explica cuidados y pide feedback.", "Mensaje de seguimiento.", "Dentro de la semana"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Cada paso de más pierde ventas",
          text: "Si el cliente tiene que repetir datos, esperar una respuesta que no llega o adivinar cómo pagar, el recorrido tiene fricción. No agregues una herramienta nueva sin eliminar antes un paso innecesario.",
        },
        {
          type: "heading",
          text: "Un pedido no es un mensaje suelto",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Registrá cada pedido con un número y un estado. Los datos mínimos son: número de pedido, fecha, producto o servicio, cantidad, precio, forma de pago, fecha y lugar de entrega, estado y próxima acción. No necesitás pedir documento, fecha de nacimiento ni datos de salud para vender una planta o una vianda. La información que no usás también es un riesgo que no deberías asumir.",
        },
        {
          type: "table",
          caption: "Estados que evitan perder el hilo",
          headers: ["Estado", "Qué significa", "Próxima acción"],
          rows: [
            ["Nuevo", "Llegó una consulta o un pedido sin confirmar.", "Responder y verificar disponibilidad."],
            ["Confirmado", "Producto, precio, pago y entrega acordados.", "Preparar y reservar stock."],
            ["En preparación", "El trabajo está en curso.", "Controlar calidad y avisar demoras."],
            ["Listo", "El pedido está para entregar o retirar.", "Coordinar la entrega."],
            ["Entregado", "El cliente recibió el pedido.", "Confirmar recepción y hacer posventa."],
            ["Cerrado", "La venta terminó y no hay acciones pendientes.", "Archivar y registrar el resultado."],
            ["Cancelado", "El pedido no se concretó.", "Anotar el motivo y liberar stock."],
          ],
        },
        {
          type: "heading",
          text: "Plantillas y acuerdos de servicio",
          level: 2,
        },
        {
          type: "list",
          items: [
            "**Confirmación:** producto, cantidad, precio, forma de pago y fecha de entrega.",
            "**Pago:** datos, monto exacto y plazo para acreditar.",
            "**Demora:** aviso proactivo, motivo y nueva fecha realista.",
            "**Entrega:** ventana horaria, lugar y qué hacer si no hay quien reciba.",
            "**Posventa:** agradecimiento, instrucciones de uso y canal para consultas.",
            "**Reclamo:** recepción, plazo de respuesta y opción de solución.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Prometé lo que podés sostener",
          text: "Un tiempo de respuesta honesto genera más confianza que una promesa de atención inmediata que no se cumple. Si no podés responder en el momento, configurá un mensaje de ausencia que indique cuándo vas a contestar.",
        },
        {
          type: "heading",
          text: "Métricas del recorrido",
          level: 2,
        },
        {
          type: "table",
          caption: "Indicadores simples que podés registrar a mano",
          headers: ["Indicador", "Cómo se calcula", "Qué decisión habilita"],
          rows: [
            ["Tiempo de primera respuesta", "Horas entre consulta y respuesta.", "Ajustar horarios o respuestas rápidas."],
            ["Conversión de consulta a pedido", "Pedidos ÷ consultas calificadas.", "Revisar información, precio u oferta."],
            ["Pedidos con error", "Pedidos con error ÷ pedidos totales.", "Mejorar confirmación y control."],
            ["Entregas en fecha", "Entregas puntuales ÷ entregas totales.", "Revisar capacidad y tiempos prometidos."],
            ["Repetición", "Clientes que vuelven ÷ clientes atendidos.", "Evaluar experiencia y posventa."],
            ["Reclamos resueltos", "Reclamos cerrados ÷ reclamos recibidos.", "Detectar fallas de proceso."],
          ],
        },
        {
          type: "example",
          title: "Ejemplo: vivero con pedidos por WhatsApp",
          text: "Un vivero ficticio recibe treinta consultas en una semana y confirma doce pedidos. Tres se pierden porque la planta ya no tenía stock y cinco se entregan tarde porque la persona que prepara los pedidos no veía las confirmaciones. El vivero crea un catálogo con disponibilidad actualizada, una planilla de pedidos con estados y dos mensajes de confirmación. También define que los pedidos confirmados antes de las 10 se preparan ese día y que los viernes no se entregan. No agrega una aplicación nueva: ordena lo que ya tenía. En la semana siguiente puede saber cuántas consultas se convirtieron, cuántos pedidos fallaron y cuánto tardó en responder.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "activity",
          title: "Actividad práctica · Rediseñá tu recorrido",
          intro:
            "Elegí un solo producto o servicio y seguí el recorrido real de una consulta hasta la posventa.",
          steps: [
            "Dibujá los pasos actuales, aunque estén desordenados.",
            "Marcá dónde se pierde información, se espera de más o se repite una tarea.",
            "Elegí tres mejoras que puedas aplicar esta semana.",
            "Definí para cada una: responsable, herramienta, tiempo y respaldo manual.",
            "Hacé una prueba con cinco pedidos reales o simulados.",
            "Medí respuesta, errores y entregas en fecha antes y después.",
          ],
          closing:
            "Una operación mejor no es la que usa más herramientas: es la que permite que el cliente y vos sepan siempre qué sigue.",
        },
        {
          type: "checklist",
          title: "Control antes de cerrar un pedido",
          items: [
            "El pedido tiene número y estado actualizado.",
            "Producto, cantidad, precio y forma de pago coinciden con lo acordado.",
            "La fecha y el lugar de entrega están confirmados por el cliente.",
            "El pago fue verificado antes de preparar o despachar.",
            "El cliente recibió una confirmación clara.",
            "Guardé solo los datos necesarios y no los compartí sin permiso.",
            "Registré el motivo si el pedido se canceló.",
          ],
        },
      ],
      keyIdeas: [
        "La operación digital es el recorrido completo, no un canal aislado.",
        "Un pedido necesita número, estado, responsable y próxima acción.",
        "Las métricas de respuesta, conversión, errores y repetición muestran dónde mejorar.",
        "La privacidad también es parte de la experiencia: pedí solo los datos necesarios.",
      ],
      resourceSlugs: ["guia-canales-digitales", "guia-organizacion-administrativa"],
      toolIds: ["yo-emprendedor", "diagnostico-emprendedor"],
    },
    {
      id: "tablero-control-automatizacion",
      slug: "tablero-y-automatizacion",
      title: "Tablero de control y automatización responsable",
      summary:
        "Elegir pocos indicadores, construir un tablero simple y automatizar solo lo que reduce errores o libera tiempo.",
      estimatedMinutes: 32,
      objectives: [
        "Seleccionar indicadores útiles y evitar métricas de vanidad.",
        "Diseñar un tablero semanal o mensual en una planilla.",
        "Evaluar una automatización por beneficio, riesgo y mantenimiento.",
        "Documentar respaldos, accesos y respuesta ante incidentes.",
        "Completar un sistema operativo digital mínimo para el emprendimiento.",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Medir no es acumular números. Un tablero útil responde preguntas concretas: ¿estoy vendiendo?, ¿me queda margen?, ¿tengo caja?, ¿los clientes vuelven?, ¿estoy respondiendo a tiempo? Si un indicador no cambia una decisión, probablemente no necesites mirarlo cada semana. Pocos datos confiables valen más que una planilla enorme que nadie actualiza.",
        },
        {
          type: "heading",
          text: "Cinco indicadores suficientes",
          level: 2,
        },
        {
          type: "table",
          caption: "Un tablero mínimo para un emprendimiento pequeño",
          headers: ["Indicador", "Fórmula o fuente", "Frecuencia", "Decisión que habilita"],
          rows: [
            ["Ventas netas", "Cobros o ventas menos devoluciones y descuentos.", "Semanal", "Comparar con el objetivo y la estacionalidad."],
            ["Contribución", "Precio − costos variables de lo vendido.", "Semanal o mensual", "Revisar mezcla, precios y descuentos."],
            ["Caja disponible", "Saldo real menos compromisos próximos.", "Semanal", "Frenar compras, cobrar antes o ajustar pagos."],
            ["Clientes que repiten", "Clientes con más de una compra ÷ clientes atendidos.", "Mensual", "Evaluar experiencia y posventa."],
            ["Tiempo de respuesta o reclamos", "Horas de respuesta o reclamos ÷ pedidos.", "Semanal", "Corregir atención, información o capacidad."],
          ],
        },
        {
          type: "paragraph",
          text: "También conviene distinguir indicadores **adelantados** y **atrasados**. Las ventas son un resultado; las consultas calificadas, la respuesta a tiempo y la repetición son señales que pueden anticipar ese resultado. Elegí un indicador adelantado por objetivo y revisalo antes de que termine el mes.",
        },
        {
          type: "heading",
          text: "Un tablero en una hoja",
          level: 2,
        },
        {
          type: "table",
          caption: "Estructura simple para no mezclar datos y conclusiones",
          headers: ["Hoja", "Qué contiene", "Regla"],
          rows: [
            ["Datos", "Una fila por venta, gasto o pedido.", "No combines celdas ni mezcles totales con registros."],
            ["Cálculos", "Fórmulas de totales, márgenes y promedios.", "Una fórmula por columna, documentada."],
            ["Tablero", "Pocos indicadores y comparación con el objetivo.", "Sin datos personales innecesarios."],
            ["Respaldos", "Copia con fecha y registro de cambios.", "Probá restaurar una copia."],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Si el dato se carga mal, el tablero miente",
          text: "Revisá que las fechas tengan el mismo formato, que los montos estén en la misma moneda y que cada venta aparezca una sola vez. Una fórmula sofisticada no corrige un registro duplicado. Antes de confiar en el resultado, compará una muestra con los comprobantes.",
        },
        {
          type: "heading",
          text: "Automatización con criterio",
          level: 2,
        },
        {
          type: "table",
          caption: "Automatizaciones posibles y sus riesgos",
          headers: ["Automatización", "Problema que resuelve", "Riesgo a controlar", "Verificación humana"],
          rows: [
            ["Confirmación de pedido", "Evita olvidos y repeticiones.", "Enviar datos incorrectos o a la persona equivocada.", "Revisar plantilla y número de destino."],
            ["Recordatorio de entrega", "Reduce ausencias y demoras.", "Mensajes fuera de horario o duplicados.", "Probar con casos reales y límite de envío."],
            ["Aviso de stock bajo", "Anticipa faltantes.", "Umbral mal configurado.", "Revisar semanalmente la lista."],
            ["Copia de seguridad", "Protege archivos importantes.", "Copia incompleta o ilegible.", "Restaurar una prueba una vez al mes."],
            ["Resumen semanal", "Ahorra tiempo de revisión.", "Incluir datos erróneos o incompletos.", "Comparar con la fuente original."],
          ],
        },
        {
          type: "paragraph",
          text: "Empezá por una tarea repetitiva y con bajo riesgo. Describí el disparador, la acción y el resultado esperado. Probalo con datos reales y con casos límite: un pedido cancelado, un cliente que escribe dos veces, un producto sin stock. Dejá siempre una forma manual de continuar si la herramienta falla. Automatizar no es delegar el criterio: es liberar tiempo para decisiones que sí necesitan atención humana.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "No automatices una decisión que no entendés",
          text: "Si no podés explicar cómo se calcula un precio, un descuento o un stock mínimo, una herramienta no lo va a resolver. Primero definí la regla y probala a mano. Después evaluá si conviene automatizarla.",
        },
        {
          type: "heading",
          text: "Seguridad y continuidad",
          level: 2,
        },
        {
          type: "checklist",
          title: "Protocolo mínimo de datos y accesos",
          items: [
            "Las cuentas importantes tienen contraseñas distintas y verificación en dos pasos cuando está disponible.",
            "Sé qué persona tiene acceso a cada carpeta, cuenta o grupo.",
            "Las copias de seguridad tienen fecha y probé restaurar al menos una.",
            "Tengo un registro de qué hacer si pierdo el teléfono o me bloquean una cuenta.",
            "No guardo datos de clientes que no necesito para la operación.",
            "Sé cómo exportar la información si decido dejar de usar una herramienta.",
            "Reviso permisos y suscripciones una vez al mes.",
          ],
        },
        {
          type: "example",
          title: "Ejemplo: servicio de mantenimiento con recordatorios",
          text: "Un servicio ficticio de mantenimiento de jardines pierde turnos porque olvida confirmar. Crea un mensaje de recordatorio 24 horas antes y otro el mismo día. Al principio lo revisa manualmente para no enviar mensajes a clientes que cancelaron. Después de dos semanas, mide cuántos turnos se pierden y cuántos mensajes requieren corrección. También programa una copia semanal de la planilla de clientes y prueba restaurarla. La automatización no elimina la atención: reduce olvidos y libera tiempo para visitar jardines.",
          disclaimer: DISCLAIMER,
        },
        {
          type: "activity",
          title: "Entregable · Sistema operativo digital",
          intro:
            "Documentá el conjunto mínimo de herramientas, registros y rutinas que permite operar sin depender de la memoria.",
          steps: [
            "Dibujá el mapa de carpetas y definí dónde va cada tipo de archivo.",
            "Armá una planilla con ventas, gastos, pedidos y stock básico.",
            "Elegí cinco indicadores y escribí cómo se calculan.",
            "Diseñá el recorrido de un pedido con estados y responsables.",
            "Seleccioná una automatización de bajo riesgo y probala.",
            "Definí la rutina de copias, accesos y recuperación.",
            "Escribí una política breve de uso de IA y datos.",
          ],
          closing:
            "El sistema está completo cuando otra persona puede encontrar la información, continuar un pedido y saber qué hacer si una herramienta falla.",
        },
        {
          type: "fields",
          title: "Sistema operativo digital del emprendimiento",
          items: [
            { label: "Mapa de carpetas y nombres de archivo", lines: 3 },
            { label: "Planilla de ventas, gastos, pedidos y stock", lines: 3 },
            { label: "Cinco indicadores y fórmula de cada uno", lines: 4 },
            { label: "Recorrido del pedido: etapas, responsable y herramienta", lines: 4 },
            { label: "Automatización elegida: disparador, acción y respaldo manual", lines: 3 },
            { label: "Rutina de copias y prueba de restauración", lines: 2 },
            { label: "Accesos, contraseñas y protocolo ante pérdida o bloqueo", lines: 3 },
            { label: "Política de IA: usos permitidos, revisión y datos prohibidos", lines: 3 },
            { label: "Plan de implementación de 30 días", lines: 4 },
          ],
        },
        {
          type: "checklist",
          title: "Antes de sumar una herramienta nueva",
          items: [
            "Resuelve un problema concreto que ya identificaste.",
            "Puedo probarla con pocos datos antes de migrar todo.",
            "Sé cuánto cuesta y qué pasa si dejo de pagarla.",
            "Puedo exportar la información a un formato abierto.",
            "Entiendo dónde se guardan los datos y quién puede verlos.",
            "Tengo una alternativa manual si falla.",
            "Definí cómo voy a medir si realmente ahorra tiempo o reduce errores.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Alcance y responsabilidad",
          text: "Las herramientas, condiciones y normas de privacidad cambian. Esta lección ofrece criterios de organización y no reemplaza asesoramiento técnico, legal ni la lectura de las condiciones de cada servicio. No ingreses datos sensibles en herramientas que no controlás.",
        },
      ],
      keyIdeas: [
        "Un tablero útil tiene pocos indicadores confiables vinculados a decisiones.",
        "La calidad del dato importa más que la sofisticación de la fórmula.",
        "Automatizar exige probar casos límite, mantener un respaldo manual y revisar resultados.",
        "La continuidad del negocio depende de accesos, copias y un protocolo ante incidentes.",
      ],
      resourceSlugs: [
        "guia-organizacion-administrativa",
        "guia-canales-digitales",
        "presupuesto-basico",
      ],
      toolIds: ["diagnostico-emprendedor", "yo-emprendedor", "costoclaro"],
    },
  ],
};
