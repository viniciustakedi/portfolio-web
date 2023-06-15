import { currentQuestionContentAtom, isQuizLoadingAtom, isQuizStartedAtom, quizContentAtom, quizContentInitialValues } from "@/contexts/quizzes";
import { findQuizById, getQuestionById } from "@/services/get";
import { upPositionVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useRef } from "react";

export default function ButtonsChangeQuestion() {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionContentAtom)
  const [isQuizLoading, setIsQuizLoading] = useAtom(isQuizLoadingAtom);
  const [isQuizStarted, setIsQuizStarted] = useAtom(isQuizStartedAtom);
  const [quizContent, setQuizContent] = useAtom(quizContentAtom);
  const questionsIndex = useRef<number>(0);

  const route = useRouter();

  const getQuizCallback = useCallback(async () => {
    await getQuiz();
    setIsQuizLoading(false);
  }, []);

  useEffect(() => {
    getQuizCallback();
  }, [questionsIndex.current])

  const getQuestion = async (questionId: string) => {
    const question = await getQuestionById(questionId);

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

        if (quiz.data.isFinished) {
          await getQuestion(quiz.data.questionsAnswers[questionsIndex.current].questionId);
        }
      } else {
        localStorage.removeItem('quizId');
        route.push('/quiz');
      }
    }

    setIsQuizLoading(false);
  }

  const handleChangeQuestion = async (type: string) => {
    if (type === 'prev' && questionsIndex.current >= 0) {
      questionsIndex.current = questionsIndex.current - 1;
    }

    if (type === 'next' && questionsIndex.current <= quizContent.questionsAnswers.length - 1) {
      questionsIndex.current = questionsIndex.current + 1;
    }

    await getQuestion(quizContent.questionsAnswers[questionsIndex.current].questionId);
  }

  const handleClearQuiz = () => {
    route.push('/')
    setIsQuizLoading(true);
    setIsQuizStarted(false);
    setQuizContent(quizContentInitialValues)

    localStorage.removeItem('quizId');
  }

  return (
    <div className="flex justify-between lg:w-4/6 md=:w-5/6 w-full mt-4">
      <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1.2 })}>
        <button
          className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-dark-blue'
          onClick={() => handleChangeQuestion('prev')}
          disabled={questionsIndex.current <= 0}
        >
          Anterior
        </button>
      </motion.div>
      {(
        quizContent.questionsAnswers.length === questionsIndex.current + 1 && (
          <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1.2 })}>
            <button
              className='flex justify-center p-2 w-44 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'
              onClick={handleClearQuiz}
            >
              Voltar para home
            </button>
          </motion.div>
        )
      )}
      <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1.2 })}>
        <button
          className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-dark-blue'
          onClick={() => handleChangeQuestion('next')}
          disabled={questionsIndex.current >= quizContent.questionsAnswers.length - 1}
        >
          Próxima
        </button>
      </motion.div>
    </div>
  )
}
