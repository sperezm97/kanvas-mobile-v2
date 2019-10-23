import React from 'react';
import { ListItem as NbItem, Left, Body } from 'native-base';
import { Text, Icon } from '@components';

interface ListItem {
  rowName: string;
  iconName: string;
  rowIconType: string;
}

const ListItem = ({ rowName, iconName, rowIconType }: ListItem) => {
  return (
    <NbItem>
      <Left>
        <Icon listItem={true} name={iconName} type={rowIconType} />
        <Body>
          <Text listItem={true}>{rowName}</Text>
        </Body>
      </Left>
    </NbItem>
  );
};

export default ListItem;
