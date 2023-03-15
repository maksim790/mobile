import { accelerometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors'

var accelerations = {x: 0, y: 0, z: 0}
const subscription = accelerometer.subscribe((data) => {
    accelerations = data
    console.log(accelerations)
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

export default function (entities, { events, dispatch }) {
    const ball = entities.ball
    x = accelerations.x > 0 ? -1 : 1 
    y = accelerations.y < 0 ? -1 : 1 
    ball.speed = {
        x: x * Math.sqrt((Math.pow(accelerations.x, 2) + Math.pow(accelerations.z, 2))) / 500,
        y: y * Math.sqrt((Math.pow(accelerations.y, 2) + Math.pow(accelerations.z, 2))) / 500
    }

    ball.pos.x += ball.speed.x
    ball.pos.y += ball.speed.y
    return entities;
}

