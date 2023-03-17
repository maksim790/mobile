import { accelerometer, SensorTypes, setUpdateIntervalForType, gyroscope } from 'react-native-sensors'

var accelerations = {x: 0, y: 0, z: 0}
const subscription = accelerometer.subscribe((data) => {
    accelerations = data
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

export default function (entities, { events, dispatch }) {
    const ball = entities.ball
    // const wall = entities.wall

    const time = 0.2,// time for iteration
    my = 0.01
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

    // console.log(ball.pos)
    
    ball.speed = {
        x: ball.speed.x += ball.acn.x * time - (my) * ball.speed.x,
        y: ball.speed.y += ball.acn.y * time - (my) * ball.speed.y
    }
    

    // console.log(ball.speed)

    return entities;
}

