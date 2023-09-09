import React from 'react'
import Header from '../components/Header';
import LoginComp from '../components/LoginComp';
const Login = () => {
  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComp />
    </div>
  )
}

export default Login;
