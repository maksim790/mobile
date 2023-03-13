import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScannerScreen from './QRScannerScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRGeneratorScreen from './QRGeneratorScreen'

const Tab = createBottomTabNavigator();

export default function QRSection() {
    function options(title, name){
      return {
        title,
        tabBarIcon: ({ color, size }) => (
          <Icon name={name} color={color} size={size} />
        ),  
      }
    }

    return (
        <Tab.Navigator 
          backBehavior={'order'}>
            <Tab.Screen 
              name='QRScanner'
              component={QRScannerScreen} 
              options={options('Scan', 'line-scan')} />
            <Tab.Screen 
              name='QRGenerator' 
              component={QRGeneratorScreen} 
              options={options('Generate', 'share')} />
        </Tab.Navigator>
    );
}








