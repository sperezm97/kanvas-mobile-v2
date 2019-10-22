import React from 'react';
import { FlatList } from 'react-native';
import { Spinner } from 'native-base';
import { View, Text } from './index';
import { colors } from '../styles';

interface ListConfig {
  data: [object];
  renderItem: JSX.Element;
  refresh?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  isLoading?: boolean;
}
const List = ({
  data,
  renderItem,
  refresh,
  onEndReached,
  onRefresh,
  isLoading,
}: ListConfig) => {
  const empty = () => {
    return (
      <View header>
        <Text>No items in list</Text>
      </View>
    );
  };

  const loader = () => {
    if (refresh || isLoading) {
      return (
        <View header>
          <Spinner large color={colors.darkBase} />
        </View>
      );
    }
    return <View />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refresh}
      initialNumToRender={8}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={empty}
      ListFooterComponent={loader}
      ListHeaderComponent={loader}
    />
  );
};

export default List;
