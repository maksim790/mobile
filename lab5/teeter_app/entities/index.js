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

    // const level1 = {
    
    //     PrimaryHole: Hole(world, {x: 120, y: 50}, 1, true),
    //     Hole1: Hole(world, {x: 100, y: 140}, 1),
    //     Hole2: Hole(world, {x: 230, y: 30}, 1),
    //     Hole3: Hole(world, {x: 680, y: 140}, 1),
    //     Hole4: Hole(world, {x: 680, y: 340}, 1,),
    //     Hole5: Hole(world, {x: 620, y: 250}, 1),
    //     Hole6: Hole(world, {x: 430, y: 340}, 1),
    //     Hole7: Hole(world, {x: 430, y: 200}, 1),

    //     Wall1: Wall(world, '#975a5e', {x: 595, y: 135}, {width: 10, height: 270}),
    //     Wall2: Wall(world, '#975a5e', {x: 430, y: 270}, {width: 10, height: 100}),
    //     Wall3: Wall(world, '#975a5e', {x: 430, y: 130}, {width: 10, height: 100}),
    // }

    const base = {
        physics: {engine, world},

        WallTop: Wall(world, '#975a5e', {x: Screen.width / 2, y: -15}, {width: Screen.width, height: 30}),
        WallBot: Wall(world, '#975a5e', {x: Screen.width / 2, y: Screen.height + 15}, {width: Screen.width, height: 30}),
        WallLeft: Wall(world, '#975a5e', {x: 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        WallRight: Wall(world, '#975a5e', {x: Screen.width - 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        // Ball: Ball(world, {x: 640, y: 30}, 15),
    }

    return {
        ...base,
        ...levelEntities(world, level)
    }
}