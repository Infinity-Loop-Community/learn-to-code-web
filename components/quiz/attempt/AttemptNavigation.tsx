import React from "react";
import Link from "next/link";
import {QuizAttemptDTO} from "@/services/quiz/attempt/QuizAttemptDTO";

export default function AttemptNavigation({quizAttemptDTO}:
                                                 {
                                                   quizAttemptDTO: QuizAttemptDTO,
                                                 }) {

  let quizAnswerCount = quizAttemptDTO.questions.length;

  return <div className="col-xl-3 col-lg-3">
    <div className="row y-gap-30">
      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

          <div className="row x-gap-10 y-gap-10">

            {quizAttemptDTO.questions.map((question, index) =>
                <div key={`quiz-nav-${question.id}`} className="col-auto">
                  <a
                      href={`#sec-${question.id}`}
                      className={`button -single-icon ${question.answers.some(a => a.isCorrect && a.isSelected) ? "-green-2" : "-red-2"} text-dark-1 size-35 rounded-8`}
                  >
                    <div className="text-15 lh-1 fw-500">
                      {index + 1}
                    </div>
                  </a>
                </div>
            )}
          </div>

          <Link href={`/quiz/${quizAttemptDTO.quizId}`}>
            <button className="button -md -dark-1 text-white -dark-button-white mt-30"
                    onClick={() => console.log('todo')}>
              Retry
            </button>
          </Link>

        </div>
      </div>
    </div>
  </div>

}