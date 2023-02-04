import React from 'react'
import {View, Text, TextInput, Button, Pressable, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const SearchBar = (props) => {
  return (
    <View style={styles.form}>
        {/* <TouchableOpacity style={styles.button}>
            <Text>Search</Text>
        </TouchableOpacity> */}
        <Entypo name='magnifying-glass' size={35} color={'black'} style={styles.addBtn__icon}/>
        <TextInput placeholder="Type here.." onChangeText={props.handleChange}/>
    </View>
  )
}

export default SearchBar
