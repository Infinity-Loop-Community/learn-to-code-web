import QuestionHeadline from "@/components/quiz/QuestionHeadline";
import QuestionAnswerSelectionGroup from "@/components/quiz/QuestionAnswerSelectionGroup";
import React, {useState} from "react";
import {QuestionDTO} from "@/services/quiz/QuestionDTO";
import QuestionAnswerEvaluation from "@/components/quiz/QuestionAnswerEvaluation";
import {Control, FieldValues} from "react-hook-form";

export type OnAnswerProvided = (questionId: string, answerId: string) => void;

export default function Question(
    {num, questionDTO, control}: {
      num: number,
      questionDTO: QuestionDTO,
      control: Control
    }) {

  const [isCorrect, setIsCorrect] = useState(false)
  const [currentAnswerId, setCurrentAnswerId] = useState<string | null>(null)

  const questionOnAnswerProvided: OnAnswerProvided = (questionId, answerId) => {
    const isAnswerCorrect = questionDTO.answers.find(a => a.id === answerId)?.isCorrect ?? false
    setIsCorrect(isAnswerCorrect)
    setCurrentAnswerId(answerId)
  }

  return <div className="border-light overflow-hidden rounded-8 mb-30">

    <QuestionHeadline
        num={num}
        questionDTO={questionDTO}
        answered={false}
    />

    <QuestionAnswerSelectionGroup onAnswerProvided={questionOnAnswerProvided} questionId={questionDTO.id}
                                  answers={questionDTO.answers} control={control}/>

  </div>

}