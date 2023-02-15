import React from 'react'
import Feed from './Feed'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RssSection = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  )
}

export default RssSection
