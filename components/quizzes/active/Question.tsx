import QuestionHeadline from "@/components/quizzes/active/QuestionHeadline";
import QuestionAnswerSelectionGroup from "@/components/quizzes/active/QuestionAnswerSelectionGroup";
import React from "react";
import {Control} from "react-hook-form";
import QuizQuestionResponse from "@/services/quiz/QuizQuestionResponse";

export default function Question(
    {num, quizQuestionResponse, control, selectedAnswer}: {
      num: number,
      quizQuestionResponse: QuizQuestionResponse,
      control: Control,
      selectedAnswer: string | undefined
    }) {

  return <div className="border-light overflow-hidden rounded-8 mb-30">
    <QuestionHeadline num={num} quizQuestionResponse={quizQuestionResponse}/>
    <QuestionAnswerSelectionGroup questionId={quizQuestionResponse.id} answers={quizQuestionResponse.answers} control={control} selectedAnswer={selectedAnswer}/>
  </div>

}
