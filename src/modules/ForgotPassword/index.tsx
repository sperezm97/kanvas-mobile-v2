import React from 'react';
import { Container, Content } from 'native-base';
import { TitleBar, Icon, Image, Input, Button } from '@components';
import { View, Text } from './components';
import { images } from '../../styles';

const ForgotPassword = () => {
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
        body={<Text title={true}>canvas</Text>}
      />
      <Content padder>
        <View title={true}>
          <Text title={true}>Reset password</Text>
        </View>
        <Image logo source={images.default} />
        <View input>
          <Input label="Email" />
          <Text placeholder numberLines={2} align="left" forgot>
            Enter your email to receive instructions to recover your password.
          </Text>
        </View>
        <View>
          <Button block disabled={false}>
            <Text button uppercase>
              Send
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
