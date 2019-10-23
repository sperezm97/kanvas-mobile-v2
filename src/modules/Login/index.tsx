import React from 'react';
import { Text, TitleBar, Input, Icon, Button } from '@components';
import { View } from './components';
import { Container, Content } from 'native-base';
import { globalStyles, colors } from '@styles';

const Login = () => {
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
      <Content padder={true} contentContainerStyle={globalStyles.content}>
        <View title={true}>
          <Text title={true}>Log In</Text>
        </View>
        <Input label="Email" />
        <Input label="Password" />
        <View forgot={true}>
          <Text footnote={true} color={colors.base}>
            Forgot your password?
          </Text>
        </View>
        <View>
          <Button block={true}>
            <Text uppercase={true} button={true}>
              enter account
            </Text>
          </Button>
        </View>
        <View socialText={true}>
          <Text footnote={true} color={colors.base} weight={400}>
            Use social logins
          </Text>
        </View>
        <View social={true}>
          <Button bordered={true} gmail={true}>
            <Text gmail={true}>Gmail</Text>
          </Button>
          <Button facebook={true}>
            <Text button={true}>Facebook</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
