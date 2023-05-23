import {
  AboutMe,
  Contact,
  Habilities,
  Experience,
  Introduction,
  MarqueeTecnologies,
} from '@/components/page-components/home'
import Head from 'next/head'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home • Takedi</title>
        <meta
          name="description"
          content="Olá! Esse é meu portfólio, aqui você pode ver um pouco sobre mim e minhas experiências. 
          Entre descubra mais sobre mim! e tire as suas dúvidas."
          key="desc"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        <Menu />
        <Introduction />
        <Habilities />
        <MarqueeTecnologies />
        <Experience />
        <AboutMe />
        <Contact />
        <Footer/>
      </main>
    </>
  )
}
