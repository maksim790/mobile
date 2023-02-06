import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ListItem } from '@rneui/themed';
import HomeDeleteButton from './HomeDeleteButton'

const ToDo = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.task.checked)

  function handleToggleCheckBox(newValue){
    setToggleCheckBox(newValue)
    props.editTask(props.task.id, {...props.task, checked: newValue})
  }

  return (
      <ListItem.Swipeable
        onPress={props.onPress}
        style={styles.swipeable}
        rightWidth={-300}
        leftWidth={80}
        leftContent={(reset) => (
            <HomeDeleteButton onPress={() => {
              reset()
              props.deleteTask(props.task.id)
            }}/>
        )}
        >
          <CheckBox disabled={false} value={toggleCheckBox} style={styles.todoCheckbox} onValueChange={(newValue) => handleToggleCheckBox(newValue)}/>
          <View>
            <Text style={styles.todoName}>{props.task.name.slice(0, 25).trim()}</Text>
            {props.task.content.trim() != '' && 
              <Text style={styles.todoContent}>{props.task.content.slice(0, 35).trim()}</Text>}
          </View>
      </ListItem.Swipeable>
  )
}

export default ToDo
