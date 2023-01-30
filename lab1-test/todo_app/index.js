/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const tasks = [
    {id: 'todo-0', name: 'Sleep', checked: true},
    {id: 'todo-1', name: 'Eat', checked: false},
    {id: 'todo-2', name: 'Work', checked: true},
    {id: 'todo-3', name: 'Shit', checked: true},
]

const AppWrapper = () => {
  return (
    <App tasks={tasks} />
  )
}

AppRegistry.registerComponent(appName, () => AppWrapper);
