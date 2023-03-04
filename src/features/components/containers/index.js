import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { RowBox, ViewBox } from '../box';
import { Text } from '../typography';
import { useNavigation } from '@react-navigation/native';

export const Social = ({ label }) => {
  const accounts = [
    require('../../assets/google.png'),
    require('../../assets/facebook.png'),
  ];
  return (
    <ViewBox classname="self-center py-[40px] items-center">
      <Text>{label}</Text>
      <RowBox classname="justify-center">
        {accounts.map((item, index) => {
          return (
            <ViewBox
              clickable
              key={index}
              classname="p-[10px] m-1 shadow-sm shadow-black/40 bg-white rounded-[25px] w-[25%] items-center"
            >
              <Image source={item} resizeMode="contain" className="w-[30px]" />
            </ViewBox>
          );
        })}
      </RowBox>
    </ViewBox>
  );
};
export const ArrowNext = ({ label, screen = 'SignIn' }) => {
  const navigation = useNavigation();
  return (
    <RowBox classname="justify-end py-[10px]">
      <Text>{label}</Text>
      <ViewBox clickable onPress={() => navigation.navigate(screen)}>
        <Image
          source={require('../../assets/arrow-next.png')}
          resizeMode="contain"
          className="w-[20px] ml-1"
        />
      </ViewBox>
    </RowBox>
  );
};
