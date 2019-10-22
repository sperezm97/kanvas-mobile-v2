import { Navigation } from 'react-native-navigation';
import registerScreens from '@config/navigation/registerScreens';
import { Auth, defaultConfig } from '@config/navigation/behaviors';
import * as screenNames from './src/config/navigation/screenNames';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  defaultConfig();
  // Auth();
  Navigation.setRoot({
    root: {
      component: {
        name: screenNames.HOME_SCREEN,
      },
    },
  });
});
