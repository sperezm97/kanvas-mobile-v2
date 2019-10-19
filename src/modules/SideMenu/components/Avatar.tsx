import React from 'react';
import { View, Text } from './components';
import { Thumbnail } from 'native-base';
import { images } from '@styles';

interface Avatar {
  username?: string;
  source?: string;
}

const Avatar = ({ username, source }: Avatar) => {
  return (
    <View avatar>
      <Thumbnail source={source} />
      <Text avatar>{username}</Text>
    </View>
  );
};

Avatar.defaultProps = {
  username: 'Joanne Doe',
  source: images.avatar,
};

export default Avatar;
