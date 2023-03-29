import Matter from 'matter-js'
import { accelerometer } from 'react-native-sensors'
import accelerations from './sensors'

export default Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    touches.filter(t => t.type === 'press')
        .forEach(t => {
            //start game
            console.log('pressed')
        })

    Matter.Engine.update(engine, time.delta)

    const motions = accelerations()
    engine.gravity = {x: motions.x / 10,  y: motions.y / 10}

    return entities
}