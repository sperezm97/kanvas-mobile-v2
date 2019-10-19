import { Navigation } from 'react-native-navigation';
import { compose } from 'redux';
import * as screen from '../../modules';
import * as screenNames from './screenNames';
import { withRedux, withNotification, withSafeArea } from '@utils/hoc';

const enchanter = (screen: React.ElementType) =>
  compose(
    withRedux,
    withNotification,
  )(screen);
export default function registerScreens(): void {
  Navigation.registerComponent(screenNames.HOME_SCREEN, () =>
    enchanter(screen.Home),
  );
  Navigation.registerComponent(screenNames.LOGIN_SCREEN, () =>
    enchanter(screen.Login),
  );
  Navigation.registerComponent(screenNames.REGISTER_SCREEN, () =>
    enchanter(screen.Register),
  );
  Navigation.registerComponent(screenNames.SIDEMENU_SCREEN, () =>
    enchanter(screen.SideMenu),
  );
  Navigation.registerComponent(screenNames.WELCOME_SCREEN, () =>
    enchanter(screen.Welcome),
  );
  Navigation.registerComponent(screenNames.FORGOT_SCREEN, () =>
    enchanter(screen.ForgotPassword),
  );
}
