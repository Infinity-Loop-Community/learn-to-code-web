import {QuestionDTO} from "@/services/quiz/QuestionDTO";
import {indexToChar} from "@/utils/stringUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

export default function QuestionAnswerEvaluation({questionDTO, isCorrect, currentAnswerId}: { questionDTO: QuestionDTO, isCorrect: boolean, currentAnswerId: string }) {

  const [activeAccordion, setActiveAccordion] = useState(false);

  const correctClassNameSuffix2 = isCorrect ? "success-2" : "error-2"

  const selectedAnswer = questionDTO.answers.find(a => a.id === currentAnswerId)!!
  const selectedAnswerLetter = indexToChar(questionDTO.answers.indexOf(selectedAnswer))
  const correctAnswer = questionDTO.answers.find(a => a.isCorrect)!!
  const correctAnswerLetter = indexToChar(questionDTO.answers.indexOf(correctAnswer))

  const otherAnswers = questionDTO.answers.filter(a => !a.isCorrect)

  return <div style={{
    borderTop: "2px solid var(--color-light-5)"
  }}>
    <div className={`d-flex items-center justify-between  pl-30 pr-20 py-30 rounded-8`}>


      {isCorrect
          ? (
              <div
                  className={`lh-1 fw-500 d-flex flex-column items-start`}>
                {
                  <div className={`my-4 text-${correctClassNameSuffix2}`}>
                    <b>{selectedAnswerLetter + ". " + correctAnswer.text + ": "}</b> {selectedAnswer.description}
                  </div>
                }
                <div className="accordion -block js-accordion">
                  <div
                      onClick={() => setActiveAccordion((active) => !active)}
                      className={`accordion__item bg-light-4  ${
                          activeAccordion ? "is-active" : ""
                      }`}
                  >
                    <div className="accordion__button">
                      <div className="accordion__icon">
                        <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            className="icon"
                            data-feather="plus"
                        >
                          <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            className="icon"
                            data-feather="minus"
                        >
                          <FontAwesomeIcon icon={faMinus}/>
                        </div>
                      </div>
                      <span className="text-17 fw-500 text-dark-1">Show all explanations</span>
                    </div>

                    <div
                        style={activeAccordion ? {maxHeight: "100%"} : {}}
                        className="accordion__content"
                    >
                      <div className="accordion__content__inner">
                        <div>
                          {
                            otherAnswers.map(a => {
                                  const answerLetter = indexToChar(questionDTO.answers.indexOf(a))
                                  return <div key={a.id} className="mb-10">
                                    <p><b>{answerLetter + ". " + a.text + " is incorrect "}</b>
                                    </p> {a.description}
                                  </div>
                                }
                            )
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )
          : (
              <div
                  className={`lh-1 fw-500 d-flex items-start flex-column `}>
                <div className="text-success-2">
                  <p>
                    <b>{correctAnswerLetter + ". " + correctAnswer.text + " is correct: "}</b>
                  </p>
                  <p>{correctAnswer.description}</p>


                </div>
                <br/>

                {
                  otherAnswers.map(a => {
                        const answerLetter = indexToChar(questionDTO.answers.indexOf(a))
                        return <div key={a.id} className="mb-10">
                          <p><b>{answerLetter + ". " + a.text + " is incorrect "}</b>
                          </p> {a.description}
                        </div>
                      }
                  )
                }


              </div>
          )
      }

    </div>
  </div>

}