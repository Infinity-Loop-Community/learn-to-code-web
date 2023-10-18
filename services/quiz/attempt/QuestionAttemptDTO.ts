import {QuestionDTO} from "@/services/quiz/QuestionDTO";
import {AnswerAttemptDTO} from "@/services/quiz/attempt/AnswerAttemptDTO";

export type QuestionAttemptDTO = Omit<QuestionDTO, "answers"> & {
  answers: AnswerAttemptDTO[];
};