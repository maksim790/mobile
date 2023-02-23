import React from 'react'
import { View, Button, Text, Linking, Pressable } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import ActionButton from './ActionButton'
import styles from '../styles'

const ScanResultView = ({scanned, onPress}) => {

    function handleLink(){
        console.log(scanned.data)
        Linking.openURL(scanned.data).catch(err =>{
                console.log('Not URL')
            }
        );
    }

    return (
        <View style={styles.resultContainer}>
            <Text>{scanned.data}</Text>
            <Text>QR-code URL</Text>
            <View style={styles.urlBtnContainer}>
                {/* <Pressable
                    onPress={handleLink}
                    style={styles.urlButton}>
                    <Text>Go to URL</Text>
                </Pressable>
                <Pressable 
                    onPress={() => Clipboard.setString(scanned.data)}
                    style={styles.urlButton}>
                    <Text>Copy</Text>
                </Pressable>
                <Pressable onPress={onPress}
                    style={styles.urlButton}>
                    <Text>Scan again</Text>
                </Pressable> */}
                <ActionButton title='Go to URL' onPress={handleLink}/>
                <ActionButton title='Copy' onPress={() => Clipboard.setString(scanned.data)}/>
                <ActionButton title='Scan again' onPress={onPress}/>
            </View>
        </View>
    )
}

export default ScanResultView
