import React from 'react';
import { Container, Content, Switch } from 'native-base';
import { TitleBar, Icon, Text, ListItem, Button } from '@components';
import { Separator } from './components';
import { colors } from '@styles';

const Settings = () => {
  return (
    <Container>
      <TitleBar
        color={colors.midBase}
        left={
          <Icon
            title
            name="md-menu"
            type="Ionicons"
            color={colors.white}
            onPress={() => {}}
          />
        }
        body={
          <Text uppercase title color={colors.white}>
            Settings
          </Text>
        }
      />
      <Content>
        <Separator>
          <Text footnote align="left" color={colors.white}>
            General
          </Text>
        </Separator>
        <ListItem
          rowIconType="Ionicons"
          rowIconName="ios-notifications"
          rowName="Push Notification"
          rightRow={<Switch />}
        />
        <ListItem
          rowIconType="Ionicons"
          rowIconName="ios-notifications"
          rowName="Email Notification"
          rightRow={<Switch />}
        />
        <Separator>
          <Text footnote align="left" color={colors.white}>
            Security
          </Text>
        </Separator>
        <ListItem
          rowIconType="FontAwesome5"
          rowIconName="key"
          rowName="Password"
          rightRow={
            <Button transparent small iconRight>
              <Text listItem>Edit</Text>
              {/* <Icon listItem type="MaterialIcons" name="edit" /> */}
              <Icon listItem type="Ionicons" name="ios-arrow-forward" />
            </Button>
          }
        />
        <ListItem
          rowIconType="FontAwesome5"
          rowIconName="shield-alt"
          rowName="Terms and Conditions"
          rightRow={<Icon listItem type="Ionicons" name="ios-arrow-forward" />}
        />
      </Content>
    </Container>
  );
};

export default Settings;
