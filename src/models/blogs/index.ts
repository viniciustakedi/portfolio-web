export enum BlogTags {
  generalKnowledge = "general-knowledge",
  devops = "devops",
  programming = "programming",
  language = "language",
  database = "database",
  frontend = "frontend",
  backend = "backend",
  mobile = "mobile",
  testing = "testing",
  security = "security",
  networking = "networking",
  ai = "ai",
  blockchain = "blockchain",
  cloudComputing = "cloud-computing",
  iot = "iot",
  bigData = "big-data",
  dataScience = "data-science",
  udunc = "udunc",
}

export const blogTags = [
  {
    value: BlogTags.generalKnowledge,
    label: "Conhecimento Geral",
  },
  {
    value: BlogTags.udunc,
    label: "UDUNC",
  },
  {
    value: BlogTags.devops,
    label: "DevOps",
  },
  {
    value: BlogTags.programming,
    label: "Programação",
  },
  {
    value: BlogTags.language,
    label: "Linguagem",
  },
  {
    value: BlogTags.database,
    label: "Banco de Dados",
  },
  {
    value: BlogTags.frontend,
    label: "Frontend",
  },
  {
    value: BlogTags.backend,
    label: "Backend",
  },
  {
    value: BlogTags.mobile,
    label: "Mobile",
  },
  {
    value: BlogTags.testing,
    label: "Testes",
  },
  {
    value: BlogTags.security,
    label: "Segurança",
  },
  {
    value: BlogTags.networking,
    label: "Redes",
  },
  {
    value: BlogTags.ai,
    label: "IA",
  },
  {
    value: BlogTags.blockchain,
    label: "Blockchain",
  },
  {
    value: BlogTags.cloudComputing,
    label: "Computação em Nuvem",
  },
  {
    value: BlogTags.iot,
    label: "IoT",
  },
  {
    value: BlogTags.bigData,
    label: "Big Data",
  },
  {
    value: BlogTags.dataScience,
    label: "Ciência de Dados",
  },
];

export interface NewPostValues {
  friendlyId: string;
  thumbnail: string;
  title: string;
  description: string;
  timeToRead: number;
  content: string;
  tags: string[];
}
