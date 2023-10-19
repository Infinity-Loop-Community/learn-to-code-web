import React from "react";
import {QuestionDTO} from "@/services/quiz/QuestionDTO";

export default function QuestionHeadline({num, questionDTO}: { num: number, questionDTO: QuestionDTO}) {

  return <div className="py-40 px-40 bg-dark-5">
    <div className="d-flex justify-between">
      <h4 className="text-18 lh-1 fw-500 text-white" id={`sec-${questionDTO.id}`}>
        Question {num}
      </h4>
    </div>

    <div className="text-20 lh-1 text-white mt-30">
      {questionDTO.text}:
    </div>
  </div>

}