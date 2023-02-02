import {StyleSheet} from 'react-native'
import DropShadow from "react-native-drop-shadow";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        borderColor: 'red',
        borderWidth: 0,
    },
    form:{
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    button:{
        backgroundColor: '#c8d1fe',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
    },
    todoList:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },  
    todo:{
        padding: 20,
        margin: 5,
        borderRadius: 10,
        borderColor: '#c8d1fe',
        backgroundColor: '#f4f5f5',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    deleteBtn:{
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 35,
        left: 35,
        borderRadius: 20,
        borderColor: 'powerblue',
        borderWidth: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#c06c84',
    },
    addBtn:{
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 35,
        right: 35,
        borderRadius: 20,
        borderColor: 'powerblue',
        borderWidth: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#c8d1fe',
    },
    addBtn__icon:{
        alignSelf: 'center',
    },
    noteInput:{
        margin: 10,
        fontSize: 18,
        justifyContent: 'flex-start',
    }
})

export default styles