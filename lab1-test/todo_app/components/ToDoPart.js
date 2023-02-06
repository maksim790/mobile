import React, {useState, useEffect} from 'react'
import HomeScreen from './HomeScreen.js'
import NoteScreen from './NoteScreen.js'
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FileSystem from '../classes/FileSystem'

const Stack = createNativeStackNavigator();
const fileSystem = new FileSystem()

const ToDoPart = (props) => {
    const [tasks, setTasks] = useState([])
    const [storage, setSystem] = useState({})
    // console.log(JSON.stringify([{id: 'todo-0', name: 'Sleep', content: 'do sleep', checked: true}]))
    
    useEffect(() => {
      //setSystem(fileSystem)
      fileSystem.init()
      fileSystem.readFile().then((res) => {
        console.log('from file: ' + res)
        setTasks(JSON.parse(res).replace(/(,|{)\s*(\w+)\s*:/g, '$1"$2":'))
      })
    }, [])

    useEffect(() => {
      console.log('time to save ' + JSON.stringify(tasks))

      if(tasks.length)
        fileSystem.saveFile(JSON.stringify(tasks))
    }, [tasks])

    // function toggleStorage(){
    //   // setSystem(storage == fileSystem ? database : fileSystem)
    // }

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
      </Stack.Navigator>
    )
}

export default ToDoPart