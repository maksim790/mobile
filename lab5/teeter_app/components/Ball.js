import React from "react";
import { View, Image } from "react-native";
import styles from '../styles'

export default function Ball({ pos, size }) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: size,
        height: size,
        position: "absolute",
        left: pos.x * size,
        top: pos.y * size,
    }}>
        <Image 
          source={require('../assets/ball.png')}
          style={styles.ballImage}
        />
    </View>
  );
} 