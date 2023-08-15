import { Form } from "@/components/page-components/login";
import { getToken, isJwtValid } from "@/configs";
import { IsUserAuthorized } from "@/contexts/users";
import { useAtom } from "jotai";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const [isUserAuthorized, setIsUserAuthorized] = useAtom(IsUserAuthorized)
  const router = useRouter()

  useEffect(() => {
    Promise.resolve().then(async () => {
      if (await isJwtValid(getToken())) {
        router.push('/dashboard');
        return;
      }

      setIsUserAuthorized(true);
    });
  }, [])

  return (
    <>
      <Head>
        <title>Login • Takedi</title>
        <meta
          name="description"
          content="Tela de login para que eu possa controlar o conteúdo do meu portfólio."
          key="desc"
        />
      </Head>
      <main className="main-default ">
        <Form />
      </main>
    </>
  )
}