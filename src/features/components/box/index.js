import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { clx } from '../../../utilities/clx';

export const ViewBox = ({ children, classname, clickable = false, onPress }) => {
  const classes = clx('', classname);
  return (
    <>
      {clickable ? (
        <TouchableOpacity className={classes} onPress={onPress}>
          {children}
        </TouchableOpacity>
      ) : (
        <View className={classes}>{children}</View>
      )}
    </>
  );
};

export const RowBox = ({ children, pad, classname }) => {
  const classes = clx(
    'flex-row items-center flex-wrap justify-between',
    `${pad ? 'p-[10px]' : ''}`,
    classname
  );
  return <View className={classes}>{children}</View>;
};
