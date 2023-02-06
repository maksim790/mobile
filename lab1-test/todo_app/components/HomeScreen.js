import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import AddButton from './AddButton.js'
import styles from '../styles.js'
import SearchBar from './SearchBar.js'
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import ToDo from './ToDo.js'

const HomeScreen = ({navigation, route, tasks, editTask, deleteTask}) => {
  const emptyListString = <Text style={styles.emptyList}>No tasks</Text>
  const [filter, setFilter] = useState('')

  function handleChange(text){
    setFilter(text.toLowerCase())
  }

  // tasks.filter(task => {
  //   if(task.name.toLowerCase().includes(filter.trim()))
  //     return task
  //   })
  //   .map((task) => {
  //   return (
  //     <ToDo 
  //       task={task}
  //       key={task.id}
  //       editTask={editTask}
  //       deleteTask={deleteTask}
  //       onPress={() =>
  //         navigation.dispatch(
  //           CommonActions.navigate({
  //             name: 'Note',
  //             params: {
  //               task              
  //             }
  //           })
  //         )
  //       }
  //     />
  //   )
  // })

  console.log('tasks: ' + tasks)
  let todos = (tasks.length > 0) ? (tasks.filter(task => {
    if(task.name.toLowerCase().includes(filter.trim()))
      return task
    })
    .map((task) => {
    return (
      <ToDo 
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
  })) : emptyListString

  return (
    <View style={styles.container}>
      <SearchBar handleChange={handleChange}/>
      <ScrollView >
        <KeyboardAvoidingView
          style={styles.todoList} 
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
          {tasks.length > 0 ? todos : emptyListString}
        </KeyboardAvoidingView>
      </ScrollView>
      <AddButton type={'plus'} onPress={() =>
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
