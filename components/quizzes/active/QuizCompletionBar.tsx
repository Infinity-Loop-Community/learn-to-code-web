import React from "react";

export default function QuizCompletionBar({answersProvidedPercentage}: {answersProvidedPercentage: number}) {
  return <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
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
}