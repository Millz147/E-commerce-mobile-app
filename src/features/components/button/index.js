import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../typography';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from '../../../../tailwind.config.js';
const { extend } = tw.theme;
const { colors } = extend;

export const Button = ({ label = 'Button', variant = 'primary', onPress }) => {
  const variants = {
    primary: 'bg-primary w-[100%] p-[5px] items-center',
    secondary: 'bg-primary w-[30%] p-[5px] items-center',
    tertiary: 'bg-primary w-[40%] p-[5px] items-center',
    outline: 'bg-transparent border border-black w-[40%] p-[5px] items-center',
    anchor: 'bg-white w-[40%] p-[5px] items-center',
  };
  return (
    <View className="p-[10px] w-[90%]">
      <TouchableOpacity className={variants[variant]} onPress={onPress}>
        <Text
          variant={
            variant === 'outline'
              ? 'button-outline'
              : variant === 'anchor'
              ? 'button-anchor'
              : 'button'
          }
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const IconButton = ({ type = 'plus' }) => {
  const types = {
    favorite: {
      bg: '',
      icon: 'heart',
      color: colors['primary'],
    },
    'favorite-off': {
      bg: '',
      icon: 'hearto',
      color: colors['primary'],
    },
    plus: {
      bg: 'bg-primary rounded-full w-[30px] h-[30px] items-center justify-center',
      icon: 'plus',
      color: 'white',
    },
    minus: {
      bg: 'bg-primary rounded-full w-[30px] h-[30px] items-center justify-center ',
      icon: 'minus',
      color: 'white',
    },
  };
  return (
    <TouchableOpacity className={types[type]['bg'].concat(' mx-[10px]')}>
      <AntDesign
        name={types[type]['icon']}
        color={types[type]['color']}
        size={20}
      />
    </TouchableOpacity>
  );
};
