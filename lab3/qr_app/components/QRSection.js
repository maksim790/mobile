import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScannerScreen from './QRScannerScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function QRSection() {
    return (
        <Tab.Navigator 
          backBehavior={'order'}>
            <Tab.Screen 
              name='Home' 
              component={HomeScreen} 
              options={{
                title: 'Generate',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="share" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen 
              name='QRScanner'
              component={QRScannerScreen} 
              options={{
                title: 'Scan',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="line-scan" color={color} size={size} />
                ),
              }} />
        </Tab.Navigator>
    );
}