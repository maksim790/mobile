import React from "react";
import { View, Image } from "react-native";
import styles from '../styles'

export default function Hole(pos, radius) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: 2 * radius,
        height: 2 * radius,
        position: "absolute",
        left: pos.x,
        top: pos.y,
        // borderWidth: 1,
        borderRadius: radius,
    }}>
        <Image 
          source={require('../assets/bb.png')}
          style={styles.ballImage}
        />
    </View>
  );
} 