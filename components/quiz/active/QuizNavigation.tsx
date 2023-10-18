import React, {useEffect, useState} from "react";
import {QuizDTO} from "@/services/quiz/QuizDTO";

export default function QuizNavigation({quizDTO, questionIdsWithAnswersProvided}:
                                           {
                                             quizDTO: QuizDTO,
                                             questionIdsWithAnswersProvided: Set<string>,
                                           }) {

  const [answersProvidedPercentage, setAnswersProvidedPercentage] = useState(0)
  let quizAnswerCount = quizDTO.questions.length;
  useEffect(() => {
    setAnswersProvidedPercentage(questionIdsWithAnswersProvided.size / quizAnswerCount)
  }, [questionIdsWithAnswersProvided, quizAnswerCount])

  return <div className="col-xl-3 col-lg-3">
    <div className="row y-gap-30">
      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Complete</h5>

          <div className="d-flex items-center">
            <div className="progress-bar w-1/1">
              <div className="progress-bar__bg bg-light-3"></div>
              <div className="progress-bar__bar bg-purple-1"
                   style={{width: `${answersProvidedPercentage * 100}%`}}></div>
            </div>

            <div className="d-flex y-gap-10 justify-between items-center ml-15">
              <div>{answersProvidedPercentage * 100}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

          <div className="row x-gap-10 y-gap-10">

            {quizDTO.questions.map((question, index) =>
                <div key={`quiz-nav-${question.id}`} className="col-auto">
                  <a
                      href={`#sec-${question.id}`}
                      className={`button -single-icon ${questionIdsWithAnswersProvided.has(question.id) ? "-green-2" : "-light-3"} text-dark-1 size-35 rounded-8`}
                  >
                    <div className="text-15 lh-1 fw-500">{index + 1}</div>
                  </a>
                </div>
            )}
          </div>

          <button className="button -md -dark-1 text-white -dark-button-white mt-30" type="submit">
            Finish
          </button>


        </div>
      </div>
    </div>
  </div>

}