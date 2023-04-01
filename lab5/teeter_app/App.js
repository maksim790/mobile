import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import entities from './entities'
import Physics from './physics'

function App(): JSX.Element {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null)

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={(ref) => {setGameEngine(ref)}}
        style={styles.gameEngine}
        entities={entities()}
        systems={[Physics]}
        running={running}
        onEvent={(e) => {
          switch(e.type){
            case 'game_over':
              setRunning(false)
              gameEngine.stop()
          }
        }}
      >
      </GameEngine>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default App;
