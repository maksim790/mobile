import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const AddButton = () => {
  return (
    <TouchableOpacity  style={styles.addBtn}>
        <Icon name={'plus'} size={35} color={'black'} style={styles.addBtn__icon}/>
    </TouchableOpacity>
  )
}

export default AddButton
