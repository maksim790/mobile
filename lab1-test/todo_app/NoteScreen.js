import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import styles from './styles.js'
import {View, Text, TextInput} from 'react-native'
import AddButton from './AddButton.js'
import { nanoid } from 'nanoid';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import DeleteButton from './DeleteButton.js';

const NoteScreen = ({navigation, route, addTask, editTask, deleteTask}) => {
  const [name, setName] = useState('')

  function handleChange(text){
    setName(text)
  }

  function handleSubmit(name){
    if(route.params?.hasOwnProperty('task')){
      editTask(route.params.task.id, name)
    }else{
      addTask(name)
    }
    
    navigation.navigate('Home')
  }

  function handleDelete(name){
    deleteTask(route.params.task.id)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
        <TextInput defaultValue={route.params?.task.name} placeholder="Type here" multiline style={styles.noteInput} onChangeText={handleChange}/>
        <AddButton type={'check'} onPress={() => handleSubmit(name)}/>
        {route.params?.hasOwnProperty('task') && 
          <DeleteButton onPress={handleDelete}/>}
    </View>
  )
}

export default NoteScreen
