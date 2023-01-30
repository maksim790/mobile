import React, {useState} from 'react'
import {View, Text, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js'
import NoteScreen from './NoteScreen.js'

const Stack = createNativeStackNavigator();

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)//fix faster

  // alert(tasks)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={todos={tasks}}/>
        <Stack.Screen name="Note" component={NoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
