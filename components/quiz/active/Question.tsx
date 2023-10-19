import QuestionHeadline from "@/components/quiz/active/QuestionHeadline";
import QuestionAnswerSelectionGroup from "@/components/quiz/active/QuestionAnswerSelectionGroup";
import React from "react";
import {QuestionDTO} from "@/services/quiz/QuestionDTO";
import {Control} from "react-hook-form";

export type OnAnswerProvided = (questionId: string, answerId: string) => void;

export default function Question(
    {num, questionDTO, control}: {
      num: number,
      questionDTO: QuestionDTO,
      control: Control
    }) {

  return <div className="border-light overflow-hidden rounded-8 mb-30">
    <QuestionHeadline num={num} questionDTO={questionDTO}/>
    <QuestionAnswerSelectionGroup questionId={questionDTO.id} answers={questionDTO.answers} control={control}/>
  </div>

}