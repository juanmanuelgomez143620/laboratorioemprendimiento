export interface JornadaAgendaItem {
  moment: string;
  title: string;
  description: string;
}

export interface JornadaModel {
  title: string;
  status: "demostración";
  description: string;
  objective: string;
  modality: string;
  duration: string;
  audience: string[];
  before: string[];
  agenda: JornadaAgendaItem[];
  resources: Array<{ label: string; href: string; description: string }>;
  after: string[];
  satisfactionQuestions: string[];
}

export interface JornadaEvent {
  id: string;
  title: string;
  dateLabel: string;
  modality: string;
  description: string;
  status: "programada" | "realizada";
}

export interface JornadaGalleryItem {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  authorizationNote: string;
}
