import React from 'react'
import { View, Button, Text, Linking, Pressable } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import styles from '../styles'

const ActionButton = ({onPress, title}) => {
  return (
    <Pressable 
        onPress={onPress}
        style={styles.urlButton}>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default ActionButton
