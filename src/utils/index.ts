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