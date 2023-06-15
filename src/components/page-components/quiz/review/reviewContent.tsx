import { currentQuestionContentAtom, quizContentAtom } from "@/contexts/quizzes";
import Image from "next/image";
import { useAtom } from "jotai";

export default function ReviewContent() {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionContentAtom);
  const [quizContent, setQuizContent] = useAtom(quizContentAtom);

  return (
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
          currentQuestion.options.map((option) => {
            const questionInQuiz = quizContent.questionsAnswers.find((question) => question.questionId === currentQuestion._id);

            const bgColor = option._id === questionInQuiz?.questionAnswer
              ? questionInQuiz?.isAnswerCorrect
                ? "bg-green-600"
                : " bg-rose-600"
              : "bg-blue";

            return (
              <span
                key={option._id}
                className={`${bgColor} rounded-md px-4 py-6 text-white text-center w-full font-medium`}
              >
                {option.value}
              </span>
            )
          })
        )}
      </div>
    </div>
  )
}