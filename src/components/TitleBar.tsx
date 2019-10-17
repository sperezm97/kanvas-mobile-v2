import React from 'react';
import {
  Header,
  Body as nbBody,
  Left as nbLeft,
  Right as nbRight,
  View,
} from 'native-base';
import styled from 'styled-components';

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

interface ItitleBar {
  right?: JSX.Element;
  body?: JSX.Element;
  left?: JSX.Element;
  barStyle?: 'light-content' | 'dark-content';
  noShadow?: boolean;
}
const TitleBar = ({ right, body, left, barStyle, noShadow }: ItitleBar) => {
  return (
    <Header iosBarStyle={barStyle} noShadow={noShadow}>
      <Right>{right}</Right>
      <Body>{body}</Body>
      <Left>{left}</Left>
    </Header>
  );
};

TitleBar.defaultsProps = {
  right: <View />,
  body: <View />,
  left: <View />,
  barStyle: 'light-content',
  noShadow: false,
};

export default TitleBar;
