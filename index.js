import { Navigation } from 'react-native-navigation';
import registerScreens from '@config/navigation/registerScreens';
import { Auth, defaultConfig } from '@config/navigation/behaviors';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  defaultConfig();
  Auth();
});
