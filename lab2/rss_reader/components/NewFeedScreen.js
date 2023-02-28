import React from 'react'
import { View, TextInput, Button } from 'react-native'
import {useState, useEffect} from 'react'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import styles from '../styles'

const NewFeedScreen = ({navigation, route, addFeed}) => {
    const [url, setUrl] = useState('')

    useEffect(() => {
        navigation.setOptions({
            title: 'New feed',
        });
    }, [])

    function handleChange(text){
        setUrl(text)
        console.log(text)
    }
    
    return <View style={styles.newFeedContainer}>
        <TextInput placeholder="Enter rss feed URL" onChangeText={(text) => handleChange(text)}
            style={styles.newFeedContainerText}/>
        <Button
            style={{width: 200}}
            title='Add feed'
            color="#5585b5"
            onPress={() => {
                addFeed(url, showMessage)
            }}
        />
        <FlashMessage position="top" />
    </View>
}

export default NewFeedScreen
