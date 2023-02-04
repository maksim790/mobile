import { nanoid } from 'nanoid';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

const newTask = () => {
    return {
        id: `123123213`,
        name: `${nanoid()}`,
        content: '',
        checked: false,
    }
}