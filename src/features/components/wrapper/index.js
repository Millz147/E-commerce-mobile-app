import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { ViewBox } from '../box';
const isAndroid = Platform.OS === 'android';
import { clx } from '../../../utilities/clx';

export const MainWrapper = ({ children, classname }) => {
  const BarStyles = ['light-content', 'dark-content'];
  const [barStyle, setBarStyle] = useState(BarStyles[isAndroid ? 0 : 1]);
  let Wrapper;
  isAndroid ? (Wrapper = View) : (Wrapper = SafeAreaView);
  const classes = clx('flex-1 px-[10px]', classname);
  return (
    <Wrapper className="flex-1 bg-white">
      <View className={classes}>
        <StatusBar barStyle={barStyle} />
        <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};
