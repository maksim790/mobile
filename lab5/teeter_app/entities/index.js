import Matter from 'matter-js'
import Ball from '../components/Ball'
import Wall from '../components/Wall'
import Hole from '../components/Hole'
import Screen from '../Constants'

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world
    world.gravity.y = 0

    const interaction = {active: 0}

    const ball = Ball(world, {x: 640, y: 30}, 15)

    Matter.Events.on(engine, 'collisionStart', (event) => {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            if(pair.bodyB.isSensor){
                interaction.bodyA = pair.bodyA
                interaction.bodyB = pair.bodyB
                interaction.active = 1
            }
        }
    })

    Matter.Events.on(engine, 'beforeUpdate', () => {
        if(interaction.active){
            engine.gravity.x = 0
            engine.gravity.y = 0

            const {bodyA, bodyB, active} = interaction

            if((Math.round(bodyA.position.x) == Math.round(bodyB.position.x)) && 
                (Math.round(bodyA.position.y) == Math.round(bodyB.position.y))){

                Matter.Body.setVelocity(bodyA, Matter.Vector.create(0, 0))
                Matter.Body.setStatic(bodyA, true)
                interaction.active = 0

                Matter.Body.setPosition(bodyA, ball.pos)
            }else{
                Matter.Body.setStatic(bodyA, true)
                Matter.Body.setVelocity(bodyA, Matter.Vector.create(0, 0))

                const vector = Matter.Vector.create((bodyB.position.x - bodyA.position.x) / 4000, 
                    (bodyB.position.y - bodyA.position.y) / 4000)

                Matter.Body.applyForce(bodyA, bodyA.position, vector)
                Matter.Body.setStatic(bodyA, false)
            }
        }
    })

    return {
        physics: {engine, world},
        Ball: ball,
        PrimaryHole: Hole(world, {x: 120, y: 50}, 1, true),
        Hole1: Hole(world, {x: 100, y: 140}, 1),
        Hole2: Hole(world, {x: 230, y: 30}, 1),
        Hole3: Hole(world, {x: 680, y: 140}, 1),
        Hole4: Hole(world, {x: 680, y: 340}, 1,),
        Hole5: Hole(world, {x: 620, y: 250}, 1),
        Hole6: Hole(world, {x: 430, y: 340}, 1),
        Hole7: Hole(world, {x: 430, y: 200}, 1),
        Wall1: Wall(world, '#975a5e', {x: 595, y: 135}, {width: 10, height: 270}),
        Wall2: Wall(world, '#975a5e', {x: 430, y: 270}, {width: 10, height: 100}),
        Wall3: Wall(world, '#975a5e', {x: 430, y: 130}, {width: 10, height: 100}),

        WallTop: Wall(world, '#975a5e', {x: Screen.width / 2, y: -15}, {width: Screen.width, height: 30}),
        WallBot: Wall(world, '#975a5e', {x: Screen.width / 2, y: Screen.height + 15}, {width: Screen.width, height: 30}),
        WallLeft: Wall(world, '#975a5e', {x: 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        WallRight: Wall(world, '#975a5e', {x: Screen.width - 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
    }
}
