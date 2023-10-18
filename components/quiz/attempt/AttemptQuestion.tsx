import QuestionHeadline from "@/components/quiz/QuestionHeadline";
import React from "react";
import QuestionAnswerEvaluation from "@/components/quiz/attempt/QuestionAnswerEvaluation";
import {QuestionAttemptDTO} from "@/services/quiz/attempt/QuestionAttemptDTO";
import AttemptQuestionAnswerSelectionGroup
  from "@/components/quiz/attempt/AttemptQuestionAnswerSelectionGroup";
import AttemptQuestionHeadline from "@/components/quiz/attempt/AttemptQuestionHeadline";

export default function AttemptQuestion(
    {num, questionAttemptDTO}: {
      num: number,
      questionAttemptDTO: QuestionAttemptDTO,
    }) {

  const isCorrect = !!questionAttemptDTO.answers.find(a => a.isCorrect && a.isSelected)
  const currentAnswerId = questionAttemptDTO.answers.find(a => a.isSelected)?.id
  if (currentAnswerId === undefined) {
    throw new Error(`no answer provided for answerAttempt '${questionAttemptDTO.id}'`)
  }

  return <div className="border-light overflow-hidden rounded-8 mb-30">

    <AttemptQuestionHeadline
        num={num}
        questionDTO={questionAttemptDTO}
        isCorrect={isCorrect}
    />

    <AttemptQuestionAnswerSelectionGroup questionId={questionAttemptDTO.id}
                                         answers={questionAttemptDTO.answers}/>

    <QuestionAnswerEvaluation questionDTO={questionAttemptDTO} isCorrect={isCorrect}
                              currentAnswerId={currentAnswerId}/>

  </div>

}