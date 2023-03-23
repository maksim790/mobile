import { accelerometer, SensorTypes, setUpdateIntervalForType, gyroscope } from 'react-native-sensors'

var accelerations = {x: 0, y: 0, z: 0}
const subscription = accelerometer.subscribe((data) => {
    accelerations = data
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

export default function (entities, { events, dispatch }) {
    const ball = entities.ball
    const holes = []
    for(var prop in entities){
        if(prop.startsWith('holeId'))
            holes.push(entities[prop])
    }
    // console.log(holes)
    // const wall = entities.wall

    const time = 0.3,
        my = 0.03
        k = 0.3

    ball.acn = {
        x: Math.round(-accelerations.x),
        y: Math.round(accelerations.y)
    }
    
    let dx = ball.speed.x * time + ball.acn.x * time * time / 2, 
        dy = ball.speed.y * time + ball.acn.y * time * time / 2

    if(ball.pos.x + dx > 320 || ball.pos.x + dx < 0) {
        dx = -dx;
        ball.speed.x = k * -ball.speed.x
    }
    
    if(ball.pos.y + dy > 726 || ball.pos.y + dy < 0) {
        dy = -dy;
        ball.speed.y = k * -ball.speed.y
    }

    ball.pos.x += dx
    ball.pos.y += dy
    
    ball.speed = {
        x: ball.speed.x += ball.acn.x * time - (my) * ball.speed.x,
        y: ball.speed.y += ball.acn.y * time - (my) * ball.speed.y
    }

    holes.forEach((hole) => {
        if(Math.sqrt(Math.pow(Math.abs(ball.pos.x - hole.pos.x), 2) + 
            Math.pow(Math.abs(ball.pos.y - hole.pos.y), 2)) <= ball.radius){
            dispatch('game-over')
        }
    })

    return entities;
}

