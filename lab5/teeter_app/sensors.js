import {
    accelerometer,
    setUpdateIntervalForType,
    SensorTypes,
} from 'react-native-sensors';

const settings = {}
const accelerations = {x: 0, y: 0}

export const addSettingSensor = (sensetivity) => {
    settings.sensetivity = sensetivity
    // console.log('-' + settings.sensetivity)
}

const subscription = accelerometer.subscribe((data) => {
    updateSensors(data)
    // console.log('-' + settings.sensetivity)
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

const updateSensors = ({x, y}) => {
    accelerations.x = y / settings.sensetivity
    accelerations.y = x / settings.sensetivity
}

export default getAccelerations = () => {return accelerations}