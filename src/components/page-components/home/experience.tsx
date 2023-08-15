import Tag from "@/components/elements/tag";
import Tooltip from "@/components/elements/tooltip";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExperienceDataType, experienceData } from "@/services/mock/experience";

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
        {(
          experienceData.map((experience: ExperienceDataType) => {
            return (
              <li key={experience.company} className="mb-10 lg:ml-10 md:ml-10 ml-8">
                <Link
                  href={experience.companyWebsite}
                  target="_blank"
                  className="absolute flex items-center bg-white cursor-pointer text-blue justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900"
                >
                  <div className="absolute w-10 h-10 rounded-full animate-pulseAnimation animation-delay-50" />
                  <MdOutlineWork size={22} />
                </Link>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-blue dark:text-white">
                  {experience.company}
                </h3>
                <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
                  {experience.time}
                </time>
                <ul className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  {(
                    experience.tasks.map((description: string) => {
                      return (
                        <li key={description}>
                          - {description}
                        </li>
                      )
                    })
                  )}
                </ul>
                <p className="block mt-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
                  Tecnologias utilizadas:
                </p>
                <div className="grid grid-cols-5 w-44 md:grid-cols-8 md:w-56 lg:grid-cols-10 lg:w-80 gap-2 mt-2">
                  {(
                    experience.technologies.map((technology) => {
                      return (
                        <Tooltip key={technology.name} text={technology.name}>
                          <Image src={technology.icon} alt={technology.altIcon} className="w-5 h-5" />
                        </Tooltip>
                      )
                    })
                  )}
                </div>
              </li>
            )
          })
        )}
      </ol>
    </section>
  );
}