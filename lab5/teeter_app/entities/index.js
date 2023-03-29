import Matter from 'matter-js'
import Ball from '../components/Ball'
import Wall from '../components/Wall'
import Hole from '../components/Hole'
import Screen from '../Constants'

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world
    world.gravity.y = 0

    return {
        physics: {engine, world},
        Ball: Ball(world, {x: 160, y: 90}, 15),
        Hole: Hole(world, {x: 160, y: 290}, 0),
        Wall1: Wall(world, '#975a5e', {x: Screen.width / 2, y: 0}, {width: Screen.width, height: 1}),
        Wall2: Wall(world, '#975a5e', {x: Screen.width / 2, y: Screen.height}, {width: Screen.width, height: 1}),
        Wall3: Wall(world, '#975a5e', {x: 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        Wall4: Wall(world, '#975a5e', {x: Screen.width - 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
    }
}
