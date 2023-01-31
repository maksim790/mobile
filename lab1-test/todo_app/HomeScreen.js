import 'react-native-gesture-handler';
import React from 'react'
import AddButton from './AddButton.js'
import styles from './styles.js'
import SearchBar from './SearchBar.js'
import {View, Text, ScrollView} from 'react-native'
import ToDo from './ToDo.js'

const HomeScreen = ({navigation, route}) => {
  
  const todos = route.params.tasks?.map((task) => {
    return (
      <ToDo 
        id={task.id}
        name={task.name}
        checked={task.checked}
        key={task.id}
      />
    )
  })

  return (
    <View style={styles.container}>
      <Text>My custom form</Text>
      <SearchBar />
      <ScrollView 
        style={styles.todoList} 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        {todos}
      </ScrollView>
      <AddButton type={'plus'} onPress={() => navigation.navigate('Note', {})}/>
    </View>
  )
}

export default HomeScreen
