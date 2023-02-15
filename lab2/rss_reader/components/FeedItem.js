import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'

const FeedItem = ({item}) => {
  return (
    <TouchableOpacity onPress={
      
    }>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        {/* <Image source={{uri: item.enclosures[0].url}}/> */}
    </TouchableOpacity>
  )
}

export default FeedItem
