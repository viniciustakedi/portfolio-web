import Head from "next/head";
import { useAtom } from "jotai";
import Loading from "@/components/loadings";
import { isQuizLoadingAtom, isQuizStartedAtom, quizContentAtom } from "@/contexts/quizzes";
import { QuizCongratulations, QuizQuestions, StartQuiz } from "@/components/page-components/quiz";
import { useEffect } from "react";

export default function Quiz() {
  const [isQuizLoading, setIsQuizLoading] = useAtom(isQuizLoadingAtom)
  const [isQuizStarted, setIsQuizStarted] = useAtom(isQuizStartedAtom)
  const [quizContent, setQuizContent] = useAtom(quizContentAtom)

  useEffect(() => {
    setIsQuizLoading(false);
  }, [])

  if (isQuizLoading) { return <Loading /> }

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
        {(!isQuizStarted && (<StartQuiz />))}
        {(!quizContent.isFinished && isQuizStarted && (<QuizQuestions />))}
        {(quizContent.isFinished && isQuizStarted && (<QuizCongratulations />))}
      </main>
    </>
  )
}