import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import NoteAddButton from './NoteAddButton.js'
import styles from '../styles.js'
import SearchBar from './SearchBar.js'
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import Note from './Note.js'
import SettingsButton from './SettingsButton'

const HomeScreen = ({navigation, route, tasks, editTask, deleteTask}) => {
  const emptyListString = <Text style={styles.emptyList}>No tasks</Text>
  const [filter, setFilter] = useState('')

  function handleChange(text){
    setFilter(text.toLowerCase())
  }

  // console.log('_____')
  // console.log(tasks)
  const todos = (typeof tasks == 'undefined' || tasks.length == 0) ? emptyListString : tasks.filter(task => {
    if(task.name.toLowerCase().includes(filter.trim()))
      return task
    })
    .map((task) => {
    return (
      <Note 
        task={task}
        key={task.id}
        editTask={editTask}
        deleteTask={deleteTask}
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Note',
              params: {
                task              
              }
            })
          )
        }
      />
    )
  })

  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <SearchBar handleChange={handleChange}/>
        <SettingsButton 
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Setting',
              })
            )
          }
        />
      </View>
      <ScrollView >
        <KeyboardAvoidingView
          style={styles.todoList} 
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
          {/* {tasks.length > 0 ? todos : emptyListString} */}
          {todos}
        </KeyboardAvoidingView>
      </ScrollView>
      <NoteAddButton type={'plus'} onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Note',
            })
          )
      }/>
      
    </View>
  )
}

export default HomeScreen
