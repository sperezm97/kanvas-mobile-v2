import React from 'react';
import { Text, TitleBar, Input, Icon, Button } from '@components';
import { View } from './components';
import { Container, Content } from 'native-base';
import { globalStyles, colors } from '@styles';
import { popScreen } from '@config/navigation/behaviors';
import { LOGIN_SCREEN } from '@config/navigation/screenNames';
import { principal } from '../../config/navigation/behaviors';

const Login = () => {
  const onPressSignIn = () => {
    principal();
  };

  const leftTitleBar = () => (
    <Icon
      title
      name="arrow-back"
      type="MaterialIcons"
      onPress={() => popScreen(LOGIN_SCREEN)}
    />
  );

  const bodyTitleBar = () => <Text title>canvas</Text>;

  return (
    <Container>
      <TitleBar left={leftTitleBar()} body={bodyTitleBar()} />
      <Content padder contentContainerStyle={globalStyles.content}>
        <View title>
          <Text title>Log In</Text>
        </View>
        <Input label="Email" />
        <Input label="Password" />
        <View forgot>
          <Text footnote color={colors.base}>
            Forgot your password?
          </Text>
        </View>
        <View>
          <Button block onPress={() => onPressSignIn()}>
            <Text uppercase button>
              enter account
            </Text>
          </Button>
        </View>
        <View socialText>
          <Text footnote color={colors.base} weight={400}>
            Use social logins
          </Text>
        </View>
        <View social>
          <Button gmail>
            <Text gmail>Gmail</Text>
          </Button>
          <Button facebook>
            <Text button>Facebook</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
