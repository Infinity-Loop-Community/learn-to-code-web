import {AnswerDTO} from "@/services/quiz/AnswerDTO";

export type QuestionDTO = {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answers: AnswerDTO[];
};