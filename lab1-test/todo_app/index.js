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
    {id: 'todo-3', name: 'Wail', checked: false},
    {id: 'todo-4', name: 'Vibe', checked: true},
    {id: 'todo-5', name: 'Flex', checked: true},
    {id: 'todo-6', name: 'Chill', checked: false},
    {id: 'todo-7', name: 'Drink', checked: false},
]

const AppWrapper = () => {
  return (
    <App tasks={tasks} />
  )
}

AppRegistry.registerComponent(appName, () => AppWrapper);
