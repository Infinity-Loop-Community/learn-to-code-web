import {QuestionAttemptDTO} from "@/services/quiz/attempt/QuestionAttemptDTO";

export type QuizAttemptDTO = {
  id: string;
  quizId: string;
  questions: QuestionAttemptDTO[];
};