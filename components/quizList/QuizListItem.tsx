import Link from "next/link";
import Image from "next/image";
import {coursesData} from "@/data/courses";
import Star from "@/components/common/Star";
import React from "react";
import StepResponse from "@/services/quiz/StepResponse";
import QuizQuestionResponse from "@/services/quiz/QuizQuestionResponse";
import QuizOverviewResponse from "@/services/participant/response/QuizOverviewResponse";

export default function CourseListItem({courseStep, participantQuizOverview, alreadyTried}: {courseStep: StepResponse, participantQuizOverview: QuizOverviewResponse, alreadyTried: boolean}) {
  return <div className="col-12 border-bottom-light">
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
            <Star star={coursesData[0].rating} textColor={undefined}
                  textSize={undefined}/>
          </div>
          <div className="text-13 lh-1 ml-10">
            ({coursesData[0].ratingCount})
          </div>
        </div>

        <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
          <Link
              className="linkCustom"
              href={`/quizzes/${courseStep.quizzes[0].id}`}
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
              <div
                  className="text-14 lh-1">{`${courseStep.quizzes[0].questions.length * 2 + 10}m`}</div>
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
              <div
                  className="text-14 lh-1">{getDifficulty(courseStep.quizzes[0].questions)}</div>
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
                    {!alreadyTried && <>Start Quiz</>}
                    {alreadyTried && <>Try Again</>}
                  </button>
                </Link>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
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
