import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    marker: {
      borderColor: 'white',
      borderWidth: 1, 
      padding: 130,
      borderRadius: 50,
    },
    scanner: {
      // borderWidth: 5, 
      borderColor: 'red',
    },
    topContent: {
      flex: 1,
      fontSize: 18,
      padding: 30,
      color: '#777',
      fontWeight: 800,
    },
    settingsContainer: {
      position: 'relative',
      top: -50,
      // borderWidth: 5, 
      // borderColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 90,
    },
    urlBtnContainer: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'flex-end',
      gap: 20,
    },
    urlButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 4,
      backgroundColor: '#a2a8d3',
    },
    resultContainer: {
      height: '100%',
      // borderWidth: 10,
      // borderColor: 'red',
    }, 
    generateButton: {
      backgroundColor: '#38598b',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      width: 155,
    },
    generateButtonText: {
      color: 'white',
      paddingVertical: 16,
      fontSize: 16,
      fontWeight: 800,
    },  
    textInput: {
      // borderWidth: 1,
      fontSize: 16,
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  });

  export default styles