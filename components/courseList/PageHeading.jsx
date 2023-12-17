import React from "react";

export default function PageHeading() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div>
                <h1 className="page-header__title">Quizzes</h1>
              </div>

              <div>
                <p className="page-header__text">
                  Sharpen your skills with our diverse range of coding quizzes. Dive into interactive challenges tailored for all levels - from eager beginners to seasoned pros. Boost your knowledge in all essential areas, and see your coding proficiency soar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
