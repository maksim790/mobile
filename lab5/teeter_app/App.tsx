import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
// import GameLoop from './systems/GameLoop';
import entities from './entities'
import Physics from './physics'
// import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

function App(): JSX.Element {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={styles.canvas}>
      <GameEngine
        style={styles.gameEngine}
        entities={entities()}
        systems={[Physics]}
        running={running}
      >
      </GameEngine>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default App;
