import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { ViewBox } from '../box';
import { Text } from '../typography';
import { images } from '../../constants';
import { clx } from '../../../utilities/clx';

export const ProductBanner = ({
  uri = images['product'],
  title = 'title',
  description = 'description',
  classname,
}) => {
  const classes = clx(
    'w-[160px] h-[230px] items-center m-1 bg-white rounded-[10px] shadow-md shadow-black',
    classname
  );
  return (
    <ViewBox clickable classname={classes}>
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

export const CarouselBG = ({ children, image, classname }) => {
  const classes = clx('w-full h-[250px]', classname);
  return (
    <ViewBox classname={classes}>
      <ImageBackground
        className="w-full h-full"
        resizeMode="cover"
        source={image}
      >
        {children}
      </ImageBackground>
    </ViewBox>
  );
};
