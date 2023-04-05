import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from '../../styles'
import { GameEngine } from "react-native-game-engine";
import entities from '../../entities'
import {Physics, Touches, Interactions} from '../../physics'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import {Slider} from '@miblanchard/react-native-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingSaveBtn from './SettingSaveBtn';
import {addSettingSensor} from '../../sensors'


const GameScreen = ({navigation, route}) => {
    const [running, setRunning] = useState(false);
    const [gameEngine, setGameEngine] = useState(null)
    const [level, setLevel] = useState(route.params.level)

    const [timer, setTimer] = useState(true)
    const [settings, setSettings] = useState({sensetivity: 8})

    useEffect(() => {
      getStorageData()
      if(!settings){
        setSettings({sensetivity: 8})
        saveStorageData(settings)
      }
      setRunning(true)
    }, [])

    useEffect(() => {
      gameEngine?.swap(entities(level))
    }, [level])

    useEffect(() => {
      addSettingSensor(settings.sensetivity)
    }, [settings])

    const saveStorageData = (settings) => {
      AsyncStorage.setItem('settings', JSON.stringify(settings))
      console.log(settings)
    }

    const getStorageData = () =>{
      AsyncStorage.getItem('settings')
          .then((value) => {
              if(value)
                  setSettings(JSON.parse(value))
          })
    }

    return (
      <View style={styles.canvas}>
        <GameEngine
            ref={(ref) => {setGameEngine(ref)}}
            style={styles.gameEngine}
            entities={entities(level)}
            systems={[Physics, Touches, Interactions]}
            running={running}
            onEvent={(e) => {
                switch(e.type){
                    case 'next_level':
                      console.log('next')
                      setLevel(level < 1 ? level + 1 : 0)
                      break
                    case 'try_again':
                      console.log('again')
                      gameEngine.swap(entities(level))
                      break
                }
            }}
        >
        </GameEngine>
        <StatusBar hidden={true}/>
        {level == 0 && 
        <>
          <View style={styles.slider}>
            <Slider
              value={settings.sensetivity}
              onValueChange={value => setSettings({sensetivity: value})}  
              minimumValue={3}
              maximumValue={20}
            />
          </View>
          <SettingSaveBtn title='Save' onPress={() =>{
            saveStorageData(settings)
          }}/>
        </>}
      </View>
    )
}

export default GameScreen;
