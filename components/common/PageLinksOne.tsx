import React from "react";

export default function PageLinksOne({ dark }: {dark?: boolean}) {
  return (
    <section className={`breadcrumbs ${dark ? "bg-dark-1" : ""} `}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
