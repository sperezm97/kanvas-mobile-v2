import React from 'react';
import { Container, Content } from 'native-base';
import { TitleBar, Icon, Text, RowItem, List } from '@components';
import { colors, globalStyles } from '@styles';
import { FlatList } from 'react-native';
import { data } from './mock.js';

const Home = () => {
  const renderItem = ({ item }) => {
    console.log(item);
    return <RowItem {...item} />;
  };

  return (
    <Container>
      <TitleBar
        color={colors.midBase}
        left={
          <Icon
            title
            type="Ionicons"
            name="md-menu"
            onPress={() => {}}
            color={colors.white}
          />
        }
        body={
          <Text title uppercase color={colors.white}>
            home
          </Text>
        }
      />
      <Content style={{ backgroundColor: colors.midBase }}>
        <List data={data} renderItem={renderItem} />
      </Content>
    </Container>
  );
};

export default Home;
