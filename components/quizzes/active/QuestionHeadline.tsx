import React from "react";
import QuizQuestionResponse from "@/services/quiz/QuizQuestionResponse";
import Markdown from "markdown-to-jsx";

export default function QuestionHeadline({num, quizQuestionResponse}: { num: number, quizQuestionResponse: QuizQuestionResponse}) {

  return <div className="py-40 px-40 bg-dark-5">
    <div className="d-flex justify-between">
      <h4 className="text-18 lh-1 fw-500 text-white" id={`sec-${quizQuestionResponse.id}`}>
        Question {num}
      </h4>
    </div>

    <div className="text-20 lh-1 text-white mt-30">
      <Markdown>
        {String(quizQuestionResponse.text)}
      </Markdown>
    </div>
  </div>

}
