import React from 'react';
import { ViewBox, RowBox } from '../../components/box';
import { Image } from 'react-native';
import { MainWrapper } from '../../components/wrapper';
import { Text } from '../../components/typography';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { ArrowNext, Social } from '../../components/containers';

export const _ForgotPassword = ({}) => {
  const Inputs = [
    {
      name: 'email',
      placeholder: 'Email',
      onChangeText: (e) => null,
    },
  ];

  return (
    <MainWrapper>
      <ViewBox classname="h-[100%] w-[100%] pt-[10%]">
        <Text variant="headline" classname="pb-[40px]">
          Forgot Password
        </Text>
        <Text>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        {Inputs.map((item) => (
          <Input key={item.name} placeholder={item.placeholder} />
        ))}
        <ArrowNext label="Go Back" screen="SignIn" />
        <Button label="SEND" classname="h-[10%]" />
      </ViewBox>
    </MainWrapper>
  );
};
