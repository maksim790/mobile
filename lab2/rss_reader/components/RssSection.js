import React from 'react'
import FeedScreen from './FeedScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as rssParser from 'react-native-rss-parser';
import {useState, useEffect} from 'react'
import DetailsScreen from './DetailsScreen'
import FeedListScreen from './FeedListScreen';
import NewFeedScreen from './NewFeedScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();

const RssSection = () => {
    const [feeds, setFeeds] = useState([])

    function addFeed(newFeedUrl){
        fetch(newFeedUrl)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                const newFeed = {title: rss.title, description: rss.description, url: newFeedUrl}
                console.log(newFeed)
                setFeeds([...feeds, newFeed])
          });
    }

    return (
        <Stack.Navigator initialRouteName="FeedScreen">
            <Stack.Screen name="Feeds" >
                {(props) => <FeedListScreen {...props} feedList={feeds} />}
            </Stack.Screen>
            <Stack.Screen name="NewFeed" >
                {(props) => <NewFeedScreen {...props} addFeed={addFeed} />}
            </Stack.Screen>
            <Stack.Screen name="FeedContent" >
                {(props) => <FeedScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

export default RssSection
