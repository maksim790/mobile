import React from 'react'
import {View, Pressable, Text, TouchableOpacity} from 'react-native'
import styles from '../../styles'

const ModalButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.button, styles.buttonClose]}
        onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ModalButton
