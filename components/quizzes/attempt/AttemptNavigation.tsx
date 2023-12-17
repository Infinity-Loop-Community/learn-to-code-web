import React from "react";
import Link from "next/link";
import AttemptNavigationElement from "@/components/quizzes/attempt/AttemptNavigationElement";
import QuizAttemptDetailResponse from "@/services/participant/response/QuizAttemptDetailResponse";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export default function AttemptNavigation({quizResponse, quizAttemptDetailResponse}:
                                                 {
                                                   quizResponse: StepQuizResponseWithContext,
                                                   quizAttemptDetailResponse: QuizAttemptDetailResponse,
                                                 }) {

  return <div className="col-xl-3 col-lg-3">
    <div className="row y-gap-30">
      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

          <div className="row x-gap-10 y-gap-10">

            {quizResponse.questions.map((question, index) =>
                <AttemptNavigationElement key={`quiz-nav-${question.id}`} questionId={question.id} isCorrect={question.answers.some(a => a.isCorrect && a.id === quizAttemptDetailResponse.questionsWithAnswer[question.id])} num={index+1} />
            )}
          </div>

          <Link href={`/quizzes/${quizResponse.id}?t=${new Date().getTime()}`}>
            <button className="button -md -dark-1 text-white -dark-button-white mt-30 w-1/1">
              Retry
            </button>
          </Link>

          <Link href={`/quizzes/`}>
            <button className="button -md -purple-1 text-white mt-10 w-1/1">
              Go to Quiz Overview
            </button>
          </Link>

        </div>
      </div>
    </div>
  </div>

}
