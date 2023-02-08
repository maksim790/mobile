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
    const [storage, setStorage] = useState({})
    
    useEffect(() => {
      //setSystem(fileSystem)
      database.init()
      //database.insert()
      database.select()
      fileSystem.init()
      fileSystem.readFile().then((res) => {
        setTasks(res)
      })
    }, [])

    useEffect(() => {
      console.log('time to save ' + JSON.stringify(tasks))
      // if(tasks.length)
      fileSystem.saveFile(tasks)
    }, [tasks])

    function toggleStorage(){
      setStorage(storage == fileSystem ? database : fileSystem)
    }

    function getStorageValue(){
      if(storage == fileSystem)
        return false
      return true
    }

    // async function updateData(tasks){
    //   fileSystem.readFile()
    //   console.log('data is updated')
    //   fileSystem.saveFile(JSON.stringify(tasks))
    // }
  
    // useEffect(() => {
    //   props.updateData(tasks)
    // }, [tasks])
  
    function addTask(task){
      setTasks([...tasks, task])
    }
  
    function editTask(id, newTask){
      const newTasks = tasks?.map((task) => {
        if(task.id == id){
          return newTask
        }
        return task
      })
  
      setTasks([...newTasks])
      //console.log(tasks)
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