import React from "react";
import {indexToChar} from "@/utils/stringUtils";
import {AnswerAttemptDTO} from "@/services/quiz/attempt/AnswerAttemptDTO";
import {AnswerDTO} from "@/services/quiz/AnswerDTO";

function isSelectedButNotCorrect(a: AnswerDTO & { isSelected: boolean }) {
  return a.isSelected && !a.isCorrect;
}

function isSelectedAndCorrect(a: AnswerDTO & { isSelected: boolean }) {
  return a.isSelected && a.isCorrect;
}

export default function AttemptQuestionAnswerSelectionGroup(
    {questionId, answers}: {
      questionId: string,
      answers: AnswerAttemptDTO[],
    },
) {


  return <div className="px-40 py-40">

    {
      answers.map((a, i) => {

            const correctClassNameSuffix1 = a.isCorrect ? "success-1" : "error-1"
            const correctClassNameSuffix2 = a.isCorrect ? "success-2" : "error-2"


            return <div key={a.id} className="form-radio d-flex items-center ">

              <div className="radio">
                <input type="radio" name={questionId} value={a.id} checked={a.isSelected}
                       readOnly={true}/>
                <div className="radio__mark">
                  <div className="radio__icon"></div>
                </div>
              </div>
              <label htmlFor={a.id}
                     className="fw-500 ml-12 pointer w-1/1 d-flex flex-row items-center">

                <div>{indexToChar(i)}. {a.text}</div>

                {isSelectedButNotCorrect(a) &&
                    (
                        <div
                            className={`bg-${correctClassNameSuffix1} rounded-4 pt-2 p-1 text-9 ml-10`} style={{height: '26px'}}>
                          <div className={`text-${correctClassNameSuffix2} lh-1`}>
                            <div className={`text-${correctClassNameSuffix2}`}>
                              <span className="">Wrong</span>
                            </div>
                          </div>
                        </div>
                    )
                }

                {a.isCorrect &&
                    (
                        <div
                            className={`bg-${correctClassNameSuffix1} rounded-4 pt-2 p-1 text-9 ml-10`} style={{height: '26px'}}>
                          <div className={`text-${correctClassNameSuffix2} lh-1`}>
                            <div className={`text-${correctClassNameSuffix2}`}>
                              <span className="">Correct</span>
                            </div>
                          </div>
                        </div>
                    )
                }
              </label>
            </div>
          }
      )
    }

  </div>

}