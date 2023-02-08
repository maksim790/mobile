import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from '../styles'

const SettingsButton = (props) => {
  return (
    <TouchableOpacity  style={styles.addBtn__icon} onPress={props.onPress}>
        <Icon name={'setting'} size={35} color={'black'} />
    </TouchableOpacity>
  )
}

export default SettingsButton
