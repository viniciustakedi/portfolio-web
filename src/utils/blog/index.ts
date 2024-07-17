export const formatPostDescription = (description: string): string => {
  const descriptionArrayLength = description.length;

  if (descriptionArrayLength > 120) {
    return description.slice(0, 120) + '...';
  }

  return description;
}

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

export const translateBlogTags = (tag: string): string => {
  switch (tag) {
    case BlogTags.generalKnowledge:
      return "Conhecimentos gerais";
    case BlogTags.udunc:
      return "Udunc";
    case BlogTags.devops:
      return "DevOps";
    case BlogTags.programming:
      return "Programação";
    case BlogTags.language:
      return "Linguagem";
    case BlogTags.database:
      return "Banco de dados";
    case BlogTags.frontend:
      return "Front-end";
    case BlogTags.backend:
      return "Back-end";
    case BlogTags.mobile:
      return "Mobile";
    case BlogTags.testing:
      return "Testes";
    case BlogTags.security:
      return "Segurança";
    case BlogTags.networking:
      return "Redes";
    case BlogTags.ai:
      return "Inteligência artificial";
    case BlogTags.blockchain:
      return "Blockchain";
    case BlogTags.cloudComputing:
      return "Computação em nuvem";
    case BlogTags.iot:
      return "Internet das coisas";
    case BlogTags.bigData:
      return "Big data";
    case BlogTags.dataScience:
      return "Ciência de dados";
    default:
      return "Conhecimentos gerais";
  }
};
