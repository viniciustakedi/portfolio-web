import { getTokenJwt, isJwtValid } from "@/configs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Head from "next/head";
import { useAtom } from "jotai";
import { IsUserAuthorized } from "@/contexts/users";

export default function Dashboard() {
  const [isUserAuthorized, setIsUserAuthorized] = useAtom(IsUserAuthorized)
  const router = useRouter()

  useEffect(() => {
    Promise.resolve().then(async () => {
      if (!await isJwtValid(getTokenJwt())) {
        router.push('/login');
        return;
      }

      setIsUserAuthorized(true);
    });
  }, [])

  if (!isUserAuthorized) { return <Loading /> }

  return (
    <>
      <Head>
        <title>Dashboard • Takedi</title>
        <meta
          name="description"
          content="Dashboard para controlar conteúdo do meu portfólio."
          key="desc"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">

      </main>
    </>
  )
}