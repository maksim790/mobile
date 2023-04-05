import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, View, BackHandler, Alert, Text } from 'react-native';
import styles from '../../styles'
import MenuOption from './MenuOption'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import LevelOption from './LevelOption';
import {levels} from '../../levels/levels'

const LevelScreen = ({navigation, route}) => {
  levelOptions = levels.map((level, index) => {
    if(index)
      return <LevelOption 
        onPress={() => {
          navigation.dispatch(
              CommonActions.navigate({
                  name: 'Game',
                  params: { level: index }
              })
          )
        }}
        title={index} 
        key={index}
      />
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.levelsContainer}>
        {levelOptions}
      </View>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default LevelScreen;
