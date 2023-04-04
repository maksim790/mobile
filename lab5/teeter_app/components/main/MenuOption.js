import React from 'react'
import { View, Button, Text, Linking, TouchableOpacity } from 'react-native'
import styles from '../../styles'

const MenuOption = ({onPress, title}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.menuOption}>
      <Text style={styles.menuOptionText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuOption