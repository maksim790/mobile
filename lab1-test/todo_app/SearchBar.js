import React from 'react'
import { TouchableOpacityBase } from 'react-native'
import {View, Text, TextInput, Button, Pressable, TouchableOpacity} from 'react-native'
// import {SearchBar} from 'react-native-elements'
import styles from './styles'

const SearchBar = () => {
  return (
    <View style={styles.form}>
        <Pressable style={styles.button}>
            <Text>Search</Text>
        </Pressable>
        <TextInput placeholder="Type here.." />
    </View>
  )
}

export default SearchBar
