import React from 'react'
import { View, Button, Text, Linking, TouchableOpacity } from 'react-native'
import styles from '../../styles'

const SettingSaveBtn = ({onPress, title}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.saveBtn}>
      <Text style={styles.TextBar}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SettingSaveBtn