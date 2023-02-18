import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import styles from '../styles'

const FeedListItem = ({navigation, feed, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.feedItem}>
            <View style={styles.feedItem__main}>
                <Text style={styles.feedItem__title}>{feed.title}</Text>
                {/* <Text style={styles.feedItem__title}>{feed.description}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

export default FeedListItem
