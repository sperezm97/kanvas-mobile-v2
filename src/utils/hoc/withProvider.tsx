import React, { ReactElement, FunctionComponent, ComponentClass } from 'react';
import getStore from '@modules/store';
import { Provider } from 'react-redux';

type Elements = ReactElement | FunctionComponent | ComponentClass;
export default (WrappedComponent: Elements) => {
  const store = getStore();
  const hocComponent = ({ ...props }) => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );

  return hocComponent;
};
