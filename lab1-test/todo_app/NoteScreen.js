import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import styles from './styles.js'
import {View, Text, TextInput} from 'react-native'
import AddButton from './AddButton.js'
import { nanoid } from 'nanoid';

const NoteScreen = (props) => {
  const [name, setName] = useState('')

  function handleChange(text){
    setName(text)
  }

  function handleSubmit(){
    console.log(props)
    props.addTask(name)
    props.navigation.navigate('Home')
  }

  // useEffect(() => {
  //   console.log(unsavedName)
  // }, [name])

  // useEffect(()=>{
  //   navigation.addListener('beforeRemove',(e) => {
  //     console.log(unsavedName)
  //   })
  // },
  // [navigation, route])

  return (
    <View style={styles.container}>
        <TextInput placeholder="Type here" multiline style={styles.noteInput} onChangeText={handleChange}/>
        <AddButton type={'check'} onPress={handleSubmit}/>
    </View>
  )
}

export default NoteScreen
