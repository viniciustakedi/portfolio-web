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
import Tag from "@/components/elements/tag";
import Tooltip from "@/components/elements/tooltip";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="flex flex-col lg:px-24 md:px-10 px-5 py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <Tag>Trabalho</Tag>
      </motion.div>
      <motion.h1
        className="text-4xl mt-4 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue to-dark-blue"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.75 }}
      >
        Experiência
      </motion.h1>

      <ol className="relative border-l ml-5 border-gray-200 dark:border-gray-700">
        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <Link
            href="https://digigrow.com.br/"
            target="_blank"
            className="absolute flex items-center bg-white cursor-pointer text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
          >
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-50" />
            <MdOutlineWork size={22} />
          </Link>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
            Digigrow
          </h3>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Abril de 2023 - Presente
          </time>
          <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
            <li>
              - Estou atuando como engenheiro de software full-stack.
            </li>
            <li>
              - Desenvolvo novos recursos, corrijo bugs, entre outras funções.
            </li>
            <li>
              - Estou utilizando as ferramentas necessárias e úteis para desenvolver
              as tasks de acordo com a regra de negócio da empresa.
            </li>
            <li>
              - Faço tarefas em diversos setores, full-stack no geral. Front-end,
              back-end e banco de dados (NoSQL).
            </li>
          </ul>
          <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            Tecnologias utilizadas:
          </p>
          <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
            <Tooltip text="ReactJs">
              <Image src={ReactIcon} alt="react" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="NodeJs">
              <Image src={NodeJsIcon} alt="nodejs" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="MongoDb">
              <Image src={MongoDbIcon} alt="mongoDb" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="ExpressJs">
              <Image src={ExpressIcon} alt="express" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Git">
              <Image src={GitIcon} alt="git" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="GitHub">
              <Image src={GitHubIcon} alt="github" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <Link
            href="https://pontuax.com.br/"
            target="_blank"
            className="absolute flex cursor-pointer items-center bg-white text-blue justify-center  w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
          >
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-100" />
            <MdOutlineWork size={22} />
          </Link>
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
            <Tooltip text="ReactJs">
              <Image src={ReactIcon} alt="react" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Typescript">
              <Image src={TypescriptIcon} alt="typescript" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="NodeJs">
              <Image src={NodeJsIcon} alt="nodejs" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="PostgreSql">
              <Image src={PostgreSqlIcon} alt="postgree" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Redis">
              <Image src={RedisIcon} alt="redis" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="AWS">
              <Image src={AWSIcon} alt="aws" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Git">
              <Image src={GitIcon} alt="git" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Bitbucket">
              <Image src={BitBucketIcon} alt="bitbucket" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Trello">
              <Image src={TrelloIcon} alt="trello" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <Link
            href="https://ecwsa.com.br/"
            target="_blank"
            className="absolute flex items-center bg-white text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
          >
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-[300ms]" />
            <MdOutlineWork size={22} />
          </Link>
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
            <Tooltip text="ReactJs">
              <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Typescript">
              <Image src={TypescriptIcon} alt="Typescript" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="NodeJs">
              <Image src={NodeJsIcon} alt="NodeJs" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Git">
              <Image src={GitIcon} alt="git" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Jira">
              <Image src={JiraIcon} alt="jira" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <span className="absolute flex items-center bg-white text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900">
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
            <Tooltip text="Python">
              <Image src={PythonIcon} alt="Python" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <Link
            href="https://www.dwblindagens.com.br/"
            target="_blank"
            className="absolute flex items-center bg-white cursor-pointer text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
          >
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-[700ms]" />
            <MdOutlineWork size={22} />
          </Link>
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
            <Tooltip text="ReactJs">
              <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="NodeJs">
              <Image src={NodeJsIcon} alt="NodeJs" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Typescript">
              <Image src={TypescriptIcon} alt="Typescript" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Git">
              <Image src={GitIcon} alt="Git" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="GitHub">
              <Image src={GitHubIcon} alt="Github" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>

        <li className="mb-10 lg:ml-10 md:ml-10 ml-8">
          <Link
            href="https://www.m2scars.com.br/"
            target="_blank"
            className="absolute flex items-center bg-white cursor-pointer text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
          >
            <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation delay-[800ms]" />
            <MdOutlineWork size={22} />
          </Link>
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
            <Tooltip text="ReactJs">
              <Image src={ReactIcon} alt="React" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="NodeJs">
              <Image src={NodeJsIcon} alt="NodeJs" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Typescript">
              <Image src={TypescriptIcon} alt="Typescript" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Php">
              <Image src={PhpIcon} alt="Php" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="MySql">
              <Image src={MySqlIcon} alt="MySql" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Git">
              <Image src={GitIcon} alt="Git" className="w-5 h-5" />
            </Tooltip>
            <Tooltip text="Github">
              <Image src={GitHubIcon} alt="Github" className="w-5 h-5" />
            </Tooltip>
          </div>
        </li>
      </ol>
    </section>
  );
}