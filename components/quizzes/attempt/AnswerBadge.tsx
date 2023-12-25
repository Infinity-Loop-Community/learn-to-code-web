import React from "react";

export default function AnswerBadge({isCorrect}: { isCorrect: boolean }) {

  const correctClassNameSuffix1 = isCorrect ? "success-1" : "error-1"
  const correctClassNameSuffix2 = isCorrect ? "success-2" : "error-2"

  return <div
      className={`bg-${correctClassNameSuffix1} rounded-4 pt-2 p-1 text-9 ml-10`}
      style={{height: '26px'}}>
    <div className={`text-${correctClassNameSuffix2} lh-1`}>
      <div className={`text-${correctClassNameSuffix2}`}>
        <span className="">{isCorrect ? "Correct" : "Wrong"}</span>
      </div>
    </div>
  </div>
}