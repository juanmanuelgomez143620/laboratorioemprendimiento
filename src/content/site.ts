export const site = {
  name: "NORMAL 9 IMPULSA",
  shortName: "N9 IMPULSA",
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
    exclusiveNotice:
      "Este sistema es de uso exclusivo para familias y estudiantes. Los datos son confidenciales.",
  },
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
    { href: "/jornadas", label: "Jornadas" },
    { href: "/proyecto", label: "Proyecto" },
    { href: "/aula-taller", label: "Aula-Taller" },
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
