import React from 'react';
import { ViewBox, RowBox } from '../../components/box';
import { Image } from 'react-native';
import { MainWrapper } from '../../components/wrapper';
import { Text } from '../../components/typography';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { ArrowNext, Social } from '../../components/containers';

export const _SignIn = ({}) => {
  const Inputs = [
    {
      name: 'email',
      placeholder: 'Email',
      onChangeText: (e) => null,
    },
    {
      name: 'password',
      placeholder: 'Password',
      onChangeText: (e) => null,
      isPassword: true,
    },
  ];

  return (
    <MainWrapper>
      <ViewBox classname="">
        <Text variant="headline" classname="pb-[40px]">
          Login
        </Text>
        {Inputs.map((item) => (
          <Input key={item.name} placeholder={item.placeholder} />
        ))}
      </ViewBox>
      <ArrowNext label="Forgot Your Password?" />
      <Button label="LOGIN" />
      <Social label="Or Login with Social Account" />
    </MainWrapper>
  );
};
export const _SignUp = ({}) => {
  const Inputs = [
    {
      name: 'name',
      placeholder: 'Name',
      onChangeText: (e) => null,
    },
    {
      name: 'email',
      placeholder: 'Email',
      onChangeText: (e) => null,
    },
    {
      name: 'password',
      placeholder: 'Password',
      onChangeText: (e) => null,
      isPassword: true,
    },
  ];

  return (
    <MainWrapper>
      <ViewBox classname="">
        <Text variant="headline" classname="pb-[40px]">
          Sign Up
        </Text>
        {Inputs.map((item) => (
          <Input key={item.name} placeholder={item.placeholder} />
        ))}
      </ViewBox>
      <ArrowNext label="Already Have an Account?" screen="SignIn" />
      <Button label="SIGN UP" />
      <Social label="Or Sign Up with Social Account" />
    </MainWrapper>
  );
};
