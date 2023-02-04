import React, {useState, useEffect} from 'react'
import {View, Text, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js'
import NoteScreen from './NoteScreen.js'
import { nanoid } from 'nanoid';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import ToDo from './ToDo.js';
import { Tab } from 'react-native-elements/dist/tab/Tab';

const Stack = createNativeStackNavigator();

const data =
  [
    {id: 'todo-0', name: 'Sleep', checked: true},
    {id: 'todo-1', name: 'Eat', checked: false},
    {id: 'todo-2', name: 'Work', checked: true},
  ]

const ToDoPart = (props) => {
  const [tasks, setTasks] = useState([...props.tasks])

  useEffect(() => {
    console.log('changed to ', tasks.length)
    //setTasks(tasks)
  }, [tasks])

  function addTask(name){
    const task = {id: `${nanoid()}`, name, checked: false}
    setTasks([...tasks, task])
  }
  //tasks изменяется в app, но не успевает обновить пропсы в дочернем ToDoPart и показывает старый HomeScreen

  function editTask(id, newName){
    const newTasks = tasks?.map((task) => {
      if(task.id == id){
        return {...task, name: newName}
      }
      return task
    })

    setTasks([...newTasks])
  }

  function deleteTask(id){
    const newTasks = tasks?.filter((task) => {
      if(task.id != id){
        return task
      }
    })

    setTasks([...newTasks])
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} 
          tasks={tasks}
        />}
      </Stack.Screen>
      {/* <Stack.Screen name="Home" component={HomeScreen} initialParams={{tasks}}/> */}
      <Stack.Screen name="Note">
        {(props) => <NoteScreen {...props} 
          addTask={addTask} 
          editTask={editTask} 
          deleteTask={deleteTask}
        />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <ToDoPart tasks={data}/>
    </NavigationContainer>
  );
};

export default App;
