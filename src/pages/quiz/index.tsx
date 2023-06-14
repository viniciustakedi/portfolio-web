import Head from "next/head";
import { useState } from "react";
import { StartQuiz } from "@/components/page-components/quiz";
import Loading from "@/components/loading";

export default function Quiz() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false)
  
  if (isLoading) { return <Loading /> }

  return (
    <>
      <Head>
        <title>Quiz • Takedi</title>
        <meta
          name="description"
          content="Quiz de programação para você se divertir e treinar seus conhecimentos."
          key="desc"
        />
      </Head>
      <main className="w-full min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        {(
          !isQuizStarted && (<StartQuiz/>)
        )}
        {(
          isQuizStarted && (
            <h1>
              Teste
            </h1>
          )
        )}
      </main>
    </>
  )
}