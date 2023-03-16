import React from "react";
import { View, Image, } from "react-native";
import styles from '../styles'

export default function Walls({ pos, size }) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        position: "absolute",
        left: 0,
        top: 0,
        borderWidth: 15,
        borderColor: '#1a2639',
    }}>
        {/* <Image 
          source={require('../assets/ball.png')}
          style={styles.ballImage}
        /> */}
    </View>
  );
} 