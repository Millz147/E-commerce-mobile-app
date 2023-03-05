import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './account';
import { LiveNavigator } from './live';

export const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AccountNavigator /> */}
      <LiveNavigator />
    </NavigationContainer>
  );
};
