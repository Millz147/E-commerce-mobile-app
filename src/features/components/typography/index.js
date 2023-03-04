import React from 'react';
import { Text as NativeText, View } from 'react-native';
import { clx } from '../../../utilities/clx';

export const Text = ({ children, variant = 'caption', classname }) => {
  const variants = {
    hint: 'text-[8px] text-black font-[Kanit-Light]',
    error: 'text-[10px] text-error font-[Kanit-Light]',
    success: 'text-[10px] text-success font-[Kanit-Light]',
    caption: 'text-[12px] text-black font-[Kanit-Medium]',
    title: 'text-[14px] text-black font-[Kanit-Bold]',
    heading: 'text-[18px] text-black font-[Rowdies-Bold]',
    headline: 'text-[30px] text-black font-[Rowdies-Bold]',
    description: 'text-[12px] text-black font-[Kanit-Light] text-justify',
    button: 'text-[14px] text-white font-[Rowdies-Light] uppercase',
    'button-outline': 'text-[14px] text-grey-2 font-[Rowdies-Light] uppercase',
    'button-anchor': 'text-[14px] text-black font-[Rowdies-Bold] uppercase',
    card: 'text-[14px] text-white font-[Kanit-Bold]',
  };

  const classes = clx(variants[variant], classname);

  return (
    <>
      <NativeText className={classes}>{children}</NativeText>
    </>
  );
};
