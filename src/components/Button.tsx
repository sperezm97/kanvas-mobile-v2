import React from 'react';
import styled from 'styled-components';
import { Button as lbButton, Text as lbTExt } from 'native-base';
import { Text } from './Text';
import { colors } from '../styles/colors';

const StyledButton = styled(lbButton)`
  background-color: ${props => props.color || colors.base};
`;

interface IButton {
  label: string;
  onPress: () => void;
  props: lbButton;
  textProps: lbTExt;
}

const Button = ({ label, onPress, props, textProps }: IButton) => {
  return (
    <StyledButton {...props} onPress={onPress}>
      <Text {...textProps} button>
        {label}
      </Text>
    </StyledButton>
  );
};

export default Button;
