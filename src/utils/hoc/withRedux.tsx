import React, { ReactElement, FunctionComponent, ComponentClass } from 'react';
import { store, persistor } from '@modules/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default (WrappedComponent: React.FunctionComponent) => {
  const hocComponent = ({ ...props }) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrappedComponent {...props} />
      </PersistGate>
    </Provider>
  );

  return hocComponent;
};
