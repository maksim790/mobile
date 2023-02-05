import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles';

const ToDo = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={2}>
      <View style={styles.todo}>
        <CheckBox disabled={false} value={props.checked} style={styles.todoCheckbox}/>
        <View>
          <Text style={styles.todoName}>{props.name}</Text>
          {props.content.trim() != '' && 
            <Text style={styles.todoContent}>{props.content}</Text>}
        </View>
        {/* <TouchableOpacity style={styles.deleteBtn}>
            <Icon name={'close'} size={30}/>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  )
}

export default ToDo
