import React from 'react';
import { SafeAreaView } from 'react-native';

export default (WrappedComponent: React.FunctionComponent) => {
  const hocComponent = () => {
    return (
      <SafeAreaView>
        <WrappedComponent />
      </SafeAreaView>
    );
  };

  return hocComponent;
};
