import React from 'react';
import { View } from 'react-native';
import { clx } from '../../../utilities/clx';

export const ViewBox = ({ children, classname }) => {
  const classes = clx('', classname);
  return <View className={classes}>{children}</View>;
};

export const RowBox = ({ children, pad, classname }) => {
  const classes = clx(
    'flex-row items-center flex-wrap',
    `${pad ? 'p-[10px]' : ''}`,
    classname
  );
  return <View className={classes}>{children}</View>;
};
