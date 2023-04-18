import Typewriter from 'typewriter-effect';
import { typicalStepsHome } from '@/utils';
import ScrollIndicator from '@/components/scroll-indicator';

export default function Titles() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
      <h2 className='mt-2 text-3xl text-soft-blue text-center p-4 mb-10'>Engenheiro de Software Full-Stack 💻</h2>
      <ScrollIndicator/>
    </div>
  );
} 