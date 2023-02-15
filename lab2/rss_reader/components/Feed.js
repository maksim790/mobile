import React from 'react'
import { Text, View } from 'react-native'
import FeedItem from './FeedItem'

const Feed = ({feed}) => {
    const emptyFeedString = <Text>No feed</Text>

    const feedItems = !(!!feed?.items) ? emptyFeedString : feed.items.map((item, index) => {
        console.log(item)
        return <FeedItem 
            item={item}
            key={index}
        />
    })

    return (
        <View>
            <Text>Hi!</Text>
            {feedItems}
        </View>
    )
}

export default Feed
