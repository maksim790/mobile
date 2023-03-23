import React, {useRef, useState} from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
// import GameLoop from './systems/GameLoop';
import entities from './entities'

function App(): JSX.Element {
  const engine = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);

  // let entities = {
  //   ball : {
  //     pos: {x: 90, y: 90},
  //     radius: 15,
  //     speed: {x: 0, y: 0},
  //     acn: {x: 0, y: 0},
  //     dir: {x: 0, y: 0},
  //     renderer: Ball,
  //   },
  // }

  // for(let i = 0; i < 16; i++){
  //   entities['holeId_'+ i] = {
  //       pos: {x: 20 + 20 * i, y: 20 + 45 * i},
  //       radius: 15,
  //       renderer: Hole,
  //   }
  // }

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={styles.gameEngine}
        entities={entities()}
        // systems={[GameLoop]}
        running={gameRunning}
      >
      </GameEngine>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default App;
