import React from 'react'
import {View, Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const ToDo = (props) => {
  return (
    <View style={styles.todo}>
        <CheckBox value={props.checked}/>
        <Text>{props.name}</Text>
    </View>
  )
}

export default ToDo
