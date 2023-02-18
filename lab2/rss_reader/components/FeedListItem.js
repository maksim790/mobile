import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import styles from '../styles'

const FeedListItem = ({navigation, feed, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
          <View style={styles.feedItem__main}>
              <Text >{feed.title}</Text>
              <Text>{feed.description}</Text>
          </View>
      </TouchableOpacity>
  )
}

export default FeedListItem
