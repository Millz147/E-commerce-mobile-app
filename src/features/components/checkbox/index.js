import React from 'react';
import { Pressable } from 'react-native';
import { clx } from '../../../utilities/clx';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const CheckBox = ({ check, setCheck }) => {
  const classes = clx(
    'border-[2px] border-primary w-[10px] h-[10px] rounded-[4px] items-center justify-center',
    check ? 'bg-primary' : 'bg-white'
  );
  return (
    <Pressable className={classes} onPress={() => setCheck((prev) => !prev)}>
      {check && <AntDesign name="check" color="white" />}
    </Pressable>
  );
};
