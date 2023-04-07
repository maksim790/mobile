import React, {useEffect, useState} from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from '../../styles'
import { GameEngine } from "react-native-game-engine";
import entities from '../../entities'
import {Physics, Touches, Interactions} from '../../physics'
import {Slider} from '@miblanchard/react-native-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingSaveBtn from './SettingSaveBtn';
import {addSettingSensor, getSensorAngles, setSensorAngles} from '../../sensors'
import GameModal from './GameModal';


const GameScreen = ({navigation, route}) => {
    const [running, setRunning] = useState(false)

    const [gameEngine, setGameEngine] = useState(null)
    const [level, setLevel] = useState(route.params.level)

    const [timer, setTimer] = useState(true)

    const [settings, setSettings] = useState({
      sensetivity: 8,
      angles: {x: 90, y: 90}
    })
    
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
      getStorageData()
      if(!settings){
        setSettings({
          sensetivity: 8,
          angles: {x: 90, y: 90}
        })
        saveStorageData(settings)
      }
      setRunning(true)
    }, [])

    useEffect(() => {
      gameEngine?.swap(entities(level))
    }, [level])

    useEffect(() => {
      console.log(modalVisible)
    },[modalVisible])

    useEffect(() => {
      addSettingSensor(settings)
      console.log(settings)
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

    const handleUpdate = (modalVisible) => {
      setModalVisible(modalVisible)
    } 

    const handleExit = () => {
      navigation.goBack()
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
                    setModalVisible(true)
                    // setLevel(level < 1 ? level + 1 : 1)
                    break
                  case 'try_again':
                    console.log('again')
                    gameEngine.swap(entities(level))
                    break
              }
          }}
        >
        </GameEngine>
        <GameModal 
          modalVisible={modalVisible} 
          handleUpdate={handleUpdate} 
          handleExit={handleExit}
          handleLevelNext={() => {
            setLevel(level < 4 ? level + 1 : 1)
            setModalVisible(false)
          }}
          handleLevelAgain={() => {
            gameEngine.swap(entities(level))
            setModalVisible(false)
          }}/>
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
          <View style={styles.calibrationButtons}>
            {/* <SettingSaveBtn title='Calibrate' onPress={() =>{
              setSettings({...settings, angles: getSensorAngles()})
            }}/> */}
            <SettingSaveBtn title='Save' onPress={() =>{
              // setSensorAngles(settings)
              saveStorageData(settings)
            }}/>
          </View>
        </>}
      </View>
    )
}

export default GameScreen;
