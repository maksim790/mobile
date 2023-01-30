import React, {useState} from 'react'
import {View, Text} from 'react-native'
import SearchBar from './SearchBar.js'
import ToDo from './ToDo.js'
import AddButton from './AddButton.js'
import styles from './styles.js'

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
    <View style={styles.container}>
      <Text>My custom form</Text>
      <SearchBar />
      {todos}
      <AddButton />
    </View>
  );
};

export default App;
