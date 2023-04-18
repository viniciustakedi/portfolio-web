import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Menu from '@/components/menu'
import Typewriter from 'typewriter-effect';
import { typicalStepsHome } from '@/utils';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home • Takedi</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        <Menu />
        <div className="flex flex-col items-center justify-center max-h-screen">
          <h2 className="text-blue text-3xl mt-10">
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
          <h2 className='mt-2 text-3xl text-soft-blue text-center p-4'>Engenheiro de Software Full-Stack 💻</h2>
        </div>
      </main>
    </>
  )
}
