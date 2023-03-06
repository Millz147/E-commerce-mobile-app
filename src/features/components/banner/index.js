import React from 'react';
import { Image } from 'react-native';
import { ViewBox } from '../box';
import { Text } from '../typography';
import { images } from '../../constants';

export const ProductBanner = ({
  uri = images['product'],
  title = 'title',
  description = 'description',
}) => {
  return (
    <ViewBox
      clickable
      classname="w-[160px] h-[230px] items-center m-1 bg-white rounded-[10px] shadow-md shadow-black"
    >
      <ViewBox classname="h-[60%] w-full  p-[5px]">
        <Image source={{ uri }} resizeMode="cover" className="w-full h-full" />
      </ViewBox>
      <ViewBox classname="flex-1 items-center">
        <Text variant="title">{title.toUpperCase()}</Text>
        <Text variant="description">{description}</Text>
      </ViewBox>
    </ViewBox>
  );
};
