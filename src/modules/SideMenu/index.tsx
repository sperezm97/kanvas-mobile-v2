import React from 'react';
import { TitleBar, Text, Image, Button } from '@components';
import { Container, Content, List } from 'native-base';
import { globalStyles, deviceWidth, images, colors } from '@styles';
import { View } from './components/components';
import Avatar from './components/Avatar';
import ListItem from './components/ListItem';

const SideMenu = () => {
  const data = [
    {
      id: 1,
      rowName: 'Home',
      iconName: 'ios-home',
      rowIconType: 'Ionicons',
    },
    {
      id: 2,
      rowName: 'Prueba',
      iconName: 'users',
      rowIconType: 'FontAwesome',
    },
    {
      id: 3,
      rowName: 'Settings',
      iconName: 'ios-settings',
      rowIconType: 'Ionicons',
    },
    {
      id: 4,
      rowName: 'Sign Out',
      iconName: 'ios-log-out',
      rowIconType: 'Ionicons',
    },
  ];

  const renderItem = item => <ListItem key={item.id} {...item} />;

  return (
    <Container>
      <Content contentContainerStyle={globalStyles.contentSideMenu}>
        <View>
          <Avatar />
          <View>{data.map(renderItem)}</View>
        </View>
        <View logo>
          <Text title={true}>canvas</Text>
        </View>
      </Content>
    </Container>
  );
};

export default SideMenu;
