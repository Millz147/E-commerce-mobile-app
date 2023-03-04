import React from 'react';
import { _SignIn, _SignUp, _ForgotPassword } from '../../pages/auth';
import { Text } from '../../components/typography';
import { MainWrapper } from '../../components/wrapper';

export const SignIn = () => {
  return <_SignIn />;
};
export const SignUp = () => {
  return <_SignUp />;
};

export const ForgotPassword = () => {
  return <_ForgotPassword />;
};