import React from 'react';
import { Item as NbItem, Input as NbInput } from 'native-base';
import styled from 'styled-components';
import View from './View';
import Text from './Text';

const Item = styled(NbInput)``;

interface Iinput {
  keyboardType?: string;
  value: string;
  onChange: (e: string) => void;
  onBlur: () => void;
  onSubmit: () => void;
  label: string;
}
const Input = ({ value, onChange, onBlur, onSubmit, label }: Iinput) => {
  return (
    <View>
      <Text>{label}</Text>
      <Item regular={true}>
        <NbInput
          value={value}
          autoCapitalize="sentences"
          autoCorrect={false}
          autoFocus={false}
          blurOnSubmit={true}
          caretHidden={false}
          contextMenuHidden={false}
          keyboardType="default"
          maxLength={120}
          onBlur={onBlur}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
        />
      </Item>
    </View>
  );
};

export default Input;
