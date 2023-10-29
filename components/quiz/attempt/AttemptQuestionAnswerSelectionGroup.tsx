import React from "react";
import {indexToChar} from "@/libs/utils/stringUtils";
import {AnswerAttemptDTO} from "@/services/quiz/attempt/AnswerAttemptDTO";
import AnswerBadge from "@/components/quiz/attempt/AnswerBadge";
import RadioInput from "@/components/quiz/RadioInput";

export default function AttemptQuestionAnswerSelectionGroup(
    {questionId, answers}: {
      questionId: string,
      answers: AnswerAttemptDTO[],
    },
) {
  return <div className="px-40 py-40">

    {
      answers.map((a, i) => {
            return <div key={a.id} className="form-radio d-flex items-center ">

              <RadioInput name={questionId} value={a.id} checked={a.isSelected} readOnly={true}
                          labelElement={
                            <>
                              <div>{indexToChar(i)}. {a.text}</div>

                              {(a.isSelected || (!a.isSelected && a.isCorrect)) &&
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