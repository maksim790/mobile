import Matter from 'matter-js'
import Ball from '../components/game/Ball'
import Wall from '../components/game/Wall'
import Hole from '../components/game/Hole'
import Screen from '../Constants'
import levelEntities from '../levels/levels'

export default restart = (level) => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world
    world.gravity.y = 0

    const levelBase = {
        physics: {engine, world},

        WallTop: Wall(world, '#975a5e', {x: Screen.width / 2, y: -50}, {width: Screen.width, height: 100}),
        WallBot: Wall(world, '#975a5e', {x: Screen.width / 2, y: Screen.height + 50}, {width: Screen.width, height: 100}),
        WallLeft: Wall(world, '#975a5e', {x: 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        WallRight: Wall(world, '#975a5e', {x: Screen.width - 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
    }

    return {
        ...levelBase,
        ...levelEntities(world, level)
    }
}