import React from 'react'
import {View, Text, TouchableOpacity, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles'

const HomeDeleteButton = (props) => {
  return (
    <Pressable
      title="Delete"
      onPress={props.onPress}
      style={styles.swipeDeleteBtn}
    >
      <Text style={styles.swipeDeleteBtn__text}>Delete</Text>
    </Pressable>
  )
}

export default HomeDeleteButton
