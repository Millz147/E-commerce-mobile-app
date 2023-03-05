import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { Kanit, Rowdies } from './font.config';
import { store } from './src/infrastructures/redux/store';
import { Provider } from 'react-redux';
import { Text } from './src/features/components/typography';
import { Button, IconButton } from './src/features/components/button';
import { RowBox } from './src/features/components/box';
import { Input } from './src/features/components/input';
import { Header } from './src/features/components/header';
import { CheckBox } from './src/features/components/checkbox';
import React, { useState } from 'react';
import { ProductCard, OrderCard } from './src/features/components/card';
import { Navigation } from './src/infrastructures/navigation';
import { ProductBanner } from './src/features/components/banner';

export default function App() {
  const [check, setCheck] = useState(false);
  const [fontsLoaded] = useFonts({ ...Kanit, ...Rowdies });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
      {/* <RowBox classname="flex-1">
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
        
      </RowBox> */}
    </Provider>
  );
}
