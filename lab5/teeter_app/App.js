import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import entities from './entities'
import {Physics, Touches, Interactions} from './physics'

function App(): JSX.Element {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null)
  const [level, setLevel] = useState(0)

  useEffect(() => {
    setRunning(true)
  }, [])

  useEffect(() => {
    console.log(level)
    gameEngine?.swap(entities(level))
  }, [level])

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
              setLevel(level + 1)
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
    </View>
  )
}

export default App;
