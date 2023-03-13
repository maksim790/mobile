import React, {useRef} from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles'
import { GameEngine } from "react-native-game-engine";
import Ball from './components/Ball'

function App(): JSX.Element {
  const engine = useRef(null);

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={styles.gameEngine}
        entities={{
          ball : {
            position: [2, 2],
            size: 110,
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 0,
            yspeed: 0,
            renderer: <Ball />,
          }
        }}
      />
    </View>
  )
}

export default App;
