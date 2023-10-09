import Tag from "@/components/elements/tag";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { MdQuiz } from "react-icons/md";

export default function Habilities() {
  const [ref, inView] = useInView();

  return (
    <section id="habilities" className="flex flex-col justify-center items-center lg:px-24 md:px-10 px-5 py-8">
      <motion.div
        className="flex gap-5 lg:flex-row flex-col"
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.75 }}
      >
        <div className="lg:w-2/4 lg:mb-0 md:mb-10 mb-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <Tag>Soft Skills</Tag>
          </motion.div>
          <h1 className="text-4xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue to-dark-blue">Habilidades Interpessoais</h1>

          <p className="text-lg text-gray-400 leading-6 mb-2">
            Desde sempre fui muito comunicativo e organizado, a conversa e a organização é a base
            para o sucesso na minha visão, porque a comunicação te faz aprender mais e te faz entender
            melhor o que você precisa fazer para chegar ao seu objetivo, e a organização te ajuda a
            não se perder no meio do caminho.
          </p>

          <p className="text-lg text-gray-400 leading-6">
            O aprendizado também não fica de fora, na área de tecnologia uma coisa que não pode ficar
            de fora é o aprendizado constante, e isso é um fato visto que a tecnologia sempre está
            em constante mudança e evolução, e para se manter atualizado é necessário estar sempre
            engajado e disposto a aprender coisas novas.
          </p>

          <Link href='/quiz' className='flex justify-center items-center mt-4 p-2 w-32 rounded-lg gap-2 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
            <MdQuiz size={18} />
            Quiz
          </Link>
        </div>
        <div className="lg:w-2/4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            >
            <Tag>Hard Skills</Tag>
          </motion.div>
          <h1 className="text-4xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue to-dark-blue">
            Habilidades Técnicas
          </h1>

          <p className="text-lg text-gray-400 leading-6 mb-2">
            Tenho habilidades com lógica de programação, desenvolvimento de aplicações web e mobile,
            mesmo atualmente minha stack principal sendo NodeJs com Typescript eu não me limito a
            utilizar somente uma linguagem de programação, é muito interessante descobrir novas
            tecnologias e estuda-las para entender melhor o seu propósito e como elas podem ser
            utilizadas para resolver certos problemas.
          </p>

          <p className="text-lg text-gray-400 leading-6 mb-2">
            Tenho conhecimento em diversas tecnologias e frameworks, como você pode ver logo
            abaixo. Para mais informações, entre em contato comigo, vamos conversar, trocar pensamentos,
            ideias e experiências.
          </p>
        </div>
      </motion.div>
    </section>
  );
}