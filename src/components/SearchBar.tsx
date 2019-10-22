import React from 'react';
import { Header, Left, Item } from 'native-base';
import Icon from './Icon';
import { Input } from '.';

const SearchBar = () => {
  return (
    <Header searchBar>
      <Icon name="md-ios" type="Ionicons" />
      <Item>
        <Input />
      </Item>
    </Header>
  );
};

export default SearchBar;
