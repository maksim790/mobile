import React from 'react'
import Feed from './Feed'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as rssParser from 'react-native-rss-parser';
import {useState, useEffect} from 'react'

const Stack = createNativeStackNavigator();

const RssSection = () => {
  const [feed, setFeed] = useState({})

  useEffect(() => {
    fetch('https://feeds.simplecast.com/54nAGcIl')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      setFeed(rss)
      console.log(rss.items.length)
    });
  }, [])

  return (
    <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" >
          {(props) => <Feed {...props} feed={feed} />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default RssSection
