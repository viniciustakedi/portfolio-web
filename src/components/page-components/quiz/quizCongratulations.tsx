import { isQuizLoadingAtom, isQuizStartedAtom, quizContentAtom, quizContentInitialValues } from "@/contexts/quizzes";
import { upPositionVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function QuizCongratulations() {
  const route = useRouter();

  const [isQuizLoading, setIsQuizLoading] = useAtom(isQuizLoadingAtom)
  const [isQuizStarted, setIsQuizStarted] = useAtom(isQuizStartedAtom)
  const [quizContent, setQuizContent] = useAtom(quizContentAtom)

  const total = quizContent.questionsAnswers.length;
  const answersCorrect = quizContent.questionsAnswers.filter(e => e.isAnswerCorrect).length;
  const answersWrong = quizContent.questionsAnswers.filter(e => !e.isAnswerCorrect).length;

  const handleClearQuiz = () => {
    route.push('/')
    setIsQuizLoading(true);
    setIsQuizStarted(false);
    setQuizContent(quizContentInitialValues)

    localStorage.removeItem('quizId');
  }

  const handleGoToReview = () => {
    setIsQuizLoading(true);
    route.push('/quiz/review')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <h1 className="mb-4 text-9xl">🎉</h1>
      <h1 className='lg:text-6xl md:text-5x1 text-4xl font-extrabold text-white mt-2 text-center'>
        {answersCorrect === total && 'Parabéns! Você finalizou o quiz!'}
        {answersCorrect !== total && answersWrong !== total && 'Uhuul, você finalizou o quiz!'}
        {answersWrong === total && 'Ebaa, você finalizou o quiz!'}
        <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-soft-blue to-blue'>
          {answersCorrect === total && 'Perfeito! Você acertou todas as perguntas!'}
          {answersCorrect !== total && answersWrong !== total && `Você acertou ${answersCorrect} de ${total}`}
          {answersWrong === total && 'Que pena! Você errou todas!'}
        </span>
      </h1>
      <div className='flex justify-center items-center gap-2 mt-8'>
        {(
          answersWrong > 0 && (
            <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1 })}>
              <button onClick={handleGoToReview} className='flex justify-center p-2 w-28 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
                Ver resumo
              </button>
            </motion.div>
          )
        )}
        <motion.div initial="hidden" animate="visible" variants={upPositionVariants({ delay: 1.2 })}>
          <button onClick={handleClearQuiz} className='flex justify-center p-2 w-40 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white'>
            Voltar para home
          </button>
        </motion.div>
      </div>
    </div>
  )
}