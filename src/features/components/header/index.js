import React from 'react';
import { ViewBox, RowBox } from '../box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text } from '../typography';

export const Header = ({
  variant = 'search',
  title = 'Titlkjfjkfdfkje',
  headline,
}) => {
  const variants = {
    mini: {},
    default: {},
    search: {
      icon: 'search1',
    },
    share: {
      icon: 'sharealt',
    },
  };
  return (
    <ViewBox classname="w-[90%]">
      {variant !== 'mini' && (
        <RowBox classname="justify-between w-[100%]">
          <AntDesign name="left" size={25} />
          <Text variant="title">{title}</Text>
          {variant !== 'default' && (
            <AntDesign name={variants[variant]['icon']} size={25} />
          )}
        </RowBox>
      )}
      {headline && <Text variant="headline">{headline}</Text>}
    </ViewBox>
  );
};
