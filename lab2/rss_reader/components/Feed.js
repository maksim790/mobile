import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import FeedItem from './FeedItem'
import { NavigationContainer, CommonActions } from '@react-navigation/native';

const Feed = ({navigation, route, feed}) => {
    const emptyFeedString = <Text>No feed</Text>
    // console.log(navigation)
    const feedItems = !(!!feed?.items) ? emptyFeedString : feed.items.map((item, index) => {
        // console.log(item.links[0].url)
        return <FeedItem 
            item={item}
            key={index}
            onPress={
                () => {
                  navigation.dispatch(
                      CommonActions.navigate({
                          name: 'Details',
                          params: {
                              src: item.links[0].url              
                          }
                      })
                  )
                }
              }
        />
    })

    return (
        <View>
            {/* <Text>Hi!</Text> */}
            <ScrollView>
                {feedItems}
            </ScrollView>
        </View>
    )
}

export default Feed
