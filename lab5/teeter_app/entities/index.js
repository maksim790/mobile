import Matter from 'matter-js'
import Ball from '../components/Ball'
import Wall from '../components/Wall'
import Hole from '../components/Hole'

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    return {
        physics: {engine, world},
        Ball: Ball(world, {x: 160, y: 90}, 30)
    }
}
