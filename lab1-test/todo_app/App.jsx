import React, {useState} from 'react'
import {View, Text, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js'
import NoteScreen from './NoteScreen.js'
import { nanoid } from 'nanoid';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

const Stack = createNativeStackNavigator();

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)//fix faster

  function addTask(name){
    const task = {id: `todo-${nanoid()}`, name, checked: false}
    setTasks([...tasks, task])
  }

  // alert(tasks)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={todos={tasks}}/>
        <Stack.Screen name="Note">
          {(props) => <NoteScreen {...props} addTask={addTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
