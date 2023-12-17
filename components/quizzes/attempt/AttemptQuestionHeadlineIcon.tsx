import React from "react";

export default function AttemptQuestionHeadlineIcon({isCorrect}: { isCorrect: boolean }) {
  return isCorrect
      ? <i className="position-absolute text-20 icon-check text-white position-absolute text-success-1"></i>
      : <i className="position-absolute text-20 icon-close text-white position-absolute text-error-1"></i>
}