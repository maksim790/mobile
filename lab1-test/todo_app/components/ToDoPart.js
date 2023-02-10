import React, {useState, useEffect} from 'react'
import HomeScreen from './HomeScreen.js'
import NoteScreen from './NoteScreen.js'
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FileSystem from '../classes/FileSystem'
import Database from '../classes/Database'
import SettingScreen from './SettingScreen'

const Stack = createNativeStackNavigator();
const fileSystem = new FileSystem()
const database = new Database()

const ToDoPart = (props) => {
    const [tasks, setTasks] = useState([])
    const [storage, setStorage] = useState(fileSystem)

    useEffect(() => {
      storage.init()
      storage.getData(setTasks)

    }, [storage])

    function toggleStorage(){
      setStorage(storage == fileSystem ? database : fileSystem)
    }

    function getStorageValue(){
      if(storage === fileSystem)
        return true

      return false
    }
  
    function addTask(task){
      setTasks([...tasks, task])
      storage.addTask(task)
    }
  
    function editTask(id, newTask){
      const newTasks = tasks?.map((task) => {
        if(task.id == id){
          return newTask
        }
        return task
      })
  
      setTasks([...newTasks])
      storage.editTask(newTask)
    }
  
    function deleteTask(id){
      const newTasks = tasks?.filter((task) => {
        if(task.id != id){
          return task
        }
      })
  
      setTasks([...newTasks])
      storage.deleteTask(id)
    }
  
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} 
            tasks={tasks}
            editTask={editTask} 
            deleteTask={deleteTask}
          />}
        </Stack.Screen>
        <Stack.Screen name="Note">
          {(props) => <NoteScreen {...props} 
            addTask={addTask} 
            editTask={editTask} 
            deleteTask={deleteTask}
          />}
        </Stack.Screen>
        <Stack.Screen name="Setting">
          {(props) => <SettingScreen {...props} 
            storage={getStorageValue()}
            toggleStorage={toggleStorage}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    )
}

export default ToDoPart