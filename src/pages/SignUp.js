import React from 'react'
import Header from '../components/Header';
import SignupComp from '../components/SignUpComp';
const SignUp = () => {
  return (
    <div>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <SignupComp />
    </div>
  )
}

export default SignUp
