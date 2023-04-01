import Matter from 'matter-js'
import { accelerometer } from 'react-native-sensors'
import accelerations from './sensors'

export default Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    touches.filter(t => t.type === 'press')
        .forEach(t => {
            Matter.Body.setStatic(entities.Ball.body, false)
            console.log('go!')
        })

    Matter.Engine.update(engine, time.delta)

    const motions = accelerations()
    engine.gravity = {x: motions.x,  y: motions.y}

    return entities
}