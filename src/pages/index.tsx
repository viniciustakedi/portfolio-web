import Head from 'next/head'
import Menu from '@/components/menu'
import { Titles } from '@/components/page-components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home • Takedi</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        <Menu />
        <Titles/>
      </main>
    </>
  )
}
