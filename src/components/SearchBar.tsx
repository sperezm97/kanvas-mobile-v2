import React from 'react';
import {
  Header as NbHeader,
  Left,
  Item as NbItem,
  Input as NbInput,
} from 'native-base';
import Icon from './Icon';
import { colors } from '@styles';
import styled from 'styled-components';
import { toggleDrawer } from '../config/navigation/behaviors';

interface ConfigSearchBar {
  value: string;
  onSubmit?: () => void;
  onChange?: () => void;
  backgroundColor?: string;
  iconColor?: string;
}

const Header = styled(NbHeader)`
  background-color: ${({ color }: { color?: string }) =>
    color || colors.midBase};
  border-bottom-width: 0;
`;

const Input = styled(NbInput)`
  height: 30px;
  background-color: ${colors.darkBase};
  color: ${colors.white};
  border: 0.5px ${colors.white};
  border-radius: 20px;
`;

const Item = styled(NbItem)`
  align-self: center;
`;

const SearchBar = ({
  value,
  onSubmit,
  onChange,
  backgroundColor,
  iconColor,
}: ConfigSearchBar) => {
  const onPressAdd = () => {};

  return (
    <Header searchBar rounded noShadow color={backgroundColor}>
      <Icon
        active
        searchBar
        color={iconColor}
        name="md-menu"
        type="Ionicons"
        onPress={() => toggleDrawer()}
      />
      <Item>
        <Input
          value={value}
          autoCapitalize="sentences"
          autoCorrect
          autoFocus
          blurOnSubmit
          caretHidden
          contextMenuHidden
          keyboardType="default"
          maxLength={120}
          onBlur={onSubmit}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          selectionColor={colors.white}
        />
      </Item>
      <Icon
        active
        searchBar
        color={iconColor}
        name="md-add"
        type="Ionicons"
        onPress={onPressAdd}
      />
    </Header>
  );
};

export default SearchBar;
