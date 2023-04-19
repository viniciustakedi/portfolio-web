import {
  AWSIcon,
  BitBucketIcon,
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
  TypescriptIcon
} from "@/assets/images";
import Tag from "@/components/elements/tag";
import Image from "next/image";
import { MdOutlineWork } from "react-icons/md";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col lg:px-24 md:px-10 px-5 py-8">
      <Tag>Trabalho</Tag>
      <h1 className="text-4xl mt-4 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue to-dark-blue">Experiência</h1>

      <ol className="relative border-l ml-5 border-gray-200 dark:border-gray-700">
        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-dark-blue dark:bg-blue-900">
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-100" />
            <MdOutlineWork size={22} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            PontuaX
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Junho de 2022, até Março de 2023
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
            <li>
              - Trabalhei como engenheiro de software full-stack.
            </li>
            <li>
              - Desenvolvi novos recursos, corrigi bugs, verifiquei/analisei códigos
              entre outras funções.
            </li>
            <li>
              - Utilizava as melhores ferramentas e padrões de código para
              manter o padrão da empresa.
            </li>
            <li>
              - Fiz tarefas em diversos setores, full-stack no geral. Front-end,
              back-end, mobile, banco de dados relacional, e devops.
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Image src={ReactIcon} alt="react" className="w-5 h-5" />
            <Image src={TypescriptIcon} alt="typescript" className="w-5 h-5" />
            <Image src={NodeJsIcon} alt="nodejs" className="w-5 h-5" />
            <Image src={PostgreSqlIcon} alt="postgree" className="w-5 h-5" />
            <Image src={RedisIcon} alt="redis" className="w-5 h-5" />
            <Image src={AWSIcon} alt="aws" className="w-5 h-5" />
            <Image src={GitIcon} alt="git" className="w-5 h-5" />
            <Image src={BitBucketIcon} alt="bitbucket" className="w-5 h-5" />
            <Image src={TrelloIcon} alt="trello" className="w-5 h-5" />
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-dark-blue dark:bg-blue-900">
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-[300ms]" />
            <MdOutlineWork size={22} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            ECWSA
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Janeiro de 2022, até Junho de 2022
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
            <li>
              - Trabalhei como desenvolvedor front-end.
            </li>
            <li>
              - Desenvolvi todos os projetos front-end na época em que
              trabalhei.
            </li>
            <li>
              - Auxíliei no desenvolvimento de escopos de projetos e ideias para
              sua estrutura.
            </li>
            <li>
              - Desenvolvi e aprendi os melhores métodos para resolver
              problemas que a empresa necessitava resolver.
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            <Image src={TypescriptIcon} alt="React" className="w-5 h-5" />
            <Image src={NodeJsIcon} alt="React" className="w-5 h-5" />
            <Image src={GitIcon} alt="React" className="w-5 h-5" />
            <Image src={JiraIcon} alt="React" className="w-5 h-5" />
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-dark-blue dark:bg-blue-900">
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-[500ms]" />
            <MdOutlineWork size={22} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            D+S Assessoria e Corretora de Seguros
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Junho de 2021, até Dezembro de 2021
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">

            <li>
              - Trabalhei com automação de dados, utilizando python e excel
            </li>
            <li>
              - Desenvolvi habilidades interpessoais e de comunicação. Além de desenvolver
              robos para automação de dados.
            </li>
            <li>
              - Desenvolvi projetos e aprendi os melhores métodos para resolver
              problemas que a empresa necessitava resolver com automação.
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Image src={PythonIcon} alt="React" className="w-5 h-5" />
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-dark-blue dark:bg-blue-900">
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-[700ms]" />
            <MdOutlineWork size={22} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            DW Blindagens
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Abril de 2021, até Junho de 2021
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
            <li>
              - Trabalhei como desenvolvedor full-stack (freelancer)
            </li>
            <li>
              - Desenvolvi todo o escopo e documentos do projeto
            </li>
            <li>
              - Realizei todas as etapas sozinho, desde o escopo do projeto,
              banco de dados, back-end, front-end e upload para o servidor
            </li>
            <li>
              - Apoio ao cliente e aceitação de novas ideias e sua
              implementação
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            <Image src={NodeJsIcon} alt="React" className="w-5 h-5" />
            <Image src={TypescriptIcon} alt="React" className="w-5 h-5" />
            <Image src={GitIcon} alt="React" className="w-5 h-5" />
            <Image src={GitHubIcon} alt="React" className="w-5 h-5" />
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-dark-blue dark:bg-blue-900">
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation delay-[800ms]" />
            <MdOutlineWork size={22} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            M2S Cars
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Janeiro de 2021, até Abril de 2021
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
            <li>
              - Trabalhei como desenvolvedor full-stack (freelancer)
            </li>
            <li>
              - Desenvolvi todo o escopo e documentos do projeto
            </li>
            <li>
              - Realizei todas as etapas sozinho, desde o escopo do projeto,
              banco de dados, back-end, front-end e upload para o servidor
            </li>
            <li>
              - Apoio ao cliente e aceitação de novas ideias e sua
              implementação
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            <Image src={NodeJsIcon} alt="React" className="w-5 h-5" />
            <Image src={TypescriptIcon} alt="React" className="w-5 h-5" />
            <Image src={PhpIcon} alt="React" className="w-5 h-5" />
            <Image src={MySqlIcon} alt="React" className="w-5 h-5" />
            <Image src={GitIcon} alt="React" className="w-5 h-5" />
            <Image src={GitHubIcon} alt="React" className="w-5 h-5" />
          </div>
        </li>
      </ol>
    </section>
  );
}