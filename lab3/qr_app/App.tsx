import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import QRSection from './components/QRSection'

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <QRSection />
    </NavigationContainer>
  )
}

export default App;