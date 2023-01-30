import 'react-native-gesture-handler';
import React from 'react'
import styles from './styles.js'
import {View, Text, TextInput} from 'react-native'

const NoteScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
        <TextInput placeholder="" multiline={true} style={styles.noteInput}/>
    </View>
  )
}

export default NoteScreen
