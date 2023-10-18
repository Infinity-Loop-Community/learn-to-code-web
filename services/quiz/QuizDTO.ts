import {QuestionDTO} from "@/services/quiz/QuestionDTO";

export type QuizDTO = {
  id: string;
  questions: QuestionDTO[];
};