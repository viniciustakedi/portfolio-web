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