import React from "react";

export default function Imprint() {
  return (
      <>
        <section className="page-header -type-1">
          <div className="container">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <h1 className="page-header__title">Legal Notice</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <p className="mt-30">
                  Information in accordance with § 5 TMG
                </p>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="mt-60 lg:mt-40">
                  <h5>Contact</h5>
                  <p className="mt-30">
                    Email: contact@traveladventurewithchild.com
                  </p>
                  <p className="mt-10">
                    Responsible for content according to § 55 Abs. 2 RStV
                  </p>
                  <p className="mt-10">
                    Sebastian Sigl<br />
                    Roquettestr. 34<br />
                    D-01157 Dresden
                  </p>
                </div>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="mt-60 lg:mt-40">
                  <h5>Disclaimer</h5>
                  <div className="mt-30 lg:mt-10">
                    <h6>Liability for Content</h6>
                    <p className="mt-10">
                      The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, and currentness of the content.
                    </p>
                  </div>
                  <div className="mt-30 lg:mt-10">
                    <h6>Liability for Links</h6>
                    <p className="mt-10">
                      Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                    </p>
                  </div>
                  <div className="mt-30 lg:mt-10">
                    <h6>Copyright</h6>
                    <p className="mt-10">
                      The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
