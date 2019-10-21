import React from 'react';
import { ListItem as NbListItem, Left, Body, Right } from 'native-base';
import { Text, Icon } from '.';

interface ListItem {
  rowIconName: string;
  rowName: string;
  rowIconType:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | undefined;
  rightRow?: React.Component | JSX.Element | React.FunctionComponent;
}
const listItem = {
  marginLeft: 8,
  marginRight: 8,
};

const ListItem = ({
  rowIconType,
  rowIconName,
  rowName,
  rightRow,
}: ListItem) => {
  return (
    <NbListItem noIndent style={listItem}>
      <Left>
        <Icon listItem name={rowIconName} type={rowIconType} />
        <Body>
          <Text listItem>{rowName}</Text>
        </Body>
      </Left>
      {rightRow && <Right>{rightRow}</Right>}
    </NbListItem>
  );
};
export default ListItem;
