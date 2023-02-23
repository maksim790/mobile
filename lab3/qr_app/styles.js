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
    }
  });

  export default styles