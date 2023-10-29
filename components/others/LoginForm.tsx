"use client";

import React, { useState} from "react";
import {ClientSafeProvider, getCsrfToken, LiteralUnion} from "next-auth/react";
import {BuiltInProviderType} from "next-auth/providers";

const providerLayout: Record<
    string,
    { color: string }
> = {
  google: {
    color: "red-3",
  },
  github: {
    color: "blue-3",
  },

  twitter: {
    color: "black",
  },
};

export default function LoginForm({
                                    providers,
                                  }: {
  providers: Record<
      LiteralUnion<BuiltInProviderType, string>,
      ClientSafeProvider
  > | null;
}) {

  const [token, setToken] = useState<string | undefined>("");
  getCsrfToken().then((tokenResp) => setToken(tokenResp));

  return (
      <div className="form-page__content lg:py-50">
        <div className="container">
          <div className="row justify-center items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                <h3 className="text-30 lh-13">Login</h3>
                <div
                    className="d-flex flex-column align-items-stretch x-gap-20 y-gap-10 justify-between pt-20">

                  {Object.values(providers ?? []).map((provider) => (
                      <div key={provider.id} className="provider ">
                        <form
                            action={`/api/auth/signin/${provider.id}`}
                            method="POST"
                        >
                          <input type="hidden" name="csrfToken" value={token}/>

                          <button type="submit"
                                  className={`button w-1/1 -sm px-24 py-20 text-14 -outline-${providerLayout[provider.id].color}  text-${providerLayout[provider.id].color}`}>
                            <div className="d-flex flex-row align-items-center w-1/1">

                              <div className="flex-grow-1 ">
                                Sign in with {provider.name.replace("(Legacy)", "")}</div>
                            </div>
                          </button>
                        </form>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
