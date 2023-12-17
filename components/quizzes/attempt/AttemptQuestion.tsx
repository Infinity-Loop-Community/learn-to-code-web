import React from "react";
import QuestionAnswerEvaluation from "@/components/quizzes/attempt/QuestionAnswerEvaluation";
import AttemptQuestionAnswerSelectionGroup
  from "@/components/quizzes/attempt/AttemptQuestionAnswerSelectionGroup";
import AttemptQuestionHeadline from "@/components/quizzes/attempt/AttemptQuestionHeadline";
import QuizQuestionResponse from "@/services/quiz/QuizQuestionResponse";

export default function AttemptQuestion(
    {num, questionResponse, selectedAnswerId}: {
      num: number,
      questionResponse: QuizQuestionResponse,
      selectedAnswerId: string,
    }) {

  const isCorrect = getIsCorrect(questionResponse, selectedAnswerId)

  return <div className="border-light overflow-hidden rounded-8 mb-30">

    <AttemptQuestionHeadline
        num={num}
        questionDTO={questionResponse}
        isCorrect={isCorrect}
    />

    <AttemptQuestionAnswerSelectionGroup questionId={questionResponse.id}
                                         answers={questionResponse.answers} selectedAnswerId={selectedAnswerId}/>

    <QuestionAnswerEvaluation questionDTO={questionResponse} isCorrect={isCorrect}
                              currentAnswerId={selectedAnswerId}/>

  </div>

}

function getIsCorrect(questionAttemptDTO: QuizQuestionResponse, selectedAnswerId: any) {
  return !!questionAttemptDTO.answers.find(a => a.isCorrect && a.id === selectedAnswerId);
}

