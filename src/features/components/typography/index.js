import React from 'react';
import { Text as NativeText, View } from 'react-native';

export const Text = ({ children, variant = 'caption' }) => {
  const variants = {
    hint: 'text-[10px] text-black font-[Kanit-Light]',
    error: 'text-[10px] text-error font-[Kanit-Light]',
    caption: 'text-[12px] text-black font-[Kanit-Medium]',
    title: 'text-[14px] text-black font-[Kanit-Bold]',
    heading: 'text-[18px] text-black font-[Rowdies-Bold]',
    description: 'text-[12px] text-black font-[Kanit-Light] text-justify',
    button: 'text-[14px] text-white font-[Rowdies-Light] uppercase',
    'button-outline': 'text-[14px] text-grey-2 font-[Rowdies-Light] uppercase',
    'button-anchor': 'text-[14px] text-black font-[Rowdies-Bold] uppercase',
    card: 'text-[14px] text-white font-[Kanit-Bold]',
  };

  return (
    <>
      <NativeText className={variants[variant]}>{children}</NativeText>
    </>
  );
};
