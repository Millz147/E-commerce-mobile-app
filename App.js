import { useFonts } from 'expo-font';
import { fonts } from './src/features/constants';
import { store } from './src/infrastructures/redux/store';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import { Navigation } from './src/infrastructures/navigation';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
