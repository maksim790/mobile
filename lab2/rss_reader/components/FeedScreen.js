import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView, ActivityIndicator } from 'react-native'
import FeedItem from './FeedItem'
import * as rssParser from 'react-native-rss-parser';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import styles from '../styles';

const FeedScreen = ({navigation, route}) => {
    const [feed, setFeed] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        navigation.setOptions({
            title: route.params.feed.title,
        });

        fetch(route.params.feed.url)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                setFeed(rss)
                setLoading(false)
            })
            .catch((err) => console.log(err.message));
    }, [])

    const emptyFeedString = <Text>No feed items</Text>
    
    const feedItems = !(!!feed?.items) ? emptyFeedString : feed.items.map((item, index) => {
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
            {loading ? 
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" style={styles.loadingCircle}/>
            </View > : 
            <ScrollView>
                {feedItems}
            </ScrollView>
            }
        </View>
    )
}

export default FeedScreen
