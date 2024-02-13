import React from "react";
import QuizAttemptDetailResponse from "@/services/participant/response/QuizAttemptDetailResponse";


export default function AttemptResult({quizAttemptDetailResponse}: { quizAttemptDetailResponse: QuizAttemptDetailResponse }) {
  const attemptResult = quizAttemptDetailResponse.attemptResult
  
  return <div className="col-xl-9">
    <div className="">
      <div className="row y-gap-30">
        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Quiz Result</div>
              <div
                  className="text-24 lh-1 fw-700 text-dark-1 mt-20">{attemptResult.pass ? "PASS" : "FAIL"}</div>
              <div className="lh-1 mt-25"><span className="text-purple-1">{Math.round(attemptResult.questionCorrectRatio*100)}%</span> correct</div>
            </div>
            {attemptResult.pass ?
                <i className="text-40 icon-check text-purple-1"></i> :
                <i className="text-40 icon-close text-red-4"></i>}
          </div>
        </div>

        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Time Taken</div>
              <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">{toHumanFriendlyDuration(attemptResult.timeTakenMins)}</div>
              <div className="lh-1 mt-25"><span className="text-purple-1" data-testid="metrics-time-taken">{Math.abs(attemptResult.comparedToTimeAveragePercentage)}%</span> {attemptResult.comparedToTimeAveragePercentage < 0 ? "below" : "above" } average</div>
            </div>
            <i className="text-40 icon-clock-2 text-purple-1"></i></div>
        </div>

        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Attempt</div>
              <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">{getOrdinal(quizAttemptDetailResponse.attemptId)}</div>
              <div className="lh-1 mt-25">
                {
                    quizAttemptDetailResponse.attemptId == 1 &&
                    <>
                      <span className="text-purple-1">&nbsp;</span>
                    </>
                }

                {
                    quizAttemptDetailResponse.attemptId > 1 &&
                    <>
                      <span className="text-purple-1">{attemptResult.comparedToCorrectRatioLastTryPercentage}%</span> improved
                    </>
                }
              </div>
            </div>
            <i className="text-40 icon-online-learning text-purple-1"></i></div>
        </div>
      </div>
    </div>
  </div>

}

function toHumanFriendlyDuration(timeTakenMins: number) {
  const hours = Math.floor(timeTakenMins/60)
  const mins = timeTakenMins-(hours * 60)
  return `${hours}h ${mins}m`
}

function getOrdinal(n: number): string {
  let ord = 'th';

  if (n % 10 == 1 && n % 100 != 11)
  {
    ord = 'st';
  }
  else if (n % 10 == 2 && n % 100 != 12)
  {
    ord = 'nd';
  }
  else if (n % 10 == 3 && n % 100 != 13)
  {
    ord = 'rd';
  }

  return n + ord;
}
