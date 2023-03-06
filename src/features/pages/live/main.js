import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { CarouselBG, ProductBanner } from '../../components/banner';
import { RowBox, ViewBox } from '../../components/box';
import { Button } from '../../components/button';
import { MainWrapper } from '../../components/wrapper';
import { Text } from '../../components/typography';
import { images } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export const _Main = ({}) => {
  const navigation = useNavigation();
  return (
    <MainWrapper>
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <CarouselBG image={images['shop']}>
          <ViewBox classname="p-[10px]">
            <Text variant="headline" classname="text-white ">
              Givenchy
            </Text>
            <Text variant="caption" classname="text-white ">
              The Latest Drop
            </Text>
          </ViewBox>
          <Button
            variant="anchor"
            classname="self-center absolute bottom-5"
            label="Shop Now"
            onPress={() => navigation.navigate('ShopNow')}
          />
        </CarouselBG>

        <RowBox classname="justify-between">
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
        </RowBox>
      </ScrollView>
    </MainWrapper>
  );
};
