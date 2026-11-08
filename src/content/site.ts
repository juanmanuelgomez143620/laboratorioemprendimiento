export const site = {
  name: "Campus Emprendedor",
  shortName: "Campus Emprendedor",
  tagline: "Aprender, crear y transformar.",
  description:
    "Campus Emprendedor abierto de la Escuela Normal Superior N.º 9 de Wanda: cursos aplicados, herramientas y recursos para personas que quieren iniciar o mejorar un emprendimiento.",
  institution: {
    name: "Escuela Normal Superior N.º 9 \"Juan XXIII\"",
    shortName: "Escuela Normal N.º 9",
    locality: "Wanda",
    province: "Misiones",
    country: "Argentina",
    modality: "Técnico en Gestión y Administración de las Organizaciones (TGA)",
    classroom: "Aula-Taller de Simulación Empresarial N.º 17",
    department: "Departamento de Ciencias Económicas",
    cue: "540073200",
    address: "Avda. Juan XXIII N° 159, Wanda, Misiones, Argentina - CP: 3376",
    phone: "(+54) 3757-677203",
    email: "contacto@normal9wanda.edu.ar",
    website: "https://www.normal9wanda.edu.ar",
    supervision: "Dependiente del Consejo General de Educación de la Provincia de Misiones (CUIT: 30-65913433-7)",
    supervisionUrl: "https://www.cgepm.gov.ar/",
    privacyUrl: "https://www.normal9wanda.edu.ar/politica-de-privacidad",
  },
  author: {
    name: "Juan Manuel Gómez",
    titles: [
      "Profesor en Ciencias Económicas",
      "Licenciado en Educación",
      "Licenciado en Tecnología Educativa",
    ],
    role: "Idea, diseño pedagógico, contenidos y desarrollo de la plataforma",
  },
  coverImage: {
    src: "/institucional/aula-taller-17.png",
    alt: "Aula-Taller de Simulación Empresarial N.º 17 de la Escuela Normal Superior N.º 9, con computadoras y carteles de Gestión de Calidad, RRHH, Sueldos y Jornales y Estructura",
    width: 1672,
    height: 941,
  },
  alignmentNotice:
    "Diseñado siguiendo los lineamientos de la Dirección de Oficina de Empleo y Proyectos de la Municipalidad de Wanda: sus rutas formativas se organizan según las prestaciones y programas que la oficina publica en wanda.gob.ar.",
  statusNotice:
    "Versión inicial del campus. La articulación con organismos públicos es una propuesta en desarrollo: no existen convenios, avales ni financiamiento externo confirmados.",
  certificateNotice:
    "Constancia de actividad educativa de demostración. No constituye certificación oficial ni acreditación del Fondo de Crédito Misiones u otro organismo.",
  storageNotice:
    "Tu avance se guarda solamente en este navegador y dispositivo. No creamos cuentas ni enviamos tus datos a servidores.",
  externalLinks: {
    costoClaro: "https://calculodecosto.vercel.app/",
    yoEmprendedor: "https://yoemprendedor.com.ar/login/?next=/",
  },
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/cursos", label: "Cursos" },
    { href: "/biblioteca", label: "Biblioteca" },
    { href: "/herramientas", label: "Herramientas" },
    { href: "/oficina-de-empleo", label: "Oficina de Empleo" },
    { href: "/jornadas", label: "Jornadas" },
    { href: "/proyecto", label: "Proyecto" },
    { href: "/aula-taller", label: "Aula-Taller" },
  ],
  employmentOffice: {
    name: "Dirección de Oficina de Empleo y Proyectos",
    municipality: "Municipalidad de Wanda",
    director: "Daniela Ester Von Postel",
    address: "Independencia 1390, esquina los Helechos, Wanda, Misiones",
    phone: "(3757) 654530",
    email: "oecoloniawanda@trabajo.gob.ar",
    webpage: "https://wanda.gob.ar/oficina-de-empleo",
    hours: "Lunes a viernes, de 07:30 a 13:30. Sábados y domingos cerrado.",
    instagram: "https://www.instagram.com/oficinadeempleowanda/",
    facebook: "https://www.facebook.com/OficinaDeEmpleoDeWanda?mibextid=ZbWKwL",
    portal: "https://www.argentina.gob.ar/trabajo",
    function:
      "Lleva adelante los programas de empleo de la Secretaría de Trabajo, Empleo y Seguridad Social del Ministerio de Capital Humano: Programa Fomentar Empleo, Seguro por Desempleo e Intercosecha. Los proyectos de la dirección buscan dar respuesta a las necesidades de la comunidad y mejorar la calidad de vida de los vecinos, desde capacitaciones hasta obras de infraestructura, incluyendo la búsqueda de financiamiento.",
  },
  employmentPrograms: [
    {
      name: "Acciones de Entrenamiento para el Trabajo",
      href: "https://www.argentina.gob.ar/trabajo/ept",
      description:
        "Formación y práctica para personas que buscan mejorar sus posibilidades de inserción laboral.",
    },
    {
      name: "Programa de Inserción Laboral",
      href: "https://www.argentina.gob.ar/trabajo/pil",
      description:
        "Apoyo para la inserción de personas en el mercado de trabajo formal.",
    },
    {
      name: "Puente al empleo",
      href: "https://www.argentina.gob.ar/trabajo/fomentarempleo/puente-al-empleo",
      description:
        "Herramienta del Programa Fomentar Empleo para vincular trabajadores y empleadores.",
    },
    {
      name: "Programa de Empleo Independiente",
      href: "https://www.argentina.gob.ar/trabajo/empleoindependiente",
      description:
        "Acompañamiento para personas que desarrollan una actividad por cuenta propia.",
    },
    {
      name: "Programa Trabajo Autogestionado",
      href: "https://www.argentina.gob.ar/trabajo/autogestionado",
      description:
        "Apoyo a emprendimientos y unidades productivas autogestionadas.",
    },
    {
      name: "Entramados Productivos Locales",
      href: "https://www.argentina.gob.ar/trabajo/epl",
      description:
        "Fortalecimiento de redes productivas y cadenas de valor a escala local.",
    },
    {
      name: "Plan de Formación Profesional y Continua",
      href: "https://www.argentina.gob.ar/trabajo/formacionycapacitacion",
      description:
        "Capacitación para el trabajo y actualización de competencias.",
    },
  ],
} as const;

export const feasibilityNotes = [
  {
    title: "Infraestructura para aprender haciendo",
    text: "El Aula-Taller N.º 17 fue fortalecida con equipamiento informático adquirido mediante el Programa de Crédito Fiscal INET: diez computadoras nuevas de buenas prestaciones y diez computadoras existentes de menores prestaciones.",
  },
  {
    title: "Una necesidad concreta de conectividad",
    text: "Para que las jornadas, el desarrollo de herramientas y el acceso simultáneo a plataformas educativas funcionen con fluidez, la escuela necesita mejorar su conexión de Internet. Esa mejora forma parte de la propuesta de articulación, no de un acuerdo ya existente.",
  },
  {
    title: "Capacidad pedagógica y técnica",
    text: "La modalidad TGA y el trabajo del Departamento de Ciencias Económicas permiten vincular administración, costos, comunicación y tecnología en experiencias formativas concretas para la comunidad.",
  },
] as const;
