import React from "react";
import {QuestionDTO} from "@/services/quiz/QuestionDTO";

export default function QuestionHeadline(
    {num, questionDTO, answered}: { num: number, questionDTO: QuestionDTO, answered: boolean }) {

  return <div className="py-40 px-40 bg-dark-5">
    <div className="d-flex justify-between">
      <h4 className="text-18 lh-1 fw-500 text-white" id={`sec-${questionDTO.id}`}>
        Question {num}
      </h4>
      <div className="d-flex x-gap-50">
      </div>
    </div>

    <div className="d-flex pt-15">
      <div className="text-white"></div>
      <div className="text-white ml-50"></div>
    </div>

    <div className="text-20 lh-1 text-white mt-15">
      {questionDTO.text}:
    </div>
  </div>

}