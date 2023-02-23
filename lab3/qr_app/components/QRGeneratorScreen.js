import React, {useRef, useState} from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from '../styles'

const QRGeneratorScreen = () => {
  const [inputValue, setValue] = useState('')
  const [qrValue, setQRValue] = useState('')
  let generatedQR = useRef()  

  return (
    <View style={styles.container}>
        <QRCode
          getRef={(ref) => (generatedQR = ref)}
          value={qrValue ? qrValue : 'no value'}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="green"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setValue(text)}
          placeholder="Enter QR code value"
        />
        <TouchableOpacity
          style={styles.generateButton}
          onPress={() => setQRValue(inputValue)}>
          <Text style={styles.generateButtonText}>
            Generate QR code
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default QRGeneratorScreen
