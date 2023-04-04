import React, {useEffect, useRef, useState} from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from './styles'
// import { GameEngine } from "react-native-game-engine";
// import entities from './entities'
// import {Physics, Touches, Interactions} from './physics'
// import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import MenuOption from './components/main/MenuOption'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './components/main/MenuScreen'
import GameScreen from './components/main/GameScreen';

function App(): JSX.Element {
  // const [running, setRunning] = useState(false);
  // const [gameEngine, setGameEngine] = useState(null)
  // const [level, setLevel] = useState(2)

  // const [timer, setTimer] = useState(true)

  // useEffect(() => {
  //   setRunning(true)
  // }, [])

  // useEffect(() => {
  //   console.log(level)
  //   gameEngine?.swap(entities(level))
  // }, [level])

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.canvas}>
    //   <GameEngine
    //     ref={(ref) => {setGameEngine(ref)}}
    //     style={styles.gameEngine}
    //     entities={entities(level)}
    //     systems={[Physics, Touches, Interactions]}
    //     running={running}
    //     onEvent={(e) => {
    //       switch(e.type){
    //         case 'next_level':
    //           console.log('next')
    //           setLevel(level < 1 ? level + 1 : 0)
    //           break
    //         case 'try_again':
    //           console.log('again')
    //           gameEngine.swap(entities(level))
    //           break
    //       }
    //     }}
    //   >
    //   </GameEngine>
    //   <StatusBar hidden={true}/>
    // </View>
  )
}

export default App;
