import Matter from 'matter-js'
import Ball from '../components/Ball'
import Wall from '../components/Wall'
import Hole from '../components/Hole'
import Screen from '../Constants'

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world
    world.gravity.y = 0

    let flag = false,
        bodies = []

    Matter.Events.on(engine, 'collisionStart', (event) => {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            if(pair.bodyB.isSensor){
                const vector = Matter.Vector.create(pair.bodyB.position.x - pair.bodyA.position.x, 
                    pair.bodyB.position.y - pair.bodyA.position.y)

                Matter.Body.translate(pair.bodyA, vector)
                pair.bodyA.isStatic = true
                // flag = true

                bodies.push(pair.bodyA)
                bodies.push(pair.bodyB)
            }
        }
    });

    // Matter.Events.on(engine, 'beforeUpdate', (event) => {
    //     if((Math.round(bodies[0]?.position.x) != Math.round(bodies[1]?.position.x)) && 
    //     (Math.round(bodies[0]?.position.y) != Math.round(bodies[1]?.position.y))){

    //         const vector = Matter.Vector.create((bodies[1]?.position.x - bodies[0]?.position.x) / 10000, 
    //         (bodies[1]?.position.y - bodies[0]?.position.y) / 10000)

    //         if(bodies[1]?.isSensor){
    //             if(flag)
    //                 Matter.Body.applyForce(bodies[0], bodies[0].position, vector)
    //         }

    //         console.log(bodies[0]?.position, bodies[1]?.position)
    //     }
    // })

    return {
        physics: {engine, world},
        Ball: Ball(world, {x: 160, y: 90}, 15),
        Hole: Hole(world, {x: 160, y: 290}, 1),
        Wall1: Wall(world, '#975a5e', {x: Screen.width / 2, y: 0}, {width: Screen.width, height: 1}),
        Wall2: Wall(world, '#975a5e', {x: Screen.width / 2, y: Screen.height}, {width: Screen.width, height: 1}),
        Wall3: Wall(world, '#975a5e', {x: 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
        Wall4: Wall(world, '#975a5e', {x: Screen.width - 15, y: Screen.height / 2}, {width: 100, height: Screen.height}),
    }
}
