import React, {useState} from 'react'
import {View, Text} from 'react-native'
import SearchBar from './SearchBar.js'
import ToDo from './ToDo.js'

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)

  const todos = tasks?.map((task) => {
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
    <View>
      <Text>My custom form</Text>
      <SearchBar />
      {todos}
    </View>
  );
};

export default App;
