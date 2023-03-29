import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from '../styles'
import Matter from 'matter-js'
// import MatterAttractors from 'matter-attractors'

// Matter.use(MatterAttractors)

const Hole = (props) => {
    const radiusBody = props.radius
    
    const xBody = props.body.position.x - radiusBody
    const yBody = props.body.position.y - radiusBody

    return (
      <View
        style={{
          backgroundColor: 'transparent',
          width: 2 * 15,
          height: 2 * 15,
          // width: 2 * radiusBody,
          // height: 2 * radiusBody,
          position: "absolute",
          left: xBody,
          top: yBody,
          // borderRadius: radiusBody,
          // borderWidth: 1,
      }}>
          <Image 
            source={require('../assets/hole.png')}
            style={styles.ballImage}
          />
      </View>
    )
}

export default (world, pos, radius) => {

    const initialHole = Matter.Bodies.circle(
        pos.x, 
        pos.y,
        radius,
        {
          label: 'Hole',
          isStatic: true,
        }
    )

    Matter.World.add(world, initialHole)

    return {
        body: initialHole,
        pos,
        radius,
        renderer: <Hole/>,
    }
} 