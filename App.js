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

export default function App() {
  const [fontsLoaded] = useFonts({ ...Kanit, ...Rowdies });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View className="flex-1 justify-center items-center bg-grey">
      <Input />
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="tertiary" />
        <Button variant="outline" />
        <Button variant="anchor" label="SHOP NOW" />
        <RowBox pad justify="between" classname="w-[90%] bg-black">
          <IconButton type="favorite" />
          <IconButton type="favorite-off" />
          <IconButton type="plus" />
          <IconButton type="minus" />
        </RowBox>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
