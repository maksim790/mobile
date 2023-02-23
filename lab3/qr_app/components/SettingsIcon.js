import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

const SettingsIcon = ({name, onPress}) => {
  return (
    <Icon 
        name={name} 
        size={25} 
        color='white' 
        onPress={onPress}
    />
  )
}

export default SettingsIcon
