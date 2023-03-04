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

export const MainWrapper = ({ children }) => {
  const BarStyles = ['light-content', 'dark-content'];
  const [barStyle, setBarStyle] = useState(BarStyles[isAndroid ? 0 : 1]);
  let Wrapper;
  isAndroid ? (Wrapper = View) : (Wrapper = SafeAreaView);
  return (
    <Wrapper className="flex-1 bg-white">
      <View className="flex-1 m-[10px] justify-center">
        <StatusBar barStyle={barStyle} />
        <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};
