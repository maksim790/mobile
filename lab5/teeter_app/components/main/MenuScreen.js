import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, View, BackHandler, Alert } from 'react-native';
import styles from '../../styles'
import MenuOption from './MenuOption'
import { NavigationContainer, CommonActions } from '@react-navigation/native';

const MenuScreen = ({navigation, route}) => {
  backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
      return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.urlBtnContainer}>
          <MenuOption title='Play' onPress={() => navigation.navigate('Game')}/>
          <MenuOption title='Calibrate'/>
          <MenuOption title='Exit' onPress={() => backPressed()}/>
      </View>
    </View>
  )
}

export default MenuScreen;
