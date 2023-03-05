import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { ProductBanner } from '../../components/banner';
import { RowBox, ViewBox } from '../../components/box';
import { Button } from '../../components/button';
import { MainWrapper } from '../../components/wrapper';
import { Text } from '../../components/typography';

export const _Main = ({}) => {
  return (
    <MainWrapper>
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <ViewBox classname="w-full h-[250px]">
          <ImageBackground
            className="w-full h-full"
            resizeMode="cover"
            source={require('../../assets/shop.png')}
          >
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
            />
          </ImageBackground>
        </ViewBox>
        {/* <ProductBanner /> */}

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

export const _ShopNow = ({}) => {
  return (
    <ViewBox>
      <ScrollView></ScrollView>
    </ViewBox>
  );
};
