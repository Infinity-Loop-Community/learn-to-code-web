import {AnswerDTO} from "@/services/quiz/AnswerDTO";

export type AnswerAttemptDTO = AnswerDTO & {
  isSelected: boolean;
};