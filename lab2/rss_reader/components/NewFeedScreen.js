import React from 'react'
import { View, TextInput, Button } from 'react-native'
import {useState, useEffect} from 'react'

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
    
    return <View>
        <TextInput placeholder="Enter rss feed URL" onChangeText={(text) => handleChange(text)}/>
        <Button
            title='Add'
            color="#5585b5"
            onPress={() => addFeed(url)}
        />
    </View>
}

export default NewFeedScreen
