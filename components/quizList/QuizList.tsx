import React from "react";
import QuizOverviewResponse from "@/services/participant/response/QuizOverviewResponse";
import {CourseResponse} from "@/services/quiz/CourseResponse";
import CourseListItem from "@/components/quizList/QuizListItem";

export default function QuizList({participantQuizOverview, courseResponse}: {
  participantQuizOverview: QuizOverviewResponse,
  courseResponse: CourseResponse,
}) {

  const passedQuizIds = Object.entries(participantQuizOverview.finishedQuizzes)
  .map(([quizId, quizAttemptResponse]) => quizAttemptResponse[quizAttemptResponse.length - 1])
  .filter(attempt => attempt.pass)
  .map(attempt => attempt.quizId)

  const failedQuizIds = Object.entries(participantQuizOverview.finishedQuizzes)
  .map(([quizId, quizAttemptResponse]) => quizAttemptResponse[quizAttemptResponse.length - 1])
  .filter(attempt => !attempt.pass)
  .map(attempt => attempt.quizId)

  let passedQuizzes = courseResponse.steps
  .filter(step => passedQuizIds.includes(step.quizzes[0].id));
  let failedQuizzes = courseResponse.steps
  .filter(step => failedQuizIds.includes(step.quizzes[0].id));
  let otherQuizzes = courseResponse.steps
  .filter(step => !passedQuizIds.includes(step.quizzes[0].id) && !failedQuizIds.includes(step.quizzes[0].id));

  return (
      <>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">

            {passedQuizzes.length > 0 &&
                <div className="row y-gap-60">
                  <div className="col-12">
                    <div className="coursesCard -type-1 row y-gap-20 flex-row items-center">
                      <h2 className="text-24 lh-12">
                        <i className="icon text-24 text-green-5 mr-20 icon-check"></i>
                        Passed Quizzes
                      </h2>
                    </div>
                  </div>
                  {passedQuizzes
                  .map((courseStep) => (
                      <CourseListItem
                          key={courseStep.quizzes[0].id}
                          courseStep={courseStep}
                          participantQuizOverview={participantQuizOverview}
                          alreadyTried={true}
                      />
                  ))}
                </div>
            }

            {failedQuizzes.length > 0 &&
                <div className="row y-gap-60">
                  <div className="col-12">
                    <div className="coursesCard -type-1 row y-gap-20 flex-row items-center pt-50">
                      <h2 className="text-24 lh-12">
                        <i className="icon text-24 text-red-3 mr-20 icon-close"></i>
                        Failed Quizzes
                      </h2>
                    </div>
                  </div>
                  {failedQuizzes.map((courseStep) => (
                      <CourseListItem
                          key={courseStep.quizzes[0].id}
                          courseStep={courseStep}
                          participantQuizOverview={participantQuizOverview}
                          alreadyTried={true}
                      />
                  ))}
                </div>
            }

            {otherQuizzes.length > 0 &&
                <div className="row y-gap-60">
                  <div className="col-12">
                    <div className="coursesCard -type-1 row y-gap-20 flex-row items-center pt-50">

                      <h2 className="text-24 lh-12">

                        Available Quizzes</h2>
                    </div>
                  </div>
                  {otherQuizzes.map((courseStep) => (
                      <CourseListItem
                          key={courseStep.quizzes[0].id}
                          courseStep={courseStep}
                          participantQuizOverview={participantQuizOverview}
                          alreadyTried={false}
                      />
                  ))}
                </div>
            }


          </div>
        </section>
      </>
  );
}

