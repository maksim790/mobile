import React, {useState} from 'react'
import WebView from 'react-native-webview'
import { View, ActivityIndicator } from 'react-native'
import styles from '../styles'

const DetailsScreen = ({route}) => {
    console.log(route.params.src)
    const [loading, setLoading] = useState(true)

    return (
        <WebView 
            source={{uri: route.params.src}}
            // onLoadStart={() => setLoading(true)} 
            // onLoadEnd={() => setLoading(false)}
        />
    )
}

export default DetailsScreen
