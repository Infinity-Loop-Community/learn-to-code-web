import React from "react";
import Link from "next/link";
import {AttemptDTO} from "@/services/quiz/attempt/AttemptDTO";
import AttemptNavigationElement from "@/components/quiz/attempt/AttemptNavigationElement";

export default function AttemptNavigation({quizAttemptDTO}:
                                                 {
                                                   quizAttemptDTO: AttemptDTO,
                                                 }) {

  return <div className="col-xl-3 col-lg-3">
    <div className="row y-gap-30">
      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

          <div className="row x-gap-10 y-gap-10">

            {quizAttemptDTO.questions.map((question, index) =>
                <AttemptNavigationElement key={`quiz-nav-${question.id}`} questionId={question.id} isCorrect={question.answers.some(a => a.isCorrect && a.isSelected)} num={index+1} />
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