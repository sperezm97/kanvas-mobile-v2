import React from 'react';
import { Container, Content, Thumbnail } from 'native-base';
import { TitleBar, Icon, Button, ListItem } from '@components';
import { View, Text } from './components';
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
        <View avatar>
          <Thumbnail large source={images.avatar} />
        </View>
        <View button>
          <Button normal rounded iconRight>
            <Text button uppercase>
              Edit
            </Text>
            <Icon
              button
              name="edit"
              type="MaterialIcons"
              color={colors.white}
            />
          </Button>
        </View>
        <View>
          <ListItem
            rowIconType="FontAwesome"
            rowIconName="user"
            rowName="Joanne Doe"
          />
          <ListItem
            rowIconType="Ionicons"
            rowIconName="md-mail"
            rowName="joanne.doe@mail.com"
          />
        </View>
      </Content>
    </Container>
  );
};

export default Profile;
