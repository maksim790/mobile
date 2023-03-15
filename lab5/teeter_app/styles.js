import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    canvas: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
    }, 
    gameEngine: {
      width: '100%',
      height: '100%',
      flex: null,
      backgroundColor: "white",
    },
    ballImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
  });