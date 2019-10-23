import React from 'react';
import { ListItem, Left, Thumbnail, Body } from 'native-base';
import { Text } from './index.ts';

const styles = {
  body: {
    alignSelf: 'center',
  },
};

interface ConfigRowItem {
  uri: string;
  label: string;
}
const RowItem = ({ uri, label }: ConfigRowItem) => {
  return (
    <ListItem noIndent avatar>
      <Left>
        <Thumbnail source={{ uri }} />
        <Body style={styles.body}>
          <Text listItem>{label} </Text>
        </Body>
      </Left>
    </ListItem>
  );
};

export default RowItem;
