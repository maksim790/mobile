import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import AddButton from './AddButton.js'
import styles from '../styles.js'
import SearchBar from './SearchBar.js'
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import ToDo from './ToDo.js'

const HomeScreen = ({navigation, route, tasks}) => {
  
  const [filter, setFilter] = useState('')

  function handleChange(text){
    setFilter(text.toLowerCase())
  }

  const todos = tasks
    .filter(task => {
    if(task.name.toLowerCase().includes(filter.trim()))
      return task
    })
    .map((task) => {
    return (
      <ToDo 
        id={task.id}
        name={task.name.slice(0, 27)}
        content={task.content}
        checked={task.checked}
        key={task.id}
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
      <SearchBar handleChange={handleChange}/>
      <ScrollView 
        style={styles.todoList} 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        {todos}
      </ScrollView>
      <KeyboardAvoidingView>
        <Text>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      </KeyboardAvoidingView>
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
