import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles'

const FeedListItem = ({navigation, feed, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.feedItem}>
            <View style={styles.feedItem__main}>
                <Text style={styles.feed__title}>{feed.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FeedListItem
