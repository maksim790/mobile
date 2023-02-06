import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import ToDoPart from './components/ToDoPart'

// ([{
//   name: ``,
//   content: '',
//   id: `11`,
//   checked: false,
// }])

const App = () => {

  return (
    <NavigationContainer>
        <ToDoPart />
    </NavigationContainer>
  );
};

export default App;
