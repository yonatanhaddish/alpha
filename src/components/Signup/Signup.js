import React from 'react'

import { SignupContainer, Form, FormInput } from './Signup.elements';

function Signup() {
    return (
        <>
            <SignupContainer>
                <Form>
                    <FormInput name="username" type="text" placeholder="Username"></FormInput>
                    <FormInput name="email" type="email" placeholder="Email"></FormInput>
                    <FormInput name="password" type="password" placeholder="********"></FormInput>
                </Form>
            </SignupContainer>
        </>
    )
}

export default Signup;
