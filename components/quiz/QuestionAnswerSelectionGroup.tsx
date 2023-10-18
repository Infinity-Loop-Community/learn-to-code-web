import React from "react";
import {indexToChar} from "@/utils/stringUtils";
import {AnswerDTO} from "@/services/quiz/AnswerDTO";
import {OnAnswerProvided} from "@/components/quiz/active/Question";
import {Control, Controller} from "react-hook-form";

export default function QuestionAnswerSelectionGroup(
    {questionId, answers, onAnswerProvided, control}: {
      questionId: string,
      answers: AnswerDTO[],
      onAnswerProvided: OnAnswerProvided,
      control?: Control
    },
) {

  return <div className="px-40 py-40">
    {control && <Controller
        name={questionId}
        control={control}
        defaultValue=""
        rules={{required: 'Provide an answer to finish the quiz'}}
        render={({field, fieldState}) => (
            <>
              {
                answers.map((a, i) =>
                    <div key={a.id} className="form-radio d-flex items-center ">

                      <div className="radio">
                        <input type="radio" {...field} value={a.id}/>
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <label htmlFor={a.id}
                             className="fw-500 ml-12 pointer">{indexToChar(i)}. {a.text}</label>
                    </div>
                )
              }
              {fieldState.error &&

                  <div
                      className="d-flex items-center justify-between bg-warning-1 pl-30 pr-20 py-30 mt-20 rounded-8">
                    <div className="text-warning-2 lh-1 fw-500">{fieldState.error.message}</div>
                  </div>
              }
            </>
        )}
    />
    }

    {!control &&
                answers.map((a, i) =>
                    <div key={a.id} className="form-radio d-flex items-center ">

                      <div className="radio">
                        <input type="radio" value={a.id}/>
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <label htmlFor={a.id}
                             className="fw-500 ml-12 pointer">{indexToChar(i)}. {a.text}</label>
                    </div>
                )
    }

  </div>

}