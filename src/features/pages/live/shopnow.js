import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { CarouselBG, ProductBanner } from '../../components/banner';
import { RowBox, ViewBox } from '../../components/box';
import { Button } from '../../components/button';
import { MainWrapper } from '../../components/wrapper';
import { Text } from '../../components/typography';
import { images } from '../../constants';
import { ProductCard, TopSales } from '../../components/card';

export const _ShopNow = ({}) => {
  return (
    <MainWrapper>
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <CarouselBG image={images['cloth']}>
          <ViewBox classname="p-[10px]  absolute bottom-5">
            <Text variant="headline" classname="text-white ">
              Mid-Season sale
            </Text>
            <Text variant="caption" classname="text-white uppercase">
              50% OFF
            </Text>
          </ViewBox>
        </CarouselBG>
        <ViewBox classname="items-center p-[10px]">
          <Text variant="heading">WINTER IS COMING</Text>
          <Text variant="button" classname="text-grey-2">
            PROMO CODE: WIN12
          </Text>
        </ViewBox>
        <Text variant="heading">TOP SALES</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TopSales />
          <TopSales />
          <TopSales />
          <TopSales />
          <TopSales />
        </ScrollView>
        <Text variant="heading">NEW IN</Text>
        <RowBox classname="self-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </RowBox>
      </ScrollView>
    </MainWrapper>
  );
};
