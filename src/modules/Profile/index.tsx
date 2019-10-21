import React from 'react';
import { Container, Content, Thumbnail } from 'native-base';
import { TitleBar, Text, Icon, Button } from '@components';
import { View } from './components';
import { colors, images } from '@styles';

const Profile = () => {
  return (
    <Container>
      <TitleBar
        left={<Icon title name="md-menu" type="Ionicons" onPress={() => {}} />}
        body={
          <Text uppercase title>
            Profile
          </Text>
        }
      />
      <Content>
        <View>
          <Thumbnail large source={images.avatar} />
        </View>
        <View>
          <Button normal rounded iconRight>
            <Text button uppercase>
              Edit
            </Text>
            <Icon button name="edit" type="MaterialIcons" />
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Profile;
