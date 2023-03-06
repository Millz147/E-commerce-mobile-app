import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, ShopNow } from '../../../features/screens/live';

const Stack = createNativeStackNavigator();

export const MainStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
      }}
      initialRouteName="Main"
    >
      <Stack.Screen component={Main} name="Main" />
      <Stack.Screen component={ShopNow} name="ShopNow" />
    </Stack.Navigator>
  );
};
