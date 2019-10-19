import React from 'react';
import { ListItem as NbItem, Left, Body } from 'native-base';
import { Text, Icon } from '@components';
import styled from 'styled-components';

interface ListItem {
  rowName: string;
  iconName: string;
}

const ListItem = ({ rowName, iconName }: ListItem) => {
  return (
    <NbItem>
      <Left>
        <Icon listItem={true} name={iconName} type="Ionicons" />
        <Body>
          <Text listItem={true}>{rowName}</Text>
        </Body>
      </Left>
    </NbItem>
  );
};

export default ListItem;
