import Matter from 'matter-js'
import { accelerometer } from 'react-native-sensors'
import accelerations from './sensors'

export const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    Matter.Engine.update(engine, time.delta)

    const motions = accelerations()
    engine.gravity = {x: motions.x,  y: motions.y}

    return entities
}

export const Touches = (entities, {touches, time, dispatch}) =>  {
    let engine = entities.physics.engine

    touches.filter(t => t.type === 'press')
        .forEach(t => {
            Matter.Body.setStatic(entities.Ball.body, false)
            console.log('go')
        })

    return entities
}

const interaction = {active: false}

export const Interactions = (entities, {touches, time, dispatch}) =>  {
    let engine = entities.physics.engine

    if(!time.previous){
        console.log(Object.keys(entities).length)
        
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

                    if(entities.PrimaryHole.body === bodyB){
                        dispatch({type: 'next_level'})
                    }else{
                        dispatch({type: 'try_again'})
                    }
                    
                    // Matter.Body.setPosition(bodyA, entities.Ball.pos)
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
    }

    return entities
}

