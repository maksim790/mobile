import React from 'react'
import { Text, View, Image } from 'react-native'

const FeedItem = ({item}) => {
  return (
    <View>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        {/* <Image source={{uri: item.enclosures[0].url}}/> */}
    </View>
  )
}

export default FeedItem
