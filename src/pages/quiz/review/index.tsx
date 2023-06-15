import { currentQuestionContentAtom, isQuizLoadingAtom, quizContentAtom } from "@/contexts/quizzes"
import { findQuizById, getQuestionById } from "@/services/get";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useAtom } from "jotai"
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function QuizReviewQuestions() {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionContentAtom)
  const [isQuizLoading, setIsQuizLoading] = useAtom(isQuizLoadingAtom)
  const [quizContent, setQuizContent] = useAtom(quizContentAtom)
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const route = useRouter();

  useEffect(() => {
    Promise.resolve().then(async () => {
      await getQuiz();
    });
  }, [])

  const getQuestion = async (questionId: string) => {
    console.log("🚀 ~ file: index.tsx:46 ~ getQuestion ~ questionId:", questionId)
    const question = await getQuestionById(questionId);
    console.log("🚀 ~ file: index.tsx:50 ~ getQuestion ~ uestion.data:", question)

    if (question.status === 200) {
      setCurrentQuestion(question.data);
    } else {
      enqueueSnackbar('Erro ao carregar pergunta!', { variant: 'error' });
    }
  }

  const getQuiz = async () => {
    setIsQuizLoading(true);

    const quizId = localStorage.getItem('quizId');
    if (quizId) {
      const quiz = await findQuizById(quizId);
      if (quiz.status === 200) {
        setQuizContent(quiz.data);

        if (!quiz.data.isFinished) {
          await getQuestion(quiz.data.questionsAnswers[questionIndex].questionId);
        }
      } else {
        localStorage.removeItem('quizId');
        route.push('/quiz');
      }
    }

    setIsQuizLoading(false);
  }

  return (
    <>
      <Head>
        <title>Quiz Review • Takedi</title>
        <meta
          name="description"
          content="Quiz de programação para você se divertir e treinar seus conhecimentos. Página de revisão."
          key="desc"
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full min-h-screen p-4">
        <div className="lg:w-4/6 md=:w-5/6 w-full">
          <div className="relative w-full flex mt-8 items-center rounded-md flex-col bg-black">
            <Image
              src={currentQuestion.thumbnail}
              alt="question-thumbnail"
              className="opacity-20 rounded-md object-cover w-full h-96"
              width={500}
              height={250}
            />
            <h1 className="absolute lg:top-1/2 md:top-1/2 top-14 lg:text-2xl md:text-2x1 text-lg text-center font-bold" >
              {currentQuestion.question}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-4 w-full">
            {(
              currentQuestion.options.map((option) => (
                <span
                  key={option._id}
                  className="bg-blue rounded-md px-4 py-6 text-white w-full font-medium hover:bg-dark-blue transition-all"
                >
                  {option.value}
                </span>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  )
}
