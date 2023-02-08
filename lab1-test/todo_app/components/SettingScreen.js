import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import NoteAddButton from './NoteAddButton.js'
import styles from '../styles.js'
import SearchBar from './SearchBar.js'
import {View, Switch} from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import Note from './Note.js'
import SettingsButton from './SettingsButton'

const SettingScreen = ({navigation, route, storage, toggleStorage}) => {

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        //thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleStorage}
        value={storage}
      />
    </View>
  )
}

export default SettingScreen
