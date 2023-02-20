import React from 'react'
import { View, Button, ScrollView } from 'react-native'
import {useEffect} from 'react'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import FeedListItem from './FeedListItem'
import styles from '../styles'

const FeedListScreen = ({navigation, feedList}) => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Feeds',
            headerRight: () => (
                <Button
                    title='Add'
                    color="#5585b5"
                    onPress={
                        () => {
                            navigation.dispatch(
                                CommonActions.navigate({
                                    name: 'NewFeed',
                                })
                            )
                          }
                    }
                />
            ),
        });
    }, [])

    console.log(feedList)
    //const emptyFeedString = <Text>No feeds</Text>
    const feeds = feedList?.map((feed, index) => {
        return <FeedListItem 
            feed={feed} 
            key={index} 
            onPress={() => {
                navigation.dispatch(
                    CommonActions.navigate({
                        name: 'FeedContent',
                        params: {
                            feed             
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
                {feeds}    
            </ScrollView>   
        </View>
    )
}

export default FeedListScreen
