import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import FileSystem from './classes/FileSystem'
import ToDoPart from './components/ToDoPart'

const fs = new FileSystem()

const data =
  [
    {id: 'todo-0', name: 'Sleep', content: 'do sleep', checked: true},
    {id: 'todo-1', name: 'Eat', content: 'do eat', checked: false},
    {id: 'todo-2', name: 'Work', content: 'do work', checked: true},
  ]

const App = () => {
  return (
    <NavigationContainer>
        <ToDoPart tasks={data}/>
    </NavigationContainer>
  );
};

export default App;
