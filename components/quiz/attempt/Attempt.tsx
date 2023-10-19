"use client";

import React from "react";
import FooterNine from "@/components/layout/footers/FooterNine";
import PageLinksTwo from "@/components/common/PageLinksTwo";
import AttemptResult from "@/components/quiz/attempt/AttemptResult";
import AttemptNavigation from "@/components/quiz/attempt/AttemptNavigation";
import AttemptQuestion from "@/components/quiz/attempt/AttemptQuestion";
import {AttemptDTO} from "@/services/quiz/attempt/AttemptDTO";

export default function Attempt({quizAttemptDTO}: { quizAttemptDTO: AttemptDTO }) {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Quiz</h1>
            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <AttemptResult/>

          <div className="col-xl-9">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Quiz</h2>
              </div>

              <div className="py-30 px-30">

                {quizAttemptDTO.questions.map((questionDTO, i) =>
                    <AttemptQuestion num={i + 1} key={questionDTO.id} questionAttemptDTO={questionDTO} />
                )}

              </div>
            </div>
          </div>

          <AttemptNavigation quizAttemptDTO={quizAttemptDTO}/>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
