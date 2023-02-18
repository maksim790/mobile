import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView } from 'react-native'
import FeedItem from './FeedItem'
import * as rssParser from 'react-native-rss-parser';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

const FeedScreen = ({navigation, route}) => {
    const [feed, setFeed] = useState({})

    useEffect(() => {
        fetch(route.params.feed.url)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            setFeed(rss)
        });
      }, [])

    const emptyFeedString = <Text>No feed items</Text>
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
            <ScrollView>
                {feedItems}
            </ScrollView>
        </View>
    )
}

export default FeedScreen
