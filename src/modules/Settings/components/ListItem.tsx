import React from 'react';
import { ListItem as NbListItem, Left, Body, Right } from 'native-base';
import { Text, Icon } from '@components';

interface ListItem {
  rowIconName: string;
  rowName: string;
  rowIconType: string;
  rightRow?: React.Component | JSX.Element | React.FunctionComponent;
}
const listItem = {
  marginLeft: 8,
  marginRight: 8,
};

export const ListItem = ({
  rowIconName,
  rowName,
  rightRow,
  rowIconType,
}: ListItem) => {
  return (
    <NbListItem noIndent style={listItem}>
      <Left>
        <Icon listItem name={rowIconName} type={rowIconType} />
        <Body>
          <Text>{rowName}</Text>
        </Body>
      </Left>
      <Right>{rightRow}</Right>
    </NbListItem>
  );
};
