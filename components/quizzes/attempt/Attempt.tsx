"use client";

import React from "react";
import FooterNine from "@/components/layout/footers/FooterNine";
import AttemptResult from "@/components/quizzes/attempt/AttemptResult";
import AttemptNavigation from "@/components/quizzes/attempt/AttemptNavigation";
import AttemptQuestion from "@/components/quizzes/attempt/AttemptQuestion";
import PageLinks from "@/components/common/PageLinks";
import QuizAttemptDetailResponse from "@/services/participant/response/QuizAttemptDetailResponse";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export default function Attempt({quizAttemptDetailResponse, quizResponse}: { quizAttemptDetailResponse: QuizAttemptDetailResponse, quizResponse: StepQuizResponseWithContext }) {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Quiz</h1>
            <PageLinks courseStepTitle={quizResponse.stepName} courseTitle={quizResponse.courseName} />
          </div>
        </div>

        <div className="row y-gap-30">
          <AttemptResult quizAttemptDetailResponse={quizAttemptDetailResponse}/>

          <div className="col-xl-9">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Quiz</h2>
              </div>

              <div className="py-30 px-30">

                {quizResponse.questions.map((questionResponse, i) =>
                    <AttemptQuestion num={i + 1} key={questionResponse.id} questionResponse={questionResponse} selectedAnswerId={quizAttemptDetailResponse.questionsWithAnswer[questionResponse.id]} />
                )}

              </div>
            </div>
          </div>

          <AttemptNavigation quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
