import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from '../styles'
import Matter from 'matter-js'
import defaultHole from '../assets/true_hole.png'
import primaryHole from '../assets/primary_hole_0.png'

const Hole = (props) => {
    const radiusBody = props.radius
    
    const xBody = props.body.position.x - 17
    const yBody = props.body.position.y - 17

    return (
      <View
        style={{
          backgroundColor: 'transparent',
          width: 2 * 17,  
          height: 2 * 17,
          // width: 2 * radiusBody,
          // height: 2 * radiusBody,
          position: "absolute",
          left: xBody,
          top: yBody,
      }}>
        <Image 
          source={props.primary ? primaryHole : defaultHole}
          style={styles.ballImage}
        />
      </View>
    )
}

export default (world, pos, radius, primary = false) => {

    const initialHole = Matter.Bodies.circle(
        pos.x, 
        pos.y,
        radius,
        {
          label: 'Hole',
          isStatic: true,
          isSensor: true,
        }
    )

    Matter.World.add(world, initialHole)

    return {
        body: initialHole,
        pos,
        radius,
        primary,
        renderer: <Hole/>,
    }
} 