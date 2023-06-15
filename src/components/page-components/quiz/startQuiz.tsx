import { Player } from "@lottiefiles/react-lottie-player";
import QuizLottieFile from '@/assets/lottie-files/quiz.json'
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { startQuiz } from "@/services/post";
import { findQuizById } from "@/services/get";
import { useAtom } from "jotai";
import { isQuizLoadingAtom, isQuizStartedAtom } from "@/contexts/quizzes";

export default function StartQuiz() {
  const [isQuizStarted, setIsQuizStarted] = useAtom(isQuizStartedAtom)
  const [isQuizLoading, setIsQuizLoading] = useAtom(isQuizLoadingAtom)

  useEffect(() => {
    Promise.resolve().then(async () => {
      const quizId = localStorage.getItem('quizId');
      setIsQuizLoading(true)

      if (quizId) {
        const quiz = await findQuizById(quizId);
        if (quiz.status === 200) {
          setIsQuizStarted(true);
        } else {
          localStorage.removeItem('quizId');
        }
      }

      setIsQuizLoading(false)
    });
  }, [])

  const handleStartQuiz = async () => {
    setIsQuizLoading(true);
    const quiz = await startQuiz();
    if (quiz.status === 201) {
      setIsQuizStarted(true);
    } else {
      let errorMessage = 'Erro ao começar quiz!';

      if (quiz.message === 'IP Blocked') {
        errorMessage = 'Você já começou um quiz recentemente, tente novamente mais tarde.';
      }

      enqueueSnackbar(errorMessage, { variant: 'error' });
      setIsQuizStarted(false);
    }

    setIsQuizLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Player
        src={QuizLottieFile}
        autoplay
        loop
        style={{ height: '175px', width: '175px' }}
      />
      <div className="flex mt-8 items-center flex-col">
        <p className="mt-4 mb-2 mx-4 text-2xl text-center text-white bg-dark-blue p-6 rounded-full border-spacing-8 border">
          Quiz de programação para você se divertir e treinar seus conhecimentos.
        </p>
        <button
          className="px-10 py-2 mt-4 text-xl font-bold text-white bg-soft-blue rounded-full hover:bg-blue transition-all duration-150"
          onClick={handleStartQuiz}
        >
          Começar
        </button>
      </div>
    </div>
  );
}