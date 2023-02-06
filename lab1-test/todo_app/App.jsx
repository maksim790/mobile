import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import FileSystem from './classes/FileSystem'
import ToDoPart from './components/ToDoPart'

const fileSystem = new FileSystem()
// const database = new FileSystem()


const App = () => {
  const [data, setData] = useState([])
  const [storage, setSystem] = useState({})

  useEffect(() => {
    setSystem(fileSystem)
    console.log('init here')
    fileSystem.init()
    const path = fileSystem.getPath()
    setData(fileSystem.readFile())
  }, [])

  function toggleStorage(){
    // setSystem(storage == fileSystem ? database : fileSystem)
  }

  async function updateData(tasks){
    fileSystem.readFile()
    console.log('data is updated')
    fileSystem.saveFile(JSON.stringify(tasks))
  }

  return (
    <NavigationContainer>
        <ToDoPart tasks={[...data]} toggleStorage={toggleStorage} updateData={updateData}/>
    </NavigationContainer>
  );
};

export default App;
