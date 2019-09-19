import React, { ReactElement, FunctionComponent, ComponentClass } from 'react';
import getStore from '@modules/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

type Elements = ReactElement | FunctionComponent | ComponentClass;
export default (WrappedComponent: Elements) => {
  const { store, persistor } = getStore();
  const hocComponent = ({ ...props }) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrappedComponent {...props} />
      </PersistGate>
    </Provider>
  );

  return hocComponent;
};
