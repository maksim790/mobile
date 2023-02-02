import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import styles from './styles.js'
import {View, Text, TextInput} from 'react-native'
import AddButton from './AddButton.js'
import { nanoid } from 'nanoid';
import DeleteButton from './DeleteButton.js';

const NoteScreen = ({navigation, route, addTask, editTask}) => {
  const [name, setName] = useState('')

  function handleChange(text){
    console.log(text)
    setName(text)
  }

  function handleSubmit(){
    console.log("0000000000000000000000")
    console.log(route.params?.task)

    if(typeof route.params?.task != 'undefined'){
      editTask(route.params.task.id, name)
    }else{
      console.log(name)
      addTask(name)
    }  
    
    navigation.navigate('Home')
  }

  // useEffect(() => {
  //   console.log(unsavedName)
  // }, [name])

  // useEffect(()=>{
  //   props.navigation.addListener('beforeRemove',(e) => {
  //     //setName('')
  //   })
  // },
  // [])

  return (
    <View style={styles.container}>
      {/* route.params.task.name */}
        <TextInput placeholder="Type here" multiline style={styles.noteInput} onChange={handleChange}/>
        <AddButton type={'check'} onPress={handleSubmit}/>
        {/* <DeleteButton onPress={handleSubmit}/> */}
    </View>
  )
}

export default NoteScreen
