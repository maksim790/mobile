/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


const AppWrapper = () => {
  return (
    <App tasks={tasks} />
  )
}

AppRegistry.registerComponent(appName, () => App);
