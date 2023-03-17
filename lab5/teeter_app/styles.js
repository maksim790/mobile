import {StyleSheet} from 'react-native'
import {elevation} from 'react-native-elevation'

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
      backgroundColor: "#3e4a61",
    },
    ballImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',

      // elevation: 10,
      // shadowColor: 'red'
    },
    shadow: {
      shadowColor: '#202020',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
    },
  });