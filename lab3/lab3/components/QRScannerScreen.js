import React, {useEffect, useState} from 'react'
import { View, Button, ScrollView, Text, Alert, Linking } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from '../styles'
import ScanResultView from './ScanResultView'
import SettingsIcon from './SettingsIcon';

const QRScannerScreen = ({navigation}) => {
    const [scanned, setScanned] = useState(false)
    const [flash, setFlash] = useState(false)
    const [marker, setMarker] = useState(true)

    function handleScan(e){
        setScanned({...e})
        console.log(e)
    }

    return (
        scanned ?     
        <ScanResultView scanned={scanned} onPress={() => {setScanned(false)}}/> :
        <QRCodeScanner
            containerStyle={styles.scanner}
            onRead={handleScan}
            cameraType='back'
            flashMode={
                flash ? 
                RNCamera.Constants.FlashMode.torch : 
                RNCamera.Constants.FlashMode.off
            }
            fadeIn={true}
            reactivate={true}
            showMarker={marker}
            reactivateTimeout={1000}
            customMarker={
                <View style={styles.marker}></View>
            }
            topContent={
                <Text style={styles.topContent}>Move marker right over the QR code</Text>
            }
            bottomContent={
                <View style={styles.settingsContainer}>
                    <SettingsIcon 
                        name={flash ? 'zap' : 'zap-off'} 
                        onPress={() => {setFlash(!flash)}}
                    />
                    <SettingsIcon 
                        name={marker ? 'square' : 'x-square'} 
                        onPress={() => {setMarker(!marker)}}
                    />
                </View>
            }
        />
    )
}

export default QRScannerScreen