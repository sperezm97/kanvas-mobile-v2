import React from 'react';
import { Root as Notification } from 'native-base';

export default (WrappedComponent: React.FunctionComponent) => {
  const hocComponent = ({ ...props }) => {
    return (
      <Notification>
        <WrappedComponent {...props} />
      </Notification>
    );
  };

  return hocComponent;
};
