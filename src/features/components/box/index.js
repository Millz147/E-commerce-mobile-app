import React from 'react';
import { View } from 'react-native';
import { clx } from '../../../utilities/clx';

export const ViewBox = ({ variant, children, pad }) => {
  return <View>{children}</View>;
};

export const RowBox = ({ children, pad, justify = 'between', classname }) => {
  const classes = clx(
    'flex-row items-center flex-wrap',
    `justify-${justify} ${pad ? 'p-[10px]' : ''}`,
    classname
  );
  return <View className={classes}>{children}</View>;
};
