import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './account';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};
