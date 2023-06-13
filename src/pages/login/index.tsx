import { Form } from "@/components/page-components/login";
import Head from "next/head";

export default function Login() {
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
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        <Form />
      </main>
    </>
  )
}