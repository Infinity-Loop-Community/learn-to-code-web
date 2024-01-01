import {
  categories, coursesData,
  duration,
  instractorNames,
  languages,
  levels,
  prices,
  rating,
} from "@/data/courses";
import React from "react";
import Star from "../common/Star";
import Image from "next/image";
import Link from "next/link";
import {quizzesData} from "@/data/quizzes";
import QuizOverviewResponse from "@/services/participant/response/QuizOverviewResponse";
import {CourseResponse} from "@/services/quiz/CourseResponse";
import QuizQuestionResponse from "@/services/quiz/QuizQuestionResponse";

export default function QuizList({participantQuizOverview, courseResponse}: {
  participantQuizOverview: QuizOverviewResponse,
  courseResponse: CourseResponse,
}) {

  return (
      <>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="accordion js-accordion">
              <div
                  className={`accordion__item`}
              >


                <div
                    className="accordion__content"
                >
                  <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                    <div className="row x-gap-60 y-gap-40">
                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Category</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item"
                            >
                              <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {categories.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                  </div>

                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (
                                    {
                                      quizzesData.length
                                    }
                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                                href="#"
                                className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Ratings</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item"
                            >
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                      type="radio"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10"></div>
                                All
                              </div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {rating.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-radio mr-10">
                                    <div className="radio">
                                      <input
                                          type="radio"
                                      />
                                      <div className="radio__mark">
                                        <div className="radio__icon"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sidebar-checkbox__title d-flex items-center">
                                    <div className="d-flex x-gap-5 pr-10">
                                      <Star star={item.star} textColor={undefined}
                                            textSize={"text-11"}/>
                                    </div>
                                    {item.text}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (
                                    {
                                      quizzesData.filter(
                                          (itm) =>
                                              itm.rating >= item.range[0] &&
                                              itm.rating <= item.range[1],
                                      ).length
                                    }
                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Instructors</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item"
                            >
                              <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {instractorNames.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                  </div>

                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (
                                    {
                                      quizzesData.filter(
                                          (itm) => itm.authorName == item.title,
                                      ).length
                                    }
                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                                href="#"
                                className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Price</h5>
                          <div className="sidebar-checkbox">
                            {prices.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-radio mr-10">
                                    <div className="radio">
                                      <input
                                          type="radio"

                                      />
                                      <div className="radio__mark">
                                        <div className="radio__icon"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">

                                  </div>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Level</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item cursor"
                            >
                              <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {levels.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                  </div>

                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (

                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Languange</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item"
                            >
                              <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {languages.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                  </div>

                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (
                                    {
                                      quizzesData.length
                                    }
                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                                href="#"
                                className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Duration</h5>
                          <div className="sidebar-checkbox">
                            <div
                                className="sidebar-checkbox__item cursor"
                            >
                              <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {duration.map((item, index) => (
                                <div
                                    className="sidebar-checkbox__item cursor"
                                    key={index}
                                >
                                  <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                  </div>
                                  <div className="sidebar-checkbox__title">
                                    {item.title}
                                  </div>
                                  <div className="sidebar-checkbox__count">
                                    (
                                    {
                                      quizzesData.filter(
                                          (itm) =>
                                              itm.duration >= item.range[0] &&
                                              itm.duration <= item.range[1],
                                      ).length
                                    }
                                    )
                                  </div>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-60">
              {courseResponse.steps
              .map((courseStep, i) => (
                  <div key={i} className="col-12 border-bottom-light">
                    <div className="coursesCard -type-1 row y-gap-20 flex-row items-center">
                      <div className="col-xl-3 col-lg-4">
                        <Link href={`/quizzes/${courseStep.quizzes[0].id}`}>
                          <div className="coursesCard__image rounded-8 relative">

                              <Image
                                  width={510}
                                  height={360}
                                  className="w-1/1 rounded-8"
                                  src={`/assets/img/quizzes/frontend/${courseStep.quizzes[0].id}.png`}
                                  alt="image"
                              />

                            <div className="coursesCard__image_overlay rounded-8"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="col">
                        <div className="d-flex items-center">
                          <div className="text-14 lh-1 text-yellow-1 mr-10">
                            {coursesData[0].rating}
                          </div>
                          <div className="d-flex x-gap-5 items-center">
                            <Star star={coursesData[0].rating} textColor={undefined} textSize={undefined}/>
                          </div>
                          <div className="text-13 lh-1 ml-10">
                            ({coursesData[0].ratingCount})
                          </div>
                        </div>

                        <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                          <Link
                              className="linkCustom"
                              href={`/courses/${courseStep.quizzes[0].id}`}
                          >
                            {courseStep.name}
                          </Link>
                        </div>
                        <div className="mt-8">Description</div>

                        <div className="row x-gap-10 y-gap-10 items-center pt-10">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <Image
                                  width={30}
                                  height={30}
                                  src={coursesData[0].authorImageSrc}
                                  alt="image"
                              />
                              <div className="ml-10">{coursesData[0].authorName}</div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                              />
                              <div className="text-14 lh-1">
                                {courseStep.quizzes[0].questions.length} questions
                              </div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                              />
                              <div className="text-14 lh-1">{`${courseStep.quizzes[0].questions.length * 2 + 10}m`}</div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                              />
                              <div className="text-14 lh-1">{getDifficulty(courseStep.quizzes[0].questions)}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-auto md:d-none">
                        <div
                            className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
                      </div>

                      <div className="col-md-auto">

                        <div className="row x-gap-20 y-gap-20 items-center pt-25">
                          <div className="col-auto">
                            {
                                participantQuizOverview.activeQuizzes[courseStep.quizzes[0].id] &&
                                <Link href={`/quizzes/${courseStep.quizzes[0].id}`}>
                                  <button
                                      className="button h-50 px-30 -purple-3 text-purple-1"
                                  >
                                    Continue Quiz
                                  </button>
                                </Link>
                            }
                            {
                                !participantQuizOverview.activeQuizzes[courseStep.quizzes[0].id] &&
                                <Link href={`/quizzes/${courseStep.quizzes[0].id}`}>
                                  <button
                                      className="button h-50 px-30 -purple-3 text-purple-1"
                                  >
                                    Start Quiz
                                  </button>
                                </Link>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>

          </div>
        </section>
      </>
  );
}

function getDifficulty(questions: QuizQuestionResponse[]) {
  const difficultyCount = {
    easy: 0,
    medium: 0,
    hard: 0
  }

  questions.forEach(q => difficultyCount[q.difficulty]++)

  const difficultyScore = difficultyCount.easy * 1 + difficultyCount.medium * 2 + difficultyCount.hard*3

  const avgDifficulty = difficultyScore / questions.length

  const roundedDifficulty = Math.round(avgDifficulty)

  if (roundedDifficulty <= 1) {
    return "easy"
  } else if (roundedDifficulty <= 2) {
    return "medium"
  } else {
    return "hard"
  }
}
