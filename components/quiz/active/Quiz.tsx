"use client";

import React from "react";
import FooterNine from "@/components/layout/footers/FooterNine";
import PageLinksTwo from "@/components/common/PageLinksTwo";
import {QuizDTO} from "@/services/quiz/QuizDTO";
import Question from "@/components/quiz/active/Question";
import QuizNavigation from "@/components/quiz/active/QuizNavigation";
import useQuizForm from "@/components/quiz/active/useQuizForm";


export default function Quiz({quizDTO}: {
  quizDTO: QuizDTO
}) {
  const {handleSubmit, control, questionIdsWithAnswersProvided} = useQuizForm(quizDTO);

  return (
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Quiz</h1>
              <PageLinksTwo/>
            </div>
          </div>

          <form onSubmit={handleSubmit()}>
            <div className="row y-gap-30">
              <div className="col-xl-9">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Quiz</h2>
                  </div>

                  <div className="py-30 px-30">

                    {quizDTO.questions.map((questionDTO, i) =>
                        <Question num={i + 1} key={questionDTO.id} questionDTO={questionDTO}
                                  control={control}/>
                    )}

                  </div>
                </div>
              </div>

              <QuizNavigation quizDTO={quizDTO}
                              questionIdsWithAnswersProvided={questionIdsWithAnswersProvided}
              />
            </div>
          </form>
        </div>

        <FooterNine/>
      </div>
  );
}
