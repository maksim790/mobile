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
    TextBar: {
      color: 'white',
      paddingVertical: 16,
      fontSize: 16,
      fontWeight: 800,
    }, 
    levelsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    levelBar:{
      backgroundColor: '#975a5e',
      // backgroundColor: '#202020',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      width: 100,
      padding: 20,
      margin: 10,
    },
    slider: {
      position: 'absolute',
      left: 100,
      bottom: 50,
      width: 200,
      height: 10,
    },
    saveBtn: {
      // backgroundColor: '#975a5e',
      backgroundColor: '#202020',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      width: 100,
    },
    calibrationButtons: {
      right: 100,
      bottom: 20,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -30,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#e3f6f5',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 80,
    backgroundColor: '#975a5e',
    padding: 10,
    elevation: 2,
    borderRadius: 15,
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  }
  });