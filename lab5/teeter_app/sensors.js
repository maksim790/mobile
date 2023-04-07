import {
    accelerometer,
    setUpdateIntervalForType,
    SensorTypes,
} from 'react-native-sensors';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const sensorSettings = {angles: {x: 1, y: 1}}
const acs = {x: 0, y: 0, z: 0}

export const addSettingSensor = (settings) => {
    sensorSettings.sensetivity = settings.sensetivity
}

export const getSensorAngles = () => {
    return getAngles()
}

export const setSensorAngles = (settings) => {
    sensorSettings.angles = settings.angles
}

const getAngles = () => {
    const cosx = acs.x / Math.sqrt(acs.x * acs.x + acs.y * acs.y + acs.z * acs.z)
    const cosy = acs.y / Math.sqrt(acs.x * acs.x + acs.y * acs.y + acs.z * acs.z)

    return {x: Math.acos(cosx) * 180 / Math.PI, y: Math.acos(cosy) * 180 / Math.PI}
}

const subscription = accelerometer.subscribe((data) => {
    updateSensors(data)
})
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

const updateSensors = ({x, y, z}) => {
    acs.x = y
    acs.y = x
    acs.z = z
}

export default getAccelerations = () => {
    const currentAngles = getAngles()

    return {
        // x: acs.x * Math.cos(sensorSettings.angles.x - currentAngles.x) / sensorSettings.sensetivity,
        // y: acs.y * Math.cos(sensorSettings.angles.y - currentAngles.y) / sensorSettings.sensetivity,
        x: acs.x / sensorSettings.sensetivity,
        y: acs.y / sensorSettings.sensetivity,
    }
}