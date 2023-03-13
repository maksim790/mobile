import React from "react";
import { View, Image } from "react-native";
import styles from '../styles'

export default function Ball({ position, size }) {
  return (
    <View
      style={{
        backgroundColor: 'green',
        width: size,
        height: size,
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
    }}>
        {/* <Image source={require('../assets/ball.png')}/> */}
    </View>
  );
} 