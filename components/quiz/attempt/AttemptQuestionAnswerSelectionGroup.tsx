import React from "react";
import {indexToChar} from "@/utils/stringUtils";
import {AnswerAttemptDTO} from "@/services/quiz/attempt/AnswerAttemptDTO";
import {AnswerDTO} from "@/services/quiz/AnswerDTO";
import AnswerBadge from "@/components/quiz/attempt/AnswerBadge";
import RadioInput from "@/components/quiz/RadioInput";

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

              {/*<div className="radio">*/}
              {/*  <input type="radio" name={questionId} value={a.id} checked={a.isSelected}*/}
              {/*         readOnly={true}/>*/}
              {/*  <div className="radio__mark">*/}
              {/*    <div className="radio__icon"></div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<label htmlFor={a.id}*/}
              {/*       className="fw-500 ml-12 pointer w-1/1 d-flex flex-row items-center">*/}

              {/*  <div>{indexToChar(i)}. {a.text}</div>*/}

              {/*  { (a.isSelected || (!a.isSelected && a.isCorrect)) && <AnswerBadge isCorrect={a.isCorrect}/> }*/}
              {/*</label>*/}
            </div>
          }
      )
    }

  </div>

}