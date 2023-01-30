import React from 'react'
import AddButton from './AddButton.js'
import styles from './styles.js'
import SearchBar from './SearchBar.js'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My custom form</Text>
      <SearchBar />
      {todos}
      <AddButton />
    </View>
  )
}

export default HomeScreen
