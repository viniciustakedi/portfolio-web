import { getToken, isJwtValid } from "@/configs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "@/components/loading";
import Head from "next/head";
import { useAtom } from "jotai";
import { IsUserAuthorized } from "@/contexts/users";

export default function Dashboard() {
  const [isUserAuthorized, setIsUserAuthorized] = useAtom(IsUserAuthorized)
  const router = useRouter()

  useEffect(() => {
    Promise.resolve().then(async () => {
      if (!await isJwtValid(getToken())) {
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
          content="Dashboard para controlar conteúdos do meu portfólio."
          key="desc"
        />
      </Head>
      <main className="main-default ">
        <h1 className=" font-semibold text-lg">Dashboard</h1>
      </main>
    </>
  )
}