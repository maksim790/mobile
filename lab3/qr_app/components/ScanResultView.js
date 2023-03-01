import React, {useState, useEffect} from 'react'
import { View, Button, Text, Linking, Pressable } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import ActionButton from './ActionButton'
import styles from '../styles'
import {isValidUrl} from '../validator'

const ScanResultView = ({scanned, onPress}) => {
    const [url, setUrl] = useState(true)

    useEffect(() => {
        const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        setUrl(matchPattern.test(scanned.data));
    }, [])

    function handleLink(){
        console.log(scanned.data)
        Linking.openURL(scanned.data).catch(err =>{
                console.log('Not URL')
            }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textInput}>{scanned.data}</Text>
            <View style={styles.urlBtnContainer}>
                {url && <ActionButton title='Go to URL' onPress={handleLink}/>}
                <ActionButton title='Copy' onPress={() => Clipboard.setString(scanned.data)}/>
                <ActionButton title='Scan again' onPress={onPress}/>
            </View>
        </View>
    )
}

export default ScanResultView
