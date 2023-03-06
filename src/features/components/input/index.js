import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { clx } from '../../../utilities/clx';
import { Text } from '../typography';
import { colors } from '../../constants';
import { RowBox } from '../box';

export const Input = ({
  placeholder = 'Anything',
  onChangeText,
  go,
  type = 'default',
  error = 'invalid ',
}) => {
  const [focus, setFocus] = useState(false);
  const classes = clx(
    'w-[100%] bg-grey-2/20 justify-between mt-[10px]',
    type === 'error' && 'border border-error',
    type === 'proceed' ? 'pl-[10px]' : 'p-[20px] '
  );

  const property = {
    default: {},
    error: {
      color: colors.error,
      name: 'close',
      onPress: () => null,
      classname: 'flex-1 bg-transparent items-center justify-center p-[10px]',
    },
    success: {
      color: colors.success,
      name: 'check',
      onPress: () => null,
      classname: 'flex-1 bg-transparent items-center justify-center p-[10px]',
    },
    proceed: {
      color: colors.grey,
      name: 'arrowright',
      onPress: () => null,
      classname: 'flex-1 bg-black items-center justify-center p-[10px]',
    },
  };

  return (
    <>
      <RowBox classname={classes}>
        <View className="w-[85%]">
          {focus && type !== 'proceed' && (
            <Text variant="hint">{placeholder}</Text>
          )}
          <TextInput
            className="text-[14px] "
            placeholder={placeholder}
            onBlur={() => setFocus(false)}
            onFocus={setFocus}
            onChangeText={onChangeText}
          />
        </View>
        {type !== 'default' ? (
          <TouchableOpacity
            onPress={property[type]['onPress']}
            className={property[type]['classname']}
          >
            <AntDesign
              color={property[type]['color']}
              name={property[type]['name']}
              size={20}
            />
          </TouchableOpacity>
        ) : null}
      </RowBox>
      {type === 'error' ? <Text variant="error">{error}</Text> : null}
    </>
  );
};
