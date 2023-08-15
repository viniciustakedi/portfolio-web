import Typewriter from 'typewriter-effect';
import ScrollIndicator from '@/components/scroll-indicator';
import Link from 'next/link';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Tooltip from '@/components/elements/tooltip';
import { motion, titleVariants, upPositionVariants } from '@/utils/animations';
import { typicalStepsHome } from '@/services/mock/experience';

export default function Introduction() {
  return (
    <section id="introduction" className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-blue text-3xl">
        <Typewriter
          options={{
            strings: typicalStepsHome,
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <motion.div initial="hidden" animate="visible" variants={titleVariants()}>
        <h1 className='text-7xl font-extrabold text-white mt-2 text-center'>
          Olá, sou o
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-soft-blue to-blue'> Takedi</span>!
        </h1>
      </motion.div>
      <motion.h2 className='mt-2 text-2xl text-soft-blue text-center p-4 mb-5' initial="hidden" animate="visible" variants={titleVariants({ delay: .8 })}>
        Engenheiro de Software Full-Stack 💻
      </motion.h2>
      <div className='flex justify-center items-center gap-2'>
        <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1 })}>
          <Link href="https://www.linkedin.com/in/vinicius-takedi/" target='_blank' className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
            <AiFillLinkedin size={22} />
            LinkedIn
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1.2 })}>
          <Link href="https://github.com/viniciustakedi" target='_blank' className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
            <AiFillGithub size={22} />
            GitHub
          </Link>
        </motion.div>
      </div>
      <div className='absolute bottom-8'>
        <Tooltip text='Role para baixo' position='left' top='10px' left='-120px'>
          <ScrollIndicator />
        </Tooltip>
      </div>
    </section >
  );
} 