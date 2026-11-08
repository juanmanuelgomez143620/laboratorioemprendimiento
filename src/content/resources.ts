import type { Resource } from "@/types/resource";

export const resources: Resource[] = [
  {
    id: "presupuesto-basico",
    slug: "presupuesto-basico",
    title: "Plantilla básica de presupuesto",
    description:
      "Una planilla imprimible y una versión CSV para estimar ingresos, costos fijos y variables de un mes.",
    category: "costos",
    type: "Plantilla",
    tags: ["presupuesto", "flujo de caja", "costos fijos", "planificación mensual"],
    useCase:
      "Úsala antes de empezar un mes o una temporada para anticipar cuánto necesitás vender y qué gastos debés cubrir.",
    content: [
      {
        type: "paragraph",
        text: "Un presupuesto es una estimación escrita de lo que esperás cobrar y gastar en un período. No sirve para adivinar el futuro: sirve para tomar decisiones con anticipación. Esta plantilla te ayuda a separar los ingresos de los costos, observar si el resultado proyectado alcanza y detectar qué partidas necesitás revisar.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Cómo usar la plantilla",
        text: "Completá primero las columnas de los tres meses con datos propios. Si no tenés un dato, dejá el campo vacío y anotá cómo vas a obtenerlo. No improvises cifras solo para que el resultado sea positivo.",
      },
      {
        type: "heading",
        text: "Paso a paso",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Reuní facturas, tickets y registros de ventas de los últimos meses.",
          "Separá los ingresos por tipo: ventas, servicios, adelantos y otros.",
          "Listá los costos fijos que se pagan aunque no vendas.",
          "Estimá los costos variables por unidad vendida y multiplicá por la cantidad esperada.",
          "Calculá el resultado de cada mes: ingresos menos costos totales.",
          "Compará el resultado con el dinero disponible y con tus objetivos.",
          "Al terminar el mes, reemplazá las estimaciones por datos reales y anotá las diferencias.",
        ],
      },
      {
        type: "table",
        caption: "Estructura del presupuesto mensual",
        headers: ["Categoría", "Concepto", "Mes 1", "Mes 2", "Mes 3"],
        rows: [
          ["Ingresos", "Ventas de productos", "", "", ""],
          ["Ingresos", "Servicios prestados", "", "", ""],
          ["Ingresos", "Otros ingresos del emprendimiento", "", "", ""],
          ["Costos variables", "Materias primas e insumos", "", "", ""],
          ["Costos variables", "Envases y etiquetas", "", "", ""],
          ["Costos variables", "Comisiones y entregas", "", "", ""],
          ["Costos fijos", "Alquiler o uso del espacio", "", "", ""],
          ["Costos fijos", "Servicios e internet", "", "", ""],
          ["Costos fijos", "Suscripciones y herramientas", "", "", ""],
          ["Resultado", "Total de ingresos − total de costos", "", "", ""],
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Un colchón para imprevistos",
        text: "Agregá una línea de reserva para reparaciones, reposición de equipos o meses con menos ventas. Aunque no se use, ayuda a no comprometer todo el ingreso.",
      },
      {
        type: "checklist",
        title: "Antes de aprobar tu presupuesto",
        items: [
          "Todos los montos están en la misma moneda y con fecha de referencia.",
          "Incluí los costos de entrega, comisiones y packaging.",
          "Valoricé mi propio trabajo o dejé explícito que no está incluido.",
          "Separé el dinero del emprendimiento del dinero personal.",
          "Anoté qué supuestos usé y cuándo voy a revisarlos.",
          "Evité proyectar ventas sin respaldo de meses anteriores o de una prueba concreta.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance de esta plantilla",
        text: "Es una herramienta educativa de planificación. No reemplaza asesoramiento contable ni el registro fiscal que corresponda a tu actividad. Las obligaciones e impuestos dependen de la situación de cada emprendimiento.",
      },
    ],
    download: {
      href: "/recursos/plantilla-presupuesto.csv",
      label: "Descargar plantilla CSV",
      fileType: "CSV",
    },
    relatedCourseSlugs: [
      "mi-primer-emprendimiento",
      "costos-y-precios",
      "herramientas-digitales-para-mi-negocio",
    ],
  },
  {
    id: "ficha-de-costos",
    slug: "ficha-de-costos",
    title: "Ficha de costos",
    description:
      "Modelo para calcular el costo de una tanda o servicio, incluyendo mermas, mano de obra y costos indirectos.",
    category: "costos",
    type: "Ficha",
    tags: ["costo unitario", "márgenes", "precio", "mermas"],
    useCase:
      "Completala cada vez que cambien tus insumos, tu rendimiento o el tiempo que dedicás a producir.",
    content: [
      {
        type: "paragraph",
        text: "Esta ficha ordena los datos necesarios para saber cuánto cuesta una unidad vendible. No se trata solo de sumar ingredientes: también incluye el trabajo, los envases, los servicios usados y lo que se pierde durante el proceso. Completar la ficha con datos reales es el paso previo para definir un precio con margen.",
      },
      {
        type: "heading",
        text: "Fórmula de trabajo",
        level: 2,
      },
      {
        type: "quote",
        text: "Costo unitario = (materiales + mano de obra + costos indirectos del proceso) ÷ unidades vendibles obtenidas",
      },
      {
        type: "table",
        caption: "Ejemplo ficticio: lote de 20 unidades vendibles",
        headers: ["Concepto", "Cálculo", "Monto"],
        rows: [
          ["Materias primas", "Compras del lote", "$8.000"],
          ["Envases y etiquetas", "20 unidades", "$1.000"],
          ["Mano de obra", "4 horas × $1.000", "$4.000"],
          ["Costos indirectos", "Gas y desgaste estimado", "$1.000"],
          ["Costo total", "Suma de conceptos", "$14.000"],
          ["Unidades vendibles", "Producción menos mermas", "20"],
          ["Costo unitario", "$14.000 ÷ 20", "$700"],
        ],
      },
      {
        type: "paragraph",
        text: "El ejemplo es ficticio y sirve solo para mostrar el procedimiento. Reemplazalo por tus propios datos. Si tenés 24 unidades producidas pero 4 no se pueden vender, el divisor es 20. Si la mano de obra se reparte con otra actividad, asigná solo la proporción correspondiente.",
      },
      {
        type: "table",
        caption: "Planilla de trabajo",
        headers: ["Concepto", "Detalle", "Monto por lote", "Monto por unidad"],
        rows: [
          ["Materias primas", "", "", ""],
          ["Envases y etiquetas", "", "", ""],
          ["Mano de obra directa", "", "", ""],
          ["Gas, energía u otros servicios", "", "", ""],
          ["Alquiler o uso del espacio", "", "", ""],
          ["Comisiones de venta", "", "", ""],
          ["Otros costos", "", "", ""],
          ["Costo total", "", "", ""],
          ["Unidades vendibles", "", "", ""],
        ],
      },
      {
        type: "checklist",
        title: "Revisión antes de usar el costo",
        items: [
          "Usé precios actuales de los insumos.",
          "Incluí mermas o unidades que no se venderán.",
          "Valoricé mi tiempo de trabajo.",
          "No cargué dos veces la misma compra.",
          "Anoté la fecha y la cantidad producida.",
          "Guardé los comprobantes que respaldan los montos.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Actualización",
        text: "La ficha no es un documento que se completa una vez y queda archivado. Revisala cuando cambie un proveedor, aumente un insumo, se modifique el rendimiento o varíe el tiempo de producción.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance educativo",
        text: "La ficha no determina por sí sola el precio final ni reemplaza asesoramiento profesional. El precio también debe considerar el valor para el cliente, el mercado, los impuestos y las comisiones aplicables.",
      },
    ],
    download: {
      href: "/recursos/ficha-de-costos.csv",
      label: "Descargar ficha CSV",
      fileType: "CSV",
    },
    relatedCourseSlugs: ["costos-y-precios", "mi-primer-emprendimiento"],
  },
  {
    id: "plan-de-negocios-simple",
    slug: "plan-de-negocios-simple",
    title: "Modelo sencillo de plan de negocios",
    description:
      "Un plan de una página para ordenar problema, clientes, propuesta, costos, objetivos y próximos pasos.",
    category: "planificacion",
    type: "Modelo",
    tags: ["plan de negocios", "objetivos", "validación", "próximos pasos"],
    useCase:
      "Completalo al iniciar un emprendimiento o cuando necesites revisar el rumbo de uno que ya está en marcha.",
    content: [
      {
        type: "paragraph",
        text: "Este modelo está pensado para una primera etapa. No busca producir un documento extenso ni reemplazar un plan formal solicitado por una entidad financiera. Su objetivo es que puedas explicar tu proyecto en una página y usarlo para decidir los próximos pasos.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Cómo completarlo",
        text: "Escribí frases breves y concretas. Si no tenés evidencia para una sección, escribí la pregunta que necesitás responder. Es más honesto dejar un espacio en blanco que inventar un dato.",
      },
      {
        type: "fields",
        title: "1. Problema u oportunidad",
        items: [
          { label: "¿Qué necesidad concreta detecté?", lines: 3 },
          { label: "¿Qué evidencia tengo? (conversaciones, preventas, observación)", lines: 3 },
        ],
      },
      {
        type: "fields",
        title: "2. Clientes iniciales",
        items: [
          { label: "¿A quiénes voy a servir primero?", lines: 2 },
          { label: "¿Dónde están y cómo llego a ellos?", lines: 2 },
          { label: "¿Qué necesitan y qué valoran?", lines: 3 },
        ],
      },
      {
        type: "fields",
        title: "3. Propuesta de valor y oferta",
        items: [
          { label: "Propuesta en una frase", lines: 3 },
          { label: "Qué incluye mi primera versión", lines: 3 },
          { label: "¿En qué me diferencio de las alternativas actuales?", lines: 2 },
        ],
      },
      {
        type: "fields",
        title: "4. Costos, precio y recursos",
        items: [
          { label: "Costo unitario estimado y cómo lo calculé", lines: 2 },
          { label: "Precio tentativo y margen", lines: 2 },
          { label: "Recursos que ya tengo", lines: 2 },
          { label: "Inversión máxima que puedo asumir sin comprometer gastos básicos", lines: 2 },
          { label: "Aliados o apoyos posibles", lines: 2 },
        ],
      },
      {
        type: "fields",
        title: "5. Objetivo y próximos pasos",
        items: [
          { label: "Objetivo medible a 90 días", lines: 2 },
          { label: "Próximos tres pasos", lines: 4 },
          { label: "Fecha de revisión semanal", lines: 1 },
          { label: "¿Qué resultado me haría cambiar de rumbo?", lines: 2 },
        ],
      },
      {
        type: "checklist",
        title: "Control de calidad del plan",
        items: [
          "El problema está descrito con una situación concreta, no con una idea general.",
          "El cliente inicial es un grupo específico y accesible.",
          "La propuesta explica un beneficio, no solo una característica.",
          "El precio parte de un costo calculado.",
          "El objetivo se puede medir con un número o un hecho verificable.",
          "Hay una fecha para revisar y ajustar.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Importante",
        text: "Este modelo es una herramienta educativa. No es un trámite oficial, no garantiza financiamiento y no reemplaza asesoramiento contable, legal ni evaluación de una entidad crediticia.",
      },
    ],
    relatedCourseSlugs: ["mi-primer-emprendimiento", "costos-y-precios"],
  },
  {
    id: "checklist-identidad-comercial",
    slug: "lista-verificacion-identidad-comercial",
    title: "Lista de verificación para identidad comercial",
    description:
      "Una revisión práctica de nombre, logotipo, colores, fotos, catálogo y coherencia antes de publicar.",
    category: "marketing",
    type: "Lista de verificación",
    tags: ["marca", "logo", "catálogo", "redes sociales", "accesibilidad"],
    useCase:
      "Usala antes de lanzar una marca, actualizar tus redes o imprimir materiales comerciales.",
    content: [
      {
        type: "paragraph",
        text: "La identidad comercial se construye con muchas decisiones pequeñas. Esta lista te ayuda a revisar que tu nombre, tus piezas y tu atención cuenten una historia coherente. No hace falta tener todo perfecto para empezar; sí conviene evitar errores que confundan al cliente.",
      },
      {
        type: "checklist",
        title: "Nombre y promesa",
        items: [
          "El nombre se pronuncia y se escribe con facilidad.",
          "El nombre no promete algo que el emprendimiento no puede cumplir.",
          "Verifiqué si el nombre está siendo usado por otra marca en mi zona o rubro.",
          "Puedo explicar en una frase quién soy, qué ofrezco y a quién sirvo.",
          "La promesa se corresponde con la experiencia real de compra.",
        ],
      },
      {
        type: "checklist",
        title: "Logotipo y colores",
        items: [
          "El logotipo se lee en tamaño pequeño.",
          "Funciona en blanco y negro y sobre fondos claros y oscuros.",
          "La paleta tiene pocos colores y contraste suficiente para leer textos.",
          "Tengo una versión horizontal, una cuadrada y una en blanco.",
          "Guardé los archivos editables y una copia de respaldo.",
          "No copié el logotipo ni la identidad visual de otra marca.",
        ],
      },
      {
        type: "checklist",
        title: "Fotos y productos",
        items: [
          "Las fotos muestran el producto real, sin alterar color, tamaño o contenido.",
          "Hay una imagen general, una de detalle y una referencia de escala cuando hace falta.",
          "El fondo y la iluminación permiten ver con claridad.",
          "Las imágenes están actualizadas y no mezclan versiones viejas del producto.",
          "Si aparecen personas, cuento con su autorización para usar la imagen.",
        ],
      },
      {
        type: "checklist",
        title: "Catálogo y canales",
        items: [
          "Cada producto incluye presentación, precio, disponibilidad y condiciones.",
          "El catálogo tiene fecha de vigencia o un mecanismo claro de actualización.",
          "El canal de pedido está activo y tiene un horario de respuesta real.",
          "Los códigos QR fueron probados en al menos dos teléfonos.",
          "El texto se lee bien en un celular: tamaño adecuado y párrafos cortos.",
          "Los datos de contacto y enlaces están revisados.",
        ],
      },
      {
        type: "checklist",
        title: "Experiencia y privacidad",
        items: [
          "La atención usa un tono coherente con la identidad.",
          "Las respuestas frecuentes están preparadas.",
          "Solo pido los datos necesarios para la venta y la entrega.",
          "No publico conversaciones, teléfonos ni imágenes de clientes sin permiso.",
          "Las condiciones de cambios, devoluciones y entrega son comprensibles.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Revisión semestral",
        text: "Volvé a esta lista cada seis meses o cuando cambie tu propuesta. Marcá los puntos pendientes y elegí uno para resolver esta semana. La identidad se mejora con constancia, no con una renovación completa cada mes.",
      },
    ],
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial", "herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "guia-fotografia-celular",
    slug: "guia-fotografia-celular",
    title: "Guía de fotografía de productos con celular",
    description:
      "Luz, fondo, encuadre, estabilidad y edición mínima para obtener fotos comerciales claras sin equipamiento profesional.",
    category: "marketing",
    type: "Guía",
    tags: ["fotografía", "celular", "producto", "catálogo", "imagen"],
    useCase:
      "Consultala antes de una sesión de fotos para tu catálogo o tus redes sociales.",
    content: [
      {
        type: "paragraph",
        text: "Una buena foto comercial no depende de una cámara costosa. Depende de mostrar el producto con claridad y honestidad. Esta guía resume un procedimiento reproducible con un teléfono, una ventana y elementos simples que probablemente ya tenés.",
      },
      {
        type: "heading",
        text: "1. Preparar el espacio",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Limpiá el producto, la mesa y el fondo. Las manchas y objetos distraen.",
          "Buscá una pared o tela de color neutro: blanco, gris claro o beige.",
          "Ubicate cerca de una ventana con luz natural indirecta; evitá el sol directo.",
          "Si la luz es muy fuerte, usá una hoja blanca o una tela fina como difusor.",
          "Apagá el flash salvo que sepas controlarlo; suele generar brillos y sombras duras.",
          "Limpiá la lente del teléfono con una tela suave.",
        ],
      },
      {
        type: "heading",
        text: "2. Encuadrar y enfocar",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Activá la cuadrícula de la cámara para alinear el producto.",
          "Dejá un margen alrededor del producto; no lo recortes contra el borde.",
          "Tocá la pantalla sobre el producto para enfocar.",
          "Ajustá la exposición deslizando el control de brillo si la imagen queda oscura o quemada.",
          "Apoyá el teléfono en un libro, una caja o un soporte para evitar movimiento.",
          "Tomá varias versiones: frontal, lateral, cenital y de detalle.",
        ],
      },
      {
        type: "table",
        caption: "Tomas recomendadas por tipo de producto",
        headers: ["Tipo de producto", "Tomas mínimas", "Cuidado especial"],
        rows: [
          ["Alimentos", "General, corte o porción, empaque", "Mostrar la porción real y la fecha de elaboración."],
          ["Indumentaria", "Prenda completa, textura, uso o medidas", "Indicar talla y composición; evitar pinzas que cambien la caída."],
          ["Artesanías", "Pieza completa, detalle del trabajo, escala", "Mostrar variaciones naturales del material."],
          ["Servicios", "Resultado, proceso y espacio de trabajo", "No mostrar clientes sin autorización."],
          ["Cosméticos o cuidado personal", "Envase, textura, tamaño", "No inventar propiedades ni resultados."],
        ],
      },
      {
        type: "heading",
        text: "3. Editar con moderación",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Ajustá brillo, contraste y balance de blancos. Recortá para centrar y mantener proporciones consistentes. No cambies el color del producto ni borres defectos relevantes. Si usás una aplicación, evitá filtros intensos que alteren la apariencia. Guardá el original por separado para poder volver a editar sin pérdida.",
      },
      {
        type: "checklist",
        title: "Antes de publicar",
        items: [
          "La foto representa el color, tamaño y textura reales.",
          "El producto se distingue del fondo.",
          "No hay elementos personales o desordenados en el encuadre.",
          "La imagen se ve bien en la pantalla de un celular.",
          "El archivo tiene un nombre que permite encontrarlo.",
          "Cuento con autorización si aparece una persona, una marca o un espacio ajeno.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Imágenes generadas o editadas con IA",
        text: "No presentes una imagen generada como si fuera la foto real del producto. Si usás una herramienta de edición que modifica la imagen de manera significativa, evaluá si sigue representando lo que el cliente recibirá.",
      },
    ],
    relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial", "herramientas-digitales-para-mi-negocio"],
  },
  {
    id: "guia-organizacion-administrativa",
    slug: "guia-organizacion-administrativa",
    title: "Guía de organización administrativa básica",
    description:
      "Un sistema simple para guardar comprobantes, registrar ventas y gastos, proteger datos y revisar el orden cada semana.",
    category: "administracion",
    type: "Guía",
    tags: ["administración", "archivos", "comprobantes", "copias de seguridad", "rutina"],
    useCase:
      "Aplicala cuando la información del emprendimiento esté dispersa o necesites prepararte para ordenar la administración.",
    content: [
      {
        type: "paragraph",
        text: "La organización administrativa no consiste en tener una oficina impecable. Consiste en poder encontrar la información cuando la necesitás y en saber qué pasos siguen. Esta guía propone un sistema mínimo que podés sostener con un cuaderno, una carpeta digital o ambos.",
      },
      {
        type: "heading",
        text: "1. Definir un lugar para cada cosa",
        level: 2,
      },
      {
        type: "table",
        caption: "Sistema de carpetas sugerido",
        headers: ["Carpeta", "Contenido", "Frecuencia de revisión"],
        rows: [
          ["01_Administración", "Comprobantes, habilitaciones, contratos y trámites.", "Semanal"],
          ["02_Ventas", "Registro de ventas, pedidos y cobros.", "Diaria o semanal"],
          ["03_Compras_y_proveedores", "Facturas de compra, presupuestos y contactos.", "Semanal"],
          ["04_Productos", "Fichas de costo, fotos y descripciones.", "Cuando cambie el producto"],
          ["05_Marca", "Logotipo, colores, plantillas y catálogo vigente.", "Mensual"],
          ["06_Respaldos", "Copias con fecha de la información importante.", "Mensual"],
        ],
      },
      {
        type: "heading",
        text: "2. Registrar sin complicaciones",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Anotá cada venta el mismo día: fecha, producto, monto y forma de pago.",
          "Guardá los comprobantes de compra en una carpeta física o digital.",
          "Separá el dinero del emprendimiento del dinero personal.",
          "Registrá los gastos fijos mensuales y las fechas de vencimiento.",
          "Revisá semanalmente la diferencia entre lo cobrado y lo gastado.",
          "Una vez al mes, contrastá el registro con la cuenta o el efectivo disponible.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Un cuaderno también sirve",
        text: "Si preferís el papel, usá un cuaderno exclusivo para el emprendimiento y numerá las páginas. Pasá los totales a una planilla una vez por semana. La herramienta importa menos que la constancia.",
      },
      {
        type: "heading",
        text: "3. Proteger la información",
        level: 2,
      },
      {
        type: "checklist",
        items: [
          "Tengo al menos dos copias de los archivos importantes en lugares distintos.",
          "Las copias tienen fecha y puedo identificar cuál es la más reciente.",
          "No guardo datos de clientes que no necesito.",
          "No comparto documentos de identidad ni datos bancarios por canales abiertos.",
          "Uso contraseñas distintas para cuentas relevantes.",
          "Cierro sesión en computadoras compartidas.",
          "Reviso quién tiene acceso a mis carpetas y grupos.",
        ],
      },
      {
        type: "heading",
        text: "4. Rutina semanal de 20 minutos",
        level: 2,
      },
      {
        type: "table",
        headers: ["Minutos", "Tarea"],
        rows: [
          ["5", "Guardar y ordenar comprobantes de la semana."],
          ["5", "Actualizar el registro de ventas y gastos."],
          ["5", "Revisar pendientes, entregas y vencimientos."],
          ["5", "Hacer una copia de los archivos nuevos y anotar qué falta resolver."],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance",
        text: "Esta guía ofrece una organización básica de trabajo y no reemplaza asesoramiento contable, impositivo o legal. Las obligaciones formales dependen de la actividad y la situación de cada emprendimiento.",
      },
    ],
    relatedCourseSlugs: ["herramientas-digitales-para-mi-negocio", "mi-primer-emprendimiento"],
  },
  {
    id: "guia-canales-digitales",
    slug: "guia-canales-digitales",
    title: "Guía para probar enlaces, códigos QR y canales de atención",
    description:
      "Una lista práctica para comprobar que tu catálogo, tus enlaces y tus canales de consulta funcionan antes de compartirlos.",
    category: "herramientas",
    type: "Guía",
    tags: ["QR", "enlaces", "WhatsApp Business", "catálogo", "atención"],
    useCase:
      "Usala antes de publicar un catálogo, imprimir un código QR o sumar un canal de consultas nuevo.",
    content: [
      {
        type: "paragraph",
        text: "Un enlace roto o un código QR que no funciona puede hacer que un cliente interesado abandone la compra. La buena noticia es que se puede evitar con una prueba simple. Esta guía propone revisar cada canal desde el lugar de la persona que lo va a usar, no desde la comodidad de quien lo creó.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Antes de empezar",
        text: "Reuní el enlace del catálogo, el número de consultas, el código QR impreso o en pantalla y un teléfono distinto al tuyo. Si es posible, pedile a otra persona que haga la prueba sin darle explicaciones previas.",
      },
      {
        type: "heading",
        text: "1. Probar un enlace",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Abrí el enlace en una ventana privada o en otro teléfono, sin iniciar sesión con tu cuenta.",
          "Verificá que la página cargue y que se entienda qué ofrece el emprendimiento.",
          "Revisá que los precios, horarios y condiciones estén actualizados.",
          "Probá el botón o enlace de contacto y confirmá que abre el canal correcto.",
          "Revisá la versión móvil: textos, imágenes y botones deben verse sin ampliar la pantalla.",
          "Anotá la fecha de la última revisión y quién la hizo.",
        ],
      },
      {
        type: "heading",
        text: "2. Probar un código QR",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Escaneá el código con la cámara de dos teléfonos diferentes.",
          "Comprobá que el destino sea el enlace correcto y no una versión vieja del catálogo.",
          "Medí el tamaño desde la distancia real de uso: mostrador, vidriera o volante.",
          "Asegurate de que haya contraste suficiente y de que el código no esté torcido ni tapado.",
          "Incluí una frase breve que explique qué encontrará la persona al escanear.",
          "Guardá el archivo original para poder reimprimir sin perder calidad.",
        ],
      },
      {
        type: "table",
        caption: "Qué revisar en cada canal",
        headers: ["Canal", "Prueba mínima", "Información que no debería faltar"],
        rows: [
          ["Catálogo digital", "Abrir en un teléfono sin sesión iniciada", "Productos, precios vigentes, forma de pedido y zona de entrega."],
          ["WhatsApp Business", "Enviar un mensaje desde otro número", "Horario de respuesta, condiciones y opciones de pago."],
          ["Redes sociales", "Revisar el enlace de la biografía", "Contacto activo, ubicación y propuesta en una frase."],
          ["Código QR", "Escanear con dos teléfonos", "Destino correcto, texto de contexto y fecha de actualización."],
          ["Formulario de pedido", "Completarlo con datos ficticios", "Campos necesarios, confirmación y política de datos."],
        ],
      },
      {
        type: "heading",
        text: "3. Cuidar los datos y la confianza",
        level: 2,
      },
      {
        type: "checklist",
        title: "Revisión de privacidad y atención",
        items: [
          "Pido solo los datos necesarios para responder o entregar el pedido.",
          "Explico para qué uso los datos y no los comparto con terceros sin autorización.",
          "No publico conversaciones, teléfonos ni imágenes de clientes sin permiso.",
          "El horario de atención publicado es realista y se puede sostener.",
          "Las respuestas frecuentes están preparadas y son coherentes con las condiciones.",
          "Si uso una herramienta externa, sé dónde se guardan los datos y cuáles son sus condiciones.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Una prueba con otra persona",
        text: "Pedile a alguien que intente hacer un pedido o una consulta sin ayuda. Observá dónde duda, qué información busca y qué paso le resulta confuso. Ese recorrido vale más que una revisión hecha solo por quien diseñó el canal.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance",
        text: "Esta guía es educativa y no reemplaza las condiciones de uso, la normativa de protección de datos ni el asesoramiento legal aplicable a cada canal o actividad.",
      },
    ],
    relatedCourseSlugs: [
      "herramientas-digitales-para-mi-negocio",
      "mi-marca-y-mi-identidad-comercial",
    ],
  },
  {
    id: "flujo-de-caja-13-semanas",
    slug: "flujo-de-caja-13-semanas",
    title: "Flujo de caja de 13 semanas",
    description:
      "Una plantilla para anticipar cobros, pagos y brechas de caja durante un trimestre, con saldo mínimo y acciones de cobertura.",
    category: "costos",
    type: "Plantilla",
    tags: ["flujo de caja", "capital de trabajo", "cobros", "pagos", "13 semanas"],
    useCase:
      "Usala antes de aceptar un pedido grande, comprar inventario o comprometer pagos que dependen de cobros futuros.",
    content: [
      {
        type: "paragraph",
        text: "El flujo de caja muestra cuándo entra y sale el dinero. No reemplaza el cálculo de rentabilidad: lo complementa. Un emprendimiento puede tener margen positivo y, al mismo tiempo, quedarse sin dinero para comprar la próxima tanda si los cobros llegan después que los pagos. Esta plantilla de 13 semanas ayuda a ver ese desfase con anticipación.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Cómo usar la plantilla",
        text: "Completá una columna por semana. Usá fechas probables de cobro, no la fecha en que emitiste la factura. Separá los pagos que no podés postergar y definí un saldo mínimo que no querés perforar. Si el saldo proyectado cae por debajo de ese mínimo, marcá la brecha y elegí una acción.",
      },
      {
        type: "heading",
        text: "Paso a paso",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Anotá la caja inicial real: efectivo, cuenta y billeteras disponibles para el emprendimiento.",
          "Proyectá los cobros por semana, según la fecha probable de acreditación.",
          "Proyectá los pagos de insumos, servicios, deudas, impuestos y gastos del emprendimiento.",
          "Calculá la caja final de cada semana: caja inicial + cobros − pagos.",
          "Definí una caja mínima para operar y comparala con el saldo proyectado.",
          "Marcá las semanas con brecha y elegí acciones: seña, plazo, lote más chico o reserva.",
          "Actualizá la planilla cada semana con los movimientos reales.",
        ],
      },
      {
        type: "table",
        caption: "Estructura de la planilla",
        headers: ["Semana", "Caja inicial", "Cobros", "Pagos", "Caja final", "Caja mínima", "Brecha"],
        rows: [
          ["Semana 1", "", "", "", "", "", ""],
          ["Semana 2", "", "", "", "", "", ""],
          ["Semana 3", "", "", "", "", "", ""],
          ["Semana 4", "", "", "", "", "", ""],
          ["…", "", "", "", "", "", ""],
          ["Semana 13", "", "", "", "", "", ""],
        ],
      },
      {
        type: "paragraph",
        text: "La descarga en CSV agrega una fecha de inicio por semana y una columna de acción prevista para cada brecha.",
      },
      {
        type: "table",
        caption: "Ejemplo ficticio de cuatro semanas",
        headers: ["Concepto", "Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        rows: [
          ["Caja inicial", "$350.000", "$10.000", "−$15.000", "−$40.000"],
          ["Cobros", "$0", "$0", "$0", "$0"],
          ["Pagos", "$340.000", "$25.000", "$25.000", "$25.000"],
          ["Caja final", "$10.000", "−$15.000", "−$40.000", "−$65.000"],
          ["Caja mínima", "$50.000", "$50.000", "$50.000", "$50.000"],
          ["Brecha", "−$40.000", "−$65.000", "−$90.000", "−$115.000"],
        ],
      },
      {
        type: "paragraph",
        text: "El ejemplo es ficticio y sirve para mostrar el procedimiento. En este caso, la caja cae por debajo del mínimo antes de que llegue el cobro del pedido. La respuesta no es ignorar la brecha: es negociar una seña, reducir el lote, acordar un plazo con proveedores o reservar dinero antes de empezar. Reemplazá los valores por tus propios datos y anotá la fecha de actualización.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "No uses dinero de obligaciones",
        text: "El dinero de impuestos, aportes, sueldos o señas de clientes no es capital de trabajo libre. Separá una reserva para esas salidas y revisá los vencimientos. Si la brecha es grande o recurrente, consultá a un profesional de contabilidad o finanzas.",
      },
      {
        type: "checklist",
        title: "Antes de aprobar el flujo",
        items: [
          "Todos los montos están en la misma moneda y con fecha de referencia.",
          "Los cobros están proyectados por fecha probable de acreditación.",
          "Incluí pagos de insumos, servicios, deudas, impuestos y gastos del emprendimiento.",
          "Definí una caja mínima y marqué las semanas con brecha.",
          "Elegí al menos una acción para cada brecha.",
          "Separé el dinero de obligaciones y la reserva para imprevistos.",
          "Anoté qué supuestos usé y cuándo los voy a revisar.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance educativo",
        text: "Esta plantilla es una herramienta de planificación. No reemplaza asesoramiento contable, impositivo o financiero ni el registro formal que corresponda a tu actividad.",
      },
    ],
    download: {
      href: "/recursos/flujo-de-caja-13-semanas.csv",
      label: "Descargar planilla CSV",
      fileType: "CSV",
    },
    relatedCourseSlugs: [
      "costos-y-precios",
      "mi-primer-emprendimiento",
      "herramientas-digitales-para-mi-negocio",
    ],
  },
  {
    id: "calendario-contenidos-30-dias",
    slug: "calendario-contenidos-30-dias",
    title: "Calendario de contenidos de 30 días",
    description:
      "Una plantilla para planificar publicaciones con pilares, objetivos, llamados a la acción y métricas de revisión.",
    category: "marketing",
    type: "Plantilla",
    tags: ["contenido", "calendario", "redes sociales", "marca", "métricas"],
    useCase:
      "Usala después de definir el posicionamiento y antes de empezar una campaña, un lanzamiento o una rutina de comunicación.",
    content: [
      {
        type: "paragraph",
        text: "Publicar sin un plan suele terminar en semanas de silencio o en piezas improvisadas que no comunican lo mismo. Este calendario de 30 días no busca llenar todas las fechas: busca elegir pocos mensajes, sostener una frecuencia posible y aprender de lo que funciona. Es una guía editable, no una obligación de publicar todos los días.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Antes de completarlo",
        text: "Definí la idea central de la marca, el cliente al que querés hablarle y el canal donde vas a publicar. Si todavía no tenés fotos, catálogo o condiciones claras, resolvelo primero: el calendario no compensa una oferta confusa.",
      },
      {
        type: "heading",
        text: "Elegí tres o cuatro pilares",
        level: 2,
      },
      {
        type: "table",
        caption: "Pilares posibles",
        headers: ["Pilar", "Qué comunica", "Ejemplo de pieza"],
        rows: [
          ["Confianza", "Quiénes son, cómo trabajan y qué cumplen.", "Proceso de elaboración, presentación del taller."],
          ["Utilidad", "Cómo usar, cuidar o elegir el producto.", "Guía breve, comparación, error frecuente."],
          ["Deseo", "Cómo se ve o se siente el resultado.", "Foto de producto en uso, video corto."],
          ["Prueba", "Por qué creer: garantías, detalles, testimonios autorizados.", "Ficha técnica, reseña con permiso."],
          ["Oferta", "Qué comprar, a qué precio y cómo pedir.", "Catálogo, combinación, condiciones."],
        ],
      },
      {
        type: "heading",
        text: "Estructura del calendario",
        level: 2,
      },
      {
        type: "table",
        caption: "Columnas de la plantilla",
        headers: ["Día", "Pilar", "Objetivo", "Formato", "Mensaje o idea", "Llamado a la acción", "Estado"],
        rows: [
          ["1", "Confianza", "Presentar la marca.", "Foto o video.", "Quiénes somos y cómo trabajamos.", "Conocer el catálogo.", "Pendiente"],
          ["3", "Utilidad", "Resolver una duda.", "Carrusel o texto.", "Cómo conservar el producto.", "Guardar la publicación.", "Pendiente"],
          ["5", "Deseo", "Mostrar el producto.", "Foto.", "Producto en uso real.", "Ver opciones.", "Pendiente"],
          ["7", "Prueba", "Reducir una objeción.", "Testimonio o detalle.", "Garantía o experiencia autorizada.", "Consultar.", "Pendiente"],
          ["9", "Oferta", "Facilitar la compra.", "Catálogo o ficha.", "Qué incluye y cómo pedir.", "Hacer un pedido.", "Pendiente"],
        ],
      },
      {
        type: "paragraph",
        text: "La descarga en CSV también incluye la semana, la fecha de publicación y la métrica que vas a revisar.",
      },
      {
        type: "paragraph",
        text: "Agrupá la producción: una sesión de fotos, un bloque de redacción y una revisión. Reutilizá una misma idea en formatos distintos, pero no repitas el mismo mensaje sin aportar algo nuevo. Dejá días libres y priorizá la calidad y la atención por encima de la cantidad.",
      },
      {
        type: "heading",
        text: "Qué mirar al final del mes",
        level: 2,
      },
      {
        type: "table",
        headers: ["Señal", "Pregunta", "Ajuste posible"],
        rows: [
          ["Consultas", "¿Llegaron personas del perfil buscado?", "Cambiar el mensaje o el canal."],
          ["Preguntas repetidas", "¿Qué información falta?", "Agregarla al catálogo o a las respuestas."],
          ["Conversión", "¿Cuántas consultas terminaron en pedido?", "Revisar precio, oferta o atención."],
          ["Repetición", "¿Volvieron a comprar?", "Revisar experiencia y posventa."],
          ["Reclamos", "¿Qué promesa no se cumplió?", "Corregir el proceso antes de comunicar más."],
        ],
      },
      {
        type: "checklist",
        title: "Antes de publicar una pieza",
        items: [
          "La idea se entiende en los primeros segundos.",
          "La información de precio, stock y condiciones está actualizada.",
          "La imagen representa el producto real.",
          "Cuento con autorización si aparece una persona o un espacio ajeno.",
          "El llamado a la acción es claro y el canal funciona.",
          "No uso urgencia, escasez ni testimonios falsos.",
          "Anoté qué métrica voy a mirar para evaluar la pieza.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Alcance",
        text: "Las plataformas, sus funciones y sus normas cambian. Esta plantilla es una guía educativa y no reemplaza las condiciones de cada servicio ni el asesoramiento sobre derechos de imagen, publicidad o protección de datos.",
      },
    ],
    download: {
      href: "/recursos/calendario-contenidos-30-dias.csv",
      label: "Descargar calendario CSV",
      fileType: "CSV",
    },
    relatedCourseSlugs: [
      "mi-marca-y-mi-identidad-comercial",
      "herramientas-digitales-para-mi-negocio",
    ],
  },
  {
    id: "guia-cv-laboral",
    slug: "guia-cv-laboral",
    title: "Guía para armar un CV claro",
    description:
      "Una guía paso a paso para construir un currículum legible, honesto y adaptado a la oferta, sin exagerar ni omitir datos relevantes.",
    category: "empleo",
    type: "Guía",
    tags: ["CV", "currículum", "postulación", "empleo", "perfil profesional"],
    useCase:
      "Consultala antes de enviar tu primera postulación o cuando necesites actualizar tu CV para una nueva búsqueda.",
    content: [
      {
        type: "paragraph",
        text: "El CV es un documento de trabajo: su objetivo es que una persona decida, en pocos segundos, si vale la pena entrevistarte. No es tu autobiografía ni una lista de todo lo que sabés hacer. Es una selección ordenada de la información que ayuda a entender tu perfil y tu adecuación a un puesto.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Antes de empezar",
        text: "Reuní las fechas de tus experiencias, los nombres de las organizaciones, las funciones principales y los datos de contacto de referencias. Si no recordás una fecha exacta, usá mes y año y marcá que es aproximado.",
      },
      {
        type: "heading",
        text: "Estructura recomendada",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Datos de contacto: nombre, teléfono, correo y ciudad.",
          "Perfil breve: dos o tres líneas sobre quién sos y qué buscás.",
          "Experiencia laboral: de la más reciente a la más antigua.",
          "Formación: estudios formales y cursos relevantes.",
          "Habilidades: herramientas, idiomas y competencias verificables.",
          "Otros datos: disponibilidad, movilidad, referencias (solo si se piden).",
        ],
      },
      {
        type: "table",
        caption: "Bloques de un CV claro",
        headers: ["Bloque", "Qué incluir", "Qué evitar"],
        rows: [
          ["Perfil", "Dos o tres líneas con tu objetivo profesional.", "Frases genéricas como «trabajador responsable»."],
          ["Experiencia", "Puesto, organización, fechas y tareas principales.", "Listas interminables sin orden."],
          ["Formación", "Título, institución y año de egreso o en curso.", "Cursos irrelevantes o sin fecha."],
          ["Habilidades", "Herramientas, idiomas y competencias con nivel.", "Atributos no verificables."],
        ],
      },
      {
        type: "checklist",
        title: "Revisión antes de enviar",
        items: [
          "No hay errores de ortografía ni datos contradictorios.",
          "Las fechas son consistentes y están en el mismo formato.",
          "El correo es profesional y está activo.",
          "El CV tiene entre una y dos páginas.",
          "La información se adapta al puesto al que te postulás.",
          "No incluye datos sensibles que no se pidan (DNI, domicilio completo, salud).",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Honestidad y verificación",
        text: "No inventes títulos, fechas o responsabilidades. Muchas organizaciones verifican la información. Un CV honesto y claro vale más que uno inflado que no se puede sostener en una entrevista.",
      },
    ],
    relatedCourseSlugs: ["busqueda-de-empleo-y-cv"],
  },
  {
    id: "plantilla-cv-simple",
    slug: "plantilla-cv-simple",
    title: "Plantilla simple de CV",
    description:
      "Un modelo de CV en texto para completar con tus datos, ordenar tu experiencia y preparar una versión adaptable a distintas postulaciones.",
    category: "empleo",
    type: "Plantilla",
    tags: ["CV", "plantilla", "postulación", "formato"],
    useCase:
      "Usala como base para tu primer CV o para reordenar uno que ya tenés.",
    content: [
      {
        type: "paragraph",
        text: "Esta plantilla es un punto de partida. Completala con datos reales y guardá una versión maestra. Para cada postulación, hacé una copia y ajustá el perfil y las habilidades al puesto.",
      },
      {
        type: "fields",
        title: "Datos de contacto",
        items: [
          { label: "Nombre y apellido", lines: 1 },
          { label: "Teléfono", lines: 1 },
          { label: "Correo electrónico", lines: 1 },
          { label: "Ciudad y provincia", lines: 1 },
        ],
      },
      {
        type: "fields",
        title: "Perfil profesional",
        items: [
          { label: "Dos o tres líneas sobre tu perfil y objetivo", lines: 3 },
        ],
      },
      {
        type: "fields",
        title: "Experiencia laboral (de la más reciente a la más antigua)",
        items: [
          { label: "Puesto — Organización — Fechas", lines: 1 },
          { label: "Tareas principales", lines: 3 },
          { label: "Logro o aprendizaje concreto", lines: 2 },
        ],
      },
      {
        type: "fields",
        title: "Formación",
        items: [
          { label: "Título — Institución — Año", lines: 1 },
          { label: "Cursos o capacitaciones relevantes", lines: 2 },
        ],
      },
      {
        type: "fields",
        title: "Habilidades",
        items: [
          { label: "Herramientas, idiomas y competencias con nivel", lines: 3 },
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Una versión por postulación",
        text: "No envíes el mismo CV a todos los puestos. Ajustá el perfil, el orden de la experiencia y las habilidades destacadas según cada oferta. Guardá cada versión con un nombre que identifique la empresa y la fecha.",
      },
    ],
    relatedCourseSlugs: ["busqueda-de-empleo-y-cv"],
  },
  {
    id: "guia-entrevista-laboral",
    slug: "guia-entrevista-laboral",
    title: "Guía para preparar una entrevista laboral",
    description:
      "Cómo investigar el puesto, anticipar preguntas, preparar ejemplos y manejar la entrevista con calma y honestidad.",
    category: "empleo",
    type: "Guía",
    tags: ["entrevista", "empleo", "postulación", "comunicación"],
    useCase:
      "Consultala los días previos a una entrevista y usá la checklist para prepararte.",
    content: [
      {
        type: "paragraph",
        text: "Una entrevista laboral es una conversación para verificar si tu perfil y el puesto encajan. No es un examen para atraparte: es un intercambio. La preparación reduce la ansiedad y mejora la claridad de tus respuestas.",
      },
      {
        type: "heading",
        text: "Antes de la entrevista",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Leé la oferta y anotá las tareas principales y los requisitos.",
          "Investigá la organización: qué hace, a quiénes sirve y cómo se presenta.",
          "Prepará dos o tres ejemplos concretos de tu experiencia (problema, acción, resultado).",
          "Definí qué querés saber vos: horario, tareas, equipo, capacitación.",
          "Confirmá fecha, hora, lugar o enlace y cómo llegar.",
        ],
      },
      {
        type: "heading",
        text: "Preguntas frecuentes",
        level: 2,
      },
      {
        type: "table",
        caption: "Preguntas y cómo responderlas",
        headers: ["Pregunta", "Qué evalúa", "Cómo responder"],
        rows: [
          ["Contame sobre vos.", "Claridad y foco.", "Resumen breve de tu perfil y por qué te interesa el puesto."],
          ["¿Por qué querés este trabajo?", "Motivación.", "Conectá tus habilidades con las necesidades del puesto."],
          ["¿Cuál es tu principal debilidad?", "Autoconocimiento.", "Nombrá algo real y cómo lo estás mejorando."],
          ["¿Dónde te ves en unos años?", "Proyección.", "Objetivos realistas vinculados al crecimiento."],
        ],
      },
      {
        type: "checklist",
        title: "Checklist del día",
        items: [
          "Llegué o me conecté con tiempo.",
          "Tengo una copia del CV y los datos de la oferta.",
          "Vestimenta adecuada al rubro y la organización.",
          "Teléfono en silencio.",
          "Escuché antes de responder y pedí aclaraciones si no entendí.",
          "Al final, pregunté los próximos pasos y los tiempos.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Después de la entrevista",
        text: "Anotá lo que te preguntaron y cómo respondiste. Eso te ayuda a mejorar para la próxima. Si no te seleccionan, pedí (con respeto) una devolución: muchas organizaciones la dan.",
      },
    ],
    relatedCourseSlugs: ["busqueda-de-empleo-y-cv"],
  },
  {
    id: "checklist-documentacion-empleo",
    slug: "checklist-documentacion-empleo",
    title: "Checklist de documentación para buscar empleo",
    description:
      "Una lista de verificación para reunir documentos, datos y referencias antes de postularte o ingresar a un trabajo.",
    category: "empleo",
    type: "Lista de verificación",
    tags: ["documentación", "empleo", "postulación", "ingreso"],
    useCase:
      "Usala al empezar una búsqueda laboral o antes de firmar un ingreso.",
    content: [
      {
        type: "paragraph",
        text: "Tener la documentación ordenada reduce demoras y evita perder oportunidades. No todas las organizaciones piden lo mismo, pero esta lista cubre lo más frecuente. Guardá copias en un mismo lugar y no compartas datos sensibles por canales abiertos.",
      },
      {
        type: "checklist",
        title: "Documentos personales",
        items: [
          "DNI (original y copia).",
          "Constancia de CUIL/CUIT.",
          "Certificado de domicilio actualizado.",
          "Foto tipo carnet (si se solicita).",
        ],
      },
      {
        type: "checklist",
        title: "Formación y experiencia",
        items: [
          "Título o certificado de estudios (original y copia).",
          "Certificados de cursos o capacitaciones relevantes.",
          "Constancias de trabajo o referencias laborales.",
          "CV actualizado en formato PDF.",
        ],
      },
      {
        type: "checklist",
        title: "Datos para el ingreso",
        items: [
          "Datos bancarios para depósito de haberes (si se piden).",
          "Obra social o sistema de salud (según corresponda).",
          "Contacto de emergencia.",
          "Disponibilidad horaria y de movilidad.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Privacidad y seguridad",
        text: "No envíes fotos de tu DNI ni datos bancarios por redes sociales abiertas. Verificá el canal oficial de la organización y preguntá cómo prefieren recibir la documentación.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Un solo lugar",
        text: "Creá una carpeta digital con subcarpetas para personales, formación y laboral. Renombrá los archivos con fecha y contenido. Así podés responder rápido cuando te lo pidan.",
      },
    ],
    relatedCourseSlugs: ["busqueda-de-empleo-y-cv"],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}


