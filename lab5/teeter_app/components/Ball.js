import React from "react";
import { View, Image } from "react-native";
import styles from '../styles'

export default function Ball({ pos, radius }) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: radius,
        height: radius,
        position: "absolute",
        left: pos.x,
        top: pos.y,
        // borderWidth: 1,
    }}>
        <Image 
          source={require('../assets/last.png')}
          style={styles.ballImage}
        />
    </View>
  );
} 