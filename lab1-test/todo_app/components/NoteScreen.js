import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import styles from '../styles.js'
import {View, Text, TextInput} from 'react-native'
import AddButton from './AddButton.js'
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import NoteDeleteButton from './NoteDeleteButton.js';
import newTask from '../classes/Task.js'
import { nanoid } from 'nanoid';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

const NoteScreen = ({navigation, route, addTask, editTask, deleteTask}) => {
  const editing = route.params?.hasOwnProperty('task')
  const [task, setTask] = useState(editing ? {...route?.params?.task} : {
    name: ``,
    content: '',
    id: `${nanoid()}`,
    checked: false,
  })

  function handleSubmit(task){
    if(task.name == '')
      task.name = 'New note'
      
    if(editing){
      editTask(route.params.task.id, task)
    }else{
      addTask(task)
    }
    
    navigation.navigate('Home')
  }

  function handleDelete(name){
    deleteTask(route.params.task.id)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
        <TextInput defaultValue={task.name} placeholder="Heading" multiline style={styles.noteHeading} onChangeText={(text) => setTask({...task, name: text})}/>
        <TextInput defaultValue={task.content} placeholder="Type here" multiline style={styles.noteInput} onChangeText={(text) => setTask({...task, content: text})}/>
        <AddButton type={'check'} onPress={() => handleSubmit(task)}/>
        {editing && 
          <NoteDeleteButton onPress={handleDelete}/>}
    </View>
  )
}

export default NoteScreen
