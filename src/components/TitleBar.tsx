import React from 'react';
import {
  Header as NbHeader,
  Body as nbBody,
  Left as nbLeft,
  Right as nbRight,
  View,
} from 'native-base';
import styled from 'styled-components';
import { colors } from '@styles';

const Body = styled(nbBody)`
  flex: 1 0px;
  min-width: 120px;
`;
const Left = styled(nbLeft)`
  flex: 1 0px;
`;
const Right = styled(nbRight)`
  flex: 1 0px;
`;

const Header = styled(NbHeader)`
  background-color: ${colors.white};
`;

interface ItitleBar {
  right?: JSX.Element;
  body?: JSX.Element;
  left?: JSX.Element;
  barStyle?: 'light-content' | 'dark-content';
  noShadow?: boolean;
  transparent?: boolean;
}
const TitleBar = ({
  right,
  body,
  left,
  barStyle,
  noShadow,
  transparent,
}: ItitleBar) => {
  return (
    <Header
      transparent={transparent}
      iosBarStyle={barStyle}
      androidStatusBarColor={barStyle}
      noShadow={noShadow}
    >
      <Left>{left}</Left>
      <Body>{body}</Body>
      <Right>{right}</Right>
    </Header>
  );
};

TitleBar.defaultsProps = {
  right: <View />,
  body: <View />,
  left: <View />,
  barStyle: 'light-content',
  noShadow: true,
  transparent: true,
};

export default TitleBar;
