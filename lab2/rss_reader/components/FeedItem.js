import React from 'react'
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import styles from '../styles'

const FeedItem = ({item, onPress}) => {
    console.log(item)
    return (
        <TouchableOpacity onPress={onPress} style={styles.feedItem}>
            {!!(item?.enclosures[0]) && <Image 
              source={{uri: item?.enclosures[0].url}}
              style={styles.feedItem__image} 
            />}
            <View style={styles.feedItem__main}>
                <Text style={styles.feedItem__title}>{item.title}</Text>
                <Text>{item.published}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FeedItem
