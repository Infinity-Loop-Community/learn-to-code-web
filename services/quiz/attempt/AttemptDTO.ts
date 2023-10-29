import {QuestionAttemptDTO} from "@/services/quiz/attempt/QuestionAttemptDTO";

export type AttemptDTO = {
  id: string;
  attempt: number;
  quizId: string,

  course: {
    id: string,
    title: string,
  },

  courseStep: {
    id: string,
    title: string,
  },

  questions: QuestionAttemptDTO[];
};