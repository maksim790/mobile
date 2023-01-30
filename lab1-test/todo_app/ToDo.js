import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const ToDo = (props) => {
  return (
    <View style={styles.todo}>
        <View style={styles.todo__left}>
            <CheckBox disabled={false} value={props.checked}/>
            <Text>{props.name}</Text>
        </View>
        <TouchableOpacity style={styles.deleteBtn}>
            <Icon name={'close'} size={30}/>
        </TouchableOpacity>
    </View>
  )
}

export default ToDo
