import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from '../styles'
import Matter from 'matter-js'

const Ball = (props) => {
    const radiusBody = props.radius
    
    const xBody = props.body.position.x - radiusBody
    const yBody = props.body.position.y - radiusBody

    return (
      <View
        style={{
          backgroundColor: 'transparent',
          width: 2 * radiusBody,
          height: 2 * radiusBody,
          position: "absolute",
          left: xBody,
          top: yBody,
          // borderRadius: radiusBody,
          // borderWidth: 1,
      }}>
          <Image 
            source={require('../assets/last.png')}
            style={styles.ballImage}
          />
      </View>
    )
}

export default (world, pos, radius) => {
    // console.log(radius)
    const initialBall = Matter.Bodies.circle(
        pos.x, 
        pos.y,
        radius,
        {label: 'Ball'}
    )

    // console.log(initialBall)

    Matter.World.add(world, initialBall)

    return {
        body: initialBall,
        pos,
        radius,
        renderer: <Ball/>,
    }
} 