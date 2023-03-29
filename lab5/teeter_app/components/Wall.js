import React from "react";
import { View, Image, Text } from "react-native";
import styles from '../styles'
import Matter from 'matter-js'
import {ballCategory, wallCategory} from '../CollisionCategories'

const Wall = (props) => {
  
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y
    // console.log(widthBody, heightBody)
    
    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const color = props.color

    return (
      <View
        style={{
          backgroundColor: color,
          width: widthBody,
          height: heightBody,
          position: "absolute",
          left: xBody,
          top: yBody,
          // borderRadius: radiusBody,
          // borderWidth: 1,
      }}>
      </View>
    )
}

export default (world, color, pos, size) => {

    const initialWall = Matter.Bodies.rectangle(
        pos.x, 
        pos.y,
        size.width,
        size.height,
        {
          label: 'Wall',
          isStatic: true,
          collisionFilter: {
            group: 1,
            category: wallCategory,
            mask: ballCategory,
          }
        }
    )

    Matter.World.add(world, initialWall)

    return {
        body: initialWall,
        color,
        pos,
        renderer: <Wall/>,
    }
} 