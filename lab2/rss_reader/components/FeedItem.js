import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';

const FeedItem = ({navigation, item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        {/* <Image source={{uri: item.enclosures[0].url}}/> */}
    </TouchableOpacity>
  )
}

export default FeedItem
