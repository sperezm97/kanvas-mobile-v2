import React from 'react';
import View from './View';
import Text from './Text';
import Image from './Image';

interface ConfigPostItem {
  title: string;
  uri: string;
  body: string;
}
const PostItem = ({ title, uri, body }: ConfigPostItem) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Image source={{ uri: 'https://via.placeholder.com/300x200.png' }} />
      </View>
      <View>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

export default PostItem;
