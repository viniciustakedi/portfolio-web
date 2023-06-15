import { atom } from "jotai";

type CurrentQuestionContent = {
  _id: string;
  thumbnail: string;
  question: string;
  options: {
    _id: string;
    value: string;
  }[];
  categories: string[];
};

const currentQuestionContentInitialValues = {
  _id: '',
  thumbnail: '',
  question: '',
  options: [],
  categories: [],
};

type QuizContent = {
  _id: string,
  questionsIds: string[],
  questionsAnswers: {
    questionId: string,
    questionAnswer: string,
    isAnswerCorrect: boolean
  }[],
  currentQuestion: string;
  isFinished: boolean,
  createdAt: Date
};

export const quizContentInitialValues = {
  _id: '',
  questionsIds: [],
  questionsAnswers: [],
  currentQuestion: '',
  isFinished: false,
  createdAt: new Date()
};

export const isQuizStartedAtom = atom<boolean>(false);
export const isQuizLoadingAtom = atom<boolean>(false);

export const quizContentAtom = atom<QuizContent>(quizContentInitialValues);
export const currentQuestionContentAtom = atom<CurrentQuestionContent>(currentQuestionContentInitialValues);
