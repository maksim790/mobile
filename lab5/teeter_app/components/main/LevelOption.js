import React from 'react'
import { View, Button, Text, Linking, TouchableOpacity } from 'react-native'
import styles from '../../styles'

const LevelOption = ({onPress, title}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.levelBar}>
      <Text style={styles.TextBar}>Level {title}</Text>
    </TouchableOpacity>
  )
}

export default LevelOption