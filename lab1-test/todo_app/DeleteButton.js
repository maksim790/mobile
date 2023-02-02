import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const DeleteButton = (props) => {
  return (
    <TouchableOpacity  style={styles.deleteBtn} onPress={props.onPress}>
        <Icon name='close' size={35} color={'white'} style={styles.addBtn__icon}/>
    </TouchableOpacity>
  )
}

export default DeleteButton
