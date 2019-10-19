import React from 'react';
import { View } from './components';
import { Thumbnail } from 'native-base';
import { images } from '@styles';
import { Text } from '@components';

interface Avatar {
  username?: string;
  source?: string;
}

const Avatar = ({ username, source }: Avatar) => {
  return (
    <View>
      <Thumbnail large={true} source={source} />
      <View>
        <Text>{username}</Text>
      </View>
    </View>
  );
};

Avatar.defaultProps = {
  username: 'Joanne Doe',
  source: images.avatar,
};

export default Avatar;
