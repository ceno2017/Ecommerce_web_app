import React from "react";

import Signin from "../../components/Signin/signin-component";
import Signup from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default SignInAndSignUp;
