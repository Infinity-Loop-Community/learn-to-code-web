import {QuestionAttemptDTO} from "@/services/quiz/attempt/QuestionAttemptDTO";

export type AttemptDTO = {
  id: string;
  quizId: string;
  questions: QuestionAttemptDTO[];
};