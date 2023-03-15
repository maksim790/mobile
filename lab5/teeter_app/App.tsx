import React, {useRef, useState} from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import Ball from './components/Ball'
import GameLoop from './systems/GameLoop';

function App(): JSX.Element {
  const engine = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={styles.gameEngine}
        entities={{
          ball : {
            pos: {x: 1, y: 1},
            size: 40,
            // updateFrequency: 10,
            // nextMove: 10,
            speed: {x: 0, y: 0},
            renderer: Ball,
          }
        }}
        systems={[GameLoop]}
        running={gameRunning}
      />
    </View>
  )
}

export default App;
