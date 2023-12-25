import React from "react";
import {indexToChar} from "@/libs/utils/stringUtils";
import AnswerBadge from "@/components/quizzes/attempt/AnswerBadge";
import RadioInput from "@/components/quizzes/RadioInput";
import QuizAnswerResponse from "@/services/quiz/QuizAnswerResponse";

export default function AttemptQuestionAnswerSelectionGroup(
    {questionId, answers, selectedAnswerId}: {
      questionId: string,
      answers: QuizAnswerResponse[],
      selectedAnswerId: string
    },
) {
  return <div className="px-40 py-40">

    {
      answers.map((a, i) => {
            return <div key={a.id} className="form-radio d-flex items-center ">

              <RadioInput name={questionId} value={a.id} checked={a.id === selectedAnswerId} readOnly={true}
                          labelElement={
                            <>
                              <div>{indexToChar(i)}. {a.text}</div>

                              {(a.id === selectedAnswerId || (a.id !== selectedAnswerId && a.isCorrect)) &&
                                  <AnswerBadge isCorrect={a.isCorrect}/>}
                            </>
                          }
              />
            </div>
          }
      )
    }

  </div>

}
