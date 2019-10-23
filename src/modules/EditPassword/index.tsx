import React from 'react';
import { Container, Content } from 'native-base';
import { TitleBar, Icon, Text, Input, Image, Button } from '@components';
import { globalStyles, images } from '@styles';
import { View } from './components';
import { colors } from '../../styles';
const EditPassword = () => {
  return (
    <Container>
      <TitleBar
        left={
          <Icon
            title={true}
            name="arrow-back"
            type="MaterialIcons"
            onPress={() => {}}
          />
        }
        body={
          <Text title uppercase>
            Password
          </Text>
        }
      />
      <Content padder contentContainerStyle={globalStyles.contentBottom}>
        <View>
          <View logo>
            <Image logo source={images.default} />
          </View>
          <Input label="Current Password" />
          <Input label="New Password" />
          <Input label="Re-enter new Password" />
        </View>
        <View button>
          <Button bordered>
            <Text button color={colors.base} uppercase>
              Cancel
            </Text>
          </Button>
          <Button regular>
            <Text button uppercase>
              save
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default EditPassword;
