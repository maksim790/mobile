import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RssSection from './components/RssSection'

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <RssSection />
    </NavigationContainer>
  )
}

export default App;
