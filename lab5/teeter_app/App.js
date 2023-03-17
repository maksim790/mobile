import React, {useRef, useState} from 'react';
import { View, Dimensions, Image, ImageBackground } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import Ball from './components/Ball'
import Wall from './components/Wall'
import Hole from './components/Hole'
import GameLoop from './systems/GameLoop';

function App(): JSX.Element {
  const engine = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);

  let entities = {
    ball : {
      pos: {x: 90, y: 90},
      radius: 30,
      speed: {x: 0, y: 0},
      acn: {x: 0, y: 0},
      dir: {x: 0, y: 0},
      renderer: Ball,
    },
  }

  for(let i = 0; i < 5; i++){
    entities['holeId_'+ i] = {
        pos: {x: 20 + 90 * i, y: 20 + 100 * i},
        radius: 30,
        renderer: Hole,
    }
  }

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={styles.gameEngine}
        entities={entities}
        systems={[GameLoop]}
        running={gameRunning}
      >
      </GameEngine>
    </View>
  )
}

export default App;
