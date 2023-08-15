import {
  AboutMe,
  Contact,
  Habilities,
  Experience,
  Introduction,
  MarqueeTecnologies,
} from "@/components/page-components/home";
import Head from "next/head";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { getToken, isJwtValid } from "@/configs";
import { useAtom } from "jotai";
import { IsUserAuthorized } from "@/contexts/users";

export default function Home() {
  const [_, setIsUserAuthorized] = useAtom(IsUserAuthorized);

  useEffect(() => {
    Promise.resolve().then(async () => {
      if (await isJwtValid(getToken())) {
        setIsUserAuthorized(true);
        return;
      }
    });
  }, []);

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
      <main className="main-default">
        <Menu showLocation />
        <Introduction />
        <Habilities />
        <MarqueeTecnologies />
        <Experience />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
