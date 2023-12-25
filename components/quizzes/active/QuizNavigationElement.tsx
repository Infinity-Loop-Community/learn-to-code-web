import React from "react";

export default function QuizNavigationElement({questionId, isAnswered, num}: {questionId: string, isAnswered: boolean, num: number}) {
  return <div key={`${questionId}`} className="col-auto">
    <a
        href={`#sec-${questionId}`}
        className={`button -single-icon ${isAnswered ? "-green-2" : "-light-3"} text-dark-1 size-35 rounded-8`}
    >
      <div className="text-15 lh-1 fw-500">{num}</div>
    </a>
  </div>
}