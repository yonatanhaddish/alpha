import React from "react";
import { Button } from "../../globalStyles";

import { SignupContainer, FormWrapper, Form, FormInput } from "./Signup.elements";

function Signup() {
  return (
    <>
      <SignupContainer>
        <FormWrapper>
          <Form>
            <FormInput
              name="username"
              type="text"
              placeholder="Username"
            ></FormInput>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
            ></FormInput>
            <FormInput
              name="password"
              type="password"
              placeholder="********"
            ></FormInput>
          </Form>
          <Button style={{width: "80%"}}>Sign Up</Button>
        </FormWrapper>
      </SignupContainer>
    </>
  );
}

export default Signup;
