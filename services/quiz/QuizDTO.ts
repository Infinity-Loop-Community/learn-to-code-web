import {QuestionDTO} from "@/services/quiz/QuestionDTO";

export type QuizDTO = {
  id: string;

  course: {
    id: string,
    title: string,
  },

  courseStep: {
    id: string,
    title: string,
  },

  questions: QuestionDTO[];
};