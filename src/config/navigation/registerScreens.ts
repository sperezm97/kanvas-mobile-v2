import { Navigation } from 'react-native-navigation';
import { compose } from 'redux';
import * as screen from '@modules';
import * as screenNames from './screenNames';
import { withRedux, withNotification, withSafeArea } from '@utils/hoc';

const enchanter = (screen: string) =>
  compose(
    withRedux,
    withNotification,
    withSafeArea,
  )(screen);

export default function registerScreens(): void {
  Navigation.registerComponent(screenNames.HOME_SCREEN, () =>
    enchanter(screen.Home),
  );
}
