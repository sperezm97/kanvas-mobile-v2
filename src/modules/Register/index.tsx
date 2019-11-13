import React from 'react';
import { Text, TitleBar, Input, Icon, Button } from '@components';
import { globalStyles, colors } from '@styles';
import { View } from './components';

import { Container, Content } from 'native-base';
import { popScreen } from '../../config/navigation/behaviors';
import { REGISTER_SCREEN } from '../../config/navigation/screenNames';

const Register = () => {
  const titleBarLeft = () => (
    <Icon
      title
      name="arrow-back"
      type="MaterialIcons"
      onPress={() => popScreen(REGISTER_SCREEN)}
    />
  );
  const titleBody = () => <Text title>canvas</Text>;

  return (
    <Container>
      <TitleBar left={titleBarLeft()} body={titleBody()} />
      <Content padder contentContainerStyle={globalStyles.content}>
        <View title>
          <Text title>Create An Account</Text>
        </View>
        <View>
          <Input label="Name" />
          <Input label="Last Name" />
          <Input label="Email" />
          <Input label="Password" />
          <Input label="Confirm Password" />
          <Input label="Company" />
        </View>
        <View terms>
          <Text secondaryBody color={colors.base} numberLines={2}>
            By creating an account you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
        <Button block>
          <Text uppercase button>
            Create Account
          </Text>
        </Button>
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

export default Register;
