import Typewriter from 'typewriter-effect';
import { typicalStepsHome } from '@/utils';
import ScrollIndicator from '@/components/scroll-indicator';
import Link from 'next/link';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
      <div>
        <h1 className='text-7xl font-extrabold text-white mt-2 text-center'>
          Olá, sou o
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-soft-blue to-blue'> Takedi</span>!
        </h1>
      </div>
      <h2 className='mt-2 text-2xl text-soft-blue text-center p-4 mb-5'>Engenheiro de Software Full-Stack 💻</h2>
      <div className='flex justify-center items-center gap-2'>
        <Link href="https://www.linkedin.com/in/vinicius-takedi/" target='_blank' className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
          <AiFillLinkedin size={22} />
          LinkedIn
        </Link>
        <Link href="https://github.com/viniciustakedi" target='_blank' className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
          <AiFillGithub size={22} />
          GitHub
        </Link>
      </div>
      <div className='absolute bottom-8'>
        <ScrollIndicator />
      </div>
    </section>
  );
} 