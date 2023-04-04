import {StyleSheet} from 'react-native'
import {elevation} from 'react-native-elevation'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fffacd",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
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
      // backgroundColor: "#3e4a61",
      backgroundColor: "#fffacd",
      // backgroundColor: "rgb(200, 200, 255)",
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
    menuOption: {
      backgroundColor: '#975a5e',
      // backgroundColor: '#202020',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      width: 200,
      margin: 10,
    },
    menuOptionText: {
      color: 'white',
      paddingVertical: 16,
      fontSize: 16,
      fontWeight: 800,
    }, 
  });