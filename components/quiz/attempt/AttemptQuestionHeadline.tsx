import React from "react";
import {QuestionDTO} from "@/services/quiz/QuestionDTO";
import AttemptQuestionHeadlineIcon from "@/components/quiz/attempt/AttemptQuestionHeadlineIcon";

export default function AttemptQuestionHeadline(
    {num, questionDTO, isCorrect}: { num: number, questionDTO: QuestionDTO, isCorrect: boolean }) {

  return <div className="py-40 px-40 bg-dark-5">
    <div className="d-flex justify-between">
      <h4 className="text-18 lh-1 fw-500 text-white" id={`sec-${questionDTO.id}`}>
        Question {num}
      </h4>
      <div className="relative mr-20">
        <AttemptQuestionHeadlineIcon isCorrect={isCorrect} />
      </div>
    </div>

    <div className="text-20 lh-1 text-white mt-15">
      {questionDTO.text}
    </div>
  </div>

}