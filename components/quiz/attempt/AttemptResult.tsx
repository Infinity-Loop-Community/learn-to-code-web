import React from "react";

export default function AttemptResult() {

  return <div className="col-xl-9">
    <div className="">
      <div className="row y-gap-30">
        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Quiz Result</div>
              <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">PASS</div>
              <div className="lh-1 mt-25"><span className="text-purple-1">89%</span> correct</div>
            </div>
            <i className="text-40 icon-check text-purple-1"></i></div>
        </div>

        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Time Taken</div>
              <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">0h 49m</div>
              <div className="lh-1 mt-25"><span className="text-purple-1">15%</span> over average</div>
            </div>
            <i className="text-40 icon-clock-2 text-purple-1"></i></div>
        </div>

        <div className="col-xl-4 col-md-6 ">
          <div
              className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div className="lh-1 fw-500">Attempt</div>
              <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">2nd</div>
              <div className="lh-1 mt-25"><span className="text-purple-1">10%</span> improved</div>
            </div>
            <i className="text-40 icon-online-learning text-purple-1"></i></div>
        </div>
      </div>
    </div>
  </div>

}