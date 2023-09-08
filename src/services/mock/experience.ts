import {
  AWSIcon,
  BitBucketIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  JiraIcon,
  MySqlIcon,
  NodeJsIcon,
  PhpIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  TrelloIcon,
  TypescriptIcon,
  MongoDbIcon
} from "@/assets/images";

export type ExperienceDataType = {
  id: number;
  company: string;
  companyWebsite: string;
  time: string;
  tasks: string[];
  technologies: {
    name: string;
    icon: any;
    altIcon: string;
  }[];
}

export const experienceData: ExperienceDataType[] = [
  {
    id: 1,
    company: 'Digigrow',
    companyWebsite: 'https://digigrow.com.br/',
    time: 'Abril de 2023 - Presente',
    tasks: [
      'Estou atuando como engenheiro de software full-stack.',
      'Desenvolvo novos recursos, corrijo bugs, entre outras funções.',
      'Estou utilizando as ferramentas necessárias e úteis para desenvolver as tasks de acordo com a regra de negócio da empresa.',
      'Faço tarefas em diversos setores, full-stack no geral. Front-end, back-end e banco de dados (NoSQL).'
    ],
    technologies: [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        altIcon: 'react'
      },
      {
        name: 'NodeJs',
        icon: NodeJsIcon,
        altIcon: 'nodejs'
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        altIcon: 'typescript'
      },
      {
        name: 'ExpressJs',
        icon: ExpressIcon,
        altIcon: 'express'
      },
      {
        name: 'MongoDb',
        icon: MongoDbIcon,
        altIcon: 'mongodb'
      },
      {
        name: 'Git',
        icon: GitIcon,
        altIcon: 'git'
      },
      {
        name: 'GitHub',
        icon: GitHubIcon,
        altIcon: 'github'
      }
    ]
  },
  {
    id: 2,
    company: 'PontuaX',
    companyWebsite: 'https://pontuax.com.br/',
    time: 'Junho de 2022, até Março de 2023',
    tasks: [
      'Trabalhei como engenheiro de software full-stack.',
      'Desenvolvi novos recursos, corrigi bugs, verifiquei/analisei códigos entre outras funções.',
      'Utilizava as melhores ferramentas e padrões de código para manter o padrão da empresa.',
      'Fiz tarefas em diversos setores, full-stack no geral. Front-end, back-end, mobile, banco de dados relacional, e devops.'
    ],
    technologies: [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        altIcon: 'react'
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        altIcon: 'typescript'
      },
      {
        name: 'NodeJs',
        icon: NodeJsIcon,
        altIcon: 'nodejs'
      },
      {
        name: 'PostgreSql',
        icon: PostgreSqlIcon,
        altIcon: 'postgree'
      },
      {
        name: 'GitHub',
        icon: GitHubIcon,
        altIcon: 'github'
      },
      {
        name: 'Redis',
        icon: RedisIcon,
        altIcon: 'redis'
      },
      {
        name: 'AWS',
        icon: AWSIcon,
        altIcon: 'aws'
      },
      {
        name: 'Git',
        icon: GitIcon,
        altIcon: 'git'
      },
      {
        name: 'Bitbucket',
        icon: BitBucketIcon,
        altIcon: 'bitbucket'
      },
      {
        name: 'Trello',
        icon: TrelloIcon,
        altIcon: 'trello'
      }
    ]
  },
  {
    id: 3,
    company: 'ECWSA',
    companyWebsite: 'https://ecwsa.com.br/',
    time: 'Janeiro de 2022, até Junho de 2022',
    tasks: [
      'Trabalhei como desenvolvedor front-end.',
      'Desenvolvi todos os projetos front-end na época em que trabalhei.',
      'Auxíliei no desenvolvimento de escopos de projetos e ideias para sua estrutura.',
      'Desenvolvi e aprendi os melhores métodos para resolver problemas que a empresa necessitava resolver.'
    ],
    technologies: [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        altIcon: 'react'
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        altIcon: 'Typescript'
      },
      {
        name: 'NodeJs',
        icon: NodeJsIcon,
        altIcon: 'NodeJs'
      },
      {
        name: 'Git',
        icon: GitIcon,
        altIcon: 'git'
      },
      {
        name: 'Jira',
        icon: JiraIcon,
        altIcon: 'jira'
      }
    ]
  },
  {
    id: 4,
    company: 'D+S Assessoria e Corretora de Seguros',
    companyWebsite: '',
    time: 'Junho de 2021, até Dezembro de 2021',
    tasks: [
      'Trabalhei com automação de dados, utilizando python e excel.',
      'Desenvolvi habilidades interpessoais e de comunicação. Além de desenvolver robos para automação de dados.',
      'Desenvolvi projetos e aprendi os melhores métodos para resolver problemas que a empresa necessitava resolver com automação.'
    ],
    technologies: [
      {
        name: 'Python',
        icon: PythonIcon,
        altIcon: 'Python'
      }
    ]
  },
  {
    id: 5,
    company: 'DW Blindagens',
    companyWebsite: 'https://www.dwblindagens.com.br/',
    time: 'Abril de 2021, até Junho de 2021',
    tasks: [
      'Trabalhei como desenvolvedor full-stack (freelancer)',
      'Desenvolvi todo o escopo e documentos do projeto',
      'Apoio ao cliente e aceitação de novas ideias e sua implementação.',
      'Realizei todas as etapas sozinho, desde o escopo do projeto, banco de dados, back-end, front-end e upload para o servidor.',
    ],
    technologies: [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        altIcon: 'react'
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        altIcon: 'Typescript'
      },
      {
        name: 'NodeJs',
        icon: NodeJsIcon,
        altIcon: 'NodeJs'
      },
      {
        name: 'Git',
        icon: GitIcon,
        altIcon: 'git'
      },
      {
        name: 'GitHub',
        icon: GitHubIcon,
        altIcon: 'Github'
      }
    ]
  },
  {
    id: 6,
    company: 'M2S Cars',
    companyWebsite: 'https://www.m2scars.com.br/',
    time: 'Janeiro de 2021, até Abril de 2021',
    tasks: [
      'Trabalhei como desenvolvedor full-stack (freelancer)',
      'Desenvolvi todo o escopo e documentos do projeto',
      'Realizei todas as etapas sozinho, desde o escopo do projeto, banco de dados, back-end, front-end e upload para o servidor.',
      'Apoio ao cliente e aceitação de novas ideias e sua implementação.',
    ],
    technologies: [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        altIcon: 'react'
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        altIcon: 'Typescript'
      },
      {
        name: 'NodeJs',
        icon: NodeJsIcon,
        altIcon: 'NodeJs'
      },
      {
        name: 'Php',
        icon: PhpIcon,
        altIcon: 'Php'
      },
      {
        name: 'MySql',
        icon: MySqlIcon,
        altIcon: 'MySql'
      },
      {
        name: 'Git',
        icon: GitIcon,
        altIcon: 'git'
      },
      {
        name: 'GitHub',
        icon: GitHubIcon,
        altIcon: 'Github'
      }
    ]
  },
];

export const typicalStepsHome = [
  'Typescript',
  'NestJS',
  'ReactJs',
  'React Native',
  'NextJs',
  'Jotai',
  'CSharp',
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
  'NoSql',
  'MongoDB',
  'HTML',
  'CSS',
  'SASS',
  'SCSS',
]