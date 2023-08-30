import React from "react";

export default function PrivacyPolicy() {
  return (
      <>
        <section className="page-header -type-1">
          <div className="container">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <h1 className="page-header__title">Privacy Policy</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <h5>General Information</h5>
                <p className="mt-30">
                  This privacy policy informs you about the type, scope, and purpose of the processing of personal data within our online offering. We refer to the definitions in Art. 4 of the General Data Protection Regulation (GDPR).
                </p>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="mt-60 lg:mt-40">
                  <h5>Responsible Party</h5>
                  <p className="mt-30">
                    The party responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:
                  </p>
                  <p className="mt-10">
                    Sebastian Sigl, Roquettestr. 34, 01157 Dresden
                  </p>
                </div>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="mt-60 lg:mt-40">
                  <h5>Types of Data Processed</h5>
                  <p className="mt-30">
                    Our website collects a series of general data and information when you or an automated system accesses the website. These general data and information are stored in the server's log files. The following may be collected:
                  </p>
                  <ul className="ul-list y-gap-10 mt-10">
                    <li>Operating system used</li>
                    <li>Date and time of access</li>
                    <li>Name of the accessed website</li>
                    <li>Internet service provider</li>
                    <li>Other data to protect against threats in case of attacks</li>
                  </ul>
                  <p className="mt-30">We do not draw any conclusions about your person from these data. This information is needed to:</p>
                  <ul className="ul-list y-gap-10 mt-10">
                    <li>Deliver the contents of our website correctly</li>
                    <li>Optimize the content and advertisement</li>
                    <li>Ensure the long-term viability of our IT systems and website technology</li>
                    <li>Provide law enforcement with necessary information for prosecution in case of a cyber-attack</li>
                  </ul>
                  <p className="mt-30">These collected data and information are therefore evaluated by us statistically and further with the aim of increasing data protection and data security in our company, in order to ultimately ensure an optimal level of protection for the personal data we process.</p>
                </div>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="mt-60 lg:mt-40">
                  <h5>Your Rights</h5>
                  <p className="mt-30">
                    You have the right to:
                  </p>
                  <ul className="ul-list y-gap-10 mt-10">
                    <li>According to Art. 15 GDPR, to request information about your personal data processed by us;</li>
                    <li>According to Art. 16 GDPR, to immediately demand the correction of incorrect or complete personal data stored by us;</li>
                    <li>According to Art. 17 GDPR, to request the deletion of your personal data stored by us, unless processing is necessary to exercise the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest, or for asserting, exercising or defending legal claims;</li>
                    <li>According to Art. 18 GDPR, to demand the restriction of the processing of your personal data, insofar as the accuracy of the data is disputed by you, the processing is unlawful, but you reject its deletion and we no longer need the data, but you need it to assert, exercise or defend legal claims or you have lodged an objection to the processing in accordance with Art. 21 GDPR;</li>
                    <li>According to Art. 20 GDPR, to receive your personal data that you have provided to us in a structured, common, and machine-readable format or to request its transmission to another responsible party.</li>
                  </ul>
                  <p className="mt-30">If you have any questions about the processing of your personal data by us, you can contact us at any time. You also have the right to lodge a complaint with a data protection supervisory authority about our processing of your personal data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
