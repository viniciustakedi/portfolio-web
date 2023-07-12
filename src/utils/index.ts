export const typicalStepsHome = [
  'Typescript',
  'NestJS',
  'ReactJs',
  'React Native',
  'NextJs',
  'CSharp',
  'HTML',
  'CSS',
  'SASS',
  'SCSS',
  'NodeJs',
  'NPM',
  'Yarn',
  'PostgreSQL',
  'MySQL',
  'SQL Server',
  'Redis',
  'AWS',
  'Docker',
  'Git',
  'GitLab',
  'GitHub',
  'BitBucket',
  'Trello',
  'Jira',
  'Linux',
  'TailwindCSS',
  'Styled Components',
  'React Query',
  'React Hook Form',
  'React Router',
  'React Context',
]

interface QuestionQuizObject {
  _id: string;
  value: string;
}

export const shuffleQuizQuestions = (array: QuestionQuizObject[]): QuestionQuizObject[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const formatDate = (date: Date): string => {
  const dateObject = new Date(date);
  const months = ["Jan.", "Fev.", "Mar.", "Abr.", "Mai", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."];

  const day = dateObject.getUTCDate();
  const month = months[dateObject.getUTCMonth()];
  const year = dateObject.getUTCFullYear();

  const dataFormatada = `${day} ${month} ${year}`;

  return dataFormatada;
}

export const formatPostDescription = (description: string): string => {
  const descriptionArrayLength = description.length;

  if (descriptionArrayLength > 120) {
    return description.slice(0, 120) + '...';
  }

  return description;
}