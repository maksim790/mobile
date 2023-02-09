import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import ToDoPart from './components/ToDoPart'
import SQLite, {openDatabase} from 'react-native-sqlite-storage';

const App = () => {

  return (
    <NavigationContainer>
        <ToDoPart />
    </NavigationContainer>
  );
};

export default App;
