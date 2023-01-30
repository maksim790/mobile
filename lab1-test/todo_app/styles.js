import {StyleSheet} from 'react-native'
import DropShadow from "react-native-drop-shadow";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        borderColor: 'red',
        borderWidth: 2,
    },
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        //justifyContent: 'space-around'
    },
    button:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
    },
    todo:{
        padding: 20,
        borderColor: 'orange',
        backgroundColor: '#FFD580',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    todo__left:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteBtn:{
        position: 'relative',
        right: 10,
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
        backgroundColor: '#ffebbb',
    },
    addBtn__icon:{
        alignSelf: 'center',
    }
})

export default styles