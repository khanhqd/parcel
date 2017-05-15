import {Navigation} from 'react-native-navigation';

import Login from './Login';
import Runs from './Runs';
import CreateRun from './CreateRun';
import StartRun from './StartRun';

// register all screens of the app (including internal ones)
export function registerScreens() {

  Navigation.registerComponent('parcel.Login', () => Login);
  Navigation.registerComponent('parcel.Runs', () => Runs);
  Navigation.registerComponent('parcel.CreateRun', () => CreateRun);
  Navigation.registerComponent('parcel.StartRun', () => StartRun);

}
