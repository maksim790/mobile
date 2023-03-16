import React, {useRef, useState} from 'react';
import { View, Dimensions, Image, ImageBackground } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import Ball from './components/Ball'
import Wall from './components/Wall'
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
            pos: {x: 50, y: 50},
            radius: 40,
            speed: {x: 0, y: 0},
            acn: {x: 0, y: 0},
            dir: {x: 0, y: 0},
            renderer: Ball,
          },
          wall : {
            width: 15,
            renderer: Wall,
          }
        }}
        systems={[GameLoop]}
        running={gameRunning}
      >
      </GameEngine>
    </View>
  )
}

export default App;
