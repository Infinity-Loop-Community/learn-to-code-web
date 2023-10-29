"use client";
import Image from "next/image";

import React from "react";

export default function AuthImageMove() {
  return (
    <div className="form-page__img bg-dark-1">
      <div className="form-page-composition">
        <div className="">
          <Image
            width="1266"
            height="792"
            data-move="30"
            className="js-mouse-move"
            src="/assets/img/login/welcome-future-coding-2.png"
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
}
