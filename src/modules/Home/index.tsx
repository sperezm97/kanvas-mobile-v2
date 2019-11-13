import React from 'react';
import { Container, Content } from 'native-base';
import { RowItem, List, SearchBar } from '@components';
import { colors } from '@styles';

const Home = () => {
  const renderItem = ({ item }) => {
    return <RowItem {...item} />;
  };

  return (
    <Container>
      <SearchBar iconColor={colors.darkBase} />
      <Content padder>
        <List data={[]} renderItem={renderItem} />
      </Content>
    </Container>
  );
};

export default Home;
