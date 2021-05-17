import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

const SignIn = () => {
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = sign;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSign({
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSign({ ...sign, [name]: value });
    console.log(value, name);
  };

  return (
    <SignInContainer>
      <SignInTitle>I Already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={sign.email}
          onChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={sign.password}
          onChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google{" "}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
