import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const ConfirmButton = (props) => {
  return (
    <TouchableOpacity  style={styles.addBtn} onPress={props.onPress}>
        <Icon name={'check'} size={35} color={'black'} style={styles.addBtn__icon}/>
    </TouchableOpacity>
  )
}

export default ConfirmButton
