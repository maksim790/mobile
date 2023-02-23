import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScannerScreen from './QRScannerScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRGeneratorScreen from './QRGeneratorScreen'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function QRSection() {
    return (
        <Tab.Navigator 
          backBehavior={'order'}>
            <Tab.Screen 
              name='QRScanner'
              component={QRScannerScreen} 
              options={{
                title: 'Scan',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="line-scan" color={color} size={size} />
                ),
              }} />
            <Tab.Screen 
              name='QRGenerator' 
              component={QRGeneratorScreen} 
              options={{
                title: 'Generate',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="share" color={color} size={size} />
                ),
              }}/>
        </Tab.Navigator>
    );
}