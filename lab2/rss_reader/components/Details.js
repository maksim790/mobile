import React from 'react'
import WebView from 'react-native-webview'
import { View } from 'react-native'

const Details = ({route}) => {
    console.log(route.params.src)
    return (
        <WebView 
            source={{uri: route.params.src}} 
            onLoad={console.log('Loaded')}
        />
    )
}

export default Details
