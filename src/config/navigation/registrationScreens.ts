import { Navigation } from 'react-native-navigation';
import Home from '@modules/Home';
import * as screens from './screenNames';

export default function registerScreens(): void {
  Navigation.registerComponent(screens.HOME_SCREEN, () => Home);
}
