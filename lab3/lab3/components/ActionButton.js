import React from 'react'
import { View, Button, Text, Linking, TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import styles from '../styles'

const ActionButton = ({onPress, title}) => {

  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.generateButton}>
        <Text style={styles.generateButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton
