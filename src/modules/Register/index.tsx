import React from 'react';
import { Text, TitleBar, Input, Icon, Button } from '@components';
import { globalStyles, colors } from '@styles';
import { View } from './components';

import { Container, Content } from 'native-base';

const Register = () => {
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
      <Content
        padder={true}
        contentContainerStyle={globalStyles.content}
        scrollEnabled={true}
      >
        <View title={true}>
          <Text title={true}>Create An Account</Text>
        </View>
        <Input label="Name" />
        <Input label="Last Name" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Input label="Company" />
        <View terms={true}>
          <Text secondaryBody={true} color={colors.base} numberLines={2}>
            By creating an account you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
        <Button block={true}>
          <Text uppercase={true} button={true}>
            Create Account
          </Text>
        </Button>
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

export default Register;
