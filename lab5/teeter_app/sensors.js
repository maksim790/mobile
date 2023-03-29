import {
    accelerometer,
    setUpdateIntervalForType,
    SensorTypes,
} from 'react-native-sensors';

const accelerations = {x: 0, y: 0}

const subscription = accelerometer.subscribe((data) => {
    updateSensors(data)
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

const updateSensors = ({x, y}) => {
    accelerations.x = y / 10
    accelerations.y = x / 10
}

export default getAccelerations = () => {return accelerations}