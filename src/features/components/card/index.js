import React from 'react';
import { ViewBox, RowBox } from '../box';
import { Text } from '../typography';
import { clx } from '../../../utilities/clx';
import { Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../infrastructures/theme';
import { Button } from '../button';

export const ProductCard = ({ variant = 'secondary', horizontal = true }) => {
  const classes = clx(
    'bg-white',
    variant === 'soldout' && 'opacity-[0.6]',
    variant === 'tertiary'
      ? 'w-[30%] h-[40%] p-[10px]'
      : horizontal
      ? 'w-[90%] h-[30%] border-[0.5px]'
      : 'w-[40%] h-[50%] p-[10px]'
  );

  const isClose =
    variant === 'primary' || variant === 'soldout' || variant === 'discount';
  const isDiscount = variant === 'discount';
  return (
    <>
      {!horizontal ? (
        <ViewBox classname={classes}>
          <ViewBox classname="w-[100%] h-[50%] bg-white ">
            {variant === 'soldout' && (
              <ViewBox classname="bg-grey-2 p-[5px] items-center justify-center absolute z-[999] w-[100%] top-[50%]">
                <Text>SOLD OUT</Text>
              </ViewBox>
            )}
            {isClose && (
              <TouchableOpacity className="absolute z-[999] right-3">
                <AntDesign name="close" color="grey" size={15} />
              </TouchableOpacity>
            )}

            <Image
              source={require('../../assets/shirt.png')}
              resizeMode="contain"
              className="w-[100%] h-[100%]"
            />
          </ViewBox>
          <ViewBox>
            {variant === 'secondary' && (
              <TouchableOpacity className="absolute z-[999] right-3">
                <AntDesign name="hearto" color={colors.primary} size={15} />
              </TouchableOpacity>
            )}
            <Text variant={isDiscount ? 'error' : 'caption'}>
              N100,000 {isDiscount && <Text variant="hint">N90000</Text>}
            </Text>
            <Text classname="text-grey-2">Brand Name</Text>
            <Text variant="description">Description</Text>
            {isClose && (
              <RowBox classname="justify-between w-[100%]">
                <Text>Size:XL </Text>
                <Text>Color: White</Text>
              </RowBox>
            )}
          </ViewBox>
        </ViewBox>
      ) : (
        <RowBox classname={classes}>
          <ViewBox classname="border-r-[0.5px] w-[30%] h-[100%]">
            <Image
              source={require('../../assets/shirt.png')}
              resizeMode="contain"
              className="w-[100%] h-[100%]"
            />
          </ViewBox>
          <ViewBox classname="p-[10px] w-[60%]">
            <Text>Brand Name</Text>
            <Text variant="description">Description</Text>
            {variant === 'primary' ? (
              <>
                <Text variant="hint">Color: White</Text>
                <Text variant="hint">Size: XL </Text>
                <Text variant="hint">Quantity: 1 </Text>
                <Text>N100,000</Text>
              </>
            ) : (
              <ViewBox classname="w-[80%]">
                <RowBox classname="justify-between">
                  <Text variant="description">
                    Size: <Text>XL </Text>
                  </Text>
                  <Text variant="description">
                    Color: <Text>XL </Text>
                  </Text>
                </RowBox>
                <RowBox classname="justify-between w-[100%]">
                  <Text variant="description">
                    Quantity:<Text>1 </Text>
                  </Text>
                  <Text>N100,000</Text>
                </RowBox>
              </ViewBox>
            )}
          </ViewBox>
        </RowBox>
      )}
    </>
  );
};

export const OrderCard = ({ status = 'Delivered' }) => {
  const variant = {
    Delivered: 'success',
    Cancelled: 'error',
    Processing: 'hint',
  };

  return (
    <ViewBox classname="bg-grey-2/50 w-[90%] p-[10px] gap-2">
      <RowBox classname="justify-between w-[100%]">
        <Text>Order No: 2466276</Text>
        <Text classname="text-grey">03-02-2023</Text>
      </RowBox>
      <Text classname="text-grey">
        Tracking Number: <Text>3483478</Text>
      </Text>
      <RowBox classname="justify-between w-[100%]">
        <Text classname="text-grey">
          Quantity: <Text>1</Text>
        </Text>
        <Text classname="text-grey">
          Total Amount: <Text>N10,000</Text>
        </Text>
      </RowBox>
      <RowBox classname="justify-between w-[100%]">
        <Button variant="tertiary" label="Details" />
        <Text variant={variant[status]}>{status}</Text>
      </RowBox>
    </ViewBox>
  );
};
