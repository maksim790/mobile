import React from 'react'
import { View, Button, Text, Linking } from 'react-native'

const ScanResultView = ({scanned, onPress}) => {

    function handleLink(){
        console.log(scanned.data)
        Linking.openURL(scanned.data).catch(err =>{
                console.log('Not URL')
            }
        );
    }

    return (
        <View>
            <Text onPress={handleLink} selectable>{scanned.data}</Text>
            <Text>QR-code URL</Text>
            <Button
                title='Scan again'
                color="#5585b5"
                onPress={onPress}
            />
        </View>
    )
}

export default ScanResultView
