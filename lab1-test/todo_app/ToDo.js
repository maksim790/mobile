import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const ToDo = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.todo}>
          <CheckBox disabled={false} value={props.checked}/>
          <Text>{props.name}</Text>
          {/* <TouchableOpacity style={styles.deleteBtn}>
              <Icon name={'close'} size={30}/>
          </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  )
}

export default ToDo
