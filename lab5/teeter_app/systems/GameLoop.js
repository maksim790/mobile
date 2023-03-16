import { accelerometer, SensorTypes, setUpdateIntervalForType, gyroscope } from 'react-native-sensors'

var accelerations = {x: 0, y: 0, z: 0}
const subscription = accelerometer.subscribe((data) => {
    accelerations = data
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

export default function (entities, { events, dispatch }) {
    const ball = entities.ball
    const wall = entities.wall

    const time = 0.2// time for iteration
    const my = 0.007
    // var x = ball.acn.x > 0 ? -1 : 1, 
        // y = ball.acn.y < 0 ? -1 : 1 // direction

    ball.acn = {
        x: Math.round(-accelerations.x),
        y: Math.round(accelerations.y)
    }
    
    let dx = ball.speed.x * time + ball.acn.x * time * time / 2, 
        dy = ball.speed.y * time + ball.acn.y * time * time / 2

    if(ball.pos.x + dx > 305 || ball.pos.x + dx < 15) {
        dx = -dx;
        ball.speed.x = (0.3) * -ball.speed.x
    }
    
    if(ball.pos.y + dy > 710 || ball.pos.y + dy < 15) {
        dy = -dy;
        ball.speed.y = (0.3) * -ball.speed.y
    }

    ball.pos.x += dx
    ball.pos.y += dy

    // console.log(ball.pos)
    
    ball.speed = {
        x: ball.speed.x += ball.acn.x * time - (my) * ball.speed.x,
        y: ball.speed.y += ball.acn.y * time - (my) * ball.speed.y
    }

    // console.log(ball.speed)

    return entities;
}

